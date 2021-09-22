---
title: Variablen I
subtitle: Grundlagenlabor
tags: []
use_math: true
---

#### Übung (Ausdrücke)


Wie würden die folgenden Formeln als Berechnungsausdruck in einem C Programm geschrieben werden?
$$
2x-\frac{y-2}{3-z}
$$

---

$$
\frac{\frac{2}{3-x}}{\frac{a+b}{c-d}}
$$

---

$$
a-b \frac{7}{c+d(3-e)}
$$

---

$$
a^2+b^2 \frac{c+3}{d-5}
$$

---



#### Übung (Variablenwerte)

Schreibe an was folgendes Programm (exakt!) am Bildschirm ausgibt:

```c++
int n=10;
int m=20;
int k=n*5-m;
m=m/4;
n=n+13;
printf("%d %d %d\n",n,m,k);
printf("%d %d",k/2+5,k-n);
```



#### Übung (Variablenwerte)

Schreibe an was folgendes Programm (exakt!) am Bildschirm ausgibt:

```sh
int x=10;
int y=x*2-4;
int z;
printf("%d / %d\n",x,y;)
z=y-x;
printf("z=%d\n",z);
z=z+1;
printf("z=%d\n",z);
x=2*x-z;
printf("x=%d\n",x);
```



#### Übung (Variablenwerte)

Welche Werte nimmt die `int` Variable `n` an? Was wird am Ende ausgegeben?

```c++
int n=83;
n=n/2;
n=n/2;
n=n/2;
n=n/2;
n=n/2;
printf("%d\n",n);
```

