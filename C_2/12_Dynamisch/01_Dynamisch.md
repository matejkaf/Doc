---
title: Dynamische Speicherverwaltung
tags: [2AHITS_Teach,2AHITS]
---


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

Der Speicher den `new` zur Verfügung stellt stammt aus dem global freien Speicher des Computers (genannt **Heap**). Von dort ein freier Speicherblock der benötigten Größe für das laufende Programm reserviert. Man sagt **allokiert**. Ein nicht mehr benötigter Speicher muss vom Programm wieder freigegeben werden (mit `delete`).



## Struktur dynamisch allokieren

Auch Strukturen können dynamisch allokiert werden. Der `new` Operator liefert in diesem Fall einen Zeiger auf die Struktur.

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




## Array von Strukturen
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
heute = new Datum; // Zeiger wird überschrieben
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

Nach Speicherfreigabe den Zeiger auf `NULL` setzen

```c++
heute = new Datum;
delete heute;
heute = NULL;
heute->tag = 10; // <------<< Laufzeitfehler >>
```



## Speicherbereiche

Der Speicher eines Programms besteht aus **vier Segmenten**:


- **Code** Das Programm in Maschinensprache
- **Daten** Globale Variable
- **Stack** Lokale Variable und Parameter von Funktionen
- **Heap** Bei Bedarf verfügbarer Speicher (`new`)



### Code und Daten
Die Segmente **Code** und (globale) **Daten** werden vom **Compiler** festgelegt. 




### Stack

Vom Stack werden zur Laufzeit – bei jedem Aufruf einer Funktion – soviel Bytes reserviert wie für **Funktions-Parameter**, **lokale Variablen** und **Rücksprungadresse** benötigt wird. 


- Die Rücksprungadresse verweist auf den Programmteil an dem nach Beenden der Funktion fortgesetzt wird.
Das Programm merkt sich in der Rücksprungadresse von wo die Funktion aus aufgerufen wurde um dann an diese Stelle wieder zurückkehren zu können.
- 
Wird eine Funktion von einer Funktion aus aufgerufen so holt sich die zweite Funktion zusätzlichen Speicher vom Stack.
- 
Bei Rücksprung aus der Funktion wird der belegte Stack-Speicher wieder freigegeben.



Die Größe des Stacks ist **begrenzt** (Windows: 4 MB) und kann, während das Programm läuft, nicht vergrößert werden. Bei Funktionen mit vielen lokalen Daten (Arrays, Strukturen) kann der Platz im Stack ausgehen. Dies führt zu einem Stack-Überlauf (**Stack-Overflow** → Programmabsturz).

- Daher sollten lokale Variablen nicht übermäßig verwendet werden. 
- Insbesondere keine großen Arrays oder Strukturen verwenden. 
- Besser geeignet sind dafür globale Variablen oder der Heap.



#### Stack Buffer Overflow (shell code)

Eine Methode (Exploit) bei der Hacker Sicherheitslücken in Programmen ausnützen. Dabei wird insbesondere ausgenutzt, dass sich die Rücksprungadresse einer Funktion am Stack befindet.
Es wird ein Programmcode eingeschleust (meist in einem String) und dann der Stack so geschickt zum überlaufen gebracht, dass sich die Rücksprungadresse auf dem Stack so verändert, dass das eingeschleuste Programm aufgerufen wird.

[wikipedia – stack buffer overflow](http://en.wikipedia.org/wiki/Stack_buffer_overflow)

[www.safemode.org – Writing shell code](http://www.safemode.org/files/zillion/shellcode/doc/Writing_shellcode.html)



### Heap

Der Heap ist der freie Hauptspeicher im Computer. Vom Heap können zur Laufzeit des Programms Speicherblöcke angefordert (**allokiert**, mit `new`) und wieder freigegeben (`delete`) werden.  Die Verwaltung erfolgt durch das Betriebssystem.

Alle gerade laufenden Programme teilen sich den Heap, wenn ein Programm den ganzen Platz für sich beansprucht hat das negative Auswirkungen. Ein Programm soll daher gerade soviel Speicher in Anspruch nehmen wie für die aktuellen Aufgaben notwendig sind.