---
title: Cracking von Passwörtern
subtitle: Cybersecurity Übung
tags: [3AHITS]
---

[Siehe Skriptum "Technische Details zu Linux Passwörtern"](../lecture/07_passwoerter_linux)

---

#### Übung (passwd und shadow)

Experimentiere unter Metasploitable mit den Passwortdateien:

- Was ändert sich in der `/etc/passwd` und `/etc/shadow` Datei wenn ein neuer User ([→doku adduser](../lecture/07_passwoerter_linux#adduser)) hinzugefügt wird?
- Welchen Hash-Algorithmus verwendet Metasploitable?
- Ändere das Passwort des Users ([→doku passwd](../lecture/07_passwoerter_linux#passwd)) . Was ändert sich in `passwd` und `shadow`?

---

#### Übung (mkpasswd)

Füge unter metasploitable einen neuen User hinzu **ohne** `adduser` zu verwenden. Verändere dazu direkt die `passwd` und `shadow` Dateien.

- Informiere dich über das Format von `passwd` und `shadow`
- Der Passwort Hash kann mit `mkpasswd` ([→doku mkpasswd](../lecture/07_passwoerter_linux#mkpasswd)) generiert werden.
- Hinweis: `mkpasswd` ist unter Metasploitable nicht installiert, daher muss dieses Kommando auf Kali Linux ausgeführt werden. Möglichkeiten dafür
  - Unter Kali Daten mit `>` in Dateien schreiben und diese auf Metasploit übertragen (z.B. per Web-Server und `wget` oder `scp` siehe unten).
  - Oder per ssh von Kali aus auf Metasploitable einloggen und die Copy/Paste Funktionalität des Kali Terminals nutzen.
- Hinweis: Mit `>>` kann das stdout eines Programms an bestehende Dateien angefügt werden.

Tipp: die Dateiübertragung kann auch per ssh mit dem Tool `scp` (secure copy) durchgeführt werden, was komfortabler ist als der Umweg über den Webserver. [[→scp Tutorial](https://linuxize.com/post/how-to-use-scp-command-to-securely-transfer-files/)].

Allgemeine Befehls-Syntax:

```
scp [OPTION] [user@]SRC_HOST:]file1 [user@]DEST_HOST:]file2
```

Beispiel:

```sh
$ scp msfadmin@192.168.126.130:syslog.txt .
```

Kopiert die Datei  `syslog.txt` vom Homeverzeichnis des Users `msfadmin` auf dem Host mit der IP Adresse `192.168.126.130`, ins Zieldirectory `.` (dem aktuellen Arbeitsverzeichnis).

---

#### Übung (unshadow)

In dieser Übung geht es darum das Kali Tool `unshadow` zu verwenden und zu verstehen was dieses macht.

- Lege (mit `adduser`) in Metasploitable einen User mit einem sehr schwachen Passwort (3 Zeichen nur Kleinbuchstaben) an. 
- Transferiere die Passwortdateien `passwd` und `shadow`  zu Kali.
- Verwende `unshadow` ([→doku](../lecture/07_passwoerter_linux#unshadow)) um den Inhalt von `passwd` und `shadow` zu kombinieren. 
- Welchen Regeln/Format folgt das Ergebnis von `unshadow`?

---

#### Übung (john – weak password)

Verwende nun  **john the ripper** ([→doku](../lecture/07_passwoerter_linux#johntheripper)) – ohne einen crack mode anzugeben – um das Passwort aus der vorhergehenden Übung zu knacken.

Hinweis: Nach der Kombination von `passwd` und `shadow` durch `unshadow` lösche am besten alle uninteressanten Passwort-Zeilen aus der entstandenen Datei. Hinweis: Das `vi` Kommando `dd` löscht die Zeile unter der aktuellen Cursorposition.

---

#### Übung (john – single crack mode)

Knacke das folgende Passwort mit `john` – es ist durch Variation des User Namens `test` entstanden – verwende den single crack mode:

```
$6$KI8/NC0B5e0e/QRQ$f85wgSQK/E4XlE3M/cT1OqdQCkcChLvrv2XSvprCEiQbBRc/mJueUmTBZKvFxI1DDQl3DCDuBJ02.9ZqNN/wJ0
```

Anleitung: Erstelle selbst eine Passwort Datei die `john` versteht. Schaue dir dafür den Output von `unshadow` an – es wird im Prinzip das Format vom `passwd` File genommen und das `x` darin durch das passende gehashte Passwort aus `shadow` ersetzt. 

Nutze `vi` um eine Kopie der john-Inputdatei aus der vorhergehenden Übung anzupassen. Eventuell hilfreiche `vi` Kommandos sind:

- `dtX`: lösche alles bis zum Zeichen `'X'`
- `:r filename`: Lädt den Inhalt der Datei `filename` in die Zeile unterhalb der aktuellen Cursor Position.

---

#### Übung (john – wordlist mode)

Knacke das folgende Passwort mit `john` – es ist ein Passwort aus der Standard Wordlist von john – verwende den single crack mode:

```
$6$CwtsW1oDR7UZsa8i$8cB4rAkJI.vMWVsIflGQz.HhV656qkUOIdq/BJyr5FY1oxMwLJBcwD70pNk9a/sRF0D4DiRctTvBoUn.rkjQ21
```

---

#### Übung (John + crunch)

Verwende `crunch` ([→doku](../lecture/07_passwoerter_linux#crunch)) und `john` um folgende Passwörter zu knacken:

(1) Kombination aus 3 Fächernamen der 3AHITS (Großbuchstaben). Hinweis: Verwende die `-p` Option von crunch.

```
$6$VAlQ3ADpbU//qXIG$ZLipbq02jR0LTBQWI5z0J407U0ZiEjg9qUJSWz3K60UZxzUkRpZV5Oq93kfYyrW5QnFa7Zqh6XhnEsN1A.Xky0
```

(2) Ergebnisse von "shoulder surfing" ergibt: 5 stelliges Passwort, 4 Kleinbuchstaben die sich mit der linken Hand mit geringer Bewegung tippen lassen (auf der Tastatur: asdf + Zeile darunter + 1 Taste jeweils nach rechts) außerdem ist eine Ziffer dabei.

```
$6$c30aorWIR3zu3Q1b$zkLBnz/niLmokGH/vTyq6nJZtt.PJ9RYwSZZqlZlvy5Ont598rxFn4S2A8onz6mUHbZEzmeMRkkLPfaqb2eb6.
```

---

#### Übung (Microsoft Word)

Knacke das Passwort eines Word Dokuments ([→download link](data/doctocrack.docx)).

Anleitung:

(1) Download eines Python Scripts

```sh
$ wget https://raw.githubusercontent.com/openwall/john/bleeding-jumbo/run/office2john.py
```

(2) Extrahieren der Hashwerte für John mit diesem Python Skript:

```sh
$ python office2john.py doctocrack.docx >doctocrack.hash
$ cat doctocrack.hash
```

(3) Und john ausführen:

```sh
$ john doctocrack.hash
...
```

(4) Anzeige des geknackten Passworts:

```sh
$ john --show doctocrack.hash
```

Was ist der Inhalt des Word Dokuments?

Quelle: [HOW TO – Crack Password-Protected Microsoft Office Files, Including Word Docs & Excel Spreadsheets](https://null-byte.wonderhowto.com/how-to/crack-password-protected-microsoft-office-files-including-word-docs-excel-spreadsheets-0193959/).

---

#### Übung (zip File)

Lade das passwortgeschützte ZIP File ([→download link](data/secret.zip))

Hinweise:

- Ähnliche Vorgangsweise wie bei der Word Datei
- Verwende `zip2john`
- Verwende den incremental Mode von john

Was befindet sich im Inneren des ZIP Files?

---
