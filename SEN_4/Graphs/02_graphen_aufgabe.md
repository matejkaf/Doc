# Graphen API

**Aufgabe:**

Erstelle ein C# API (Application Programming Interface) zum Arbeiten mit Graphen. Unser Ziel ist die Navigation in einem **Strassennetzwerk** zu ermöglichen.

-   Das API soll in einem eigenen C# File (Namespace `Graph`) implementiert werden. Es werden die Klassen `Vertex`, `Edge` und `Graph` verwendet.

-   Erstelle eine Klasse `Vertex`, die einen Knotenpunkt im Graphen abbilden soll. Neben der ID und dem Namen des Knotenpunkts soll eine Liste von Verbindungen (Edges, `List<Edge> edges`) gespeichert werden können.
    Implementiere einen Konstruktor `public Vertex (int id, String name)`.

-   Klasse` Edge`:  Erstelle eine Klasse `Edge`, die eine gewichtete Verbindung in einem Graphen abbilden soll. Die Verbindung soll eine Referenz auf den Quell-Knoten (`source`), den Zielknoten (`destination`), eine Bezeichnung (`road`) sowie die Entfernung (`weight`) enthalten.
    Implementiere einen Konstruktor `public Edge(Vertex source, Vertex destination, String road, double weight)`.

-   Klasse `Graph`: Der Graph soll das Strassennetzwerk abbilden. Da die Verbindungen bei den einzelnen Vertices gespeichert werden, ist die einzige Instanzvariable der Klasse Graph eine Liste von Vertices `List<Vertex> vertices`. Implementiere folgende Methoden:

    -   `void addVertex(Vertex v)` Fügt der Liste einen neuen Knotenpunkt hinzu.

    -   `Vertex getVertex(String s)` Durchsucht die Liste nach einem Knotenpunkt mit einem bestimmten Namen. Ist der Knotenpunkt enthalten, wird eine Referenz auf den Knotenpunkt zurückgegeben. Ist kein Knoten mit dem angegebenen Namen enthalten wird `null` zurückgegeben.

    -   `Vertex getVertex(int id)` Durchsucht die Liste nach einem Knotenpunkt mit einer bestimmten ID. Ist der Knotenpunkt enthalten, wird eine Referenz auf den Knotenpunkt zurückgegeben. Ist kein Knoten mit dem angegebenen Namen enthalten wird `null` zurückgegeben.

    -   `void addEdge(Vertex a, Vertex b, String road, double weight)` Erstellt eine neue Verbindung (`Edge`) und fügt diese Verbindung den **beiden** Knotenpunkten a und b hinzu.

    -   `void print()` Gibt alle im Graph enthaltenen Knotenpunkte (Vertices) und dessen Verbindungen (Edges) zu anderen Knotenpunkten aus. Beispiel:

        ```
        ---------------------------------------- 
        Vertex:A Edges: B(6), D(1)
        Vertex:B Edges: A(6), D(2), E(2), C(5) 
        Vertex:C Edges: B(5), E(5)
        Vertex:D Edges: A(1), B(2), E(1) 
        Vertex:E Edges: B(2), D(1), C(5)
        ---------------------------------------- 
        ```

    -   Teste mit folgendem Graphen:
        <img src="/Users/matejkafr/Documents/Htl/2019_Local/4AHELS_SEN/DistanceLearning/04_Graphs/img/graph_01.png" alt="graph_01" style="zoom:30%;" />



**Abzugeben:** 

1.  Sourcecode (die .cs Files) 
2.  Screenshot der Ausgabe (nur das Ausgabefenster) 