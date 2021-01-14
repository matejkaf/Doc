---
title: C# Async Pattern Übungen
type: assignment
cmds: ['md_html.bash', 'md_html.bash --small']
tags: [dotnet, csharp, tap]
---

**Übung (HIPASIDOC – Highly Parallel Asynchronous Image Download Compactor)**

Mehrere Links auf jpg Images sind in einem Array vorgegeben:

```csharp
var links = new (string link, string filename)[] {
  ("https://images.derstandard.at/t/LB460//2020/10/21/benko.jpg","benko.jpg"),
  ("https://images.derstandard.at/img/2020/10/20/ski001.jpg?w=1600&s=e637ad20","ski001.jpg"),
  ("https://images.content-garden.com/eyJidWNrZXQiOiJjb250ZW50LWdhcmRlbi1jZG4tcHJvZHVjdGlvbiIsImtleSI6ImltYWdlc1wvOGEzYTUzYzYtYWZiYi00ZWIyLWFhNzctYTYwZTY1YzEyZTNlXC9Wb2ktZ3VhdC1pU3RvY2stU2ltb25Ta2FmYXIuanBnIiwiZWRpdHMiOnsiZXh0cmFjdCI6eyJsZWZ0IjowLCJ0b3AiOjU0LCJ3aWR0aCI6OTYwLCJoZWlnaHQiOjYzN30sInJlc2l6ZSI6eyJ3aWR0aCI6OTYwLCJoZWlnaHQiOjYzN319fQ==","field.jpg"),
  ("https://images.derstandard.at/img/2020/10/20/bennu.jpg?w=1600&s=653876a3","bennu.jpg"),
  ("https://images.derstandard.at/img/2020/10/20/A2EB8148-1289-4F33-A363-8A8306BACF87.jpg?w=1600&s=4a868c8a","delfin.jpg"),
  ("https://images.derstandard.at/img/2020/10/20/Schuelerin.jpg?w=1600&s=1b681c6c","schueleron.jpg"),
  ("https://oekastatic.orf.at/mims/2020/32/52/crops/w=640,q=70,r=2/644241_opener_221652_apasteiermark_prozess_gegen_praesidentin_des_sogenannten_staatenbundes_.jpg?s=964e0fd6c05897a7fbeeb0870568b7eb77af2270","gericht.jpg"),
  ("https://assets.orf.at/mims/2020/43/16/crops/w=640,h=256,q=70,r=2/727463_opener_252416_eu_agrarreform_einigung_gy.jpg?s=d662dab066a7979af61e578486b3c674d2870b23","agrar.jpg"),
  ("https://assets.orf.at/mims/2020/43/85/crops/w=640,h=256,q=70,r=2/727615_opener_252485_ibiza_u_ausschuss_211020_006_luk.jpg?s=947af38322a1edb205be5938dd8798d3ba1e824a","benko2.jpg"),
  ("https://assets.orf.at/mims/2020/42/57/crops/w=640,h=256,q=70,r=2/721105_opener_250157_us_wahl_briefwahl_fleckerlteppich_ap.jpg?s=da8cc2053beadf062235202363dd1a81351acaff","ballot.jpg"),
};
foreach (var link in links)
{
  System.Console.WriteLine(link);
}
```



Aufgabenstellung:

- Download dieser Images
- Rescaling der Images auf max. 50 Pixel Höhe bzw. Breite, das Seitenverhältnis soll erhalten bleiben
- Speichern der neu skalierten Images im lokalen Dateisystem

Programmiere alles unter möglichst intensiver Nutzung des **Task Based Asynchronous** Pattern mit den Schlüsselwörtern `async`  und  `await` und verwende `..Async` Methoden wo immer möglich.



Erweiterungen:

- Images in PNG umwandeln
- Images auf monochrom wandeln
- Experimente mit ImageSharp



Hints:

- Google ist dein Freund
- [.NET Core Image Processing](https://devblogs.microsoft.com/dotnet/net-core-image-processing/)
- [github SixLabors-ImageSharp](https://github.com/SixLabors/ImageSharp)
- [docs.sixlabors](https://docs.sixlabors.com/articles/imagesharp/)







---

