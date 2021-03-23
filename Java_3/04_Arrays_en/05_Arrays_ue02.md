---
title: ArrayList
subtitle: Übungen
tags: [assignment]
---

<script src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML" type="text/javascript"></script>

#### **Übung (Schulweg Statistik):**

Du möchtest wissen wie lange du durchschnittlich für den Schulweg brauchst (in Minuten, Datentyp `double`) und wie stark diese Dauer variiert. Schreibe dazu ein Programm das die Eingabe beliebig vieler `double` Werte ermöglicht. Speichere alle Werte in einer ArrayList. Ende wenn 0 eingegeben wird. 

Berechne anschließend den Mittelwert $$\displaystyle{\bar {x}}$$ (auch Erwartungswert genannt) 

$$
{\displaystyle{\bar {x}}={\frac {1}{n}}\left(\sum _{i=1}^{n}{x_{i}}\right)={\frac {x_{1}+x_{2}+\cdots +x_{n}}{n}}}
$$


und die Standardabweichung $$s$$ – das ist das statistische Maß für die Abweichung vom Mittelwert.

$$
{s^{2}={\frac {1}{n}}\sum _{i=1}^{n}{\left(x_{i}-{\overline {x}}\right)^{2}}={\frac {1}{n}}\left(\left(x_{1}-{\overline {x}}\right)^{2}+\left(x_{2}-{\overline {x}}\right)^{2}+\dotsb +\left(x_{n}-{\overline {x}}\right)^{2}\right)}
$$

Schreibe Methoden zur Berechnung beider Werte. 




---

#### **Übung (Schulweg Statistik II):**

Erweitere die vorhergehende Übung auf mehrere Schüler. Erstelle dazu eine Klasse `Schueler` die 

- den **Schülername** und 
- eine **ArrayList für die Schulweg-Dauer** enthält.

Lege einige Objekte dieser Klasse mit Testdaten an (direkt im Code ohne Eingabe) und speichere diese in einer weiteren ArrayList.

Suche den Schüler mit dem längsten Schulweg (größter Mittelwert) und den Schüler mit dem konstantesten Schulweg (geringste Standardabweichung).



---

#### **Übung (Walters Liste):**

Walter bittet dich um deine Hilfe. Es geht darum die bei diversen Verstößen vorgesehenen Beträge zu Verwalten. Pro Schüler ist der Name und der offene Betrag zu speichern. Schüler die noch Schulden bei Walter haben sind in einer `ArrayList` zu verwalten. Schüler stehen nur einmal in der Liste, zusätzliche Strafen werden zum bestehenden Betrag aufaddiert.


Schreibe eine Klasse `WaltersListe` die diese `ArrayList` enthält mit folgenden Methoden:

- `double addFine(String name, double amount)` – Fügt einen neuen Schüler zur Liste hinzu, bzw. falls dieser schon vorhanden ist wird der neue Betrag zum bereits bestehenden Betrag hinzu addiert.
- `void printList()` – gibt die ganze Liste aus.
- `void finePaid(String name)` – Schüler hat bezahlt, diesen aus der Liste entfernen.
- `void sortByAmount()` – Liste nach offenen Beträgen, absteigend sortieren.




---

#### **Übung (Walters Liste II):**

Walter will wissen ob manche Klassen besonders schlimm sind. 

- Ergänze dass auch die Klassenbezeichnung pro Schüler verwaltet wird.

Schreibe eine Methode `getAmountByClass()` in der Klasse `WaltersListe` die

- Stufe 1: Pro Klasse die Summe der offenen Beträge ausgibt.
- Stufe 2: Das Ergebnis als ArrayList liefert, so dass die Ausgabe nach dem Aufruf der Methode erfolgen kann.

