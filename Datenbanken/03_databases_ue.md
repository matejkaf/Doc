---
title: Assignments
subtitle: Databases
tags: [Database,assignment]
---




#### Übung (Ernährungstabelle)
Erstelle eine Datenbank-Tabelle für Nahrungsmittelinformationen. Erzeuge dazu die folgende Tabelle.

| Bezeichnung | Menge | Art  | Kcal |
| ----------- | ----- | ---- | ---- |
| Leberkässemmel | Stück | Essen | 500 |
| Spaghetti Bolognese | Teller | Essen | 595 |
| Weißbier | Halbe | Trinken | 225 |
| Avocado | Stück | Essen | 543 |
| Laugenbrezel | Stück | Essen | 192 |
| Cola | kleine Flasche | Trinken | 220 |

Aufgaben:

- 
Definiere ein `Id` Feld als Schlüssel (verwende `AUTO_INCREMENT`).

- Ändere mittels `UPDATE` die Bezeichnung von `'Cola'` auf `'Coca Cola'`.

- Lösche den Datensatz für `'Avocado'`

- Füge hinzu:

  | Bezeichnung     | Menge | Art   | Kcal |
  | --------------- | ----- | ----- | ---- |
  | Croissant klein | Stück | Essen | 220  |

  

---

#### Übung (JDBC)
Erstelle ein JDBC Programm.

- Gib die gesamte Ernährungstabelle aus.
- Finde das Nahrungsmittel mit dem höchsten Nährwert.
- Definiere ein Array aus Strings, die Nahrungsmittelbezeichnungen enthält.
Ermittle den gesamt Nährwert dieser Nahrungsmittel.



---

#### Übung (Kalorienbedarf)

Die Nahrungsmittel im Array sollen jene sein die an einem bestimmten Tag bereits konsumiert wurden.
Es soll nun ermittelt werden was man zusätzlich noch essen darf ohne den tägliche Kalorienbedarf zu überschreiten.

Kalorienbedarf bei 8 Stunden Schlaf, Arbeit: sitzend mit wenig Aktivität, Freizeit: mittleres Training (2-3x pro Woche):

- Frau / 18 Jahre / 55 kg / 175 cm $\longrightarrow$ 1881 kcal
- Mann / 18 Jahre / 65 kg / 180 cm $\longrightarrow$ 2298 kcal

[Quelle](http://www.kalorien-guide.de/kalorienbedarf-berechnen/)

---
