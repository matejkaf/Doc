---
title: Doc
cmds: ['md_html.bash --small']
tags: [assignment]
---

# Schleifen (Übungen)

Überlege zuerst was folgende Programmausschnitte (exakt!) ausgeben, kontrolliere dann am Rechner. 


**Übung (Lesen von Schleifen III):**


```c
// (a)
int i=1;
int j=10;
while (i<5 && j>8) 
{
    printf("%d  ",i);
    i++;
    j--;
}
printf("\nEnde %d %d\n",i,j);
```


```c
// (b)
int i=1;
int j=10;
while (i<2 || j>6) 
{
    printf("%d  ",i);
    i++;
    j--;
}
printf("\nEnde %d %d\n",i,j);
```


```c
// (c)
int i;
int j;
for (i=2; i<6; i++) 
{
    for (j=i+1; j<6; j++) 
    {
        printf("%d %d / ",i,j);
    }
    printf("\n");
}
printf("\nEnde %d %d\n",i,j);
```


```c
// (d)
int i;
int j;
for (i=0; i<4; i++) 
{
    for (j=0; j<4-i; j++) 
    {
        printf("%d %d / ",i,j);
    }
    printf("\n");
}
printf("\nEnde %d %d\n",i,j);
```

```c
// (e)
int i;
int j;
for (i=0; i<4; i++) 
{
    for (j=0; j<i; j++) 
    {
        printf("%d %d / ",i,j);
    }
    printf("\n");
}
printf("\nEnde %d %d\n",i,j);
```

```c
// (f)
int i;
int j;
int n;
for (i=0; i<3; i++) 
{
    n=0;
    for (j=0; j<3; j++) 
    {
        n=n+i+j+1;
    }
    printf("%d ",n);
}
```

```c
//(g)
int i;
int j;
i=0;
j=0;
while (i<3) 
{
    while (j<4) 
    {
        printf("%d %d / ",i,j);
        j++;
    }
    printf("\n");
    i++;
}
```


```c
//(h)
int i;
int j;
i=0;
j=0;
while (i<3) 
{
    j=i+1;
    while (j>0) 
    {
        printf("%d %d / ",i,j);
        j--;
    }
    printf("\n");
    i++;
}
```


---






