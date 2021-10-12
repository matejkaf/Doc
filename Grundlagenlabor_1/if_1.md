---
title: Logik
subtitle: Grundlagenlabor
tags: []
use_math: true
---

#### 1. Übung (true oder false)

Ermittle für die Bedingungen ob diese wahr (`true`) oder falsch (`false`) sind:

```c++
int x;
x=50;

if( x>20 ) {
  // ...
}

if( x>70 ) {
  // ...
}

if( x>50 ) {
  // ...
}

if( x>=50 ) {
  // ...
}

if( x<100 ) {
  // ...
}

if( x<49 ) {
  // ...
}
```



#### 2. Übung

Ermittle für die Bedingungen ob diese wahr (`true`) oder falsch (`false`) sind:

```c++
int i=34;

if(i<34) {
  // ...
}

i=i-1;

if(i<34) {
  // ...
}
```



#### 3. Übung

Was gibt das folgende Programm aus?

```c++
n=11;
if(n%2==0) {
  printf("aaa\n");
} else {
  printf("bbb\n");
}
n++;
if(n%2==1) {
  printf("ccc\n");
} else {
  printf("ddd\n");
}
```

