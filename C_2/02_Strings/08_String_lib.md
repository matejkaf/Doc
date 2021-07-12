---
title: Bibliothek string.h
subtitle: Standard Libraries
tags: [lecture,c,strings,intro,C_2]
---

Strings sind Arrays daher sind Zuweisungen nicht auf die Art möglich wie bei "normalen" Variablen. Bei folgenden Zuweisungen wird ein Compilerfehler gemeldet:

```c
char strA[]="Hello World";
char strB[50];
char strC[50];
strB="geht nicht";
strC=strA;
```

Stattdessen kann die Funktion `strcpy` aus der Bibliothek `string.h` verwendet werden.

```c
#include <string.h>
...
char strA[]="Hello World";
char strB[50];
char strC[50];
strcpy(strB,"geht schon");
strcpy(strC,strA);
```

`string.h` enthält noch einige weitere Funktionen.



### Praktische Stringfunktionen

`strlen` – Länge ermitteln

```c
char str[]="123";
int n;
n=strlen(str);
```

`strcpy` – String kopieren
```c
char s1[]="Original";
char s2[40];
strcpy(s2,s1); // s2 wird überschrieben
```

`strcat` – String an einen anderen String anfügen
```c
char s1[30]="Hello ";
char s2[]="World";
strcat(s1,s2); // fügt s2 an s1 an
```

`strcmp` – Strings vergleichen
```c
char s1[]="abcd";
char s2[]="abce";
int r = strcmp(s1,s2);
if(r<0) // Für dieses Beispiel wäre r<0
	// s1 alfabetisch vor s2 
if(r==0)
	// s1 gleich s2 
if(r>0)
	// s1 alfabetisch hinter s2 
```


## String → Zahl Wandlungen

Strings die eine **Zahl** enthalten können mit den Funktionen `atoi` (`int`) und `atof` (`double`) in binäre Werte gewandelt werden.


Beispiel:
```c
char z1="921"; // ASCII: 57 51 50 0
int n1=atoi(z1);
char z2="21.3"; // ASCII: 51 50 46 52 0
double n2=atof(z2);
```

**Anwendung:**

`scanf`/`gets_s` machen bei gemischter Text und Zahl-Eingabe Probleme.
Alternative: alles mit `gets_s` einlesen und 

- `int` Werte mit `atoi` bzw. 

- `double` Werte mit `atof` wandeln.


Beispiel:
```c
#include <stdlib.h>
...
char in[64];
gets_s(in);
int n = atoi(in);
double x = atof(in);
```


Eine **einzelne Ziffer** (Datentyp `char`) kann durch eine Subtraktion des ASCII Codes von `'0'` (Null) in eine Zahl gewandelt werden.


Beispiel:
```c
char z='7';
int n = z - '0';
```




