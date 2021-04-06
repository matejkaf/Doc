---
title: Queue
---

Wie der Stack ist eine **Queue** ([Warteschlange](http://de.wikipedia.org/wiki/Warteschlange_%28Datenstruktur%29)) eine Datenstruktur mit nur zwei grundlegenden Operationen – es kann ein Element 

- 
am Ende der Warteschlange eingefügt (`put`) bzw. 
- 
am Anfang entnommen (`get`) werden.

Eine Queue ist ein FIFO (first in first out) Speicher.

Beispiel: Eine Warteschlange vor der Kinokasse.



---

**Übung (Queue mit verketteter Liste):**
Implementiere eine Queue für Strings mit Hilfe einer doppelt verketteten Liste.
Es sollen die Operationen `put`, `get` und `isEmpty` unterstützt werden.
Die Methode `print` gibt den Inhalt der Liste aus (für Testzwecke).

```c
class Queue {
  void put(String s) {}
  String get() {}
  boolean isEmpty() {}
  void print() {}
}
```
---



**Übung (Zahnarzt):**
Schreibe ein Programm für das Wartezimmer eines Zahnarzts.

```c
public class Patient {
	int nr;  // laufende Nummer
	String name; // Name des Patienten
	String behandlung; // Therapie
}
```

Implementiere mit Hilfe einer Queue die Klasse `Wartezimmer`


```c
public class Wartezimmer {
	void neuerPatient(String name, String beh) {}
	void print() {}
	Patient naechsterPatient() {}
	int anzahlPatienten {}
	void fluchtEinesPatienten(int nr) {}
}
```

Teste durch fixe Vorgaben im Programm.
Die laufende Nummer wird automatisch vergeben.
Flieht ein Patient (gegeben durch die Nummer) so muss dieser aus der Queue gelöscht werden.



---

**Übung (Gemeinschaftspraxis):**
Das bisherige Programm soll erweitert werden. In einer Gemeinschaftspraxis arbeiten 5 Zahnärzte. Jeder Zahnarzt hat ein eigenes Wartezimmer. Es gibt einen gemeinsamen Empfang für alle Patienten mit einem eigenen Wartebereich. Aus diesem Empfang werden die Patienten in der Reihenfolge ihres Eintreffens auf die Zahnärzte zugeteilt. Dabei werden die Patienten möglichst gleichmäßig verteilt.

```c
public class GemeinschaftsPraxis {
  Wartezimmer[] warte;
  void patientKommt()(String name, String beh) {}
  void patientZuteilen() {}
}
```

---
