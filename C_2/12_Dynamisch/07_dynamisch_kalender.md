---
title: Dynamische Speicherverwaltung
subtitle: Übunge Kalender
tags: [assignment,2AHITS]
---



---

#### Übung (Kalender als dynamisches Array)

Es ist ein Programm zur Verwaltung beliebig vieler Kalendereinträgen zu erstellen.

- Ein Kalendereintrag besteht aus dem Datum und einem Text der das Ereignis beschreibt (z.B.: Klassenparty, HTL Ball).
- Es kann eine beliebige Anzahl von Kalendereinträgen eingegeben werden.  Bei der Eingabe eines leeren Beschreibungstexts wird das Programm beendet und alle Kalendereinträge dabei nochmals ausgegeben.
- Mit jedem neuen Kalendereintrag wird ein neues Array allokiert und die bestehenden Daten umkopiert.





#### Übung (Schularbeitenkalender)

Erstelle einen Schularbeiten und Testkalender. Datum und Fach soll gespeichert werden. Implementiere folgende Aufgabenstellungen mit Hilfe eines dynamischen Arrays.

Implementiere jede einzelne Aufgabenstellungen als Funktion. Teste diese durch fix programmierte Aufrufe und Daten im Haupt-Programm so dass keine Benutzereingaben erforderlich ist.


Aufgabenstellungen:
- Einfügen eines neuen Eintrags
- Ausgeben des gesamten Kalenders
- Löschen eines bestimmten Eintrags (Eingabe von Fach und Datum)
- Ausgeben aller Einträge eines bestimmten Fachs
- Ausgeben aller Einträge die nach einem eingegeben Datum liegen
- Alle Einträge an einem Datum löschen
- Alle Einträge vor einem Datum löschen
- Sortieren nach Datum



---

#### Übung (Mehrere Kalender)

Erweitere so, dass mehrere Kalender verwaltet werden können.  Z.B. einen für Tests, einen für Schularbeiten, einen für private Termine, etc.

Hinweis zur Lösung: Definiere eine `Kalender` Struktur.