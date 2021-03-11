---
title: C tidbits
---



## gets

> The function was depreciated in c++11 and removed in c++14

Alternative `fgets`

```c++
#include <cstdio>

int main() {
  char str[100];
  fgets(str, 100, stdin); 
}
```

Nachteil: `fgets` schreibt `\n\0` ans Ende! `getline` hat das gleiche Verhalten.

`scanf("%s",s)` funktioniert wie erwartet.



## scanf mit Leerzeichen

```c++
scanf("%[^\n]%*c", str);
```

**Explanation :** Here, **[]** is the [scanset](https://www.geeksforgeeks.org/scansets-in-c/) character. **^\n** tells to take input until newline doesn’t get encountered. Then, with this **%\*c**, it reads newline character and here used ***** indicates that this newline character is discarded.



## \r 

Die return Taste bleibt bei der Eingabe von Zahlenwerten im Buffer. Führt zum überspringen von String-Eingaben.

```c++
int a
char s[100];
scanf("%d", &a);
scanf("%*c"); // Entfernt \r aus dem Tastaturpuffer
scanf("%s", s);
```



## cin/cout

Ein- und Ausgabe in C++

```c++
#include <iostream>
using namespace std;
int main() {
  cout << "Hello World!\n";
  int n;
  char s[100];
  cin >> n;
  cin >> s;
  cout << s;
}
```

