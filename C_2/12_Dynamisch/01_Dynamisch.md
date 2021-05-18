---
title: Dynamische Speicherverwaltung
tags: [2AHITS_Teach,2AHITS]
---

* TOC
{:toc}

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

Der Speicher eines gestarteten Programms besteht aus **vier Segmenten**:


- **Code** Das Programm in Maschinensprache
- **Daten** Globale Variable
- **Stack** Lokale Variable und Parameter von Funktionen
- **Heap** Bei Bedarf verfügbarer/allokierbarer Speicher (`new`)

Siehe [[Memory Layout of C Programs](https://www.geeksforgeeks.org/memory-layout-of-c-program/)]

### Code und Daten
Die Segmente **Code** und (globale) **Daten** werden vom **Compiler** festgelegt. 

Konkret sind es 3 Bereiche:

- text ... Programm
- data ... initialisierte globale Daten
- bss ... uninitialisierte globale Daten (*block started by symbol*)

Linux `size` command zeigt die Größen dieser Bereiche an [[size:manpage](https://linux.die.net/man/1/size)] [[Linux size Command Tutorial for Beginners](https://www.howtoforge.com/linux-size-command/)]. Werte in Bytes.

```bash
$ size main
   text    data     bss     dec     hex filename
   1910     648 1024032 1026590   faa1e main
```

- dec = text+data+bss

- hex ... Hexwert von dec

---

#### Übung (Speicher Segmente)

Teste anhand eines C Programms mit **globalen Variablen** ohne bzw. mit Startwert.

Was passiert beim Anlegen von **lokalen Variablen**?

---



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

---

#### Übung (Stackgröße ermitteln)

Schreibe ein Programm mit dem die ungefähre Größe des Stacks ermittelt werden kann.
Anleitung: Mache eine Funktion die als lokale Variable ein `char` Array mit 1024 Elementen (=1 kByte) anlegt. Diese Funktion hat einen Parameter – die Aufruftiefe – gib diese in der Funktion aus und rufe dann die Funktion in der Funktion wieder auf (= Rekursion) – übergib dabei die Aufruftiefe plus eins.

Experimentiere weiters ob sich an diesem zur Verfügung stehenden Stack Speicher etwas ändert wenn große globale Variablen verwendet werden:

```c++
char gdata[1024*1000]; // 1000 kB = 1 MB
```

---

#### Linux

Mit `ulimit` können die unterschiedlichen Begrenzungen angezeigt (und verändert) werden.

```bash
$ ulimit -a
core file size          (blocks, -c) unlimited
data seg size           (kbytes, -d) unlimited
scheduling priority             (-e) 0
file size               (blocks, -f) unlimited
pending signals                 (-i) 104244
max locked memory       (kbytes, -l) 64
max memory size         (kbytes, -m) unlimited
open files                      (-n) 5242
pipe size            (512 bytes, -p) 8
POSIX message queues     (bytes, -q) 4096
real-time priority              (-r) 0
stack size              (kbytes, -s) 8192
cpu time               (seconds, -t) unlimited
max user processes              (-u) unlimited
virtual memory          (kbytes, -v) unlimited
file locks                      (-x) unlimited
```

Nur die Stacksize:

```bash
$ ulimit -s
8192
```

Stacksize ändern

```bash
$ ulimit -s 2000
```



#### Stack Buffer Overflow

Eine Methode (Exploit) bei der Hacker Sicherheitslücken (Vulnerabilities) in Programmen ausnützen. Dabei wird insbesondere ausgenutzt, dass sich die Rücksprungadresse einer Funktion am Stack befindet.
Es wird ein Programmcode eingeschleust (meist in einem String) und dann die Daten Stack so geschickt zum überlaufen gebracht, dass sich dadurch die Rücksprungadresse auf dem Stack so verändert, dass das eingeschleuste Programm am Stack ausgeführt wird. Häufig stellt der eingschleuste Code eine shell für den Angreifer zur Verfügung weshalb dies als [shellcode](https://en.wikipedia.org/wiki/Shellcode) bezeichnet wird.

[wikipedia – stack buffer overflow](http://en.wikipedia.org/wiki/Stack_buffer_overflow)



### Heap

Der Heap sind jene Speicherbereiche die zur Laufzeit vom Programm angefordert (**allokiert**, mit `new`) und wieder freigegeben (`delete`) werden. Die Zuteilung erfolgt aus dem freien Hauptspeicher des Computers die Verwaltung erfolgt durch das Betriebssystem.

Alle gerade laufenden Programme teilen sich den freien Hauptspeicher für den Heap, wenn ein Programm den ganzen Platz für sich beansprucht hat das negative Auswirkungen. Ein Programm soll daher gerade soviel Speicher in Anspruch nehmen wie für die aktuellen Aufgaben notwendig sind und den Speicher wieder freigeben sobald dieser nicht mehr benötigt wird.



### Speichermap (memory map)

[[Memory Layout of C Programs](https://www.geeksforgeeks.org/memory-layout-of-c-program/)]

![img](fig/page1-234px-Program_memory_layout.pdf.jpg)

Heap und Stack sind von den Speicheradressen her sehr weit voneinander entfernt.

```c++
int x=386835;
int* q=&x;
printf("Stack: %p\n", q);
int* p = new int;
printf("Heap: %p\n", p);
printf("Distanz: %ld GB", (q-p)/1024/1024/1024 );
```

```
Stack: 0x7fff33d944dc
Heap:       0x1632280
Distanz: 32767 GB
```

Der Raum zwischen stack und heap wird aber nicht komplett durch physikalischen Speicher belegt. Die gezeigte memory map ist der virtuelle Speicherraum des Prozesses.