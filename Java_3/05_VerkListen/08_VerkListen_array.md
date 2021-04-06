---
title: Stack und Queue mit Array
---

## Stack mit Array

Ist bekannt wie viele Elemente maximal auf einen Stack gelegt werden kann auch ein Array zur Implementierung verwendet werden. Dabei speichert man einen Index an dem die nächste Einfügeoperation `push` stattfinden wird, nach dem Einfügen wird der Index um eins erhöht.
Beim Entfernen zieht man zuerst eins vom Index ab, dann wird auf das Element an dieser Stelle zugegriffen. Ein mittels Array implementierter Stack kann voll werden, versucht man danach noch ein Element auf den Stack zu legen wird von einem Stack-Überlauf (stack overflow) gesprochen. Genauso kann man, wenn versucht wird von einem leeren Stack etwas zu entnehmen, von einem Stack-Unterlauf (stack underflow) sprechen.

Manchmal wird ein Stack auch als Stapelspeicher oder als Kellerspeicher bezeichnet.



---

**Übung (Stack mit Array):**
Implementiere einen Stack mit Hilfe eines Arrays.

```c
class StackArray {
	void push(char c);
	char pop();
}
```
---



## Queue mit Array

Kann die maximale Anzahl an Elementen in der Queue vorweg angenommen werden, ist auch eine Implementierung mit Hilfe eines **Arrays** möglich. Dabei werden zwei Indizes benötigt, einen für den Start (`head`) und einen für das Ende (`tail`). `head` ist der Index des ersten belegten Elements in der Queue. `tail` ist der Index des freien Elements nach dem Ende der Queue (gehört also nicht zur Queue).

Wenn `head==tail` ist die Queue leer. Dabei wird der Zugriff so implementiert, dass sich das Array wie zu einem Ring geschlossen verhält, d.h.: nach dem letzten Element des Arrays kommt wieder der Anfang. Voll ist die Queue wenn `head=tail+1` (Ring berücksichtigen!).
Aufgrund der Vorstellung als Ring wird diese Datenstruktur häufig als **Ringpuffer** bezeichnet.


Ein Element des Ringpuffers muss unbenutzt bleiben, sonst kann eine volle von einer leeren Queue nicht unterschieden werden.



---

**Übung (Queue als Ringpuffer):**

Implementiere eine Queue mit Hilfe eines Arrays.

---



## Dequeue

Eine Dequeue (Double-Ended QUEue, sprich: "Deck") ist eine Mischung aus Stack und Queue. Elemente können an beiden Enden gelesen, eingefügt oder entfernt werden können.

Die Operationen der Dequeue sind:


- `push` und `pop` für das Einfügen oder Entnehmen eines Elements am hinteren Ende der Deque.
- `put` und `get` für das Einfügen oder Entnehmen am vorderen Ende der Deque.
- `first` und `last` für das Lesen des ersten oder letzten Elementes, ohne es zu entfernen.

Die Implementierung kann mit Hilfe einer doppelt verketteten Liste oder mit Hilfe eines Arrays (Ringpuffer) erfolgen.

---

**Übung (Dequeue):**

Implementiere eine Dequeue mit Hilfe einer doppelt verketteten Liste.

---


