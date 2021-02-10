---
title: Doc
cmds: ['md_html.bash --small']
tags: [assignment]
---

# Übungen zu Array (dynamic)

Es ist ein dynamisches Array aufgrund der folgenden Code-Basis zu erstellen:
```java
class Person {
    int age;
    String name;
}

class DynamicArray {
    Person[] persons;
    int used;
}
```

Die Klasse `DynamicArray` soll ähnliche Funktionen wie ArrayList zur Verfügung stellen, siehe nachfolgende Aufgaben.



---

**Übung (Start):**
Implementiere:

- Einen Konstruktor und eine `toString` Methode in der Klasse `Person`.
- Einen Konstruktor in der Klasse `DynamicArray`. Es soll darin das Array `persons` mit der Länge 3 angelegt werden. Die Variable `used` enthält die Anzahl der verwendeten Array Elemente (am Anfang 0, da noch keine Array Elemente verwendet werden).
- Implementiere in der Klasse `DynamicArray` eine Methode `void add(Person p)` mit der ein Objekt der Klasse Person am Ende des Arrays eingefügt werden kann.
Es können maximal 3 Personen eingefügt werden, beim Einfügen einer 4ten Person wird das Programm abstürzen, das lösen wir später.
- Implementiere eine `toString` Methode in der Klasse `DynamicArray` zur Ausgabe des gesamten Arrays.




---
**Übung (Vergrößern):**
Schreibe eine Methode `inflate` in der Klasse `DynamicArray`, diese soll das Array vergrößern ohne, dass Daten verloren gehen. Dies ist folgendermaßen zu realisieren:


- Ein neues Array in doppelte Größe des bisherigen anlegen.
- Die Elemente aus dem alten in das neue Array kopieren.
- Die Variable `persons` auf das neue Array verweisen lassen.




---
**Übung (Beliebig viele einfügen):**

Verwende die Methode `inflate` um `add` ohne Limit aufrufen zu können. D.h. es soll möglich sein beliebig viele Personen hinzuzufügen.



---
**Übung (Entfernen):**
Schreibe folgende Methoden in der Klasse `DynamicArray`:

- `remove` (ohne Parameter), löscht das Element am Anfang. Die verbleibenden Element im Array rücken um eine Indexposition auf, deren Reihenfolge soll erhalten bleiben.
- `remove(int idx)`, soll das Element an einer bestimmten Indexposition entfernen. Ansonsten gleiches Verhalten wie Löschen am Anfang.




---
**Übung (Einfügen beliebig):**
Schreibe eine überladene Variante der `add` Methode in der Klasse `DynamicArray` mit der ein neues Element an beliebiger Stelle eingefügt werden kann. Alle Elemente die sich an dieser Stelle und dahinter befinden sollen um eine Indexposition verschoben werden. Das Array soll sich automatisch erweitern falls notwendig.



---
**Übung (Schrumpfen):**
Wenn durch das entfernen von Elementen nur mehr ein Viertel (oder weniger) der Array Elemente belegt sind, dann soll das Array auf die Hälfte verkürzt werden.

---


