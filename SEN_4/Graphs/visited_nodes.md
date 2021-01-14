# Besuchte Knoten

Bei vielen Algorithmen im Zusammenhang mit Graphen muss man Buch führen welche Knoten bereits besucht wurden und welche nicht. Es gibt mehrere Möglichkeiten dies im Programm zu realisieren.

## Variante 1 – Erweiterung in der Klasse `Vertex`

```csharp
class Vertex
{
  bool visited;
}
```

Dabei ist vor Ausführung des Algorithmus notwendig alle `visited` variablen auf `false` zu setzen.

```csharp
public class Graph
{
  public List<Vertex> vertices;
  public void unvisitAllNodes()
  {
    foreach(var node in vertices)
    {
      node.visited = false;
    }
  }
}
```



## Variante 2 – verwenden von `Dictionary`

```csharp
public List<Vertex> depthFirstOrder(Vertex start)
{
  var visited = new Dictionary<Vertex,bool>();
  //...
  if( !visited.ContainsKey(node) )
  {
    visited[node] = true;
//...
```



## Variante 3 – `Set`

Betrachtet man Variante 2 so sieht man das nur `true` Werte in der Datenstruktur enthalten sind. D.h. der Wert ist irrelevant es geht nur darum ob ein Knoten enthalten ist oder nicht. Dieser Anwendungsfall wird durch die Datenstruktur [`HashSet`](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.hashset-1?view=netcore-3.1) abgedeckt.

```csharp
var visited = new HashSet<Vertes>(arr1);
visited.Add(node);
if(!visited.Contains(node))
{
  //...
}
```



## Anmerkung

Sowohl `Dictionary` als auch `HashSet` gehen von einer implementierten `GetHashCode` Methode aus.

Vertex erbt die `GetHashCode` Default Implementierung von [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object.gethashcode?view=netcore-3.1):

>   hash codes for reference types are computed by calling the [Object.GetHashCode](https://docs.microsoft.com/en-us/dotnet/api/system.object.gethashcode?view=netcore-3.1) method of the base class, which computes a hash code based on an object's reference

Für unsere Zwecke ausreichend. 

Vorsicht ist dann angebracht wenn Kopien von Vertex Objekten erstellt werden, da diese unterschiedliche Adressen und damit auch unterschiedliche Hash-Werte haben.