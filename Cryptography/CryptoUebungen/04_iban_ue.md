---
title: Kryptographie Hashing (Übungen)
description: Übungen zu Hashing
tags: [5AHELS,assignment, krypto ]
---

---

**Übung (IBAN Prüfziffer)**

Die IBAN (International Bank Account Number) enthält Prüfziffern an der 3ten und 4ten Stelle, dies ist eine Art Hashcode. 

Beispiele für gültige IBAN: `AT76 1860 0000 1352 3592`, `DE88 2008 0000 0970 3757 00`

Schreibe ein Programm das diese **Prüfziffern ermittelt**.

**Experimentiere** weiters wie gut die Kontonummer gegen Manipulation geschützt ist. Ändere dazu die Kontonummer an einer beliebigen Position (die dort befindliche Zahl gegen eine zufällige Zahl austauschen). Wiederhole diese "Manipulation" so lange bis sich eine IBAN mit der gleichen Prüfziffer wie bei der Original Kontonummer ergibt – wie viele Änderungen waren notwendig. Probiere dies mehrmals, was ergibt sich für ein Mittelwert?

**Berechnung** laut ISO 7064 (Verfahren: Mod 97,10):

```
Kontonummer: 2008 0000 0970 3757 00
Start mit 00: DE00 2008 0000 0970 3757 00

Umstellung 200800000970375700DE00

Substitution der Großbuchstaben durch Zahlen: A=10, B=11, C=12, ...
200800000970375700131400
200800000970375700131400 Modulo 97 = 10

Subtraktion von 98: 98 - 10 = 88 (=Prüfziffer)

IBAN: DE88 2008 0000 0970 3757 00
```

Prüfen: Selber Vorgang, Rest muss 1 ergeben. Erkannt wird eine falsch getippte Ziffer oder das Vertauschen zweier benachbarter Ziffern.

Hinweis: [BigInteger](https://docs.microsoft.com/en-us/dotnet/api/system.numerics.biginteger?view=netcore-3.1) für die Berechnungen verwenden da eine Kontonummer auch den 64 Bit Wertebereich (`decimal`) überschreitet (ca. 20 dezimale Stellen).

---

