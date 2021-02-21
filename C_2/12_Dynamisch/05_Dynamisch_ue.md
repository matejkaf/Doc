---
title: Doc
tags: [assignment]
---

# Dynamische Speicherverwaltung (Übungen)


**Übung (Stackgröße ermitteln):**
Schreibe ein Programm mit dem die ungefähre Größe des Stacks ermittelt werden kann.
Anleitung: Mache eine Funktion die als lokale Variable ein `char` Array mit 1024 Elementen (=~1~kByte) anlegt. Diese Funktion hat einen Parameter – die Aufruftiefe --- gib diese in der Funktion aus und rufe dann die Funktion in der Funktion wieder auf (= Rekursion) --- übergib dabei die Aufruftiefe plus eins.

---


**Übung (Speicherbedarf von Strukturen):**
Ermittle mittels `sizeof()` die Größe der folgenden Strukturen:

- 
```c
typedef struct {
	int a;
	char b;
	char c;
} Test1;
```



-
```c
typedef struct {
	char b;
	int a;
	char c;
} Test2;
```



-
```c
typedef struct {
	int a;
	char b;
	char c;
	char d;
	char e;
} Test3;
```

Welche Schlussfolgerungen ziehst Du aus dem Ergebnis?

---

**Übung (Kalender als dynamisches Array):**
Es ist ein Programm zur Verwaltung von Kalendereinträgen zu erstellen.

- Ein Kalendereintrag besteht aus dem Datum und einem Text der das Ereignis beschreibt (z.B.: Klassenparty, HTL Ball).
- Es kann eine beliebige Anzahl von Kalendereinträgen eingegeben werden.  Bei der Eingabe eines leeren Beschreibungstexts wird das Programm beendet und alle Kalendereinträge dabei nochmals ausgegeben.
-  Verwalte die Kalendereinträge in einem dynamischen Array aus Strukturen.
-  Die Startgröße des Arrays ist 2.

---

**Übung (Einkaufsliste):**

Schreibe die Verwaltung der Einkaufsliste auf ein dynamisches Array um. 

---

