---
title: Doc
cmds: ['md_html.bash --small']
tags: [assignment,]
---

# for Schleifen (Übungen)

Überlege **zuerst** was folgende Programmausschnitte (exakt!) ausgeben, kontrolliere **dann** am Rechner. Wie viele hattest du richtig?

**Übung (Lesen von Schleifen I):**


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



