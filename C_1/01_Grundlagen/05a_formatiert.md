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

Angabe der Ausgabebreite (enthält Vorzeichen, Vorkomma, Komma und Nachkomma) und der Nachkommastellen.

Beispiel:
Ein Vorzeichen, 3 Vorkommastellen und 2 Nachkommastellen – Ausgabebreite?

```c
double x=12.379;
double y=-1368.4;
printf("x=%8.2lf",x);
printf("y=%8.2lf",y);
```

Variante nur K




# Übungsblatt 2

[Übungsblatt 2](05_Anfang_ue02)

