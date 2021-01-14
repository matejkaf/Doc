---
title: Übungen zu Strings
type: assignment
cmds: ['md_html.bash --small']
---



**Übung (Rechtsbündiges Ausgeben):**
Schreibe ein Programm das mehrere Strings unterschiedlicher Länge rechtsbündig untereinander ausgeben kann.

Beispiel:

```
       Ich
     finde
Informatik
      toll
```

Definiere dafür eine Methode `String rightAlign(String str,int n)` die den String und die Breite als Parameter übergeben bekommt. Rückgabewert ist ein String der durch Anfügen von Leerzeichen auf die gewünschte Länge gebracht wurde. Rufe diese Methode vier mal auf und gib die Ergebnisse aus, sodass obige Ausgabe entsteht.



---

**Übung (Rechtsbündiges Ausgeben II):**

Implementiere eine Methode `void rightAlignAll(String[] str)` die ein Array aus Strings übergeben bekommt und diese rechtsbündig ausgibt – alle Strings sollen am längsten String ausgerichtet werden. Verwend die Methode aus der vorhergehenden Aufgabe.



---

**Übung (Longest common prefix):**
Schreibe eine (`static`) Methode die zwei Strings übergeben bekommt und zurück gibt wie viele Buchstaben am Anfang übereinstimmen.

```
p r e f e t c h
0 1 2 3 4 5 6 7
p r e f i x
==> pref stimmt überein, d.h. 4 Buchstaben
```



---

**Übung (Longest common suffix):**
Schreibe eine (`static`) Methode die zwei Strings übergeben bekommt und zurück gibt wie viele Buchstaben am **Ende** übereinstimmen.

```
    0 1 2 3 4 5
    a b c x y z
e f g h i x y z
0 1 2 3 4 5 6 7
```



---

**Übung (ROT13):**
ROT13 dient dazu einen Text vorübergehend unlesbar zu machen, z.B. weil es sich um die Lösung eines Rätsels handelt. Dabei wird jeder Buchstabe eines Strings um 13 Stellen im Alphabet verschoben. Wird ROT13 zweimal angewandt so entsteht wieder das ursprüngliche Wort. Schreibe ein Programm das von einem String die ROT13 Kodierung ausgibt. Verwende nur Großbuchstaben.

Bsp.: `"FSST"` $\longrightarrow$ `"SFFG"`.

Hinweise: ASCII Code der Großbuchstaben `A = 65 ...  90 = Z`.

Wenn `c` eine `char` Variable ist dann ergibt `(int)c` den ASCII Code. Umgekehrt kann mit `(char)i` der ASCII Code in der `int` Variable `i` wieder in ein `char` gewandelt werden.



---

**Übung (Zahlentext):**
Nimm einen String der nur aus Großbuchstaben besteht und erzeuge daraus einen String aus Zahlen die durch Leerzeichen getrennt sind.
Jede Zahl entspricht der Position im Alphabet.
Bsp.: `"ABCXYZ"` $\longrightarrow$ `"1 2 3 24 25 26"`.

Schreibe weiters ein Programm das den zweiten String wieder in einen lesbaren Text wandelt.

---


