---
title: Doc
type: assignment
cmds: ['md_html.bash --small']
---

# Schleifen (Übungen)

Überlege **zuerst** was folgende Programmausschnitte (exakt!) ausgeben, kontrolliere **dann** am Rechner. Wie viele hattest du richtig?

**Übung (Lesen von Schleifen I):**


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


```c
// (f)
int i;
for(i=0 ; i<5 ; i++)
{
     printf("%d ",i);
}
printf("\nEnde=%d", i);
```

```c
// (g)
int i;
for(i=4 ; i>=0 ; i--)
{
     printf("%d ",i);
}
printf("\nEnde=%d", i);
```


```c
// (h)
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
// (i)
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

---



