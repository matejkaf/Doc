---
title: Funktionen
subtitle: Rückgabewert
tags: [lecture,c,funktionen,C_1]
---

<script src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML" type="text/javascript"></script>

Um einen Wert zurück ans aufrufende Programm zu geben.

**Beispiel:** Berechnung Rechteckumfang.

```c
void umfang(int a, int b)
{
    int u = 2*(a+b);
    printf("Umfang = %d\n", u);
}
```

Möchte den Umfang 2er Rechtecke summieren. Wie geht das? 

**Lösung:** Rückgabewerte

```c
int umfang(int a, int b)
{
  int x;
  x = 2*(a + b);
  return x;
}
```

```c
void main()
{
    int umf;
    umf = umfang(10,20);
    printf("Umfang=%d",umf);
}
```

- Bei `return` wird die Funktion sofort verlassen.
- Der Wert nach `return` wird zurückgegeben (an die Stelle des Funktionsaufrufs). 


Ablauf von `umf = umfang(10, 20);`


- Aufruf der Funktion `umfang()`.
- Die Parameter erhalten die Werte $$a=10$$ und $$b=20$$. 
- Berechnen von $$u = 2*(a + b)$$, Ergebnis: $$u=60$$. 
- Mit `return u` wird der Wert von `u`  (nämlich 60) zurückgegeben.
- An der Stelle des Aufrufs `umfang(10,20)` wird mit dem zurückgegebenen Wert (60) weitergearbeitet.

Es geht auch kürzer:

```c
int umfang(int a, int b)
{
  return 2*(a + b);
}
```



## Anwendungsbeispiele

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



## Hinweise

- Rückgabedatentyp - Aufruf einer Funktion wirkt wie Variable des gleichen Datentyps
  
- Man denkt sich den **Funktionsaufruf** durch den zurückgegebenen Wert **ersetzt**.
  
- `return` kann an beliebiger Stelle und mehrfach in der Funktion vorkommen.

  ```c
  int istGerade(int n)
  {
    if (n%2==0)
    {
      return 1; // gerade Zahl
    }
    else
    {
      return 0; // ungerade Zahl
    }
  }
  ```

- Auch eine `void` Funktion kann mit return verlassen werden.

  ```c
  void linie(int anzahl)
  {
    if(anzahl<3)
      return; // <--> Funktion wird hier beende
    for(int i=0; i<anzahl; i++)
    {
      printf("-");
    }
  }
  ```

  


















