---
title: Dynamische Speicherverwaltung
subtitle: C Funktionen
tags: []
---

`new` und `delete` sind nur in C++ vorhanden, nicht aber in purem C. Vor allem bei der Programmierung von Mikro-Controllern kann es sein, dass in purem C gearbeitet werden muss.



### Funktionen und Bibliotheken in C

Um Speicher in C vom Heap anzufordern (allokieren), wieder freizugeben und damit zu arbeiten gibt es folgende Funktionen.

**stdlib.h**

- `malloc`
  Memory Allocation. Reserviert eine gewisse Anzahl von Bytes vom Heap.
- `free`
  Gibt einen vorher reservierten Speicher wieder frei.


```c
void* malloc ( int size );
void free ( void* ptr );
```



### Hilfsfunktionen

**string.h**

- `memset`
  Einen Speicherbereich auf einen Wert (z.B.\ 0) setzen.
- `memcpy`
  Einen Speicherbereich kopieren.


```c
void* memset ( void* ptr, int value, int num );
void* memcpy (	void* dest, const void* src, int num );
```



### Struktur allokieren in C

In C wird mit `malloc` Speicher allokiert und mit `free` wieder freigegeben.

Beispiel – dynamisches Allokieren einer Struktur:


```c
typedef struct 
{
    int tag;
    int monat;
    int jahr;
} Datum;
```




```c
void main()
{
    Datum* heute;
    heute=(Datum*)malloc(sizeof(Datum));
    heute->tag = 14;
    heute->monat = 12;
    heute->jahr = 2013;
    free(heute);
    heute = NULL;
}
```

`sizeof`: Ermittelt wie viele Bytes ein Datentyp benötigt.


In purem C werden Strukturen etwas anders angelegt als in C++ (mit `typedef`).



### Array allokieren in C

Beispiel (Array aus 7 int Elementen):

```c
int* arr;
int n=7;
arr = (int*)malloc( n * sizeof(int) );
for(int i=0;i<n;i++) {
    arr[i] = 0;
}
free(arr);
```




### Sizeof bei Strukturen

Mit dem `sizeof()` Operator wird ermittelt wie viele Bytes ein Datentyp braucht.


Bei Strukturen liefert `sizeof` nicht unbedingt die Summe der Komponenten-Größen – wie man vielleicht vermuten würde. Der Compiler baut manchmal **Lücken** zwischen die Komponenten einer Struktur ein damit der Prozessor schneller darauf zugreifen kann. .


Regeln (Meist so, kann systemabhängig aber abweichen):

- Datentypen mit ≥4 Byte werden auf durch 4 teilbare Adressen gelegt.
- 2 Byte Datentypen werden auf durch 2 teilbare Adressen gelegt.
- Die Größe der gesamten Struktur muss durch 4 teilbar sein. 

Um diese Regeln einzuhalten werden Füllbytes eingefügt.



Wie viel Speicher belegt folgende Struktur?

```c
struct X {
    char a;
    short b;
    short c;
    int d;
    char e;
};
```

