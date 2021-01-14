# Quellen


- [wikipedia-JavaScript](https://en.wikipedia.org/wiki/JavaScript)
- [MDN Learn JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript)
- [mozilla developer network](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

# JavaScript

<div class="definition">
JavaScript ist entstanden um HTML dynamisch zu machen.
D.h. Web Seiten nach dem Laden zu ändern, z.B. um auf Benutzerinteraktionen zu reagieren.
JavaScript wurde nur auf der Client Seite (im Web-Browser) verwendet.
</div>

Der aktuelle Trend geht dahin, JavaScript nicht nur auf der Client Seite (im Web-Browser) zu verwenden sondern auch auf der Server Seite.
Damit steht durchgehend die gleiche Programmiersprache zur Verfügung.

Trotz des Namens hat JavaScript mit Java grundsätzlich nichts zu tun. Die Sprachkonzepte sind aber sehr ähnlich.

JavaScript ist unter dem Namen **ECMAScript** standardisiert.

> In June 2011, ECMAScript 5.1 was released to fully align with the third edition of the ISO/IEC 16262 international standard. ECMAScript 2015 was released in June 2015. The current version is ECMAScript 2016, released in June 2016. [wikipedia][wikipedia-JavaScript]

Laut [dieser Tabelle](https://kangax.github.io/compat-table/es6/) unterstützen die wichtigsten Browser (Chrome, Firefox, Safari, Edge) in ihrer aktuellen Version (Dezember 2016) fast den vollständigen ECMAScript 6 (=ECMAScript 2015) Standard.

# Im Browser

Der Standardweg ein JavaScript Programm anzulegen ist als Teil einer HTML Seite. Öffnet der Browser dieses HTML Dokument so wird das enthaltene JavaScript Programm automatisch gestartet.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <script>
        console.log("Hello World");
    </script>
</head>
<body>
    
</body>
</html>
```

Um die Ausgabe zu sehen muss im Browser die Konsole geöffnet werden,
Bei Google Chrome unter `View/Developer/JavaScript Console`.

Ein weitere Möglichkeit ist das Einbinden eines externen JavaScript Files.

```html
<!DOCTYPE html>
<html>
<body>

    <script src="myScript.js"></script>
</body>
</html>
```

Das `<script>` Tag kann sowohl in `<body>` als auch in `<head>` stehen.
Bei sehr umfangreichn Webseiten stehen die `<script>` Tags am Ende des `<body>` Tags um die Ladezeit zu beschleunigen.

# Die Sprache
JavaScript ist sehr ähnlich zu C und Java.

Anlegen von Variablen mit `let`:

```javascript
let x = 5;
let y = 6;
let z = x + y;
console.log(x + '+' + y  + '=' + z);
```

Datentypen sind nicht notwendig.

Strings werden in einfachen oder doppelten Hochkommas geschrieben:

```javascript
let text1 = "abcd";
let text2 = 'xyz';
```

Kommentare
```javascript
// Bis zum Zeilenende

/* Kommentar der
    auch über mehrere Zeilen gehen
    kann */
```

Der Datentyp  einer Variable kann wechseln:

```javascript
let x = 3.14;
x = "Test";
```


# Kontrollstrukturen

## if / else
```javascript
if (expr) {
  //statements;
} else if (expr2) {
  //statements;
} else {
  //statements;
}
```
## Switch

```javascript
switch(expr) {
    case VALUE1:
    break;
    case VALUE2:
    break;
    default:
    break;
}
```

## while Schleife

```javascript
let i=0;
while(i<10) {
    ...
    i++;
}
```

## for Schleife

```javascript
for(let i=0; i<10; i++) {
    ...
}
```


# Funktionen

Funktionen können an beliebiger Stelle definiert werden.


```javascript
let out;
function makeBold(text) {
    return "<b>"+text+"</b>";
}
out = makeBold("abc")+" 123 "+makeBold("xyz");
```

Parameter und Rückgabewert:

```javascript
function add(a,b) {
    let sum = a+b;
    return sum;
}
let x=3;
let y=7;
console.log(x + '+' + y  + '=' + add(x,y));
```


# Strings

Strings werden mit `+` zu einem neuen String zusammengefügt.

```javascript
let s1 = "ABC";
let s2 = s1+"xyz";
let s3 = s2+1234; // Typ Wandlung
```


Strings können mit dem `==` Operator verglichen werden (inhaltlich).

```javascript
let s1="Hans";
let s2="Hans";
if(s1==s2) {
    // !! true
}
```

JavaScript nimmt es mit Datentypen nicht so genau. Es ist daher möglich eine Zahl mit einem String zu vergleichen.
Dies nennt sich *type coercion*.

```javascript
let a="123"
let b=123;
if(a==b) { // evaluates to true
    console.log("Werte gleich")
}
```

Will man explizit nur gleiche Datenypen vergleichen wird der `===` Operator angewendet.

```javascript
if(a===b) {
    console.log("Typ und Werte gleich")
} else {
    console.log("Typ oder Werte ungleich")
}
```

Von String nach Zahl:

```javascript
let x = parseFloat("4.31");
let y = parseInt("321");
let z = parseInt("10011",2);
```

Strings in JavaScript werden aus Unicode (UTF-16) Zeichen gebildet.


## String Methoden

Strings sind (wie in Java) *immutable* Objekte, d.h. im Inhalt nicht veränderbar.
Alle String-Methoden erzeugen daher neue Strings.

```javascript
let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let sln = txt.length;
```

Substring finden:

```javascript
let str = "There xyz is some xyz Text";
let pos = str.indexOf('xyz');
let pos = str.lastIndexOf('xyz');
```

`substring` kopiert einen Teil des Strings in einen neuen String.

```javascript
let str = "Apple, Banana, Kiwi";
let res = str.substring(7,13);
let res = str.substring(7); // bis Ende
```

Die `replace` Methode ersetzt Teile eines Strings durch einen anderen String. 
Dabei wird eine neuer String erzeugt.

```javascript
let str = "There xyz is some xyz Text";
let neu = str.replace('xyz','abcd');
```
Ersetzt das erste Vorkommen.

Sollen alle passenden Stellen ersetzt werden:

```javascript
let neu = str.replace(/xyz/g,'abcd');
```

`/xyz/g` ist ein regulärer Ausdruck (*regular expression*) eine sehr flexible Art des String-Vergleichs.
Es gibt auch eine `search` Methode die das gleiche macht wie `indexOf` aber reguläre Ausdrücke verwendet.


Wandlung in nur Groß- oder Kleinbuchstaben:

```javascript
let text1 = "Hello World!";
let text2 = text1.toUpperCase();
let text3 = text1.toLowerCase();
```

Aufspalten eines Strings in ein Array (aus Strings) mit `split`:

```javascript
let txt = "aa,bb,cc,dd,ee";
txt.split(","); // Split on commas
```
[Vollständige Liste von String Methoden](http://www.w3schools.com/jsref/jsref_obj_string.asp)



# Arrays

```javascript
let arr = [3,5,7,9];
for(let i=0; i<arr.length; i++) {
    console.log(i+" : "+arr[i]);
}
```

Das ganze Arrays ausgeben geht aber auch so:

```javascript
let arr = [3,5,7,9];
console.log(arr);
```

for...of Schleife:

```javascript
let arr = [3,5,7,9];
for(let x of arr) {
    console.log(x);
}
```

## Array Methoden

`push` zum Hinzufügen eines neuen Elements.

```javascript
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Lemon");
//oder auch
fruits[fruits.length] = "Lemon";
```

`pop` entfernt das letzte Element aus dem Array und gibt dieses zurück.
Das gleich macht `shift` mit dem ersten Element.

```javascript
let fruits = ["Banana", "Orange", "Apple", "Mango"];
let last = fruits.pop();
let first = fruits.shift();
```

`splice` entfernt Elemente oder fügt welche hinzu.

```javascript
let fruits = ["Banana", "Orange", "Apple", "Mango"];
let idx = 2
let delCnt = 1 // number of items to delete at idx
fruits.splice(idx, delCnt, "Lemon", "Kiwi"); // nach 'Orange'
// entfernt "Apple" und fügt stattdessen "Lemon" und "Kiwi" ein
```

Der erste Parameter bestimmt den Index an dem hinzugefügt wird.
Der zweite Parameter bestimmt wie viele Element entfernt werden sollen (ab dem angegebenen Index).

`join` macht aus einem Array einen String. Ein Trennstring kann angegeben werden.

```javascript
let fruits = ["Banana", "Orange","Apple", "Mango"];
let txt = fruits.join(" / ");
```

`concat` verbindet Arrays.

```javascript
let arr1 = ["Cecilie", "Lone"];
let arr2 = ["Emil", "Tobias","Linus"];
let arr3 = ["Robin", "Morgan"];
let myChildren = arr1.concat(arr2, arr3);
```

Die `slice` Methode erzeugt ein neues Array aus einem Teil eines bestehenden Arrays.

```javascript
let arr=[3,5,7,9,11,13];
let teil=arr.slice(2,4);//--> [7,9]
```

Die Parameter sind Index start-end (der end Index ist nicht dabei)

Komplette Liste von Array Funktionen im [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)


# JavaScript Objekte

JavaScript Objekte sind Container für benannte Werte (Schlüssel/Wert Paare, *key/value pairs*):

```javascript
let car = {type:"Fiat", model:"500", color:"white"};
```

Ein Objekt enthält Properties. 
Jedes Property besteht aus einem Name-Wert Paar.

Auf eine Property kann mit `.` oder `[]` zugegriffen
werden.

```javascript
let car = {type:"Fiat", model:"500", color:"white"};
car.type="BMW";
car["type"]="3er";
console.log(car);
```

Vorteil von `[]`: Property Name ist ein String und dieser kann zur Laufzeit berechnet werden.


Ein Array ist auch ein Objekt bei dem als Index Nummern statt Strings verwendet werden.
Das hat zur Konsequenz, dass Datentypen in einem Array gemischt werden können.
Werte in Objekten können weiters wiederum Objekte oder Arrays sein.

Gemischte Datentypen in einem Array:

```javascript
let arr=[123,"abcd",{v1:true,v2:"xyz"}];
console.log(arr);
console.log(arr[2].v2);
```

Array aus JavaScript Objekte:

```javascript
let cars = [
    {type:"Fiat", model:"500", color:"white"},
    {type:"BMW", model:"3er", color:"green"}
    ];
```

Array als Wert eines Property:

```javascript
let person = {
    firstName:"John", 
    lastName:"Doe", 
    age:50,
    childrenAge: [3,5,9], 
    eyeColor:"blue"
};
```

Schleife über alle Properties eine JS Objekts mit `for...in`

```javascript
let obj = {
    name: 'Mustermann',
    age: 47
}

for (let key in obj) {
    console.log(key + ':' + obj[key])
}
```

# Datentypen, undefined und null

JavaScript hat folgende eingebaute Typen:

- Number
- String
- Boolean
- Object
    - Function
    - Array
    - Date
    - RegExp
- null
- undefined

Eine Variable der noch kein Wert zugewiesen wurde ist `undefined`:

```javascript
let x
```

`x` ist undefined und hat noch keinen Datentypen.

`null` ist ein spezielles Kennzeichen für "kein Wert".

```javascript
let x=null
if(x==null) {
    x=42 // set to default value
}
```

Verhalten in Bedingungen

```javascript
if( value ) {
}
```
`value` wird als `false` evaluiert wenn `value`:
- null
- undefined
- NaN
- leerer String ("")
- 0, oder
- false
ist.


# var, let und const

Eine mit `var` deklarierte Variable ist innerhalb der gesamten Funktion sichtbar.

```javascript
//myVarVariable *is* visible out here 

for ( var myVarVariable = 0; myVarVariable < 5; myVarVariable++ ) { 
    //myVarVariable is visible to the whole function 
} 

//myVarVariable *is* visible out here
```

Wir `let` verwendet ist die Sichtbarkeit auf den Block eingeschränkt.

```javascript
//myLetVariable is *not* visible out here

for ( let myLetVariable = 0; myLetVariable < 5; myLetVariable++ ) {
    //myLetVariable is only visible in here
}

//myLetVariable is *not* visible out here
```

Oder statt var mit `let`, dann ist die Variable nur innerhalb der Schleife definiert.

```javascript
for(let i=0; i<10; i++) {
    ...
}
```

Das `const` Schlüsselwort kennzeichnet unveränderliche Konstanten.

```javascript
const pi=3.14
pi=3.1  // error !
```

[var vs let](http://www.jstips.co/en/keyword-var-vs-let/), 
[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)


# Laufzeitauswertung

JavaScript kann Programmausdrücke auch zur Laufzeit auswerten:

```javascript
let x = 10;
let y = 20;
let a = eval("x*y");
let res = a + b + c;
```

[eval auf w3schools](http://www.w3schools.com/jsref/jsref_eval.asp)


# Functional Programming

*functions in javascript are first class objects*

Dies bedeutet:
	
- Funktionen sind Instanzen des `Object` Typs
- Eine Funktion kann Properties haben
- Eine Variable kann eine Funktion speichern
- Eine Funktion kann als Parameter an eine andere Funktion übergeben werden
- Eine Funktion kann eine Funktion zurückgeben

Beispiel - Alle Werte eines Arrays werden auf die gleiche Art verändert (verdoppelt)

```javascript
let arr = [1,2,3,4];
function dop(a) {
    for(let i=0; i<a.length; i++) {
        a[i]*=2;
    }
}
console.log(arr);
dop(arr);
console.log(arr);
```

Durch funktionales Programmieren kann die Veränderung der Daten von der Schleife getrennt werden.

Die Verdopplung wird als Funktion implementiert.

```javascript
function mul(n) {
    return 2*n;
}
```

Die Funktion die alle Elemente verändert erhält zusätzlich einen Parameter (der eine Funktion enthält).

```javascript
function array_change(a, action) {
    for(let i=0; i<a.length; i++) {
        a[i]=action(a[i]);
    }
}
```

Beim Aufruf wird die Funktion an den Parameter `action` übergeben.

```javascript
array_change(arr,mul);
```

Eine Erweiterung die zu jedem Array Element 3 dazuaddiert würde so aussehen:

```javascript
function add(n) {
    return 3+n;
}
array_change(arr,add);
```

* * *
Aufgabe:
Verwende `array_change` um alle Elemente auszugeben.

* * *

Da Funktionen wie Variablen herumgereicht werden können macht es Sinn diese ohne Namen zu definieren dies wird **Anonyme Funktionen** genannt.

Beispiel: Sortieren eines Arrays in absteigender Reihenfolge (`sort` ist eine Array Methode):

```javascript
let points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return b-a});
```

Erzeugen eines neuen Arrays mit der `filter` Methode von Array.

```javascript
function isBigEnough(value) {
  return value >= 10;
}
let filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
```




# OOP in JavaScript

Funktionen sind in JavaScript Objekte.

Das folgende Definiert einen Objekt Protypen mittels einer Funktion:

```javascript
function Person(name, age) {
  this.name = name
  this.age = age
  this.getBirthYear = function() {
      return 2017-age
  }
}
```

Von diesem Prototypen ein Objekt instanzieren:

```javascript
let you = new Person("You", 24); 
you.age++
```

`new` erzeugt ein leeres Object, setzt `this` auf dieses und ruft die Funktion (mit diesem `this`) auf.
Die Funktion verändert dann durch Zugriffe auf `this` das Objekt.
`new` liefert dann das erzeugt Objekt als Ergebnis.
Funktionen nach dieser Idee nennt man **Konstruktor Funktionen**.
Es ist üblich diese Funktionen mit großem Anfangsbuchstaben zu schreiben.

[new im MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new)


Ab ES6 direkte Unterstützung von Klassen in der Sprach Syntax.
[siehe Klassen](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Klassen)

