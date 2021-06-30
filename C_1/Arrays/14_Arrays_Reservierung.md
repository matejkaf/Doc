---
title: Arrays
subtitle: Übungen – Reservierungssystem
tags: [assignment]
---

#### Übung (Reservierungssystem für Flugzeugsitzplätze)

Eine kleine Fluglinie hat ein Flugzeug. Die Fluglinie benötigt für die Sitzplätze des Flugzeugs ein Reservierungssystem. Das Flugzeug hat 10 Sitzplätze.

Das Programm zeigt folgendes Menü an:

```
   Business Class ..... 1
   Economy Class ...... 2
   Programm beenden ... 0
   Bitte wählen Sie aus: 1
```

Wenn der Benutzer 1 eingibt, reserviert das Programm einen Sitzplatz in der Business Class (Sitzplatz 1 - 5).
 Durch die Eingabe von 2 wird ein Sitzplatz in der Economy Class (Sitzplatz 6 - 10) reserviert.

Das Programm gibt eine Bordkarte aus. Die Bordkarte enthält den Sitzplatz und die Buchungsklasse (Business oder Economy):

```
   Es wurde Sitzplatz 1 in der Business Class reserviert.
```

1. Benutze für die Sitzplätze des Flugzeugs ein Array `sitze`. Initialisiere jedes Element des Arrays mit 0. Das bedeutet, dass kein Sitzplatz reserviert ist.
2. Definiere eine Funktion `menu` ohne Parameter. Die Funktion zeigt das Menü an und der Benutzer gibt die Menüauswahl ein. Die Funktion gibt die Menüauswahl (`int`) zurück.
3. Definiere eine Funktion reserviere mit den Parametern `sitze` und `buchungsklasse` (1/2). Wenn ein Sitzplatz reserviert wird, wird das entsprechende Element im Array auf 1 gesetzt. 1 bedeutet, dass der Sitzplatz nicht mehr frei ist. Du kannst vorerst annehmen, dass in der Buchungsklasse noch mindestens 1 Sitzplatz frei ist.
   Die Funktion gibt den reservierten Sitzplatz zurück.
4. Definiere eine Funktion `gibBordkarteAus` mit den Parametern `sitzplatz` und `buchungsklasse`. Die Funktion gibt den reservierten Sitzplatz und die Buchungsklasse aus – Text siehe oben.
5. Verbessere die Funktion `reserviere`. Wenn die Business Class voll ist, fragt das Programm, ob ein Sitzplatz in der Economy Class reserviert werden soll (und umgekehrt):
    `Die Business Class ist leider voll.`
    `Möchten Sie in der Economy Class einen Sitzplatz reservieren (j/n)? `
   Wenn der Benutzer j eingibt, wird der entsprechende Sitzplatz reserviert. Andernfalls wird die Meldung `Das nächste Flugzeug startet in 3 Stunden.` angezeigt.

