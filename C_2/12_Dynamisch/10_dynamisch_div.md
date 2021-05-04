---
title: Dynamische Datenverwaltung
subtitle: Details
---

## Variable Length Array (VLA)

Sind ein Feature von C99, nach diversen Quellen nicht im C++ Standard, allerdings sind die Infos zu C++14  wiedersprüchlich [[1](https://stackoverflow.com/questions/1887097/why-arent-variable-length-arrays-part-of-the-c-standard)], [[2](https://www.geeksforgeeks.org/variable-length-arrays-in-c-and-c/)]. Der C++ Compiler von REPLIT unterstützt VLA.

Es ist möglich eine Variable als Länge eines Arrays zu verwenden. Allerdings wird dies am Stack angelegt was zu eigenartigen Verhalten wegen mehrfachverwendung von Daten führen kann – wenigstens gibt es eine Compiler Warnung. Siehe nachfolgender Code (getestet in REPLIT).


```c
#include <iostream>

int* foo(int n) {
  int arr[n];
  return arr;
}

int main() {
  int n;
  printf("Laenge: ");
  scanf("%d", &n);
  int arr[n];

  int* p1=foo(20);
  for(int i=0;i<20;i++) {
    p1[i] = 100+i;
  }

  int* p2=foo(30);
  for(int i=0;i<20;i++) {
    p2[i] = 200+i;
  }

  for(int i=0;i<20;i++) {
    printf("%d, ",p1[i]);
  }
  printf("\n");
}
```




```
$ clang++-7 -pthread -std=c++17 -o main main.cpp
main.cpp:5:10: warning: address of stack memory associated with local variable
      'arr' returned [-Wreturn-stack-address]
  return arr;
         ^~~
1 warning generated.
$ ./main
Laenge: 10
212, 213, 214, 215, 216, 217, 218, 219, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 

```

