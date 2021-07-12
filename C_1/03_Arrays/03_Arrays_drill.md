---
title: Arrays
subtitle: Drill Übungen
tags: [assignment,arrays,C_1]
---

#### Übung (Array Drill)

Ermittle (im Kopf, am Papier, in Kommentaren im Programm, ...) den Inhalt des Arrays am Ende des jeweils gegebenen Programmstücks. Kontrolliere dann deine Lösung mit einem Programm. Sollte deine Lösung nicht stimmen überlege wo dein Denkfehler war.

```c++
// (a)
int a[7];
for(int i=0; i<7; i++) {
  a[i] = 50-(2*i+1);
}
// Inhalt von a?
```

```c++
// (b)
int b[7];
b[0] = 1;
for(int i=1; i<7; i++) {
  b[i] = b[i-1]*2;
}
// Inhalt von b?
```

```c++
// (c)
int c[7] = {9,2,8,3,1,9,5};
for(int i=0; i<6; i++) {
  if((c[i]-c[i+1])>3) {
    c[i+1] = c[i+1] + 3;
  }
}
// Inhalt von c?
```

```c++
// (d)
int d[7] = {9,2,8,5,4,3,7};
int i=0;
int j=6;
while(i<j) {
  if(d[j]<d[i]) {
    int t = d[j];
    d[j] = d[i];
    d[i] = t;
  }
  i++;
  j--;
}
// Inhalt von d?
```

```c++
// (e)
int e[6];
int p = 7;
int g = 3;
int k = g;
for(int i=0; i<p-1; i++) {
  e[k-1] = i+1;
  k = (k * g)%p;
}
// Inhalt von e?
```

