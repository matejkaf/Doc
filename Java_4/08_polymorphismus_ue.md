---
title: Vererbung
subtitle: Übung Polymorphismus
tags: [assignment]
---

#### Übung (Tiere)

Ein Tier kann gewisse Laute von sich geben, z.B. ein Hund: "Wuff", eine Katze "Miau" usw.

Von einem Tier wissen wir dass es Laute von sich geben kann, aber noch nicht genau welche. Stelle diesen Sachverhalt in einer **abstrakten** Klasse `Tier` mit der Methode `String sagWas()` dar. 

Lege weiters die Klassen `Katze` und `Hund`, sowie Objekte davon an, und rufe die überladene Methode `sagWas` auf.

Füge nun zwei weitere Tiere hinzu.

Lege ein Array des Typs `Tier` aus unterschiedlichen Tieren an. Gib in **einer** Schleife alle Laute dieser Tiere aus.

Erweiterung: Erweitere die Ausgabe von `sagWas` folgendermaßen:

```
Kuh Henriette sagt "Muh"
^   ^
|   + ---- Name des Tiers
+ -------- Bezeichnung des Tiers
```



---

#### Übung (Getränke)

Schreibe ein Programm das unterschiedliche Getränke in einer `ArrayList` verwaltet.

- Erstelle eine Basisklasse `Getraenk` mit den abstrakten Methoden
  - `String name()`
  - `String wirkung()`    
- Implementiere weiters: `String toString`, soll erzeugen `"Das Getränk <name> wirkt: <wirkung>"`.  Für `<name>` und `<wirkung>` sind die Methoden `name()` und `wirkung()` aufzurufen.
- Leite nun von `Getraenk` einige weitere Klassen ab (z.B. `Kaffee`, `Kakao`, `Tee`, usw.) und überschreibe jeweils die Methoden `name()` und `wirkung()`. Instanziere Objekte und rufe die `toString()` Methode zum Test auf.
- Lege ein `ArrayList<Getraenk>` an und füge einige Getränke hinzu. Gib die Wirkung aller Getränke im Array aus (in einer Schleife).



---

#### Übung (Grafikobjekte)

Verwende **Processing** für diese Übung

Es sollen unterschiedliche Grafik-Objekte (Kreise, Rechtecke) am Bildschirm animiert werden.

Jedes Objekt hat eine eigenständige Position und Geschwindigkeit.
Stelle diesen Sachverhalt durch eine abstrakte Klasse dar.

Mehrere Kreise und Rechtecke sollen sich am Bildschirm bewegen.

Ergänze ein Grafik Objekt das aus einem Quadrat und einem Kreis besteht. Das Quadrat soll dem Kreis eingeschrieben sein.

Ergänze (zusätzlich) Kreise die während der Bewegung die Farbe ändern.

Durch klicken mit der Maus auf ein Objekt, ändert dieses (zufällig) die Bewegungsrichtung und Geschwindigkeit.

Erweiterungen:

- Reflektieren am Bildschirmrand
- Weitere Grafik-Objekte
- Besondere Grafik-Objekte die bei Kollision mit einem anderen Objekt, dieses und sich selbst zerstören.
- Objekte ändern bei Kollision die Farbe
- Objekte können abgeschossen werden
- Rotierende Quadrate

