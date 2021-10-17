

```java
void setup() {
  size(400,400);
}

void draw() {  
  line(0,400,10,0);
  line(0,390,20,0);
  line(0,380,30,0);
}
```

```java
void setup() {
  size(400,400);

  float step=10;
  strokeWeight(4);
  for(int i=0;i<40;i++) {
    stroke(random(100,250),random(100,250),random(100,250));
    line(0,400-(i*step),(i+1)*10,0);
  }
}
```

# Bilder

```java
PImage img;

void setup() {
  size(640,480);
  img=loadImage("movie44.jpg");
  imageMode(CORNER); // CORNER CENTER
  println(img.width);
  println(img.height);
}

void draw() {
  image(img, 0, 0);
  int newWidth=100;
  image(img, 10, 10+img.height, newWidth, newWidth*img.height/img.width);

}
```

Bild kann mit MS Paint erzeugt werden.

PNG Files mit Transparenz funktioniert auf der Processing Seite.
Es ist aber nicht möglich in MS Paint einen transparenten Hintergrund zu erzeugen.

# Text ausgeben

```java
PFont f;                           // STEP 1 Declare PFont variable
  
void setup() 
{
  size(200,200);
  f = createFont("Arial",16,true); // STEP 2 Create Font
}

void draw() 
{
  background(255);
  textFont(f,16);                  // STEP 3 Specify font to be used
  fill(0);                         // STEP 4 Specify font color 
  text("Hello Strings!",10,100);   // STEP 5 Display Text
}
```

# Sammlung von Befehlen

```java
void setup() { 
  size(500,400);
  background(255,0,0);
}

void draw() { }

void mouseDragged() { } // https://processing.org/reference/mouseDragged_.html

void mouseClicked() { }

void keyPressed() { 
  if(key=='s')
  {
    saveFrame();
  }

} // https://processing.org/reference/keyPressed_.html

```

Variablen für Benutzerinteraktion

```java
mouseX mouseY
mousePressed
mouseButton // LEFT, RIGHT
keyPressed
key // character, CODED
keyCode // UP, DOWN, LEFT, RIGHT
```

```java
noStroke();
stroke(0);
stroke(22,133,244);
strokeWeight(6); // thickness of lines

noFill();
fill(128);
fill(22,133,244);

rect(200,100,40,30); //x z b h
ellipse(100,200,40,40);
line(x1,y1,x2,y2);
point(x,y);
```


Zeichnen ohne Abstand (mit verbundenen Linien).

```java
void draw()
{
  stroke(100,150,200);
  strokeWeight(10);
  if(mousePressed)
  {
    line(mouseX,mouseY,pmouseX,pmouseY);
  }
}
```

Maus Rad:

```java
void mouseWheel(MouseEvent event) {
  float e = event.getCount();
  println(e);
}
```



Feedback für Zeichenprogramm

```java

```

