

# Allgemein

[download](https://p5js.org/download/)
Für erste Versuche ist nur die Datei `p5.js` notwendig.

[Befehlsreferenz](https://p5js.org/reference/)

# Grundgerüst

Verzeichnis anlegen mit:
```
libraries\p5.js
index.html
sketch.js
```

`p5.js` = processing library

`index.html`

```html
<html>
<head>
  <meta charset="UTF-8">
  <script language="javascript" type="text/javascript" src="libraries/p5.js"></script>
  <script language="javascript" type="text/javascript" src="sketch.js"></script>
  <style> body {padding: 0; margin: 0;} </style>
</head>

<body>
</body>
</html>
```

`sketch.js`

```javascript
function setup() {
    // Wird einmal aufgerufen
}

function draw() {
    // Wird ständig aufgerufen
}
```

# Befehlsübersicht

```javascript
print('Text') // Ausgabe in der Browser Konsole
createCanvas(640, 480) // Größe des Ausgabebereichs festlegen
rect(20,10,30,30) // Rechteck zeichnen
ellipse(20,10,30,30) // Ellipse (Kreis) zeichnen
fill(0) // Schwarze Füllfarbe
fill(255) // Weiße Füllfarbe
fill(12,123,234) // Füllfarbe
stroke(...) // wie fill für Umrandung
noStroke() // keine Umrandung zeichnen
background(255) // gesamte Fläche füllen
```

# Vordefinierte Variablen

```javascript
mouseX mouseY // aktuelle Koordinaten der Maus
width height // Größe des Ausgabebereichs
mousePressed // linke Maustaste
```


# Beispiel

Ein Objekt das über die Cursor-Tasten gesteuert werden kann:

```javascript

class SpaceShip {

  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vx = 1.0
    this.vy = 0.5
    this.ax = 0.05
    this.ay = 0.05
  }

  update() {
    this.x += this.vx
    this.y += this.vy
  }

  display() {
    fill(30, 100, 100)
    noStroke()
    ellipse(this.x, this.y, 20, 20)
  }

  processKey() {
    if (keyCode == RIGHT_ARROW) {
      this.vx += this.ax;
    }
    else if (keyCode == DOWN_ARROW) {
      this.vy += this.ay;
    }
    else if (keyCode == LEFT_ARROW) {
      this.vx -= this.ax;
    }
    else if (keyCode == UP_ARROW) {
      this.vy -= this.ay;
    }
    else if (key == ' ') {
      this.vx = 0;
      this.vy = 0;
    }
  }
}

let funnyShip

function setup() {
  createCanvas(640, 480)
  funnyShip = new SpaceShip(40, 30)
}

function draw() {
  background(200)
  funnyShip.display()
  funnyShip.update()
  if(keyIsPressed) {
    funnyShip.processKey()
  }
}
```