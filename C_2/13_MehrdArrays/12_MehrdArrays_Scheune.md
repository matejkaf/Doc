---
title: Mehrdimensionale Arrays
subtitle: Challenge Scheune
tags: [challenge,2darray,2AHITS]
---

> Qualifikationsbeispiel für die österreichische Informatik Olympiade 2013

Der Jungbauer Markus möchte eine möglichst große Scheune auf seiner quadratischen Farm errichten. Als Naturliebhaber hasst er es, unnötig Bäume auf seinem Land zu fällen. Daher möchte er einen Platz für seine Scheune finden, der bereits frei von Bäumen ist. Für unseren Zweck ist sein Gebiet in N×N gleich große quadratische Grundstücksparzellen eingeteilt, auf manchen davon stehen Bäume. Du sollst die **größtmögliche quadratische Scheune** ermitteln, die auf Markus’ Farm errichtet werden kann, ohne dass Parzellen mit Bäumen verwendet werden müssen. Die Wände der Scheune müssen parallel zu den Parzellengrenzen sein.

**BEISPIEL**

Nimm den folgenden Raster von Markus’ Farm an, wobei "." eine Parzelle ohne Bäume und "#" eine Parzelle mit Bäumen repräsentiert.

```
 12345678
1........ 
2.#...#.. 
3........ 
4........ 
5........ 
6..#..... 
7........ 
8........
```

Die größte Scheune ist 5 x 5 und kann an zwei Positionen im rechten unteren Teil des Rasters platziert werden.

Aufgabenstellung:

- Schreibe ein Programm das für eine beliebig große Farm mit beliebig platzierten Bäumen die gesuchte Lösung findet. 
- Gib die Position der Scheune im Raster aus (Quadrat mit "*" auffüllen). Bei mehreren Lösungen jene die sich am weitesten links/oben befindet.
- Gib alle alternativen Positionen aus