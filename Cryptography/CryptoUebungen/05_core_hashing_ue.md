---
title: Hashing in .NET Core
type: assignment
cmds: ['md_html.bash','md_html.bash --small']
---

---

**Übung (Hashing in .NET Core)**

[Video: Cryptography 101 with .NET Core](https://www.youtube.com/watch?v=rLEJLuA3hd0) – **5:18-9:30 Hashing**

Hash-function: Berechnet einen konstant langen Wert (z.B. 512 Bits) aus beliebig langen Daten. One-way function – leicht zu berechnen aber – so gut wie – unmöglich rückwärts zu rechnen.

- Daten-Fingerabdruck ("message digest")
- Nicht für Geheimhaltung
- Zum Erkennen von Änderungen/Manipulationen

Schreibe mit Hilfe der `System.Security.Cryptography` Library ein Programm das den SHA512 Hash des Texts `"die 5AHELS hat heuer Matura"` im Hex (Base16) Format ermittelt. Ändere nur ein Bit im Text und beobachte welche Auswirkung dies auf den Hashwert hat.



---

**Übung (Textdatei Hashen)**

Es soll ein Kommandozeilen Programm geschrieben werden mit dem durch einen Hashwert eine Textdatei gegen Manipulation geschützt werden kann. Der berechnete Hashwert wird in einer eigenen Datei im Base64 Format gespeichert.

Parameter für die Kommandozeile:

   - Name der Input Textdatei
   - Name der Datei die den Hash (im Base64 Format) enthält
   - Optionen
        * `-c`: create hash - berechnet den Hashcode aus dem Inhalt der Textdatei und
          speichert das Ergebnis in der Hashcode Datei im Base64 Format
        * `-t`: test hash - prüft ob der Hashcode stimmt

---

