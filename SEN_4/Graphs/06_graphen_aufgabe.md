# Graphen API Erweiterung III

**Aufgabe:**

Erweitere das C# API (Application Programming Interface).

-   Klasse `Graph`: Erweitere um folgende Methoden:
    -   `List<Vertex> breadthFirstOrder(Vertex start)`: Breadth First Traversal
    -   `List<Vertex> getHopNodes(Vertex start, int n)`: Ermittelt alle Knoten die innerhalb von n "Hops" von einem Startknoten aus erreicht werden können. Wenn der Graph Zyklen enthält dann sollen Knoten im Ergebnis nicht mehrfach vorkommen.

**Tests:**

Für Tests kann der folgende Graph verwendet werden (`graph02.txt`):

<img src="/Users/matejkafr/Documents/Htl/2019_Local/4AHELS_SEN/DistanceLearning/04_Graphs/img/graph_02.png" alt="graph_02" style="zoom:25%;" />

**Abzugeben:** 

1.  Sourcecode (die .cs Files) 
2.  Screenshot der Ausgabe (nur das Ausgabefenster)