# Variablen

Variablen werden mit `let` angelegt. Datentypen sind nicht notwendig.

```javascript
let x = 5;
let y = 6;
let z = x + y;
console.log(x + '+' + y  + '=' + z);
```

Die Konsolenausgaben können im Browser in einem eigenen Unterfenster angezeigt werden und sind für das Testen des Programms sehr praktisch.

Strings werden in einfachen oder doppelten Hochkommas geschrieben:

```javascript
let text1 = "abcd";
let text2 = 'xyz';
```


# Arrays und Objects

## JS Arrays

```javascript
let fruits = ["Banana", "Orange", "Apple", "Mango"]
let count = [3,5,7,9]

let htmlTxt = "<ul>"
for(let i=0; i<fruits.length; i++) {
    htmlTxt += "<li>";
    htmlTxt += count[i] + " " + fruits[i] + "s"
    htmlTxt += "</li>";
}
htmlTxt += "</ul>";

document.getElementById('myDiv').innerHTML = htmlTxt
```

Ergebnis:
```html
<ul>
  <li>3 Bananas</li>
  <li>5 Oranges</li>
  <li>7 Apples</li>
  <li>9 Mangos</li>
</ul>
```
## JS Objects

JavaScript Objekte sind Zusammenfassungen unterschiedlicher Werte.
Jeder Wert kann über einen Namen angesprochen werden.

```javascript
let fruit = {name:"Banana", count:3};
console.log(fruit.count+" "+fruit.name);
```

## JS Array + Object

Arrays und Objects sind beliebig miteinander kombinierber

```javascript
let fruitsObj = [
    {name:"Banana", count:3 },
    {name:"Orange", count:5 },
    {name:"Apple", count:7 },
    {name:"Mango", count:9 }
    ];
```

<div class="uebung" caption="Array aus Objects">
Erstelle die gleiche ungeordnete Liste wie in obigem Beispiel nimm aber `fruitsObj` als Basis. 
</div>


