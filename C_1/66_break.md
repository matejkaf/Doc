---
title: Doc
tags: [2AHITS,lecture]
---

# break


Mit der `break` Anweisung kann eine Schleife sofort verlassen werden.

Beispiel – Einlesen von maximal 20 Zahlen mit Abbruch wenn die Zahl $-1$:
```c
for (int i=0 ; i<20 ; i++)
{
	scanf("%d", &x);
    if (x==(-1))
        break;
}
```

Beispiel – Ausgabe der Zahlen 1 bis 10:
```c
int i = 1;
while(1)
{
	printf("%d",i);
	if(i==10)
		break;
	i++;
}
```


