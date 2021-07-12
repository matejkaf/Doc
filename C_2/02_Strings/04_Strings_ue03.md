---
title: Strings
subtitle: Übungen
tags: [c,strings,assignment,C_2]
---


- Verstehe zuerst die Aufgabenstellung. 
- Versuche ein paar Beispiele zu entwickeln. D.h. welche Ausgabe bei welcher Eingabe.
- Entwickle anhand einer Skizze eine Lösungsidee
- Implementiere und teste deine Lösung



---

#### Übung (rightStr)

Implementiere eine Funktion `rightStr`, diese kopiert vom Ende eines Strings eine gewisse Anzahl Zeichen in einen Zielstring. Der Inhalt des Zielstrings wird überschrieben. Übergabeparameter sind die beiden Strings und die Anzahl an Zeichen.



---

#### Übung (Zeichen einfügen)

Schreibe eine Funktion `strinsert` die in einem bestehenden String ein Zeichen an einer bestimmten Stelle einfügt, die Zeichen dahinter rutschen um eins nach rechts.

Übergabeparameter:

- Der String
- Das einzufügende Zeichen
- Die Einfügeposition

Erweiterung/Challenge: Überprüfen ob die Einfügeposition existiert. 



---

#### Übung (Zeichen rotieren)

Schreibe eine Funktion `strrot` die alle Zeichen eines Strings um eins nach rechts schiebt, das letzte Zeichen kommt dabei an die vorderste Stelle. Übergabeparameter ist der String.



---

#### Übung (String verdoppeln)

Schreibe eine Funktion `strdouble` die einen String verdoppelt, 
Beispiel:`"Hallo"` $\longrightarrow$ `"HalloHallo"`.

Übergabeparameter ist der zu verdoppelnde String.



---

#### Übung (Reverse Cat)

Schreibe eine Funktion `strrcat` – wie `strcat`, allerdings wird der zweite String in umgekehrter Reihenfolge an den ersten String angefügt.

Übergabeparameter sind die beiden Strings.



---

#### Übung (Reverse strdouble)

Schreibe eine Funktion `revstrdouble` die einen String verdoppelt und dabei umdreht, 
Beispiel:`"Hallo"` $\longrightarrow$ `"HalloollaH"`.

Übergabeparameter ist der zu verdoppelnde String.