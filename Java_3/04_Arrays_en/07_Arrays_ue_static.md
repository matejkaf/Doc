---
title: Arrays
subtitle: Übungen Static Array
tags: [assignment]
---

In dieser Aufgabenstellung ist eine Klasse zu implementieren die Daten in einem Array verwalten kann. Ähnlich wie bei der Standard Klasse `ArrayList` sollen die Array Elemente über eine `get` und eine `set` Methode zugreifbar sein. Anders als bei der Klasse `ArrayList` ist das durch diese Klasse verwaltete Array nicht ein dynamisches sondern ein statisches Array einer fixen Größe, es kann daher nicht beliebig groß werden. 



---

#### **Übung (StaticArray):**

Implementiere:

- eine Klasse `StaticArray` mit einem `int` Array als Instanzvariable.
- einen Konstruktor mit der gewünschten Array Länge als `int` Parameter.
Im Konstruktor soll das Array mit `new` angelegt werden.
- eine `toString` Methode die aus dem Inhalt des `int` Arrays einen String der Form `[1,2,3,4]` erzeugt.
- eine `set` Methode mit der ein Array Element an einem Index auf einen Wert gesetzt werden kann (2 Parameter: Index und Wert). Der gestzte Wert soll **immer positiv** sein (Vorzeichenwechsel falls notwendig).
- eine `get` Methode die ein Array Element an einem Index (Parameter) liest und den Wert an dieser Index Position als Rückgabewert liefert.
- programmiere `get` und `set` so, dass keine `ArrayIndexOutOfBounds` Exceptions entstehen können. Zugriffe mit ungültigen Indizes sollen ignoriert werden, bzw. `get` den Wert –1 liefern.  



---

#### **Übung (StaticArray Erweiterungen):**

Erweitere durch:

- 
einen weiteren Konstruktor der zusätzlich zur Länge einen Startwert (auf den jedes Array Element gesetzt werden soll) als Parameter hat.
- Einen Konstruktor der als Parameter ein `int` Array übergeben bekommt. Das übergebene Array soll übernommen werden.
Experimentiere was bei Änderung der Array Werte passiert – wenn Array Elemente im `StaticArray` Objekt verändert werden ändert sich dann auch das Array das an den Konstruktor übergeben wurde? Warum ist das so? Implementiere so, dass das übergebene Array unabhängig von den Daten im `StaticArray` Objekt ist.


---




