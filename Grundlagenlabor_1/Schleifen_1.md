---
title: Schleifen
subtitle: Drill Übung
tags: [assignment,C_1,1CHELS]
---

#### Übung (Lesen von Schleifen I)

Überlege **zuerst** was folgende Programmausschnitte (exakt!) ausgeben, kontrolliere **dann** am Rechner. Wie viele hattest du richtig?


```c
// (a)
int i=1;
while(i<3)
{
     printf("%d ",i);
     i++;
}
printf("\nEnde=%d", i);
```


```c
// (b)
int i=1;
while(i<=3)
{
     printf("%d ",i);
     i++;
}
printf("\nEnde=%d", i);
```


```c
// (c)
int i=1;
while(i<=3)
{
     i++;
     printf("%d ",i);
}
printf("\nEnde=%d", i);
```

```c
// (d)
int i = 1;
while(i<11) 
{
	i = i + 3;
	printf("%d ",i);
}
printf("\nEnde=%d", i);
```


```c
// (e)
int i = 4;
int n = 1;
while(i>=0)
{
	n = n * 2;
	i = i - 1;
	printf("%d %d\n", i, n);
}
```

```c++
// (f)
int i = 22;
while( i != 16 )
{
  printf("%d\n", i);
  if( i > 15 )
  {
    i = i - 7;
  }
  else
  {
    i = i * 3 - 1;
  }
}
printf("Ende=%d", i);
```

