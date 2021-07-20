---
title: Übungen
subtitle: if Challenges
tags: [assignment,challenge]
---



#### Übung (Dreieck)

Schreibe ein Programm, das die 3 ganzzahligen Seitenlängen eines Dreiecks einliest und bestimmt:

- ob es gleichseitig ist,
- ob es gleichschenkelig ist,
- ob es rechtwinkelig ist (Hinweis: Nur im rechtwinkeligen Dreieck gilt der Satz von Pythagoras).
Beispiel: a=3, b=4, c=5 ist rechtwinkelig weil gilt 3²+4²=5².

---


#### Übung (Gültiges Dreieck)

Drei Seitenlängen beschreiben nicht immer ein Dreieck.
Z.B.: a=3, b=2, c=7.

Schreibe ein Programm das prüft ob aus 3 eingegebenen Seitenlängen ein Dreieck konstruiert werden kann.
Hinweis:
Jede Seite muss kleiner sein als die Summe der beiden anderen.

Zum Test des Programms: 

- Ein ungültiges Dreieck kann leicht angegeben werden: 5-5-20 kann kein Dreieck sein, die beiden kurzen Seiten sind in Summe kürzer als die längste Seite, daher können sich diese nicht schneiden.
- Ein gleichseitiges Dreick ist etwa 5-5-5
- während 5-7-7 ein gleichschenkeliges Dreieck ist.
- 3-4-5 ist ein rechtwinkeliges Dreieck.

In Dreiecken deren Kanten nicht unbedingt alle ganzzahlige Länge haben kann es sein, dass ein Dreieck gleichzeitig gleichschenkelig und rechtwinkelig ist. Kann das auch sein wenn alle Seitenlänge ganzzahlig sind?

Sind die Seitenlängen eines Dreiecks ganzzahlig und bilden ein rechtwinkeliges Dreieck so nennt man die Längen 
[Pythagoräischen Zahlen](http://de.wikipedia.org/wiki/Pythagoreisches_Tripel). $3-4-5$ sind bekannte Pythagoräischen Zahlen. Es kann [gezeigt werden](http://www.hbmeyer.de/pythag.htm), dass beide Katheten nie gleich lang sein können (fällt in das mathematische Gebiet "Zahlentheorie").
Daher ist es nicht möglich, dass es ein rechtwinkeliges Dreieck mit ganzzahligen Seitenlängen gibt, dass auch gleichseitig ist. Wir können daher auch keinen Testfall konstruieren.

---

#### Übung (Schaltjahr)
Schreibe ein Programm das von einer eingegebenen Jahreszahl (`int`) ermittelt ob dies ein Schaltjahr ist.

- Ein Jahr ist (meistens) ein Schaltjahr, wenn die Jahreszahl durch 4 teilbar ist (z.B. 2012). 
- Ausnahme 1: Durch 100 teilbare Jahreszahlen sind **keine** Schaltjahre (z.B. 1900). 
- Ausnahme 2: Durch 400 teilbare Jahreszahlen sind **immer** Schaltjahre (z.B. 2000).

---
