---
title: Arrays
subtitle: Challenge Geburtstagsparadoxon
tags: [assignment,array,challenge,C_1]
---

#### Übung (Geburtstagsparadoxon)

Beantworte die Fragestellung:  Wie wahrscheinlich ist es, dass in einer Schulklasse mit 36 Schülern zwei davon am gleichen Tag Geburtstag haben?

Anleitung:

- Lege ein Array aus 365 `int` Elementen an, jedes Element entspricht einem Tag des Jahres.
  Steht in einem Element eine Null, so bedeutet dies dass an diesem Tag niemand aus der Schulklasse Geburtstag hat, steht eine Eins so hat ein Schüler an diesem Tag Geburtstag.
- Wähle zufällig eine Zahl aus 0–364, nimm dies als Index und erhöhe den Wert des Elements an dieser Stelle um eins.
  - Wiederhole dies so oft wie es Schüler in der Klasse gibt. Damit macht man ein sogenanntes Zufallsexperiment, für jeden Schüler in der Klasse wird ein zufälliger Geburtstag gewählt.
- 
Am Ende durchsuche das Array nach einer Zahl größer als Eins. Wird eine solche Zahl gefunden dann haben mehre Schüler am gleichen Tag Geburtstag.


Wiederhole das Zufallsexperiment einige Male (weitere Schleife) und berechne aus den Ergebnissen die Wahrscheinlichkeit, dass mehrere Schüler am gleichen Tag Geburtstag haben. Beispiel für Berechnung der Wahrscheinlichkeit: Von 200 Versuchen waren 50 erfolgreich (d.h. es gab gemeinsame Geburtstage), daraus folgt eine Wahrscheinlichkeit von 50/200*100=25%



---

#### Übung (Geburtstagsparadoxon II)

Die Fragestellung ist ähnlich zur vorhergehenden Übung. Wie viele Personen muss man nehmen damit jeder mögliche Geburtstag (alle 365 Tage des Jahres) mindestens einmal vorhanden ist?

