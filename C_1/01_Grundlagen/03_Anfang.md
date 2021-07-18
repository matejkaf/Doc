---
title: Programmieren Anfang
subtitle: C Grundlagen
tags: [lecture,C_1]
---

<script src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML" type="text/javascript"></script>

Programmieren von Computern (Programmiersprache C)

Programmierkenntnisse sind eine wichtige Voraussetzung für einen Job in der IT Branche.
IT = Informations Technologie




# Programm


Liste von Anweisungen, z.B.\ für:


- Eingabe – von der Tastatur
- Ausgabe – am Bildschirm
- Berechnungen (+, -, ...)
- Wenn/Dann Befehle
- Wiederholungen



**"Programmieren"**

- Quelltext in einem Editor erstellen.
- Quelltext mittels Compiler in ein Programm übersetzen (compilieren).
- Programm starten und testen.


Alles zusammen in **MS Visual Studio** enthalten.



## Das erste Programm


"Hello World" am Bildschirm ausgeben.
```c++
#include <stdio.h>
#include <conio.h>

void main()
{
	printf("Hello World\n");
	getch();
}
```




# Variable

Benannter Speicherplatz für einen Wert. "Gedächtnis" des Programms.

Eine Variable anlegen (definieren).

```c
int wert;
```

Name: Nur Buchstaben und Zahlen – Zahl darf nicht ganz vorne sein, keine Umlaute oder Leerzeichen. 

`int` – Datentyp --- für ganze Zahlen.


Eine Variable hat unbestimmten Anfangswert.



**Zuweisungen**

Um Werte in Variablen zu speichern.

```java
int wert;
wert = 5;
```



**Berechnungen**

`+` `-` `*` `/` und Klammern `(` `)`

Ergebnisse können in Variablen gespeichert werden.

```c
int a;
int b=2;
a = b * 3;
```

In `a` wird der Wert gespeichert (**nicht** die Formel).
Links vom Gleichheitszeichen: nur Variable.



#### Übung (Schreibe als Ausdruck)

$$
\frac{(x+y)\cdot 2-5}{3-x}
$$


$$
\frac{1}{x-y}-\frac{x+5}{2\cdot (x-5)}
$$

---


#### Übung (Schreibe als Formel)

- `z=((x+y)*2-5)/3;`
- `4-(a/(c-3));`

---



# Ausgaben




Mit `printf`.

```c
printf("Text");
```

Wert einer Variablen ausgeben:

```c
int wert;
wert = 2;
printf("%d",wert);
```

Kann mit Text gemischt werden.

```c
printf("Noch %d Minuten bis zur Pause\n",min);
```




# Eingabe




Mit `scanf`.

```c
int a;
scanf("%d",&a);
```

Zur Benutzerführung:

```c
int laenge;
printf("Laenge eingeben: ");
scanf("%d",&laenge);
```

#### Übung (Addieren)

Schreibe ein Programm (mit Benutzerführung) bei dem zwei Zahlen eingegeben und addiert werden.
Ablauf:

```
Zahl 1: 5
Zahl 2: 3
5 + 3 = 8
```

---




# Kommazahlen


Kommazahlen werden mit dem Datentyp `double` definiert.

```c
double pi=3.14;
```

Für `printf` und `scanf`:  `%lf`

---

#### Übung (Währungsrechner)

Schreibe ein Programm, das **amerikanische Dollar in Euro** umrechnen kann. Mit Ein- und Ausgabe.

---



# Übungsblatt 1

[Übungsblatt 1](04_Anfang_ue01)


# Formatierte Ausgabe

## Ganze Zahlen

Bei `printf` kann eine Ausgabebreite vorgegeben werden.
Beispiel:

```c
int a=3
printf("a=%5d",a);
```

Es werden 5 Zeichen für `a` ausgegeben `a=____3`

Gefüllt wird mit Leerzeichen.

## Kommazahlen

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


# Ganzzahlige Division


Was ist die Ausgabe dieses Programms?

```java
int a = 12;
int b = 5;
int c;
c = a/b;
printf("%d",c);
```

Ausgabe: 2 – Warum? –  `int` Variablen haben keine Kommastellen!

Was ist die (ganzzahlige) Division genau?

```c
12 / 5
```

gesucht sind ganze Zahlen $$q$$ (Quotient) und $$r$$ (Rest): 
$$
12=q \cdot 5 + r
$$




---

#### Übung (Ermittle q und r)

- 17 / 7
- 12 / 3
- 15 / 4
- 63 / 11

---



Im Programm:

- `/` ergibt q, ganzzahliges Ergebnis
- `%` ergibt r, Modulo, ganzzahliges Ergebnis

---

#### Übung (Modulo)

Was steht in der `int` Variable `x`.

- `x=15/6`
- `x=15`
- `x=21`
- `x=17`
- `x=3/9`
- `x=3`

---


#### Übung (Zeit)

Schreibe ein Programm, das Minuten einliest und in Stunden und Minuten wieder ausgibt.

---



# Automatische Typwandlungen

*todo: Besseren Platz suchen*

Wenn man in einer Berechnung `int` und `double` mischt so wird automatisch mit `double` gerechnet.

```java
int a=12;
double b;
b = a/10; // ergibt 1.0
b = a/10.0; // ergibt 1.2
```



