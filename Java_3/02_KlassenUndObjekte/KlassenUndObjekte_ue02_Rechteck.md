---
title: Übung Klasse Rechteck
description: Einfache erste Übungen zu OOP
tag: [java, oop]
tags: [assignment,3BHELS]
---



**Übung (Rechteck)**

- Eine Klasse Rechteck mit Seiten `a` und `b` und einem Konstruktor mit dem alle Instanzvariablen gesetzt werden können. Die Seitenlängen können Kommazahlen sein.
- Ausgabe von `a` und `b` (dafür `toString` implementieren)
- Implementiere eine Methode `resize`, die kleinere Seite wird von der größeren abgezogen.
- Erstelle eine Methode `inflate` – Parameter ist ein Prozentwert um dem beide Seiten vergrößert werden sollen.
- Eine Methode `aspectRatio`  die das Seitenverhältnis ermittelt und zurückgibt (`return` Wert)
- Eine Methode `setMaxSide` die als Parameter eine neue Seitenlänge übergeben wird. Die längste der bestehenden Seitenlängen soll auf diesen Wert gesetzt werden. Die andere Seitenlänge soll so gesetzt werden, dass das ursprüngliche Seitenverhältnis beibehalten wird. 
  Diese Anwendung tritt beispielsweise beim skalieren von Bildern auf, in der Regel möchte man dabei, dass das Seitenverhältnis beibehalten wird und keine Verzerrung auftritt.
- Eine Methode `area` soll die Fläche berechnen und zurückgeben.
- Die Methode `int tile(Rechteck r)` soll die Frage beantworten wie oft das übergebene Rechteck (flächenmäßig) in das aktuelle Rechteck hineinpasst.

