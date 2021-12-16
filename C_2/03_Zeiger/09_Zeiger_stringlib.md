---
title: String Library
tags: [lecture,c,pointer,strings,intro,C_2]
---



# Bibliothek string.h

C kennt eine eigene Bibliothek für Funktionen zum Arbeiten mit Strings: `string.h`.

Inkludieren mit:

```c
#include <string.h>
```

Folgende Funktionen sind enthalten.

## **strlen**

Ermittelt die Länge eines Strings. 

```c++
int strlen(char* str);
```

- str: String von dem die Länge ermittelt wird.

- return: Länge des Strings, ohne `\0`.



## **strchr**

Sucht vom Beginn weg das erste Vorkommen eines bestimmten Zeichens. 

```c++
char* strchr(char* str, char c);
```

- str: String in dem gesucht wird.

- c: Gesuchtes Zeichen.

- return: Zeiger auf das erste gefundene Zeichen.
  `NULL` falls nicht gefunden.



## **strcpy**

Überschreibt den Inhalt eines Strings (`dest`) mit dem Inhalt eines anderen Strings (`src`).
Abschließendes `\0` wird mitkopiert.

```c++
void strcpy(char* dest, char* src);
```


- dest: Der Zielstring --- wird mit dem Inhalt von `src` überschrieben. 
- src: Der Quellstring --- bleibt unverändert.

## **strcat**

Hängt einen String ans Ende eines anderen Strings an.

```c++
void strcat(char* str1, char* str2);
```

- str1: An diesen String wird `str2` angefügt. Es muss genügend freier Platz vorhanden sein.
- str2: Anzufügender String --- bleibt unverändert.

## **strcmp**

Vergleicht 2 Strings.

```c++
int strcmp(char* str1, char* str2);
```

- str1: Erster String.
- str2: Zweiter String.

- return:
  0 wenn beide Strings identisch sind. 
  Kleiner 0 falls der erste unterschiedliche Buchstabe in `str1` einen kleineren ASCII Code hat als der in `str2`.
  Größer 0 im umgekehrten Fall.

## **strstr**

Sucht einen (kürzeren) String in einem anderen (längeren) String.

```c++
char* strstr(char* str1, char* str2);}
```

- str1: String in dem gesucht wird.
- str2: Der gesuchte String.

- return: Zeiger auf die Stelle in `str1` an der der String `str2` beginnt.
  `NULL` falls nicht gefunden.
