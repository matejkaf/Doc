---
title: Übung Multithreaded Download Manager
tags: [5AHELS]
---

**Übung (Multithreaded Download Manager)**

Gegeben ist eine Liste aus Url's und Dateinamen (hier mit Tuples realisiert). Siehe [stackoverflow: How to easily initialize a list of Tuples?](https://stackoverflow.com/questions/8002455/how-to-easily-initialize-a-list-of-tuples).

```csharp
var downloads = new List<(string Url, string FileName)>
{
  ("http://www.orf.at/397239847.png", "test1"),
  ("https://www.htl-braunau.at/sf738fs83.jpeg", "test2"),
  ("https://test.com/dfgdfg.jpg", "test3"),
};
foreach (var download in downloads)
{
  System.Console.WriteLine(download.Url);
  System.Console.WriteLine(download.FileName);
}
```

Die Daten hinter den Links sollen gelesen und unter dem angegebenen Dateinamen gespeichert werden.

- Verwende `HttpWebRequest` ([stackoverflow – How to use httpwebrequest to pull image from website to local file](https://stackoverflow.com/questions/2368115/how-to-use-httpwebrequest-to-pull-image-from-website-to-local-file)) oder `WebClient` (funktioniert auch mit https) 

- Unterstütze z.B. png und jpg – `ContentType` abfragen und daraus die Dateiendung erzeugen

- Implementiere einmal einen **sequentiellen** Download mit Single-Thread und 
- eine zweite Lösung in der für **jeden** Download ein eigener **Tread** gestartet wird. 
- Vergleiche die **Geschwindigkeit** der beiden Lösungen.

---

