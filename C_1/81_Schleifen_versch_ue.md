---
title: Verschachtelte Schleifen
subtitle: Drill Übungen
tags: [assignment,1CHELS]
---

#### Übung (Verschachtelte Schleifen)

Überlege was folgende Programmausschnitte (exakt!) ausgeben:


```c
// (a)
for( i=5 ; i>=3 ; i--)
{
  for( j=7 ; j<9 ; j++)
  {
    printf("%d - %d\n", i, j );
  }
}
printf("%d + %d\n", i, j );
```


```c
// (b)
for( i=0 ; i<4 ; i++)
{
  for( j=i ; j<3 ; j++)
  {
    printf("%d - %d\n", i, j );
  }
}
```


```c
// (c)
int n=3;
for( i=0 ; i<n ; i++)
{
  for( j=0 ; j<(n-i) ; j++)
  {
    printf("%d - %d\n", i, j );
  }
  for( j=(n-i) ; j<n ; j++)
  {
    printf("%d - %d\n", i, j );
  }
}
```
