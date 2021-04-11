---
title: Javascrip / HTML
subtitle: Snippets
tags: [info,5AHELS]
---

# Inhaltsverzeichnis

* TOC
{:toc}
## Readonly

```html
<input id="membernrinput" name="membernr" readonly="readonly">
```


## Hidden, visibility, display

### HTML form field
```html
<input type="hidden">
```

### visibility (space occopied)
```html
<div  style="visibility: hidden">not shown, but space occupied</div>
```

- `visibility: hidden` hides the element, but it still takes up space in the layout.
[w3schools](https://www.w3schools.com/jsref/prop_style_visibility.asp)
```javascript
document.getElementById("remember").style.visibility = 'visible'
document.getElementById("remember").style.visibility = 'hidden'
```

### display

```html
<div id="divCheckbox" style="display: none;">
```

- `display: none` removes the element completely from the document, it doesn't take up any space.

```javascript
document.getElementById('submitCreateButton').style.display = '' // show
document.getElementById('submitUpdateButton').style.display = 'none'
```



## DOM attribute 'class'

[HTML DOM classList Property](https://www.w3schools.com/jsref/prop_element_classlist.asp)

```javascript
element.classList.add("mystyle");
element.classList.remove("mystyle");
```



## XMLHttpRequest

[Using XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)

Drei Möglichkeiten:

- `onreadystatechange`: wird von allen Browsern unterstützt

```javascript
var httpReq = new XMLHttpRequest(),
    method = "GET",
    url = "https://developer.mozilla.org/",
    synchronous = synchronous;

httpReq.open(method, url, true);
httpReq.onreadystatechange = function () {
        if(httpReq.readyState === XMLHttpRequest.DONE && httpReq.status === 200) {
            console.log(httpReq.responseText);
        }
    };
httpReq.send();
```

- `onload`:  `onerror`, etc. sind spätere Erweiterungen.

```javascript
var httpReq = new XMLHttpRequest();
httpReq.open("POST", "/api/trainings/");
httpReq.setRequestHeader("Content-Type", "application/json");
httpReq.onload = function () {
    if(this.status==200) {
    } else {
        console.log('Response code '+ this.status)
    }
};
httpReq.onerror = function () {
    console.log("Error ")
};
httpReq.send(JSON.stringify(training))
```

- `addEventListener`: Die Unterstützung des `addEventListener` APIs ist wiederum eine noch jüngere Erweiterung.

```javascript
var httpReq = new XMLHttpRequest();
httpReq.addEventListener("load", function () {
    let response = JSON.parse(this.responseText)
});
let url='http://maps.googleapis.com/maps/api/geocode/json?address=5280+Braunau,Osternbergerstr.+55'
httpReq.open("GET", url);
httpReq.send();
```



```javascript
function postRating(rating)
{
  console.trace('postRating')
  console.log(rating)
  const httpReq = new XMLHttpRequest()
  httpReq.addEventListener("load", function() {
    console.log('POST Response received')
    const response = JSON.parse(this.responseText)
    console.log(response)
    reloadRatings()
  })

  const url = '/api/ratings/'
  httpReq.open('POST',url)
  httpReq.setRequestHeader("Content-Type", "application/json");
  httpReq.send(JSON.stringify(rating))
}
```

[[REPL 5AHELSGrpARatingsAPI](https://replit.com/@htlmatejka/5AHELSGrpARatingsAPI)]



## Query String encoding

```javascript
serialize = function(obj) {
  var str = [];
  for(var p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return str.join("&");
}
console.log(serialize({foo: "hi there", bar: "100%" }));
// foo=hi%20there&bar=100%25
```



## Query String parsing

In einer Webseite auf den query string zugreifen

```javascript
let objQuery = parseQuery(location.search)

...
function parseQuery(query) {
    let objQuery = {}
    var parameters = query.substring(1).split("&");
    parameters.forEach(function(str){
        let kv = str.split('=')
        objQuery[kv[0]] = decodeURIComponent(kv[1])
    })
    return objQuery
}

```


## All SubElements

Ohne Rekursion:

```javascript
let el = document.getElementById('attendance') // contains table
let elements = el.getElementsByTagName("*")
```


## Forms Element Zugriff

```html
<form action="" onsubmit="savePerson(this);return false">
    <fieldset>
        <legend>Neue Person</legend>
        <input value="Müller" type="text" name="persName" placeholder="Name"><br>
        <input value="21" type="number" name="persAge" placeholder="Alter">
        <input type="submit" value="Übernehmen">
    </fieldset>
</form>
```

`formObject.elements` speziell für Forms

```javascript
document.getElementById("myForm").elements[0].value;

// für name="fname"
document.getElementById("myForm").elements.namedItem("fname").value;

// Kürzer
document.getElementById("myForm").elements["fname"].value;

```

## Form processing without page reload

```html
<form id="idForm" method="post">
<button type="submit">Firmen Daten Speichern</button>
</form>
```

```javascript
let form = document.forms.namedItem('idForm');

form.addEventListener('submit', function(ev)
{
    let oData = new FormData(form);

    let xhr = new XMLHttpRequest();

    xhr.open("POST", "htl_job_company_save.php", true);
    xhr.onload = function(oEvent) {
        if (xhr.status == 200) {
            let response = JSON.parse(this.responseText);
            if (response.success) {
                console.log('Erfolgreich gespeichert');
                onDataSaved(response);
            } else {
                console.log("Fehler! "+response.errortext);
            }
            
        } else {
            console.log("Fehler! Server Status Code: "+xhr.status);
        }
    };
    xhr.onerror = function () {
        resultText( "Fehler! Keine Verbindung mit Server." );
    };
    xhr.send(oData);
    ev.preventDefault(); // prevent page reload after form submit

}, false );
```


## Checkbox

```javascript
checkbox.checked = true
checkbox.checked = false
```

```html
<input type="checkbox" name="chckName" checked="checked" value="true">
```

Unchecked wenn `checked` Attribut fehlt!


## disable

```html
<input type="button" name=myButton value="disable" disabled>
```

``` javascript
foo.disabled = true
```

Problem: Keine Daten von Radio Buttons mit `disabled`!
Lösung: den selektierten button auf enabled lassen (alle anderen disabeln).

## Web Storage API

Speichert Werte solange ein Tab geöffnet ist, auch über page loads hinweg.

```javascript
sessionStorage.setItem('colorSetting', '#a4509b')
let colorSetting = sessionStorage.getItem('colorSetting')
```


## Date

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)

[ISO 8601 Extended Format](http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.1.15)

Unterscheidet zwischen universeller UTC und local time.

```javascript
let today = new Date()
console.log(typeof today) // object
console.log(today) // 2017-02-14T15:21:32.289Z (UTC)
console.log(toGermanString(today))

let day = new Date('2017-03-01')
console.log(day)

let anotherday = new Date(2017, 3, 1, 0, 0) 
// month 0,..,11. Locale time -> stored as UTC!
console.log(anotherday)
```

Log Ausgaben zeigen die UTC Zeit.

```javascript
function toGermanString(date) {
    let dateString = ('0' + date.getDate()).slice(-2) + '.'
             + ('0' + (date.getMonth()+1)).slice(-2) + '.'
             + date.getFullYear()
    return dateString
}
```

```javascript
function parseDate(input) {
  var parts = input.match(/(\d+)/g);
  // note parts[1]-1

  return new Date(parts[2], parts[1]-1, parts[0]);
}
```

```javascript
let parsed = parseDate('31.05.2010');
console.log(toGermanString(parsed))
```

## data Attribut

[w3schools](https://www.w3schools.com/tags/att_global_data.asp)

```html
    <button id="mybutton" data-id="23" onclick="buttonPressed(this)">Click Me!</button>
```

```javascript
function buttonPressed(buttonEl)
{
    console.log('buttonPressed')
    console.log(buttonEl)
    console.log(buttonEl.getAttribute('data-id')) // 23
}
```


## Regular Expressions

[RegEx Tester](https://regex101.com)

successive matches (mit `g`)

```javascript
var regex = /\((\d*?)\)/g;
var str = " dsfsdjf slfjsdf ldskjf (2) saldfj  (233) lsdf ";
let match
while ((match = regex.exec(str)) !== null) {
    console.log(match)
}
```

Siehe [RegEx101](https://regex101.com/r/VcVBKv/1)



## Dynamisches HTML

- `document.createElement`
- `appendChild`

```javascript
    tdEl = document.createElement('td')
    tdEl.innerText = "\u22d3" // unicode codepoint
    tdEl.style.fontSize="24px"
    tdEl.style.textAlign="center"
    tdEl.style.cursor="pointer"
    tdEl.dataset.id = rating['id']  // attribute "data-id"
    tdEl.onclick = function () { deleteClicked(this) } // this = tdEl
    rowEl.appendChild(tdEl)
	...
}
  
function deleteClicked(tdEl)
{
  console.log("delete clicked")
  let rating_id = tdEl.dataset.id
  ...
}
```

```javascript
let tableEl = document.createElement('table')
tableEl.style.border = 'solid 1px black'
```

Andere Möglichkeit zum setzen eines Click Event Handlers:

```javascript
buttonEl = document.createElement('button')
buttonEl.innerText = 'X'
buttonEl.setAttribute('data-id',rating['id'])
buttonEl.addEventListener('click',function () {
  let id = parseInt(this.getAttribute('data-id'))
  console.log(id)
  deleteRating(id)
})

datarow.appendChild(buttonEl)
```






## ECMAScript 5

### forEach function

```javascript
["dog", "cat", "hen"].forEach(function(currentValue, index, array) {
  // Do something with currentValue or array[index]
});
```



## ECMAScript 6

[ECMAScript 6 Tutorial - Mortgage Calculator](http://ccoenraets.github.io/es6-tutorial/)

- `let` - Block scoped variables.
- Destructuring (return mehrerer Werte)
- Arrow Functions
- Module Support
- Klassen
- Promises
- Template Strings


### Destructuring

```javascript
return {principal, years, rate, monthlyPayment, monthlyRate};
```

This is a shorthand for the following ECMAScript 5 syntax:

```javascript
return { principal: principal, 
         years: years, 
         rate: rate, 
         monthlyPayment: monthlyPayment, 
         monthlyRate: monthlyRate };
```

```javascript
let {monthlyPayment, monthlyRate} = calculateMonthlyPayment(principal, years, rate);
```

Zuordnung per Name.

[MDN - Destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

### Arrow Functions

[](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

[](http://www.2ality.com/2012/04/arrow-functions.html)

### Native Module Support

 Webpack and Browserify 

```javascript
export let calculateMonthlyPayment = (principal, years, rate) => {
    ...
};
```

 ```javascript
 import * as mortgage from './mortgage';

 mortgage.calculateMonthlyPayment(...)
 ```


### Klassen

[](http://ccoenraets.github.io/es6-tutorial/classes/)


### Promises

Promises have replaced callback functions as the preferred programming style for handling asynchronous calls. 

```javascript
let url = "rates.json";
    
fetch(url)
    .then(response => response.json())
    .then(rates => {
      let html = '';
      rates.forEach(rate => html += `<tr><td>${rate.name}</td><td>${rate.years}</td><td>${rate.rate}%</td></tr>`);
      document.getElementById("rates").innerHTML = html;
    })
    .catch(e => console.log(e));
```

`fetch` ist Ersatz für `XMLHttpRequest` (nicht von allen Browsern unterstützt).


### Template Strings

Ermöglichen sogenannte *String Interpolation* – siehe [Template Strings](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/template_strings).

```javascript
let x=2
let y=3
let str=`${x} / ${y+x}`
```
