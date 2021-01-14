---
title: Zufallszahlen Übungen
type: assignment
cmds: ['md_html.bash --small']
---





**Übung (Zufallszahl)**

Ermittle eine zufällige Zahl im Bereich 15–17. Starte das Programm häufig genug um festzustellen, dass tatsächlich alle diese Zahlen vorkommen und es auch keine Ausreißer gibt.



---

**Übung (Würfel)**

Schreibe ein Programm das 10 zufällige Würfe eines Würfels mit 6 Seiten simuliert. Das Programm soll dazu 10 zufällige Zahlen von 1–6 ausgibt. Verwende eine Schleife die 10 Mal durchläuft.



---

**Übung (Lottozahlen):**

Beim Lotto "6 aus 45" werden 6 zufällige Zahlen von 1–45 gezogen. Schreibe eine Schleife die diese 6 Zahlen ermittelt und ausgibt.

---



# Zufallszahlen erzeugen

Benötigt 2 zusätzliche includes:


```c
#include <stdlib.h>
#include <time.h>
```

Variable für die zufällige Zahl:


```c
int z;
```

**Einmal** am Beginn des Programms:


```c
srand(time(NULL));
```

Da wo eine zufällige Zahl gewünscht ist:


```c
z = rand();
```

Das liefert eine zufällige Zahl vom kleinesten Wert 0 bis zum größtmöglichen Wert $2^{15}-1$.

Für eine Zufallszahl aus 0–9 schreibt man:


```c
z = rand()%10;
```

Für 5–10:

```c
z = rand()%6+5;
```

Erklärung: `rand()%6` ergibt die 6 möglichen Werte `0 1 2 3 4 5`. Weiter mit `+5` entstehen daraus die Werte `5 6 7 8 9 10`.

