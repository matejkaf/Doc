---
title: Strings
subtitle: Einführung
tags: [lecture,c,strings,intro]
---

Für einzelne Zeichen gibt es den Datentyp `char`.

```c
char c;
c = 'a';
```

Für eine **Zeichenkette** (engl. **String**) wird ein Array von `char` verwendet.

```c
char text[10];
```

Ein Strings wird immer mit 0 (als Zeichen geschrieben: `'\0'`) Zeichen beendet.

Beispiel:

```c
char text[4]={'H', 'T', 'L', '\0'};
// oder
char text[4]={'H', 'T', 'L', 0 };
```

oder bequemer:

```c
char text[]="HTL";
```

Strings werden immer in **doppelten Hochkommas** eingeschlossen. Die abschließende `'\0'` wird automatisch eingefügt.

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

Ein String kann auch länger angelegt werden als gerade notwendig. Es bleibt noch Platz für spätere Erweiterungen:

```c
char text[20]="kurz";
```

Die **Ein- und Ausgabe** geschieht mit`scanf` und `printf`:

```c
char s[20];
scanf("%s",s);
printf("%s\n",s);
```

Achtung: Eingabe von Leerzeichen mit `scanf` nicht möglich, da dies als Ende der Eingabe interpretiert wird.

---

#### **Übung (Stringende suchen):**

Häufig sucht man das **Ende** eines Strings. Schreibe ein Programm das den Index von `'\0'` in einem vorgegebenen String sucht. Es soll ausgeben werden auf welchem Index `'\0'` gefunden wurde.

---


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



## ASCII Code

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
