---
title: Doc
type: assignment
cmds: ['md_html.bash --small']
---



# Schleifen (Challenges)



**Übung (Notenstatistik):**
Schreibe ein Programm das die Eingabe beliebig vieler Testergebnisse ermöglicht.
Es werden die erzielten Punkte eingegeben (max. 24 Punkte). Für jede eingegebene Punktezahl soll die Note ausgegeben werden.
Außerdem soll mitgezählt werden wie viele einen Einser, Zweier, etc. erreicht haben.
Beendet wird durch Eingabe von $-1$, danach wird noch ein Gesamtergebnis ausgegeben:

```
----------------------------
1er:  5 | *****
2er:  3 | ***
3er: 10 | **********
4er:  2 | **
5er:  0 | 
----------------------------
```






---

**Übung (Parallelogramm):**
Schreibe ein Programm, das ein mit Sternchen gefülltes Parallelogramm ausgibt. 
Das Programm soll die Breite und  Höhe einlesen.
Beispiel:

```
Breite: 11
Höhe: 5

***********
 ***********
  ***********
   ***********
    *********** 
```

---


**Übung (Ausgabe mit Pause):**
Gib die Zahlen von 1 bis 100 untereinander aus. Es sollen jedoch nur jeweils 20 Zahlen angezeigt werden. Danach soll zu einem Tastendruck aufgefordert werden, um die nächsten 20 Zahlen anzuzeigen und so weiter. 

---


**Übung (Multiplikation):**
Multipliziere zwei natürliche Zahlen $a$ und $b$. Als Rechenoperation darf jedoch nur die Addition verwendet werden.  Die Zahlen können vom Anwender eingegeben werden. 

---


**Übung (Zeugnisklausel):**
Schreibe ein Programm für Zeugnisklauseln: Das Zeugnis beinhaltet 10 Noten, diese Noten werden der Reihe nach eingegeben.
Anschließend ermittelt das Programm die Zeugnisklausel und gibt sie aus.
Folgende Regeln werden dabei verwendet:

- Ein oder mehr 5er = Nicht bestanden
- Kein 5er = Bestanden
- Alle Noten $\le3$ und Notendurchschnitt $\le1.5$: Mit Auszeichnung bestanden
- Alle Noten $\le3$ und Notendurchschnitt $\le2.0$: Mit gutem Erfolg bestanden

Das Programm fragt am Ende ob wiederholt werden soll.

---
