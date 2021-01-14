# Graphen API Erweiterung I

**Aufgabe:**

Erweitere das C# API (Application Programming Interface) für Graphen.

-   Klasse `Graph`: Erweitere um folgende Methoden:
    -   `void LoadFrom(string path)`. Erstellt die Knoten und Kanten aufgrund der Beschreibung in einem Textfile. Erste Zeile ist die Anzahl der Knoten. Dann folgen so viele Zeilen wie Knoten jeweils mit Namen und ID. Dann folgt eine Zeile mit Anzahl der Kanten und darauf wiederum pro Kante eine Zeile mit Quell Ziel und Gewicht. Siehe `graph01.txt` und `graph02.txt`.
    -   `double connected(Vertex s, Vertex d)`. Soll die Frage beantworten ob es zwischen zwei Knoten eine direkte Verbindung (Edge) gibt. Falls ja soll das Gewicht der Verbindung zurückgegeben werden. Falls es keine Verbindung gibt soll der Rückgabewert `Double.PositiveInfinity` sein.
    -   `List<Vertex> getOneHopNodes(Vertex start)`: Ermittelt alle Knoten die innerhalb von einem "Hop" von einem Startknoten aus erreicht werden können. Ein Hop ist das Verfolgen einer Kante vom Quellknoten zum Zielknoten.

**Tests:**

Für Tests kann der folgende Graph verwendet werden (`graph02.txt`):

<img src="/Users/matejkafr/Documents/Htl/2019_Local/4AHELS_SEN/DistanceLearning/04_Graphs/img/graph_02.png" alt="graph_02" style="zoom:25%;" />

**Abzugeben:** 

1.  Sourcecode (die .cs Files) 
2.  Screenshot der Ausgabe (nur das Ausgabefenster)