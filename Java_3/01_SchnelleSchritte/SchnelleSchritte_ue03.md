---
title: Basics in Java
description: Weitere Übungen in Java. 
cmds: ['md_html.bash','md_html.bash --small']
tags: [None,java]
---

**Übung (Potenzieren):**

Schreibe eine Methode die einen `double` Wert `x` hoch einem `int` Wert n `berechnet`. Die Methode soll so aussehen:

```java
static double hoch(double x, int n)
```

Beachte dass `n` auch negativ sein kann.

---

**Übung (Durchschnitt):**

Schreibe eine Methode die ein Array aus `int` übergeben bekommt und den Durchschnitt dieser Werte als `double` Wert zurückgibt.

---

**Übung (ABGB):**

Das Allgemeine Bürgerliche Gesetzbuch (ABGB) unterscheidet vier Altersstufen:

- bis 6 Jahre ist man Kind,
- ab 7 bis 14 Jahren unmündige/r Minderjährige/r,
- ab 15 bis 17 Jahren mündige/r Minderjährige/r (d.h. man ist strafbar) und
- mit dem 18. Geburtstag wird man Volljährige/r und damit voll handlungsfähig.

Implementiere eine Methode

```java
static String abgbText(int alter, char geschlecht)
  // geschlecht ist 'm' oder 'w'
```

Der zurückgegebene String soll an das Alter und das Geschlecht angepasst sein. Beispiele: `mündige Minderjährige` bzw. `mündiger Minderjähriger` .

---

**Übung (Monatsname):**

Schreibe eine Methode:

```java
static String monatsText(int monatNr)
```

die für eine Monatsnummer den entsprechenden String zurückgibt, z.B. `"Oktober"` für `10`.

---

**Übung (Zweierpotenzen):**

Schreibe eine Methode die ein Array aus `int` übergeben bekommt und die Zahlenfolge `1,2,4,8,16,32,64,...` ins  Array schreibt. Es können Arrays beliebiger Länge übergeben werden. Die Methode schaut folgendermaßen aus.

```java
static void zweierpot(int[] a) {
  int i;
  // ...
}
```

Es dürfen keine weiteren lokale Variablen (zusätzlich zum `i`) angelegt werden.

Schreibe weiters eine Methode mit dem Namen `print` die den Inhalt eines `int` Arrays durch Beistriche getrennt (nach der letzten Zahl kein Beistrich) ausgibt.

Beispiele für den Aufruf:

```java
int[] a1 = new int[20];
zweierpot(a1);
print(a1);

int[] a2 = new int[7];
zweierpot(a2);
print(a2);


```

---

**Übung (Quadratzahlen):**

Prüfe die Behauptung: Jede Quadratzahl `n*n` ist immer eine Summe von ungeraden Zahlen(Bsp.:`4*4 =16=1+3+5+7`, `5*5=25=1+3+5+7+9`, usw.). 

Schreibe dazu zuerst eine Methode  `static int unsum(int n)` die die ersten `n` ungeraden Zahlen addiert und diese Summe zurückgibt, d.h. `unsum(5)` ergäbe `25`.

Prüfe dann durch ein Programm ob die Behauptung stimmt für alle Quadratzahlen `2*2`, `3*3`, ..., `10000*10000`

---

**Übung (Quersumme):**

Bei der Quersumme handelt es sich um die Summe der einzelnen Ziffern einer mehrstelligen Zahl. Beispiel: Die Quersumme von 251 ist 8, da 2 + 5 + 1 = 8.

Schreibe eine Methode `static int qsum(int n)` die die Quersumme des Parameters `n` berechnet und zurückgibt.

---

