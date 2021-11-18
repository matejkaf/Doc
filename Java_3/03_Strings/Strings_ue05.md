---
title: Strings
subtitle: Übungen
tags: [assignment]
---



#### **Übung (Genetik):** 

Das Erbgut (Genom) eines Lebewesens wird in der DNA als Abfolge (Sequenz) der Basen Adenin (A), Guanin (G), Cytosin (C) und Thymin (T) gespeichert. In einem Programm lässt sich die Erbinformation als String speichern:

```c
tttcaagctgcggtaatcggtagatccccggtacggtaagct
```
In der sogenannten Bioinformatik wird mit solchen Strings gearbeitet.

Aufgabe: stelle fest wie oft die Sequenz `cggta` in der obigen Erbinformation vorkommt.



---

#### **Übung (Satz und Wort):**

Schreibe eine Klasse die zwei Strings (`satz` und `wort`) als Instanzvariablen enthält (zu setzen über den Konstruktor).

- Implementiere eine Methode die ermittelt wie oft `wort` in `satz` vorkommt.

- 
Implementiere eine Methode die alle passenden Wörter aus dem Satz löscht. Der neue Satz soll der Rückgabewert sein. Achte darauf, dass sich die Instanzvariable `satz` nicht ändert.

---



#### **Übung (String – Palindrom):**

Schreibe ein Programm das einen Text umgekehrt ausgibt.  Weiters soll das Programm prüfen können ob es sich um ein ein Palindrom handelt. Ein Palindrom ist ein Text der von vorn und von hinten gelesen gleich bleibt (Bsp.: `Rentner`).

Implementiere:

- 
Methode `String reverse(String str)`, die den String umdreht und das Ergebnis zurückgibt.
- Methode `boolean isPalindrom(String str)`, die prüft ob es sich bei dem als Parameter übergebenen String um ein Palindrom handelt, dabei soll Groß- und Kleinschreibung ignoriert werden.



---

#### **Übung (String – Leerzeichen):**

Ein fix im Programm vorgegebener String soll ohne darin enthaltene Leerzeichen in einen zweiten String kopiert werden.

- (1) Lösung mit der `charAt` Methode.
- (2) Lösung ohne Verwendung von `charAt`. Verwende stattdessen `indexOf` und `substring` (benötigt weniger Schleifendurchläufe).



---

#### **Übung (Count words):**

Write a complete Java program that processes user input lines. 

Your program should ignore any lines until it reads the line with exactly the text `"START"` in uppercase with no other preceding or trailing characters. Once START has been read, count the number of subsequent lines that include the character sequence `"salad"` in upper- or lower-case or any mixture (for example the line `"Ho;MySaLADer!"` counts as a matching line). When your program reads a line that is exactly the text `"END"` in uppercase with no other preceding or trailing characters, output the count of the matching salad lines and exit. Do not read any additional lines. Assume there will always be a valid `"START"` and a later `"END"` line. 



---

#### **Übung (String Split):**

Implementiere die Klasse `StringSplit`.  Ein vorgegebener Text soll damit in Teilstrings gleicher Länge zerlegt werden. Der String und die Länge der Teile wird im Konstruktor gesetzt. Die Methode `hasMoreChunks()` liefert die Information ob noch ein Teil zum Lesen da ist. Die Methode `nextChunk()` liefert den nächsten Teil. 

Anwendung:
```c
StringSplit ss = new StringSplit("abcdefghij",4);
while (ss.hasMoreChunks()) {
	System.out.println("\""+ss.nextChunk()+"\"");
}
```

Ausgabe:
```c
"abcd"
"efgh"
"ij"
```
