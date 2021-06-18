---
title: Grundlagen UNIX shell
subtitle: C Programmieren – Übungen
tags: [2AHITS_Teach]
---



#### Übung (Addieren)

Schreibe ein C Programm das zwei über die Kommandozeile vorgegebene Zahlen **addiert**. 

Programmaufruf in der shell:

```bash
$ ./main 3 5
8
```



---

#### Übung (Rechner)

Schreibe ein C Programm das über die Kommandozeile die **4 Grundrechenarten** anbietet. 

Programmaufruf in der shell:

```bash
$ ./main 3 + 5
8
$ ./main 3 "*" 5
15
```

Achtung: Bei der Multiplikation müssen Quotes verwendet werden `"*"` ansonsten 

---

#### Übung (Rechner int+float)

Schreibe den Rechner so, dass dieser auch **optional mit Kommazahlen** rechnen kann.

Programmaufruf in der shell:

```bash
$ ./main 4.25 / 8.5  -f
0.5
$ ./main 4 / 8
0
```

Die Option `-f` steht zur Vereinfachung immer am Ende.

**Hinweis:** Verwende `atof` (liefert `float`) statt `atoi`.

**Erweiterung:** Eine Option die die Anzahl der darzustellenden Nachkommastellen bestimmt.

