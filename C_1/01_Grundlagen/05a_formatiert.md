---
title: Formatierte Ausgabe
subtitle: C Grundlagen
tags: [lecture,C_1,1AHITS,1CHELS]
use_math: true
---



# Ganze Zahlen

Bei `printf` kann eine Ausgabebreite vorgegeben werden.
Beispiel:

```c
int a=3;
int b=123;
printf("a=%5d",a);
printf("a=%5d",b);
```

Es werden 5 Zeichen für `a` ausgegeben `a=____3`

Gefüllt wird mit Leerzeichen.

Variante: `%05d` – mit führenden Nullen statt Leerzeichen.

# Kommazahlen

Anzahl **Nachkommastellen** mit Runden:

```c++
double x=2.3469;
printf("%.2lf",x); // 2.34
printf("%.3lf",x); // 2.347
```

Angabe der **Ausgabebreite** (enthält Vorzeichen, Vorkomma, Komma und Nachkomma). Beispiel:
Ein Vorzeichen, 4 Vorkommastellen und 2 Nachkommastellen – Ausgabebreite?

```
12345678
-9999.99
daher: %8.2lf
```



```c
double x=12.379;
double y=-1368.4;
printf("x=%8.2lf",x);
printf("y=%8.2lf",y);
```




# Übungsblatt 2

[Übungsblatt 2](05_Anfang_ue02)

