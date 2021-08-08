---
title: Cracking von Passwörtern
---

Knacke die folgenden Passwörter

(1) Variation des User Namens:

```
user: test
$6$KI8/NC0B5e0e/QRQ$f85wgSQK/E4XlE3M/cT1OqdQCkcChLvrv2XSvprCEiQbBRc/mJueUmTBZKvFxI1DDQl3DCDuBJ02.9ZqNN/wJ0
```

Mit john mangling rules

(2) Aus Standard Wordlist von john:

```
$6$CwtsW1oDR7UZsa8i$8cB4rAkJI.vMWVsIflGQz.HhV656qkUOIdq/BJyr5FY1oxMwLJBcwD70pNk9a/sRF0D4DiRctTvBoUn.rkjQ21
```

(3) Kombination aus 3 Fächernamen der 3AHITS (Großbuchstaben)

```
$6$VAlQ3ADpbU//qXIG$ZLipbq02jR0LTBQWI5z0J407U0ZiEjg9qUJSWz3K60UZxzUkRpZV5Oq93kfYyrW5QnFa7Zqh6XhnEsN1A.Xky0
```

Mit crunch

(4) Ergebnisse von "shoulder surfing": 5 stelliges Passwort, 4 Kleinbuchstaben die sich mit der linken Hand mit geringer Bewegung tippen lassen (auf der Tastatur: asdf + Zeile darunter + 1 Taste jeweils nach rechts) und eine Ziffer ist dabei.

```
$6$c30aorWIR3zu3Q1b$zkLBnz/niLmokGH/vTyq6nJZtt.PJ9RYwSZZqlZlvy5Ont598rxFn4S2A8onz6mUHbZEzmeMRkkLPfaqb2eb6.
```

Auch mit crunch

