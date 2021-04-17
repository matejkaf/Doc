---
title: C/C++ tidbits
subtitle: REPL
---

* TOC
{:toc}
## Allgemein

Jedes REPL ist ein virtuelles Linux System mit Standard shell Kommandozeile. Weiters wird eine sehr aktuelle C/C++ Compiler Version verwenden. Daher gibt es ein paar Dinge zu beachten.



## gets

> The function was depreciated in c++11 and removed in c++14

REPLIT verwendet c++17

Alternative `fgets` oder `scanf` (siehe unten)

```c++
#include <cstdio>

int main() {
  char str[100];
  fgets(str, 100, stdin); 
}
```

Nachteil: `fgets` schreibt `\n\0` ans Ende! Auch die weitere Alternative `getline` hat das gleiche Verhalten.

Für den normalen Unterricht sollte daher die Verwendung von `scanf` Vorteilhafter sein.



## gets_s

Vom REPLIT C/C++ Compiler nicht unterstützt.

>  The function `gets_s` is not a first-class standard function. It is implemented by Visual Studio ([mentioned on MSDN](http://msdn.microsoft.com/en-us/library/5b5x9wc7.aspx)) where it is available if you include `stdio.h`.
> Interestingly C11 introduces it as a somewhat standard function by mentioning it in Appendix K, "*Bounds-Checking interfaces*" along with other `_s` functions. However **many compilers have chosen not to implement this interface** so it is probably best not to rely on it. [[stackoverflow](https://stackoverflow.com/a/25593782)]



## scanf

`scanf` liest Strings nur bis zum ersten Whitespace

```c++
scanf("%s",s);
```

Wenn Leerzeichen gewünscht sind, dann kann ein **Scanset** `[]` verwendete werden.

```c++
scanf("%[^\n]%*c", str);
```

Erklärung: das Scanset `[^\n]`  bedeutet "alles lesen bis zum Newline" mit `%*c` wird weiters noch das `\n` (Enter Taste) verworfen.



## \n 

Die return Taste bleibt bei der Eingabe von Zahlenwerten im Buffer. Führt zum überspringen von String-Eingaben. Mehrfache String Eingaben untereinander sind kein Problem. Ebenso mehrere Wert Eingaben (da scanf selbst am Anfang alles verwirft was keine Ziffer ist).

```c++
int a;
char s[100];
scanf("%d", &a);
scanf("%*c"); // Entfernt \n aus dem Tastaturpuffer
scanf("%s", s);
```



## cin/cout

Ein- und Ausgabe in C++. Kein "`\n`" Problem.

```c++
#include <iostream>
using namespace std;
int main() {
  cout << "Hello World!\n";
  int n;
  char s[100];
  cin >> n;
  cin >> s;
  cout << s;
}
```



## C oder C++

### C

Automatisch generiereter REPL Source Code

```C
#include <stdio.h>

int main(void) {
  printf("Hello World\n");
  return 0;
}
```

Compiler-Aufruf

```
clang-7 -pthread -lm -o main main.c
```



### C++

Automatisch generiereter REPL Source Code

```c++
#include <iostream>

int main() {
  std::cout << "Hello World!\n";
}
```

Compiler-Aufruf

```
clang++-7 -pthread -std=c++17 -o main main.cpp
```



### Anmerkungen

C "Hello World" ist für Einsteiger etwas komplexer, weil gleich sehr viele unbekannte Schlüsselwörter vorkommen. Das C++ kann ohne Änderung der `includes` auf printf umgeschrieben werden:

```C++
#include <iostream>

int main() {
  printf("Hello World\n");
}
```

Weitere Vorteile von C++ beim "normalen" – nicht objektorientierten programmieren.

- `bool` Datentyp nur in C++

- Bei der Deklaration von Strukturvariablen ist das `struct` Schlüsselwort in C mandatory in C++ optional

  ```c
  #include <stdio.h>
  
  struct Point
  {
     int x, y;
  }; 
  
  int main(void) {
    struct Point p; // struct optional in C++
    
    return 0;
  }
  ```

Persönliche Anmerkung: da ich in der Verwendung von purem C keinen besonderen Lerneffekt bei den Schülern sehe verwende ich nur C++.



## Borland Legacy

### getch

Einlesen einer einzelnen Taste.

`getch()` ist nicht im Funktionsumfang der Standard C Library sondern ein alte Borland Ergänzung. Alternativ kann `getchar()` verwendet werden – dabei ist aber immer das drücken der Return Taste notwendig. Der Grund liegt darin, dass die Kommandozeil grundsätzlich zeilenorientiert arbeitet und Eingaben erst am Ende der Zeile an das Programm weitergibt. Das ermöglicht auch line editing d.h. löschen mit Backspace.

Mit etwas Aufwand kann `getch()` implementiert werden ohne die restlichen Abläufe zu verändern:

```c++
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <termios.h>

//////////////////////////

char getch()
{
  static struct termios oldt, newt;

  tcgetattr( STDIN_FILENO, &oldt);
  newt = oldt;

  /* 
ECHO echo mode off
ICANON canonical mode off - 
    In noncanonical mode input is available immediately (without the
    user having to type a line-delimiter character), no input
    processing is performed, and line editing is disabled.
*/
  newt.c_lflag &= ~( ICANON | ECHO );
  tcsetattr( STDIN_FILENO, TCSANOW, &newt);

  char c = getchar();

  // reset to original terminal modes
  tcsetattr( STDIN_FILENO, TCSANOW, &oldt);

  return c;
}
```

Siehe [REPL : ReplGetch](https://replit.com/@htlmatejka/ReplGetch) 



### conio.h

`kbhit()`, `gotoxy()` etc. lässt sich nachbauen, siehe `conio.h`in [REPL : ReplConio](https://replit.com/@htlmatejka/ReplConio) – starten und mit a,s,d,w steuern. Das funktioniert begrenzt sogar am Handy.

Erklärung: in der Funktion `cinit` wird das Verhalten der Konsole auf Spiele-Tauglich geändert:

- kein Echo
- kein Line-Editing (`getchar` verhällt sich wie `getch`)
- Kein `fflush` auf der Ausgabe notwendig (ansonsten werden Ausgaben bis zum nächsten `'\n'` "gesammelt")
- Cursor aus







