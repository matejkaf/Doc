---
title: Zeiger und Strings
subtitle: Übungen
tags: [assignment,c,pointer,strings,intro,C_2,2AHITS]
---

#### Übung (Ausgabe I)
Was gibt dieses Programm aus? Überlege zuerst im Kopf/am Papier und probier es dann am Rechner aus.

```c
char t[]="Wald";
char* p = t;
p++;
p++;
*p = *p + 2;
printf("%s\n", t);
printf("%s\n", p);
```

---

#### Übung (Ausgabe II)

Was gibt dieses Programm aus? Überlege zuerst im Kopf/am Papier und probier es dann am Rechner aus.

```c
char str[]="abcdefghijk";
char* p = str;
char* q = p + 4;
p=p+7;
while(p>q) 
{
	printf("%c", *p );
	p--;
}
```

---

#### Übung (Ausgabe III)

Was gibt dieses Programm (main + Funktion) aus? Überlege zuerst im Kopf/am Papier und probier es dann am Rechner aus.

```c
void main()
{
	char str[]="abcdefghijk";
	printf("%c", getat(str, 5 ));
}
```

```c
char getat(char* p, int n)
{
	char* q = p + n;
	return *q;
}
```

---

