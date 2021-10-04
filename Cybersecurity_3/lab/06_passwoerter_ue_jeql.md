---
title: Cracking von Passwörtern
subtitle: Lösungen
tags: [solution]
published: false
---

Hashwerte:

Mit `mkpasswd` können Zeilen für `shadow`erzeugt werden.

`john` kennt kein yescrypt.

```sh
mkpasswd --method=sha512crypt Test5
$6$KI8/NC0B5e0e/QRQ$f85wgSQK/E4XlE3M/cT1OqdQCkcChLvrv2XSvprCEiQbBRc/mJueUmTBZKvFxI1DDQl3DCDuBJ02.9ZqNN/wJ0

mkpasswd --method=sha512crypt thisisit
$6$CwtsW1oDR7UZsa8i$8cB4rAkJI.vMWVsIflGQz.HhV656qkUOIdq/BJyr5FY1oxMwLJBcwD70pNk9a/sRF0D4DiRctTvBoUn.rkjQ21

mkpasswd --method=sha512crypt SYTBSEWGGP
$6$VAlQ3ADpbU//qXIG$ZLipbq02jR0LTBQWI5z0J407U0ZiEjg9qUJSWz3K60UZxzUkRpZV5Oq93kfYyrW5QnFa7Zqh6XhnEsN1A.Xky0

mkpasswd --method=sha512crypt g1sbc
$6$c30aorWIR3zu3Q1b$zkLBnz/niLmokGH/vTyq6nJZtt.PJ9RYwSZZqlZlvy5Ont598rxFn4S2A8onz6mUHbZEzmeMRkkLPfaqb2eb6.
```

Charset für letztes Passwort:

```
asdfgzxcvb1234567890
```

