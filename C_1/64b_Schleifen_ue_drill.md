---
title: for Schleifen
subtitle: Drill Übungen
tags: [assignment,1AHITS,1CHELS]
---

Überlege **zuerst** (im Kopf/am Papier) was folgende Programmausschnitte (exakt!) ausgeben, kontrolliere **dann** am Rechner. Wie viele hattest du richtig?

#### Übung (Lesen von Schleifen)

```c++
// (a)
int i;
for(i=0 ; i<7 ; i++)
{
  if(i%2!=0)
  {
    printf("%d ",i);
  }
}
printf("\nEnde=%d", i);
```


```c
// (b)
int i;
for(i=0 ; i<6 ; i++)
{
  printf("%d ",i);
  if(i>2)
  {
    i++;
  }
}
printf("\nEnde=%d", i);
```

```c
// (c)
int i;
for(i=6 ; i>=0 ; i=i-2)
{
  printf("%d ",i);
}
printf("\nEnde=%d", i);
```


```c
// (d)
int n=65;
int i;
for(i=2; i>=0; i--)
{
	n = n / 2;
	printf("%d ", n);
}
printf("%d", i);
```


```c
// (e)
int tmp;
int a = 2;
int b = 1;      
for (int i = 0; i < 5; i++) {
	tmp = a;
	a = a + b;
	b = tmp;
}
printf("a=%d, b=%d\n", a, b);
```
