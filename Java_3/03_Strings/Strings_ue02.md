---
title: Doc
type: assignment
cmds: ['md_html.bash --small']
---

# Strings (Übungen)



**Übung (substring):**
Schreibe eine (`static`) Methode mit der gleichen Funktionalität wie `substring`. Hinweis: Verwende `charAt` und den `+` Operator, siehe folgendes Beispiel:

```java
String s="abcdefg";
String r=""; //  leerer String
r=r+s.charAt(2);
r=r+s.charAt(3);
```



---

**Übung (Zähler):**
Mit Hilfe einer Klasse `Zaehler` soll Anzahl, Mengentext und Bezeichnung verwaltet werden.

Beispiele: 


- `3 Dosen Cola`
- `5 Tafeln Schokolade`
- `9 kg Äpfel`


Aufgaben:

- Lege eine Klasse an mit den Instanzvariablen `anzahl` (`int`), `mengentext` (`String`) und `bezeichnung` (`String`).
Definiere einen passenden Konstruktor.
- Schreibe eine `toString` Methode – siehe obige Beispiele. Wobei die Bezeichnung immer mit großem Anfangsbuchstaben und ansonsten klein sein soll ganz egal wie es wirklich gesetzt wurde. Man kann sich vorstellen, dass damit Tippfehler korrigiert werden.
Für die Korrektur der Schreibweise soll die Klasse eine eigene Methode `bezeichnungKorrigiert` enthalten die z.B. `"biRNeN"` in `"Birnen"` umwandelt. Die Methode hat den korrigierten Text als Rückgabewert und keinen Parameter (sie kann ja direkt auf die Instanzvariable `bezeichnung` zugreifen). Der Inhalt der Variable `bezeichnung` soll dabei nicht geändert werden, verwende stattdessen den Rückgabewert der Methode `bezeichnungKorrigiert` .
- Schreibe eine weitere `toString` Methode mit einem String als Parameter. Mit diesem String kann die gewünschte Ausgabe vorgegeben werden und enthält Platzhalter für die gewünschte Position von Anzahl `%n`, Mengentext `%t` und Bezeichnung `%b`. 
  Beispiel: `"Die Anzahl der %b im Korb ist %n %t"`
  ergibt in der Ausgabe: `"Die Anzahl der Äpfel im Korb ist 42 Stück"`
  teste auch:`"Es sind %n %t %b im Korb"`

---

**Challenge:**

Erweitere so, dass Einzahl/Mehrzahl korrekt behandelt wird. 

`1 Sack Kartoffeln` vs. `7 Säcke Kartoffeln`

Hinweis: Verwende 2 Variablen – `mengentextEinzahl`, `mengentextMerzahl`.

---


