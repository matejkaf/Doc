---
title: Übung Bankkonto
tags: [assignment,java,3BHELS]
---



**Übung (Bankkonto)**

Schreibe eine Klasse zur Verwaltung eines Bankkontos. Es ist keine Benutzereingabe erforderlich die Werte können fix im Programm vorgegeben werden.

- Lege die Klasse mit Instanzvariablen für Kontostand, Zinssatz und Kontoinhaber an.
- Schreibe eine `toString` Methode (für Ausgabe von Kontostand, Zinssatz und Kontoinhaber).
- Definiere einen Konstruktor mit dem alle Instanzvariablen gesetzt werden können.
- Lege eine Methode `ein` an zur Einzahlung, eines als Parameter übergebenen, Betrags. Dieser wird zum Kontostand addiert.
- Ergänze ebenso eine Methode `aus` zur Abbuchung eines Betrags.
- Schreibe eine Methode `jahresAbschluss` die die Zinsen berechnet und zum Kontostand addiert. Die berechneten Zinsen sollen der Rückgabewert sein.
- Ergänze einen Default Konstruktor (500 Euro Startkapital, 0,5% Zinsen)
- Schreibe 2 Methoden mit denen der Zinssatz 1/10 Prozentpunkten verändert wird
  Beispiel: 
  - `zinsPlus(3)` hebt den Zinssatz um 0.3
  - `zinsMinus(2)` senkt den Zinssatz um 0.2



---

**Übung (Bankkonto Erweiterungen)**

- Schreibe eine Methode für eine Überweisung zwischen 2 Bankkonten, Parameter sind eine Referenz auf ein zweites Bankkonto-Objekt und der zu überweisende Betrag.
- Leider zahlen wir für das Bankkonto auch Gebühren. Diese sind abhängig von der Anzahl der Transaktionen (Einzahlung oder Abbuchung). Dabei gilt:
  - Die ersten 5 Transaktionen sind gratis.
  - Die nächsten 5 Transaktionen kosten Pauschal einen Euro.
  - Für jede weitere Transaktion werden 5 Cent verrechnet.
  - Die Gebühren sollen in der Methode `jahresAbschluss` ermittelt werden, dabei wird die Gebührenermittlung auch wieder auf 0 zurückgesetzt.

---



