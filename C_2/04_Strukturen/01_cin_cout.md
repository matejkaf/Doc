---
title: cin und cout
tags: [lecture,C_2]
---



# Ausgabe

Siehe [wikibooks](https://de.wikibooks.org/wiki/C++-Programmierung/_Einführung_in_C++/_Einfache_Ein-_und_Ausgabe)

```c++
//...
#include <iostream>

using namespace std;

void main()
{
    int wert = 42;

    cout << "Wert=";
    cout << wert;
    cout << endl;

    // oder auch:
    cout << "Wert=" << wert << endl;

}
```

Frage: Formatierte Ausgabe?


# Eingabe

```c++
int value;
cin >> value;

// Datentypen egal
double x;
cin >> x;

```



# `cin` statt `scanf`!

Die folgenden Aufgabenstellungen erfordern die wechselweise Eingabe von Text und Zahlen.
Bei Verwendung von `scanf` ergeben sich dabei  Probleme.

Alternative: `cin`, Beispiel:

```c++
#include <iostream>
using namespace std;
//...
char s[100];
int x;
cin >> s;
cin >> x;
```

