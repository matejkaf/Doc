---
title: Java Script
subtitle: Web API
tags: [lecture]
---

## Ereignisse

Über Attribute:

```javascript
<button onclick="pressed();">Klick Mich!</button>
...
function pressed() {
}
```

oder `addEventListener` (Event Name ohne "on")

```javascript
document.getElementById("myBtn").addEventListener("click", function(){
    // do it
});
```

Liste der Events auf [w3schools](https://www.w3schools.com/tags/ref_eventattributes.asp).



## Timing Events

Wiederholend:
```javascript
setInterval(function(){
        // do something here
    },
    1000); /* Millisekunden */
```

Einmalig:
```javascript
setTimeout(function(){ ... },milliseconds);
```



## Formulare

```html
<form onsubmit="formSubmit(this);return false">
    Enter: <input type="text" name="myName">
    <input type="submit">
</form>
```

`return false` verhindert *page reload*.

```javascript
function formSubmit(formElement) {
    let inputElement = formElement.elements['myName']
    console.log(inputElement.name)
    console.log(inputElement.value)
}
```

`.elements` nur bei Forms vorhanden



## AJAX

Asynchronous JavaScript and XML.

```javascript
var httpReq = new XMLHttpRequest();
httpReq.open("POST", "/api/trainings/");
httpReq.setRequestHeader("Content-Type", "application/json");
httpReq.onload = function () {
    if(this.status==200) {
        let response = JSON.parse(this.responseText)
    } else {
        console.log('Response code '+ this.status)
    }
};
httpReq.onerror = function () {
    console.log("Error ")
};
httpReq.send(JSON.stringify(training))
```



## DOM

Document Object Model ([w3schools](https://www.w3schools.com/jsref/dom_obj_document.asp))

Ist die interne Browser Repräsentation einer Web Seite.

Besteht aus nodes die als Baum organisiert sind. 
`document` ist der root node.

node mit einer bestimmten id finden:

```javascript
document.getElementById("myid");
```

### Element node

```javascript
if(el.nodeType==1) { }
```

Properties:
```javascript
el.childNodes // element, text und comment nodes
el.children // nur element nodes
el.parentNode
el.nodeName // tag name, z.B. p bei <p>
el.nodeType // element: 1, text: 3, comment: 8, document: 9
```

Methoden:
```javascript
el.hasAttributes()
el.hasChildNodes()
el.getElementsByClassName("example");
el.getElementsByTagName("p")
```

### Attribute

Attribute sind Properties eines Element nodes:

```javascript
el.id
el.classList
el.innerHTML="Hello World";
image.src = "bild.png"
el.style.cssText = "color:red;text-align:center;";
el.style.color="fuchsia";
el.style.textAlign = "center";
// CSS: aus Bindestrichen wird CamelCase
```

Attribute allgemein

```javascript
if(el.hasAttributes()) {
    console.log(el.attributes) // NamedNodeMap
    let attrs=el.attributes
    for(let i=0; i<attrs.length; i++) {
        let attr = attrs[i]
        console.log(attr.name +'='+attr.value)
    }
}
```

```javascript
el.hasAttribute("attrName")
el.getAttribute("attrName")
```

### Text Node

```javascript
if(el.nodeType==3) { }
```

```javascript
el.nodeValue // text als string
el.nodeValue='xyz' // setzt den Text
```