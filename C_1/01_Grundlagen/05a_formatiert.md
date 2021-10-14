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
int a=3
printf("a=%5d",a);
```

Es werden 5 Zeichen für `a` ausgegeben `a=____3`

Gefüllt wird mit Leerzeichen.

# Kommazahlen

Angabe der Ausgabebreite (enthält Vorzeichen, Vorkomma, Komma und Nachkomma) und der Nachkommastellen.

Beispiel:
Ein Vorzeichen, 3 Vorkommastellen und 2 Nachkommastellen – Ausgabebreite?

```c
double x=33.346
printf("x=%7.2");
```

Ausgabe:  `x=  33.35` – es wird gerundet!




# Übungsblatt 2

[Übungsblatt 2](05_Anfang_ue02)

