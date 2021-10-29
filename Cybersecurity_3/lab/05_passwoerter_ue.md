---
title: Cracking von Passwörtern
subtitle: Cybersecurity Übung
tags: [3AHITS]
---



#### Übung (adduser)

Füge unter Metasploitable einen neuen User hinzu. Was ändert sich in der `passwd` und `shadow` Datei? 



---

#### Übung (passwd)

Ändere das Passwort des Users. Was ändert sich in `passwd` und `shadow`?



---

#### Übung (mkpasswd)

Füge unter metasploitable einen neuen User hinzu ohne `adduser` zu verwenden. Hinweis: nutze `mkpasswd` , `vi`, etc. Hinweis: `mkpasswd` ist unter Metasploitable nicht installiert, daher muss dieses Kommando auf Kali Linux ausgeführt werden.



---

#### Übung (john – weak password)

Lege (mit `adduser`) in metasploitable einen User mit einem sehr schwachen Passwort (3 Zeichen Kleinbuchstaben) an. Transferiere die Passwortdateien zu Kali und verwende **john the ripper** um das passwort zu knacken.



---

#### Übung (john)

Knacke die folgenden Passwörter mit `john`

(1) Variation des User Namens (`test`):

```
$6$KI8/NC0B5e0e/QRQ$f85wgSQK/E4XlE3M/cT1OqdQCkcChLvrv2XSvprCEiQbBRc/mJueUmTBZKvFxI1DDQl3DCDuBJ02.9ZqNN/wJ0
```

(2) Aus Standard Wordlist von john:

```
$6$CwtsW1oDR7UZsa8i$8cB4rAkJI.vMWVsIflGQz.HhV656qkUOIdq/BJyr5FY1oxMwLJBcwD70pNk9a/sRF0D4DiRctTvBoUn.rkjQ21
```



---

#### Übung (John + crunch)

Verwende `crunch` und `john` um folgende Passwörter zu knacken:

(1) Kombination aus 3 Fächernamen der 3AHITS (Großbuchstaben). Hinweis: Verwende die `-p` Option von crunch.

```
$6$VAlQ3ADpbU//qXIG$ZLipbq02jR0LTBQWI5z0J407U0ZiEjg9qUJSWz3K60UZxzUkRpZV5Oq93kfYyrW5QnFa7Zqh6XhnEsN1A.Xky0
```

(2) Ergebnisse von "shoulder surfing": 5 stelliges Passwort, 4 Kleinbuchstaben die sich mit der linken Hand mit geringer Bewegung tippen lassen (auf der Tastatur: asdf + Zeile darunter + 1 Taste jeweils nach rechts) außerdem ist eine Ziffer dabei.

```
$6$c30aorWIR3zu3Q1b$zkLBnz/niLmokGH/vTyq6nJZtt.PJ9RYwSZZqlZlvy5Ont598rxFn4S2A8onz6mUHbZEzmeMRkkLPfaqb2eb6.
```



---

#### Übung (Word Passwort Cracken)

Versuche mit der Anleitung: [HOW TO – Crack Password-Protected Microsoft Office Files, Including Word Docs & Excel Spreadsheets](https://null-byte.wonderhowto.com/how-to/crack-password-protected-microsoft-office-files-including-word-docs-excel-spreadsheets-0193959/) ein passwortgeschütztes Word Dokument zu öffnen.

---

