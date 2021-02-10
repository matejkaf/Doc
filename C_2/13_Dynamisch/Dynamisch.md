---
title: Doc
---

# Dynamische Speicherverwaltung


## Motivation

Häufig ist **nicht vorab bekannt** mit wie vielen Daten ein Programm arbeiten muss.



**Beispiel:** 
Schülerdaten (Matrikelnummer und Name) sollen aus einer Textdatei gelesen werden.

```
1072
7495 Mayr
8525 Müller
4765 Mustermann
...
```

- Anzahl Schüler steht in der Datei (1072)
- Vor Programmstart nicht bekannt
- Speicher muss während des Programmlaufs angefordert werden
- = **dynamisches allokieren** von Speicher



## Array dynamischer Länge





Es nicht möglich eine Variable als Länge eines Arrays zu verwenden:


```c
int n;
printf("Laenge: ");
scanf("%d", &n);

int arr[n]; // !!! Compilerfehler
```


Geht nicht! Die Länge eines Arrays muss ein **konstanter Wert** sein.





## Lösung mit new / delete
**Lösung:**  Mit Zeiger und  `new` Operator kann ein Array beliebiger Länge angelegt werden.


```c++
int* arr;
int n;
printf("Laenge: ");
scanf("%d", &n);

arr = new int[n]; // Array allokieren

for(int i=0; i<n; i++)
    arr[i]=0;

delete[] arr; // Array freigeben
```

`new` liefert einen **Zeiger** auf einen Speicher mit Platz für das Array.

**Erinnerung:** Ein Zeiger kann wie ein Array verwendet werden.

Der Speicher den `new` zur Verfügung stellt stammt aus dem global freien Speicher des Computers. Von dort ein freier Speicherblock der benötigten Größe für das laufende Programm reserviert. Man sagt **allokiert**. Ein nicht mehr benötigter Speicher muss vom Programm wieder freigegeben werden (mit `delete`).





## Struktur dynamisch allokieren

Auch Strukturen können dynamisch erzeugt werden. Der `new` Operator liefert in diesem Fall einen Zeiger auf die Struktur.

```c
struct Punkt { 
    int x;
    int y; 
};
```
```c++
Punkt* point;
point = new Punkt;
point->x = 10;
point->y = 20;

delete point;
```
`point` zeigt auf ein Struktur-Objekt.


## Array von Strukturen I
```c
struct Punkt { 
    int x;
    int y; 
}
```

```c
Punkt* punkte = new Punkt[3];
punkte[1].x=3;
...
delete[] punkte;
```



## Fehlerquellen

Bei dynamischer Speicherverwaltung **sehr** sorgfältig programmieren!

### Programmierfehler: memory leak


Allokierter Speicher wird nicht mehr benötigt aber nicht freigegeben. Das Programm braucht zur Laufzeit immer mehr und mehr Speicher.


**Beispiel:**
```c++
heute = new Datum;
heute = new Datum;
```


```c++
heute = new Datum;
delete heute;
heute = new Datum;
```



### Programmierfehler: dangling pointer

Speicher wird freigegeben aber weiterhin verwendet. Der gleiche Speicherbereich kann durch `new` wieder vergeben werden. In Folge: Programmteile überschreiben sich die Daten gegenseitig.



**Beispiel:**
```c++
heute = new Datum;
delete heute;
heute->tag = 10; // <------<<
```




**Empfehlung:**

Nach Speicherfreigabe den Zeigeer auf `NULL` setzen

```c++
heute = new Datum;
delete heute;
heute = NULL;
heute->tag = 10; // <------<< Laufzeitfehler >>
```





## C Funktionen

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










## Array von Strukturen (mit Zeiger)

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







# Speicherbereiche

Der Speicher eines Programms besteht aus vier Segmenten:


- Code Das Programm in Maschinensprache
- Daten Globale Variable
- Stack Lokale Variable und Parameter von Funktionen
- Heap Bei Bedarf verfügbarer Speicher (`new`)



## Code und Daten
Die Segmente **Code** und (globale) **Daten** werden vom **Compiler** festgelegt. 




## Stack

Vom Stack werden zur Laufzeit -- bei jedem Aufruf einer Funktion -- soviel Bytes reserviert wie für **Funktions-Parameter**, **lokale Variablen** und **Rücksprungadresse** benötigt wird. 


- 
Die Rücksprungadresse verweist auf den Programmteil an dem nach Beenden der Funktion fortgesetzt wird.
Das Programm merkt sich von wo die Funktion aus aufgerufen wurde um dann an diese Stelle wieder zurückkehren zu können.
- 
Wird eine Funktion von einer Funktion aus aufgerufen so holt sich die zweite Funktion zusätzlichen Speicher vom Stack.
- 
Bei Rücksprung aus der Funktion wird der belegte Stack-Speicher wieder freigegeben.



Die Größe des Stacks ist **begrenzt** (Windows: 4 MB) und kann während das Programm läuft nicht vergrößert werden. Bei Funktionen mit vielen lokalen Daten (Arrays, Strukturen) kann der Platz im Stack ausgehen. Dies führt zu einem Stack-Überlauf (Stack-Overflow → Programmabsturz).

Daher sollten lokale Variablen nicht übermäßig verwendet werden. 
Insbesondere keine großen Arrays oder Strukturen verwenden. 
Besser geeignet sind dafür globale Variablen oder der Heap.


### Stack Buffer Overflow

Eine Methode (Exploit) bei der Hacker Sicherheitslücken in Programmen ausnützen.
Dabei wird insbesondere ausgenutzt, dass sich die Rücksprungadresse einer Funktion am Stack befindet.
Es wird ein Programmcode eingeschleust (meist in einem String) und dann der Stack so geschickt zum überlaufen gebracht, dass sich die Rücksprungadresse auf dem Stack so verändert, dass des eingeschleuste Programm aufgerufen wird.

[wikipedia – stack buffer overflow](http://en.wikipedia.org/wiki/Stack_buffer_overflow)

[www.safemode.org – Writing shell code](http://www.safemode.org/files/zillion/shellcode/doc/Writing_shellcode.html)



## Heap

Der Heap ist der freie Hauptspeicher im Computer.
Vom Heap können zur Laufzeit des Programms Speicherblöcke angefordert (**allokiert**, mit `new`) und wieder freigegeben (`delete`) werden. 
Die Verwaltung erfolgt durch das Betriebssystem.

Alle gerade laufenden Programme teilen sich den Heap, wenn ein Programm den ganzen Platz für sich beansprucht hat das negative Auswirkungen. 
Ein Programm soll daher gerade soviel Speicher in Anspruch nehmen wie für die aktuellen Aufgaben notwendig sind.
