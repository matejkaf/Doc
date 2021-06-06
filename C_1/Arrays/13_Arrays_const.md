---
title: Globale benannte Konstanten
subtitle: Arrays
tags: [lecture,arrays,1AHITS]
---

Folgendes Programm verwendet ein Array der Länge 5, ermöglicht eine Eingabe und summiert alle Elemente im Array.

```c++
void input(int a[])
{
  for(int i=0;i<5;i++)
  {
    scanf("%d",&a[i]);
  }
}

int sum(int a[])
{
  int s=0;
  for(int i=0;i<5;i++)
  {
    s = s+a[i];
  }
  return s;
}

void main()
{
  int arr[5];
  input(arr);
  int erg = sum(arr);
  printf("Summe= %d",erg);
  
  // folgender Code berechnet 2^5
  int x=5;
  int n=1;
  while(x>0) {
    n = n*2;
    x--;
  }
  printf("%d",n);
}
```

Die Zahl 5 in der Bedeutung "Länge des Arrays arr" kommt im Programm mehrfach vor. Aber die Zahl 5 kann natürlich auch andere Bedeutungen haben, wie man im Programm sieht (`x=5`). Um so länger ein Programm wird umso schwierger wird es die Bedeutung der Konstanten auseinanderzuhalten. 

Problematisch ebenfalls eine spätere Änderung der Array-Länge, z.B. von 5 auf 7. Dazu muss das ganze Programm nach den "richtigen" 5 durchsucht werden. Die Wahrscheinlichkeit, dass dabei Fehler passieren ist ziemlich groß.

Die Situation lässt sich verbessern indem man **globale Konstanten** verwendet. Diese können mit dem Schlüsselwort `const` (C++) oder `#define` (pures C) angelegt werden.

```c++
// C++
const int LAENGE=5;
```

```c
// C und C++
#define LAENGE 5
```

Das obige Programm mit Konstanten:

```c++
const int LAENGE=5;

void input(int a[])
{
  for(int i=0;i<LAENGE;i++)
  {
    scanf("%d",&a[i]);
  }
}

int sum(int a[])
{
  int s=0;
  for(int i=0;i<LAENGE;i++)
  {
    s = s+a[i];
  }
  return s;
}

void main()
{
  int arr[LAENGE];
  input(arr);
  int erg = sum(arr);
  printf("Summe= %d",erg);
  int x=5;
  int n=1;
  while(x>0) {
    n = n*2;
    x--;
  }
  printf("%d",n);
}
```

Benannte Konstanten machen das Programm besser lesbar, außerdem ist bei Änderung der Array-Länge diese nur an einer einzigen Stelle (die Konstantendefinition) anzupassen.