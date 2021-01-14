# JSON in JavaScript

Das JSON Datenformat ist von der JavaScript Syntax abgeleitet, JSON Strings und JS Objekte sind daher sehr einfach ineinander umuwandeln.

Informationen:

- [w3schools](https://www.w3schools.com/js/js_json.asp)
- [MDN JSON Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)
- [MDN: Working with JSON data](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON)

# JSON Objekt

In JavaScript gibt es das Objekt `JSON` das 2 Methoden bietet:

- `JSON.parse(string)`
[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)  
Erzeugt in JavaScript Objekt aus einem JSON String.

- `JSON.stringify(object)`
[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)  
Liefert die JSON repräsentation des übergebenen JavaScript Objekts. 

## JSON.parse()

```javascript
// parse a JSON string
var jsonString = '{"name":"Mustermann","age":42}';
var parsedObj = JSON.parse(jsonString);
console.log(typeof parsedObj)
console.log(parsedObj)
```

## JSON.stringify

```javascript
var timetableObj = {
  'Montag': [
    { subject: 'FSST', start: '07:50', duration: 50 },
    { subject: 'SEN', start: '08:45', duration: 50 },
    { subject: 'GBP', start: '09:40', duration: 50 }
  ],
  'Dienstag': [
    { subject: 'AM', start: '07:50', duration: 50 },
    { subject: 'D', start: '08:45', duration: 50 },
    { subject: 'PBE3', start: '09:40', duration: 50 }
  ]
}
var timetableStr = JSON.stringify(timetableObj)
console.log(timetableStr)
```

Ergibt:

```
{"Montag":[{"subject":"FSST","start":"07:50","duration":50},{"subject":"SEN","start":"08:45","duration":50},{"subject":"GBP","start":"09:40","duration":50}],"Dienstag":[{"subject":"AM","start":"07:50","duration":50},{"subject":"D","start":"08:45","duration":50},{"subject":"PBE3","start":"09:40","duration":50}]}
```