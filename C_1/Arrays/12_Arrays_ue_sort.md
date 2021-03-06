---
title: Doc
tags: [assignment,arrays,challenge]
---

# Sortieren (Challenge)



## Selection Sort

Bei diesem Verfahren wird jener Index gesucht an der die größte Zahl vorkommt. Dann wird der Wert an dieser Stelle mit der letzten Stelle vertauscht. Damit steht die größte Zahl ganz am Ende des Arrays.
Im zweiten Durchlauf wird der größte Wert vom ersten bis zum vorletzten Element gesucht, dieser tauscht dann den Platz mit der vorletzten Stelle. Mit jedem Durchlauf wird eine Stelle weniger geprüft. 

Selection-Sort ist ungefähr **doppelt so schnell wie Bubble-Sort**.



---

**Übung (Selection-Sort):**
Implementiere Selection-Sort in einer Funktion.



---


**Übung (Radrennen Deluxe):**

Schreibe ein Programm das mit Hilfe eines Menüs das Erfassen und Auswerten der bei einem Radrennen erreichten Zeiten erlaubt. Das Menü soll so aussehen:

```
===========================================
n ... Neue Zeit erfassen
b ... Beste Zeit anzeigen
s ... Sortierte Platzierungsliste anzeigen
b ... Beenden
===========================================
```

Der Anwender kann die Menüpunkte in beliebiger Reihenfolge wählen. Die Zeiten werden einzeln erfasst, die Reihenfolge entspricht der Startnummer. Wie viele Zeiten insgesamt eingegeben werden ist vorab nicht bekannt, es können allerdings nicht mehr als 500 sein.

---


