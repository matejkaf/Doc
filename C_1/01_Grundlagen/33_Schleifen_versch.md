---
title: Verschachtelung von Schleifen
tags: [lecture,C_1]
---

Bedingte Anweisungen (z.B.\ `if/else`) und Schleifen (z.B.\ `while`, `for`) können beliebig ineinander verschachtelt werden.

**Beispiel:** – Was ist die Ausgabe dieses Programms?

```c
for( i=0 ; i<2 ; i++)
{
    for( j=0 ; j<3 ; j++)
    {
        printf("%d - %d\n", i, j );
    }
}
printf("%d - %d\n", i, j );
```

Achtung:
- Unterschiedliche Laufvariablen verwenden (`i` und `j`). 
- Sauber Formatieren (Einrücken!).

Ändere das Programm auf `while` Schleifen.
