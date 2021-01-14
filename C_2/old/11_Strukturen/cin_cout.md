
# Ausgabe

Siehe [wikibooks](https://de.wikibooks.org/wiki/C%2B%2B-Programmierung:_Einfache_Ein-_und_Ausgabe)

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

