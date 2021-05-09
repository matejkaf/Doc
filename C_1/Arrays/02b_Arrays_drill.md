---
title: Arrays
subtitle: Drill Übungen
tags: [assignment,arrays,1CHELS,1AHITS]
---

#### Übung (Array Drill)

Ermittle (im Kopf am Papier) den Inhalt des Arrays am Ende des jeweils gegebenen Programmstücks. Kontrolliere deine Lösung mit einem Programm. Sollte deine Lösung nicht stimmen überlege wo dein Denkfehler war.

```c++
// (a)
int arr[7];
for(int i=0; i<7; i++) {
  arr[i] = 50-(2*i+1);
}
```

```c++
// (b)
int arr[7];
arr[0] = 1;
for(int i=1; i<7; i++) {
  arr[i] = arr[i-1]*2;
}
```

```c++
// (c)
int a[7] = {9,2,8,3,1,9,5};
for(int i=0; i<6; i++) {
  if((a[i]-a[i+1])>3) {
    a[i+1] = a[i+1] + 3;
  }
}
```

```c++
// (d)
int a[7] = {9,2,8,5,4,3,7};
int i=0;
int j=6;
while(i<j) {
  if(a[j]<a[i]) {
    int t = a[j];
    a[j] = a[i];
    a[i] = t;
  }
  i++;
  j--;
}
```

```c++
// (e)
int arr[6];
int p = 7;
int g = 3;
int j = g;
for(int i=0; i<p-1; i++) {
  printf("%d\n",j);
  arr[j-1] = i+1;
  j = (j * g)%p;
}
```

