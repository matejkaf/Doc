---
title: Doc
cmds: ['md_html.bash --small']
tags: [assignment,c,pointer,strings,intro]
---

# Zeiger und Strings (Übungen)

**Übung (Ausgabe I):**
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

**Übung (Ausgabe II):**

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

**Übung (Ausgabe III):**
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

**Übung (Funktionen):**

Implementiere mit Hilfe von Zeigern.

- In einer Funktion: Ermittle die Länge eines Strings – die Länge ist der Rückgabewert.
- Schreibe eine Funktion die den letzten Buchstaben eines Strings zurückgibt.
- Schreibe eine Funktion die einen String und eine Zahl `n` übergeben bekommt.
  Im String sollen ab (inklusive) dem n-ten Buchstaben alle folgenden Buchstaben mit `'x'` überschrieben werden. Der erste Buchstabe des Strings hat die Nummer 0. 

---

