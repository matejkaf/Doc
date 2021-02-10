---
title: Übung Klasse für Getränkeautomat
cmds: ['md_html.bash','md_html.bash --small']
tags: [assignment,oop]
---



**Übung (Getränkeautomat):**

Es soll ein Getränkeautomat für Kaffee und Tee als Klasse (`Automat`) implementiert werden.

Der Getränkeautomat hat: 

- zwei Wahltasten für die Getränkeart
- einen Geldeinwurfschlitz,
- eine Abbruchtaste,
- eine Anzeige,
- ein Getränkeausgabefach, und
- ein Geldausgabefach (für Wechselgeld).

Implementiere die Benutzerschnittstelle im Hauptprogramm (`main`). Für jeden Tastendruck und den Geldeinwurf implementiere weiters eine Methode in der Klasse `Automat`. Die Anzeigen des Automaten sollen in der Ausgabe durch \verb+Anzeige:...+ gekennzeichnet werden. Kaffee kostet 70 Cent und Tee 50 Cent. Einschränkung: Greife nicht von außerhalb der Klasse auf die Instanzvariablen zu (nur über Methoden).

Beispiel-Programmablauf :

```
–----------------------
  k ... Kaffee
  t ... Tee
  g ... Geld einwerfen
  a ... Abbruch
–----------------------
Anzeige: Guten Tag!
Wahl: g
Geldeinwurf (Cent): 100
Anzeige: Guthaben 100 Cent
Wahl: k
Anzeige: Kaffee wird zubereitet...
Ausgabefach: Ein Becher Kaffee
Geldausgabefach: 30 Cent
Anzeige: Guten Tag!
Wahl: _
```




Im Hauptprogramm wird nur die Tastenbelegung und der Text `Wahl:` ausgegeben, die sonstigen Ausgaben finden in der Klasse `Automat` statt.

Weitere Anforderungen:

- Wird eine Wahltaste gedrückt und es wurde bisher nicht ausreichend Geld eingeworfen, so wird in der Anzeige der Getränkepreis angezeigt.
- Erweiterung: es gibt eine weitere Taste ("mit Zucker") die jederzeit gedrückt werden kann.
- Erweiterung: der Automat unterscheidet einzelne Münzen (1 Euro, 50, 20 und 10 Cent), hat einen Münzvorrat und wechselt bzw. teilt mit wenn er nicht wechseln kann.


---






