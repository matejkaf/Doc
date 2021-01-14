
# 3AHELS FSST 2018/19

## WS:

- Wiederholung
  -- String reverse cat (Array, Zeiger)
  -- Finde maximum in Array mit Zeiger (einmal den Wert, einmal den Zeiger)
  -- Struktur dynamisch anlegen.



- Verkettete Listen (auch doppelt verkettet)
-- einfach
-- doppelt
--- Schülerliste

Doppelt verkettete Liste sortieren.
Vorübung: Vertauschen 2er Elemente (angrenzend, bzw. allgemein)

- Dateizugriff
  -- Text, 
  -- Binär


## SS:

- Java
    - Allgemeine Themen (OOP in SEN?)
- Projekt

# Verkettete Liste

Nachteil des dynamischen Arrays:
Einfügen und Löschen wenn große Datenmengen, es wird viel umkopiert.

## Einfach verkettete Liste

Liste mit `int` Variablen.

Jeweils Funktion für 
- Einfügen am Anfang
- Alles ausgeben (mit edge case)
- `count()`
- Löschen am Anfang (mit edge case)
- Einfügen am Ende
- Löschen des letzten Knotens (mit edge case)
- Löschen des Knotens mit einem bestimmten Wert (mit edge case)

Erweiterungsaufgaben für Schnelle:

- Zwei hintereinanderliegende Knoten vertauschen
- Bubble sort implementieren
- Ersten und letzten Knoten vertauschen.


## Doppelt verkettete Liste

Motivation:

- `start` ist ungünstig weil außerhalb eines Knotens. Dadurch entstehen edge cases, wenn `start` geändert wird.
    - Lösung: Dummy Knoten am Anfang
- In allen Knoten hat `next` eine gültige Adresse als Wert, nur im letzten Knoten ist dieser `NULL`
    - Lösung: Referenz auf sich selber
- Bewegung ist nur in eine Richtung möglich.
    - Lösung: `prev` Referenz auf den Vorgänger.

Beispiel Schülerliste.
- CRUD
- Erweiterung: Mit gleichen Namen umgehen (zusätzliche ID zur Unterscheidung)
- Sortieren

Doppelt verk. Liste: Sortieren, bubble sort, insertion sort

# Files

## Textdateien

- Textdateien schreiben
- Textdateien lesen

## Binärdateien

[Infos](https://www.thegeekstuff.com/2012/07/c-file-handling/)

- Binärdateien
- BMP Datei darstellen

