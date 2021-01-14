

# Graphen

- Graph
  - Knoten (Node, Vertex)
  - Kanten (Edges)
  - Zusammenhängend (connected)
  - Gewichtet (weighted)
  - Gerichtet (directed)
- Graphentheorie
- Baum ist ein spezieller Graph (undirected, Zusammenhängend, kein Zyklus, nur 2 Nachfolger)



Anwendungen:

- Computernetzwerke
- Karten / Navi
- WWW
- social networks
- usw.



Darstellung im Programm:

- Adjacency Matrix
- Adjacency List

![graph01](graph01.png)



<img src="graph02.png" alt="graph02" style="zoom:67%;" />

<img src="graph03.png" alt="graph03" style="zoom: 67%;" />





Graph API - für gewichteten ungerichteten Graphen, siehe Skript von Christian

Evtl. Erweiterungen:

- Given a node, return it’s neighbors as a list.
- Return a list of all the nodes in the graph.



# Dijkstra shortest path



Beispiel:

<img src="sp01.png" alt="sp01" style="zoom:50%;" />

Nur Knoten und Entfernungen gegeben: was ist der kürzeste Weg von A nach F?



Aus wikipedia:

<img src="sp02.png" alt="sp02" style="zoom:50%;" />