---
title: Observer – Design Pattern
cmds: ['md_html.bash','md_html.bash --small']
tags: [5AHELS, lecture, patterns ]
---



# Observer

Aufgabe: Wenn sich der interne Zustand eines Objekts **ändert** so sollen andere Objekte davon **benachrichtigt** werden. **C# Events** sind eine spezielle Umsetzung des Observer Patterns.

Das Observer Pattern wird manchmal auch **Publisher-Subscriber** genannt.

Objekte können sich beliebig zur Laufzeit an- und abmelden um Benachrichtigungen zu erhalten.

<img src="fig/observer02.png" alt="Observer UML Diagramm I" style="zoom: 67%;" />

`Observer` ist eine abstrakte Klasse oder ein Interface. Enthält eine Methode `update` die bei Änderungen vom Subject aufgerufen wird.

![Observer UML Diagramm II](fig/observer01.jpg)

