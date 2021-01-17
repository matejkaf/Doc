---
title: Funktionen (Übungen)
type: assignment
cmds: ['md_html.bash','md_html.bash --small']
tags: [ c, funktionen ]
---



**Übung (Hallo Welt):**

- Schreibe eine Funktion mit dem Namen `hallo` die "Hallo Welt" ausgibt

- Rufe die `hallo` Funktion drei mal im Hauptprogramm auf (ohne Schleife).

- Ändere die `hallo` Funktion so, dass durch eine Schleife) folgendes ausgegeben wird.

  ```
  Hallo Welt 1
  Hallo Welt 2
  Hallo Welt 3
  Hallo Welt 4
  Hallo Welt 5
  ```

  Es ergeben sich insgesamt 15 Zeilen in der Ausgabe.

- Wiederhole im Hauptprogramm die bestehenden (drei) Funktions-Aufrufe 4 mal in einer Schleife. Es ergeben sich insgesamt 60 Zeilen in der Ausgabe.



---

**Übung (Zahlenfolge in Funktion):**
Schreibe eine Funktion die, mit Hilfe einer Schleife, folgende Zahlenfolge ausgibt.

$2,5,8,11,14,17,$

Die Zahlen sollen hintereinander durch Beistriche getrennt ausgegeben werden. Rufe die Funktion im Hauptprogramm einmal auf.



---

**Übung (Rechteck):**

Es soll folgende Figur (ausgefülltes Rechteck) ausgeben werden.

```
+------+
|######|
|######|
|######|
|######|
+------+
```

Jede Zeile ist das Ergebnis eines Funktionsaufrufs. Das Hauptprogramm soll **nur** aus Funktionsaufrufen bestehen.

Erstelle dafür zwei Funktionen:

- `void auszen()`  für: `+------+\n`
- `void innen()` für: `|######|\n`

Hinweis: Diese Funktionen sind in geeigneter Reihenfolge und Anzahl aufzurufen.



---

**Übung (Rechteck II):**
Erweitere das Programm aus voriger Übung:

- Die Höhe des Rechtecks soll durch eine Eingabe bestimmt werden.

Hinweis: Verwende eine Schleife um die Funktion `innen` mehrfach aufzurufen – dadurch ergibt sich die Höhe. 



---

**Übung (Zahlenfolge in Funktion II):**
Schreibe eine Funktion die die Zahlenfolge $42,42,41,39,36,32,27,$ (hintereinander in einer Zeile) ausgibt. Die Zahlenfolge soll 10 Mal untereinander wiederholt ausgegeben werden.  Die Wiederholung soll durch eine Schleife im Hauptprogramm implementiert werden.



---

**Übung (Zahlenfolge in Funktion III):**
Schreibe eine Funktion die folgende Zahlenfolge in einer Zeile ausgibt:

$1,2,4,5,7,8,10$

Hinweis zur Lösung: abwechselnd $+1$ oder $+2$ je nach dem ob die Laufvariable gerade oder ungerade ist.

Die Zahlenfolge soll weiters untereinander wiederholt werden. Die Anzahl der Wiederholungen wird durch eine Eingabe im Hauptprogramm bestimmt.



---
