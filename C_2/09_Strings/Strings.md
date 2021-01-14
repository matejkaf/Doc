---
title: Strings
cmds: ['md_html.bash --small','md_html.bash']
tags: [c,strings,intro]
---



# Array aus char

Für einzelne Zeichen gibt es den Datentyp `char`.

```c
char c;
c = 'a';
```

Für eine **Zeichenkette** (engl. **String**) wird ein Array von `char` verwendet.

```c
char text[10];
```

Ein Strings wird immer mit dem spezillen `'\0'` Zeichen beendet.

Beispiel:

```c
char text[4]={'H', 'T', 'L', '\0'};
```

oder bequemer:

```c
char text[]="HTL";
```

Strings werden immer in **doppelten Hochkommas** eingeschlossen.

Überlege: Was ist der Unterschied?

```c
char c='a';
char s[]="a";
```

Der Zugriff auf Strings erfolgt wie bei Arrays:

```c
char text[]="Wild";
text[1]='a';
text[2]='n';
```

ergibt `"Wand"`

Einen String verkürzen:

```c
char text[]="Bilderrahmen"
text[4]='\0';
```

ergibt `"Bild"`


**Fehler:** Über die Grenzen des Stringarrays schreiben:

```c
char text[]="Kopfschmerzen"; // 14 Zeichen (inkl. '\0')
text[14]='\0'; // Fehler !!! genau eins zu weit !!!
```

Ein String kann auch länger angelegt werden als gerade notwendig.
Es bleibt noch Platz für spätere Erweiterungen:

```c
char text[20]="kurz";
```

Die **Ein- und Ausgabe** geschieht mit
`gets_s` und `printf`:

```c
char s[20];
gets_s(s);
printf("%s\n",s);
```

Häufig sucht man das **Ende** eines Strings.
Schreibe ein Programm das den Index von `'\0'` in einem vorgegebenen String sucht.


Strings sind Arrays daher gilt **call by reference**:

```c
void change(char str[]);
void main()
{
    char text[]="Wild";
    change(text);
    printf("%s\n",text);
}

void change(char str[])
{
    text[1]='a';
    text[2]='n';
}
```



# ASCII Code

Ein Computer kann **nur Zahlen** speichern. Um Buchstaben darzustellen gibt es eine Übereinkunft [den ASCII-Code Standard](http://de.wikipedia.org/wiki/American_Standard_Code_for_Information_Interchange) die Zahlen auf Buchstaben zuordnet. 

Beispiel, der String `"abc0123"` steht im Speicher als Folge von Zahlen:

```
97   98   99   48   49   50   51   0      ← ASCII Code
'a'  'b'  'c'  '0'  '1'  '2'  '3'  '\0'   ← entsprechende Zeichen
[0]  [1]  [2]  [3]  [4]  [5]  [6]  [7]    ← Indizes im char Array (String)
```



Einige ASCII Codes:

| Code    | C       | Bezeichnung |
| ---- | ---- | ---- |
| 0       | `'\0'`    | Stringende |
| 7       | `'\a'`    | Ton |
| 9       | `'\t'`    | Tabulator |
| 10      | `'\n'`    | Zeilenumbruch |
| 13      | `'\r'`    | Zeilenanfang, Enter Taste |
| 32      | `' '`     | Leerzeichen |
| 48–57   | `'0'–'9'` | Ziffern |
| 65–90   | `'A'–'Z'` | Großbuchstaben |
| 97–122  | `'a'–'z'` | Kleinbuchstaben |






# Bibliothek string.h

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



## Praktische Stringfunktionen

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


# String $\rightarrow$ Zahl Wandlungen

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




