---
title: Shell Scripts
subtitle: Übungen bash scripting
tags: [assignment,3AHITS]
---

#### Übung (Headline Cat)

Schreibe ein Skript das eine Art `cat` zur Verfügung stellt. Als Argumente werden Textdateien übergeben. Das Ergebnis wird in die Datei `result.txt` geschrieben (ist die Datei vorhanden soll deren Inhalt überschrieben werden). Jedem Datei-Inhalt soll eine Überschrift vorangestellt werden.

Beispiel – der Aufruf

```sh
$ ./headline_cat.sh file1.txt file2.txt file3.txt
```

ergibt die Datei `result.txt` mit folgendem Inhalt:

```
== file1.txt ==========================================
Das ist der Inhalt
der ersten Textdatei

== file2.txt ==========================================
Das ist der Inhalt
der zweiten Textdatei

== file3.txt ==========================================
Das ist der Inhalt
der dritten Textdatei

```

---

