---
title: Dynamische Speicherverwaltung
subtitle: Array von Strukturen (mit Zeiger)
tags: [C_2]
---

Mit `new Punkt[3]` wird ein Array aus Strukturen angelegt. D.h. jedes Array Element enthält den kompletten Inhalt der Struktur.

**Problem:** Eine Struktur kann sehr umfangreich sein (viele Variablen oder sogar Arrays enthalten).
Werden die Strukturen im Array herumkopiert (z.B. beim Sortieren) so benötigen dies viel Zeit.

**Idee:** Ein **Array aus Zeigern** anlegen. Zeiger sind viel schneller zu kopieren als ganze Strukturen.


Beispiel ohne dynamische Speicherverwaltung:

```c++
Punkt* punkte[3]; // Array aus Zeigern
punkte[0]=new Punkt;
punkte[1]=new Punkt;
punkte[2]=new Punkt;
// oder:
for(int i=0;i<3;i++)
    punkte[i]=new Punkt;
```

Es wird ein Array aus Zeigern angelegt. Ein Element im Array ist ein Zeiger auf eine Struktur. Daher muss jeder Zeiger einzeln initialisiert werden.

### Grundlagen

Ein Array dient dazu um mehrere Variablen eines Typs anzulegen.

Bsp. 5 Variablen (Elemente) vom Typ `int`

```c
int a[5];
```

Dynamisch geht das so:

```c
int* a = new int[5];
```

`a` ist ein Zeiger auf das im Array gespeicherte Element (`int`) daher hat `a` den Datentyp `int*` (Zeiger auf `int`).

Wird eine Struktur dynamisch allokiert 

```c
Point* p = new Punkt;
```

speichert der Zeiger `p`  die Adresse der allokierten Struktur.

Um ein Array aus Strukturen anzulegen brauchen wir daher ein Array aus Zeigern.
Ein Element in diesem Array ist vom Datentyp `Point*` (Zeiger auf `Point`).
Wir brauchen daher ein Array aus `Point*`.

Wie beim `int` Array brauchen wir zusätzlich einen Zeiger auf das erste Element.
Dieses Element ist vom Datentyp `Point*`, daher wird ein Zeiger auf `Point*` benötigt (also einen Zeiger auf einen Zeiger).

Alles zusammen ergibt:

```c
Point** a = new Point*[5];
```

Nun haben wir ein Array aus Zeigern (auf Strukturen).
Aber noch nicht die Strukturen selbst.
Diese werden in einem eigenen Schritt allokiert:

```c
for(int i=0; i<5; i++)
    a[i] = new Point;
```

Um den Speicher wieder freizugeben, werden zuerst alle im Array gespeicherten Strukturen freigegeben:

```c
for (int i=0; i<5; i++)
    delete a[i];
```

Und dann das Array:

```c
delete[] a;
```

