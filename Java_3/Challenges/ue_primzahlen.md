---
title: Übungen zu Primzahlen
description: Weiterführende Übungen zum Thema Primzahlen, Primzahlenzwillinge, Goldbachscher Vermutung.
tags: [primes, challenge]
---



**Übung (Primzahlen):**
Einige Übungsaufgaben zu Primzahlen.

- Implementiere eine Funktion/Methode `isPrim()` die von einer Zahl ermittelt ob sie eine Primzahl ist.
- Ermittle die Anzahl der Primzahlen bis 100000 (keine Ausgabe der einzelnen Primzahlen!). Es sollten 9592 Primzahlen sein.
- Ermittle wie lange Dein Programm zur Ermittlung der Primzahlen zwischen 1–100000 benötigt. Verwende zur Laufzeitmessung `System.currentTimeMillis()`  (Java)
- Das finden von Primzahlen kostet viel Rechenzeit. Wie kann der Algorithmus verbessert werden, so dass weniger Schleifendurchläufe benötigt werden?
- Der schweizer Mathematiker Leonard Euler behauptete im 18 Jhdt., dass die Formel $n^2 - n + 41$ für viele $n$ (aber nicht alle) Primzahlen ergibt.
Schreibe ein Programm das herausfindet für wie viele Zahlen das tatsächlich stimmt. Siehe [wikipedia](http://de.wikipedia.org/wiki/Ulam-Spirale).

---

**Übung (Primzahlenzwillinge):**
Ein Primzahlenzwilling besteht aus 2 Primzahlen, deren Abstand genau 2 beträgt, z.B.: (3–5), (5–7), (11–13), (17–19), (29–31), usw.

- Ermittle die Anzahl aller Primzahlzwillingen in 1--100000.
- Die Zahl zwischen den Primzahlzwillingen ist immer durch 6 teilbar.
Prüfe diese Behauptung mit einem Programm und überlege (mathematisch) warum dies so ist. Hinweis: Von 3 unmittelbar hintereinander folgenden Zahlen muss eine durch 3 teilbar sein.

---

**Übung (Primfaktorenzerlegung):**
Zerlege eine Zahl in ihre Primfaktoren. Z.B.: $20=5\cdot 2\cdot 2$

---

**Übung (Goldbachsche Vermutung):**
Die Goldbachsche Vermutung besagt: Jede gerade Zahl größer 2 lässt sich als Summe zweier Primzahlen schreiben. 

- 
Schreibe ein Programm das für eine gerade Zahl diese 2 Primzahlen findet und ausgibt.
- 
Weise nach, dass die Vermutung für die Zahlen von 4 bis 1000 gilt.

Randbemerkung:
Die Goldbachsche Vermutung ist ca. 250 Jahren alt und mathematisch noch immer unbewiesen! D.h. man weiß nicht ob dies tatsächlich für alle Zahlen (auch sehr sehr große) gilt. Es konnte aber auch kein Gegenbeispiel gefunden werden!
Mit Computerprogrammen und Hochleistungsrechnern wurden bisher die Zahlen bis $4\cdot 10^{18}$ geprüft (Stand 2013).

---
