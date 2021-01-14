

# Allgemein

Von JavaScript aus kann dynamisch die Darstellung einer HTML Seite verändert werden.
Lege 2 Dateien (`indedex.html` und `index.js` ) mit folgendem Inhalt an:

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Javascript Test</title>
  <script src="index.js"></script>
</head>
<body>
  <div id="myDiv">Hello JavaScript</div>	
  <button onclick="pressed();">Klick Mich!</button>
</body>
</html>
```

```javascript
// index.js
function pressed() {
    let para=document.getElementById("myDiv");
    para.innerHTML="Hello World";
    para.style.color="fuchsia";
}
```

Skripts werden **nach** dem Laden der Webseite ausgeführt.

# DOM

Im **DOM** (Document Object Model) speichert der Web Browser alle Informationen über die Web-Seite.
Mit der Methode `getElementById` erhält man ein JavaScript Objekt zum Zugriff auf Elemente im DOM.

Der DOM ist eine Baumstruktur, die Wurzel ist das Objekt `document`.

Informationen zum DOM von 
[w3schools](http://www.w3schools.com/jsref/dom_obj_document.asp)
und 
[selfhtml](http://wiki.selfhtml.org/wiki/JavaScript/Objekte/DOM).

<div class="definition">

Sieht der HTML Code folgendermaßen aus:

```html
<div id="para1">xyz</div>	
```

Dann repräsentiert der Browser dies nach dem Laden intern durch ein DOM Objekt. 
Auf dieses kann vom JavaScript aus zugegriffen werden, durch:

```javascript
let para=document.getElementById("para1");
```

Über die Variable `para` kann nun auf die DOM Repräsentation des HTML Elements zugegriffen und dies verändert werden.
Änderungen im DOM werden durch den Browser sofort übernommen und angezeigt.


</div>

`innerHTML` (Property des Element Objekts) ist der **Inhalt** des jeweiligen HTML Elements.
Der Inhalt ist das was zwischen Start- und End-Tag steht.
`innerHTML` kann auf einen beliebigen **HTML String** gesetzt werden:

```javascript
para.innerHTML="Hallo"+"<br/>"+"Welt";
```

Oder auch über mehrere Zeilen durch verlängerung eines Strings:

```javascript
let str = "";
str += "Hallo";
str += "<br/>"+"Welt";
para.innerHTML=str;
```

Auf diese Art können große Teile der HTML Seite im JavaScript generiert werden.

Z.B. eine Liste deren Länge von einer Variable abhängt:

```javascript
let anzahl = 5;
let str = "<ul>";
for(let i=0; i<anzahl; i++) {
  str += "<li>"+(i+1)+"</li>";
}
str += "</ul>;
para.innerHTML=str;
```



# Element Attribute

Attribute eines Elements können über JavaScript verändert werden.

Umschalten eines Bildes:

```javascript
image.src = "bild.png";
```

CSS Eigenschaften setzen:

```javascript
x.style.color = "red";
x.style.textAlign = "center";
```

<div class="fact">
CSS Namen mit Bindestrich: aus `text-align` wird z.B. `textAlign`
</div>

\pagebreak

# Aufgaben

<div class="uebung" caption="Zähler">
Schreibe ein JavaScript Programm.
Es soll ein Button angezeigt werden.
Ein Text zählt jedes drücken des Buttons mit.
Z.B. `Es wurde 21 mal gedrückt`

Die Anzahl ist eine globale Variable.
</div>


<div class="uebung" caption="Farbe">
Implementiere einen Button durch dessen Betätigung ein Text die Farbe hin und her wechselt.
</div>

<div class="uebung" caption="Aufzählung">
Durch drücken eines Buttons soll eine Aufzählungsliste immer länger werden.
Wurde z.B. der Button 3 mal gedrückt so soll die Liste so aussehen:

- 1
- 2
- 3

</div>

<div class="uebung" caption="Aufzählung">
Wie vorher - nur soll die Liste so aussehen:

- 1
- 22
- 333
- 4444

Hinweis (for Schleife):

```javascript
for(let i=0; i<n; i++) {
  //...
}
```

</div>

<div class="uebung" caption="Münzwurf">
Schreibe ein Programm das nach drücken eines Buttons eine Münze zufällig wirft.
Die Münz-Vorder oder -Rückseite soll als Bild angezeigt werden.

Hinweis: `Math.random()` liefert eine Zufallszahl zwischen 0 und 1.
</div>

<div class="uebung" caption="Würfel">
Wie vorher nur mit einem sechs-seitigen Würfel.
</div>

