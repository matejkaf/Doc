---
title: Shell Scripts
subtitle: Übungen bash scripting
tags: [assignment,3AHITS]
---

#### Übung (spezielle Variable)

Schreibe ein shellscript das eine beliebige Menge von Dateinamen als Parameter akzeptiert. Von jeder dieser Dateien soll eine Kopie im gleichen Verzeichnis angelegt werden. Die Kopie unterscheidet sich vom Original durch eine angefügte Zufallszahl, Beispiel:

```
test.txt --> test.txt.38573
```

Aufrufbeispiele:

```sh
$ ./randcp.sh test1.txt test2.txt
$ ./randcp.sh xyz1.md test3.txt abcd.dat
$ ./randcp.sh *.md
```

Achtung: `#!/bin/bash` in der she-bang Zeile verwenden. `sh` unterstützt (in REPL) keine Zufallszahlen.

---

