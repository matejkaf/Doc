---
title: Einstieg in Java
subtitle: Übungen
cmds: ['md_html.bash','md_html.bash --small']
description: Einfache Aufgaben zum Umstieg von C nach Java. Alle Elemente static public.
tags: [assignment,java,3BHELS]
---

#### **Übung (FizzBuzz):**

Write a program that prints numbers from 1 to 100. But for multiples of three print `Fizz` instead of the number and for the multiples of five print `Buzz`.  For numbers which are multiples of both three and five print `FizzBuzz`.

---

#### **Übung (Notenliste):**

Schreibe ein Programm das aufgrund von Punkten die Note ermittelt.
Die Ausgabe der Note soll sowohl als Zahl als auch als Text erfolgen.

Gegeben:

```java
String[] namen = {"Mayer","Huber","Gruber"};
int[] punkte = {21,18,15};
```

Ausgabe:

```
Mayer - 1 (sehr gut)
Huber - 2 (gut)
Gruber - 3 (befriedigend)
```

Schreibe 3 Methoden:

- `getNote`: Zur Ermittlung der Note als `int` Zahl aufgrund der erreichten Punkte. Rückgabewert `int`.
- `getNoteText`: Zur Ermittlung des Noten-Texts (sehr gut, gut, ...) aufgrund der Note. Verwende dafür eine `switch` Anweisung. Rückgabewert `String`.

- `getNoteText2`: Wie `getNoteText` verwende statt der `switch` Anweisung ein Array aus Strings.
Hinweis: die Noten als Index ins Array verwenden!


---



#### **Übung (Fakultät):**

Schreibe ein Programm, das die Fakultät einer Zahl berechnet und ausgibt.

```
fakultaet(0)=1
fakultaet(1)=1
...
fakultaet(5)=1*2*3*4*5
```

>  Bedeutung in der Mathematik: Die Fakultät gibt an auf wie viele unterschiedliche Arten man Objekte anordnen kann.
> Z.B. gibt es 120 Möglichkeiten wie sich 5 Schüler auf 5 Sesseln setzen können.

Aufgabenstellungen:

- Schreibe eine Methode zur Berechnung der Fakultät.

- Die Fakultät wird rasch eine sehr große Zahl, ermittle die Grenzen für die Datentypen `int` und `long`.
- Schreibe die Fakultäten von 0–12 in ein Array und gib dieses anschließend in umgekehrter Reihenfolge aus.

---



#### **Übung (Primzahltest):**

Eine Primzahl ist eine positive Zahl größer eins mit genau zwei natürlichen Zahlen als Teiler, der Zahl 1 und sich selbst. Die kleinsten Primzahlen sind: $2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, \ldots$

Implementiere eine Methode `boolean isPrim()` die von einer als Parameter übergebenen Zahl prüft ob es sich um eine Primzahl handelt.

Überprüfe damit: Es gibt 1229 Primzahlen von 2--10000.

---


