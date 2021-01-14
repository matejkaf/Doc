# Hashfunktionen

Eine Hashfunktion erhält als Eingabe eine beliebig große Menge von Bytes und ermittelt daraus einen Wert fixer Länge, z.B. 128, 256 oder 512 Bits. Diese Berechnung ist nicht umkehrbar (one way function). Außerdem ist es praktisch unmöglich andere Daten zu finden die den gleichen Hashwert ergeben.

Kryptographische Anwendung:

- Erkennen von Fälschungen (Integrität)
- Digitale Unterschrift (Authentizität)
- Speichern von Passwörtern
- Kryptowährungen (Bitcoin, SHA-256)

Erste Idee: Summe der ASCII Codes. LUKAS und KLAUS ergeben den gleichen Hash-Code.

```
L  U  K  A  S
76 85 75 65 83
Summe = 384%256 = 128

K  L  A  U  S
75 76 65 85 83
Summe = 384%256 = 128
```

Brauchen eine bessere Lösung! 



# Sichere Hash Funktionen

secure hash functions

- historisch: MD5, SHA-1
- SHA2, aktuell in Verwenung (SHA-256, SHA-512)
- SHA3 (seit 2015), noch nicht verbreitet

Experimente mit [Online Hash Rechner](https://emn178.github.io/online-tools/sha512.html), *Text eingeben, Textdatei `goethe.txt`*

- Kleine Änderung im Text = große Änderung im Hashwert

Eigenschaften von Hashwerten:

- Immer gleich lang, egal wie lang die Daten sind
- Hashwert ist ein unfällschbarer Fingerabdruck der Daten
- Eine Rekonstruktion der Daten aus dem Hashwert ist nicht möglich (außer durch durchprobieren aller Möglichkeiten – brute force attack)
- Fälschungssicherheit: es ist praktisch unmöglich bei gegebenen Daten andere Daten zu finden die den gleichen Hash haben (=Kollision). Ganz davon zu schweigen, dass diese neuen Daten für einen Empfänger dann auch noch einen Sinn haben sollen.

Anmerkung: SHA-1 gilt als nicht mehr sicher da Wege zum erzeugen einer Fälschung gefunden wurden. Allerdings sind dafür tausende Jahre an CPU Rechenzeit notwendig. [[Announcing the first SHA1 collision](https://security.googleblog.com/2017/02/announcing-first-sha1-collision.html)]

