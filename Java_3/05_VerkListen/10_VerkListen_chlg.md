---
title: Einfach verkettete Liste
subtitle: Challenges
tags: [assignment,challenge]
---

#### **Übung (Broken Keyboard (a.k.a. Beiju Text), Quelle: UVa 11988):**

Du tippst eine lange Zeile Text. Leider hat die Tastatur ein kleines Problem.  "Pos1" und die "Ende" Taste werden manchmal von selbst betätigt.

Dir ist dieses Verhaltens nicht bewusst, da Du voll auf den Text konzentriert bist und gar nicht auf den Monitor schaust. Das Ergebnis ist auf chinesisch ein "Beiju" Text. Deine Aufgabe ist herauszufinden welcher Text entsteht.

Als Eingabe erhält das Programm einen String (entspricht der eingetippten Zeile), der String enthält 2 spezielle Zeichen `'['` und `']'`. `'['` bedeutet die "Pos1" wurde gedrückt (die nächste Eingabe findet daher ganz vorne statt), und `']'` bedeutet die "Ende" Taste wurde gedrückt (springt an das Ende des Texts).

Beispiele:

- `This_is_a_[Beiju]_text` → `BeijuThis_is_a__text`
- `We[Hallo ]lt` → `Hallo Welt`

---

#### **Übung (Sortiert Einfügen):**

Nimm an die Liste ist aufsteigend sortiert.
Schreibe eine Methode `insertSort()` die einen Knoten so in die Liste einfügt, dass diese sortiert bleibt.

---

#### **Übung (Einfach verkettete Liste):**

Implementiere folgende Aufgabenstellung:

- Schreibe eine Methode die den ersten und letzten Knoten vertauscht.
- Schreibe eine Methode zum entfernen des letzten Knotens.
- Schreibe eine Methode die den Knoten an der n-ten Stelle mit dem nachfolgenden Knoten vertauscht.
- Schreibe eine Methode `reverse()` mit der die Reihenfolge aller Knoten umgedreht wird.

---



#### **Übung (Schleife feststellen):**

Schreibe eine Methode die feststellt ob in einer einfach verketteten Liste eine Schleife ist.
Eine Schleife ist dann vorhanden wenn der Nachfolger eines Knotens ein Knoten ist der bereits vorher einmal in der Liste vorkam (durch einen Programmierfehler).
Geht man durch eine Liste mit einer solchen Schleife durch, kommt man nie zum Ende sondern dreht sich im Kreis.

Implementiere dafür den sogenannten **Hase-Igel Algorithmus**.

- Dabei werden zwei Referenzen verwendet.
- Die erste Referenz wird immer zum nächsten Element weitergesetzt, die zweite Referenz aber zum übernächsten Element.
- In jedem Durchlauf entfernen sich die Referenzen um eine "Knotenlänge".
- Werden beide Referenzen gleich so ist eine Schleife vorhanden.

---



