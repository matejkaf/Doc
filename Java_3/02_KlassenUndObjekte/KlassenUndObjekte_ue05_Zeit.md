---
title: Übung Klasse für Uhrzeit
cmds: ['md_html.bash','md_html.bash --small']
tags: [assignment,java]
---


**Übung (Uhr):** 
Implementiere eine Klasse `Time` die eine Uhrzeit in Stunden (24) und Minuten speichert.

Weitere Aufgaben:

- Implementiere 3 Konstruktoren (nur einer der Konstruktoren darf direkt auf die Instanzvariablen schreiben, d.h. verwende `this(...)`): 
  - 
    einen Default Konstruktor (setzt auf `7:50`), 
  - 
    einen Konstruktor mit Minuten als Parameter (Achtung: kann $\ge 60$ sein), und 
  - 
    einen Konstruktor mit dem Stunden und Minuten gesetzt werden. 

- Implementiere eine `toString` Methode die `String` als Rückgabewert hat. Die Uhrzeit soll im üblichen Format, z.B.: `08:05` formatiert werden.
  Hinweis: Ob eine führende `0` zu ergänzen ist ist, kann durch Abfrage der Länge des Strings mit `str.length()` ermittelt werden.

- Implementiere eine Methode `advance` die eine Anzahl von Minuten als Parameter übergeben bekommt. Die Uhrzeit soll um diese Anzahl von Minuten vorgestellt werden. Achte auf mögliche Minutenüberläufe. Als Anzahl von Minuten sollen auch große Zahlen (z.B. 1000) möglich sein. Ein sich ergebender Stundenüberlauf (24 Stundengrenze) soll als Rückgabewert (`int`) verwendet werden.

- Schreibe eine Methode `diff` die als Parameter eine Referenz auf ein anderes `Time` Objekt übergeben bekommt. Der Rückgabewert sind die Anzahl der Minuten die sich die lokale von der übergebenen Uhrzeit unterscheidet.

- Schreibe eine Methode `sum` die als Parameter eine Referenz auf ein anderes `Time` Objekt übergeben bekommt. Der Rückgabewert ist die Referenz auf ein neues `Time` Objekt das sich aus der Summe der lokalen mit der übergebenen Uhrzeit ergibt.

---

**Übung (Uhr Erweiterung):** 
Erweitere die Klasse `Time`.

Es soll eine Umschaltung zwischen 12 und 24 Stunden Modus möglich sein.
Im 12 Stunden Modus wird die Uhrzeit im Format `"07:50 AM"` ausgegeben (AM bzw. PM).

Die Umschaltung zwischen den Modi geschieht durch die Methoden `setTo12()` bzw. `setTo24()`. Die bereits vorhandenen Methoden sollen weiterhin korrekt funktionieren.

Unmittelbar nach der Instanzierung soll der 24 Stunden Modus verwendet werden.

---




