---
title: Doc
description: Einführung in Funktionen in C
tags: [lecture, c, funktionen ]
---




# Funktionen mit Rückgabewert

Um einen Wert zurück ans aufrufende Programm zu geben.

**Beispiel:** Berechnung Rechteckumfang. 

```c
int umfang(int a, int b)
{
    int u;
    
    u = 2*(a + b);
    (*@\lstcoo{l-ra}@*)return u(*@\lstcoo{l-re}@*);
}
```

```c
void main()
{
    int umf;
    umf = (*@\lstcoo{l-ua}@*)umfang(10,20)(*@\lstcoo{l-ue}@*);
    printf("Umfang=%d",umf);
}
```

- Bei `return` wird die Funktion sofort verlassen.
- Der Wert nach `return` wird zurückgegeben (an die Stelle des Funktionsaufrufs). 


Ablauf von `umf = umfang(10, 20);`


- Aufruf der Funktion `umfang()`.
- Die Parameter erhalten die Werte $a=10$ und $b=20$. 
- Berechnen von $u = 2*(a + b)$, Ergebnis: $u=60$. 
- Mit `return u` wird der Wert von `u`  (nämlich 60) zurückgegeben.
- An der Stelle des Aufrufs wird mit dem zurückgegebenen Wert (60) weitergearbeitet.



### Weitere Beispiele

```c
// (1)
int u1;
u1 = umfang(10, 20);

// (2)
int summe;
summe = umfang(10, 20) + umfang(8, 7);

// (3)
int u2;
int x=3;
int y=9;
u2 = umfang(x, y);

// (4)
printf("%d\n", umfang(11, 22) );
```



### Hinweise

- Der Aufruf einer Funktion mit Rückgabewert steht stellvertretend für eine Variable des gleichen Typs.
  Man denkt sich den **Funktionsaufruf** durch den zurückgegebenen Wert **ersetzt**.
- `return` kann an beliebiger Stelle und mehrfach in der Funktion vorkommen.

- Auch eine `void` Funktion kann mit return verlassen werden.


















