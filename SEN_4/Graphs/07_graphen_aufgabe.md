# Graphen API Erweiterung IV (Optional)

**Aufgabe:**

Erweitere das C# API (Application Programming Interface).

-   Klasse `Graph`: Erweitere um folgende Methode:
    -   `List<Vertex> getRangeNodes(Vertex start, double range)`: Ermittelt alle Knoten die weniger als `range` von einem Startknoten entfernt sind (es ist die Summe der Kantengewichte zu nehmen). Wenn der Graph Zyklen enthält dann sollen Knoten im Ergebnis nicht mehrfach vorkommen. Berücksichtige, dass ein Weg mit weniger Hops nicht unbedingt ein kürzerer Weg (im Sinne von Summe der Kantengewichte) sein muss, Beispiel: Startknoten C und range 5, wird F bei der weiteren Suche ausgeschlossen so wird evtl der Weg über G nicht gefunden.

**Tests:**

Für Tests kann der folgende Graph verwendet werden (`graph02.txt`):

<img src="/Users/matejkafr/Documents/Htl/2019_Local/4AHELS_SEN/DistanceLearning/04_Graphs/img/graph_02.png" alt="graph_02" style="zoom:25%;" />

**Abzugeben:** 

1.  Sourcecode (die .cs Files) 
2.  Screenshot der Ausgabe (nur das Ausgabefenster)