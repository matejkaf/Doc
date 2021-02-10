---
title: Doc
tags: [c,strings,assignment,challenge]
---

# Laufschrift (String Challenge)

**Übung (Laufschrift)**

Schreibe ein Programm das eine Laufschrift am Bildschirm darstellt. Ein Text soll von links nach rechts über den Bildschirm wandern. Bei erreichen eines Rands soll der Text die Richtung wechseln. 

Erweiterungen:

- Mache die Laufschrift konfigurierbar, z.B.:
  - Der Text kann eingegeben werden
  - Der Text kann auch länger als der Platz am Bildschirm sein
  - Die Schrift wandert rechts aus dem Bildschirm und kommt links wieder herein
  - Die Schrift verschwindet ganz aus dem Bildschirm und erst dann dreht sich die Schrift wieder um
  - Eigene Ideen ...

Hinweise zur Implementierung:

- Verwende einen String der so lang ist wie der Bildschirm breit und verschiebe alle Buchstaben nach links bzw. rechts.

- Mit der Ausgabe von `\r` wird der Cursor auf den Anfang der Zeile zurückgesetzt

- Die letzte Stelle der Zeile nicht verwenden weil sonst der Cursor auf die nächste Zeile wechselt

- Wartezeit mit `Sleep` aus `windows.h`:

  ```c
  #include <windows.h>
  void main()
  {
    for(int i=0; i<10; i++)
    {
      printf("-- %d --\r",i+1);
      Sleep(300); // 300 Millisekunden warten      
    }
  }
  ```

  