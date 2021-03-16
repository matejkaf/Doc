---
title: Hashfunktionen
subtitle: Kryptographie
tags: [lecture,2AHITS_Teach]
---

- Daten (beliebig groß) ⇨ Hashfunktion ⇨ Wert fixer Länge, z.B. 128, 256 oder 512 Bits. 

- nicht umkehrbar (one way function)
- praktisch unmöglich (durchprobieren) andere Daten zu finden die den gleichen Hashwert ergeben

## Kryptographische Anwendung

- Erkennen von Fälschungen (Integrität)
- Digitale Unterschrift (Authentizität)
- Speichern von Passwörtern
- Kryptowährungen (Bitcoin, SHA-256)

## Umsetzung

Erste Idee: 8-Bit Summe der ASCII Codes. 

```
L  U  K  A  S
76 85 75 65 83
Summe = 384%256 = 128
```

Ist nicht umkehrbar (viele Texte können 128 ergeben)

Aber: `KLAUS` ergibt den gleichen Hash-Code (=Hash-Kollision).

```
K  L  A  U  S
75 76 65 85 83
Summe = 384%256 = 128
```

Es sollte nicht so einfach sein Daten zu finden die den gleichen Hashwert ergeben. Brauchen eine bessere Lösung!  ⇨

## Sichere Hash Funktionen

*secure hash functions*, Komplexe Berechnung! Sind ziemlich gut!

- historisch: MD5, SHA-1
- **SHA2**, aktuell in Verwenung (SHA-256, SHA-512)
- SHA3 (seit 2015), noch nicht verbreitet

---

**Übung (goethe im Online Hash Rechner):** Experimente mit [Online Hash Rechner](https://emn178.github.io/online-tools/sha512.html), *Text eingeben, Textdatei `goethe.txt`* [Link auf md File](https://matejkaf.github.io/Doc/Cybersecurity/11_hashing_und_encoding/goethe). Was passiert bei kleinen Änderungen im Text.

---



Hashwert ist wie ein Fingerabdruck der Daten:

- Immer gleich lang, egal wie lang die Daten sind
- Eine Rekonstruktion der Daten aus dem Hashwert ist nicht möglich (außer durch durchprobieren aller Möglichkeiten – brute force attack)
- Fälschungssicherheit: es ist praktisch unmöglich bei gegebenen Daten andere Daten zu finden die den gleichen Hash haben (=Kollision). Ganz davon zu schweigen, dass diese neuen Daten für einen Empfänger dann auch noch einen Sinn haben sollen.

Anmerkung: SHA-1 gilt als nicht mehr sicher da Wege zum erzeugen einer Fälschung gefunden wurden. 2013 theoretisch–Mark Stevens.  [2017 praktisch – Announcing the first SHA1 collision](https://security.googleblog.com/2017/02/announcing-first-sha1-collision.html), allerdings sind dafür tausende Jahre an CPU Rechenzeit notwendig.



---

**Übung (SHA256 mit Online shell):**

Verwende ein [Online Linux](https://bellard.org/jslinux/) um mittels des CLI Tools `openssl` den SHA256 Hashwert der Datei hinter dem Link `https://matejkaf.github.io/Doc/Cybersecurity/11_hashing_und_encoding/goethe` zu ermitteln. Der Download der Datei geht mit dem Tool `wget`.

> Hinweis zum Terminal (aus [FAQ](https://bellard.org/jslinux/faq.html)): To copy data, just select it with the mouse and use the "Copy" contextual menu (right click). To paste data, right click on the terminal cursor to show the contextual menu and select "Paste". Alternatively, you can use the "Paste" command in the navigator global menu.

```bash
$ wget https://matejkaf.github.io/Doc/Cybersecurity/11_hashing_und_encoding/goethe
# Anmerkung: wird durch gitpages in ein HTML Dokument gewandelt
$ openssl dgst -sha256 goethe

$ openssl dgst -sha256 -binary goethe
$ openssl dgst -sha256 -binary goethe | xxd
```

---

