---
title: Übungen zu ArrayList
type: assignment
cmds: ['md_html.bash --small']
---

---

**Übung (Schulweg Statistik):**
Du möchtest wissen wie lange du durchschnittlich für den Schulweg brauchst (in Minuten) und wie stark diese Dauer variiert. Schreibe dazu ein Programm das die Eingabe beliebig vieler `int` Werte ermöglicht. Speichere alle Werte in einer ArrayList. Ende wenn 0 eingegeben wird. Berechne anschließend den Mittelwert (auch Erwartungswert genannt) und die Standardabweichung (das ist das statistische Maß für die Streuung = Variation). Schreibe Methoden zur Berechnung beider Werte. 



---


**Übung (Schulweg Statistik II):**
Erweitere die vorhergehende Übung auf mehrere Schüler. Erstelle dazu eine Klasse die den Schülername und eine ArrayList für die Schulweg-Dauer enthält. Lege einige Objekte dieser Klasse mit Testdaten an (direkt im Code ohne Eingabe) und speichere diese in einer ArrayList.

Suche den Schüler mit dem längsten Schulweg (größter Mittelwert) und den Schüler mit dem konstantesten Schulweg (geringste Standardabweichung).



---

**Übung (Wörter zählen):**
Schreibe ein Programm, das Wörter zählen kann. Das Programm soll ständig zur Eingabe eines Worts auffordern und mitzählen wie oft ein bestimmtes Wort bereits eingegeben wurde. Es sollen beliebig viele Wörter unterstützt werden.

Abgeschlossen wird durch durch Eingabe von `"ENDE"`. Danach sollen alle Wörter mit ihrer Häufigkeit ausgegeben werden. Außerdem soll ermittelt werden, welches Wort am öftesten eingegeben wurde.

Anleitung:

- Schreibe eine Klasse `Wort` die einen String und einen `int` Wert (für die Anzahl) enthält.
- Speichere Instanzen dieser Klasse in einer `ArrayList`.



---

**Übung (Walters Liste):**
Walter bittet dich um deine Hilfe. Es geht darum die bei diversen Verstößen vorgesehenen Beträge zu Verwalten. Pro Schüler ist der Name und der offene Betrag zu speichern. Schüler die noch Schulden bei Walter haben sind in einer `ArrayList` zu verwalten. Schüler stehen nur einmal in der Liste, zusätzliche Strafen werden zum bestehenden Betrag aufaddiert.


Schreibe eine Klasse `WaltersListe` mit folgenden Methoden:

- `double addFine(String name, double amount)` – Fügt einen neuen Schüler zur Liste hinzu, bzw. falls dieser schon vorhanden ist wird der neue Betrag zum bereits bestehenden Betrag hinzu addiert.
- `void printList()` – gibt die ganze Liste aus.
- `void finePaid(String name)` – Schüler hat bezahlt, diesen aus der Liste entfernen.
- `void sortByAmount()` – Liste nach offenen Beträgen, absteigend sortieren.




---

**Übung (Walters Liste II):**

Walter will wissen ob manche Klassen besonders schlimm sind. 

- Ergänze dass auch die Klassenbezeichnung verwaltet wird.

Schreibe eine Methode `getAmountByClass()` die

- Stufe 1: Pro Klasse die Summe der offenen Beträge ausgibt.
- Stufe 2: Das Ergebnis als ArrayList liefert, so dass die Ausgabe nach dem Aufruf der Methode erfolgen kann.


---

