
# Allgemeines

[express](http://expressjs.com) ist ein npm Modul das die Implementierung von **http Servern** stark vereinfacht.


# Installation

```bash
mkdir myapp
cd myapp
npm init
npm install express --save
```


# Minimal Beispiel

Minimaler **Webserver** zum Zugriff auf statische Resourcen (Dateien) im Verzeichnis `public`.

```javascript
const express=require('express')

const app=express()
app.use(express.static('public'))

app.listen(3000,function() {
    console.log('listening on port 3000')
})
```

<div class="uebung" caption="Web Server">
Teste mit einer html (mit Bild), css, javascript Kombination.
</div>

# Routing

Mittels Routing reagiert eine Server-Applikation auf Requests.
Das Routing  geschieht aufgrund der HTTP Request **Methode** (GET, POST, ...) sowie dem **Pfad** in der URL.

Handler Funktionen werden als callback realisiert.
Beispiel (GET Request auf Pfad `/hello`):

```javascript
app.get('/hello', function (req, res) {
  res.send('Hello World!')
})
```

Beispiel für URL:

```url
http://localhost:3000/hello
```

Weitere Routing Funktionen: `post`, `delete`, `put`, etc.

## Route parameter

Route parameter sind variable Bestandteile (z.B. Nummern, Id's, ...) im Pfad.

Beispiel URL:

```url
http://localhost:3000/api/students/1234
```

```javascript
app.get('/api/students/:studentId',
    function (req,res) {
        let studentId = req.params.studentId
    })
```



## Response mit HTTP Content type

Setzt den Wert des http Header Felds `Content-Type` (aka MIME type) im http-Response:

```javascript
res.type('text/plain').send('giving some hints\n')
```


## Response mit HTTP Status-Code

Setzen des Status Codes im HTTP Response.

```javascript
res.status(404).send('Uuups!')
```

## Übungen

<div class="uebung" caption="AddMul Server">

Erstelle einen Server der Addition und Multiplikation von 2 Zahlen unterstützt.
Beispiel URLs':

```url
http://localhost:3000/api/calc/add/42/53
http://localhost:3000/api/calc/mul/7/9
```

</div>


<div class="uebung" caption="AddMul Server II">

Ändere so, dass die Argumente als Query String übergeben werden:

```url
http://localhost:3000/api/calc/add?arg1=42&arg2=21
```

Hinweis:

```javascript
app.get('/api/calc/add', function(req,res){
    console.log(req.query)
})
```

</div>




# JSON Daten

Um JSON Daten in body vom Request und/oder Response zu übertragen wird das `npm` Modul `body-parser` benötigt. 

Installation:

```
$ npm install body-parser --save
```

Initialisierung:

```javascript
const bodyParser = require("body-parser");
app.use(bodyParser.json());
```

Beispiel - callback für POST Request mit JSON Daten im http-body:

```javascript
app.post(
    '/api/recvjson',
    function (req,res) {
        console.log(req.body); // parsed object
        res.send('api request POST\n')
    }
)
```

`req.body` enthält die geparsten JSON Daten (als javascript Objekt).

Für Response im JSON Format (Funktion `json` statt `send`):

```javascript
var student = {name:'Eva Musterfrau', grade:1};
res.json(student) // status 200
```

Fehlermeldungen:

```javascript
var error = {errtxt:'Student with ID '+req.params.studentId+' not found'}
res.status(404).json(error)
```

## Übungen

<div class="uebung" caption="AddMul Server mit JSON">

Erweitere den AddMul Server um die Möglichkeit die Berechnungen als JSON Array an den Server zu schicken. 

URL:

```url
http://localhost:3000/api/calcjson
```

Im Request Body werden die Daten im folgenden Format an den Server gesendet:

```json
[
    {"operator":"+", "leftoperand":34, "rightoperand":44},
    {"operator":"*", "leftoperand":27, "rightoperand":66}
]
```

Die Antwort vom Server soll die Ergebnisse enthalten:

```json
[78,1.782]
```

</div>



# RESTful API Design

REST steht für
*Representational State Transfer* und bezeichnet einen Typ von Software Architekturen zur Implementierung verteilter Systeme.
Als **RESTful** werden Implementierungen bezeichnet die diese Architektur umsetzen. 

Im Allgemeinen sind damit Server gemeint die Dienste über das http Protokoll anbieten. Die Unterscheidung zwischen mehreren Diensten erfolgt über den Pfad der URL. Daten werden im JSON Format (teils auch XML) übertragen.
Häufig wird dies auch als **Webservices** bezeichnet.


## http Methoden

Die Standard HTTP Methoden und deren Bedeutung für einen RESTful Webservice:

- **GET** =read  
Spezielle Daten abrufen über Pfad bzw. Route Parameter.
- **POST** =create  
schickt neue Daten an den Server
- **PUT** =modify  
bestehende Daten verändern (über identifier). Kann auch für neue Resourcen verwendet werden wenn der neue identifier bekannt ist.
- **DELETE** =delete  
löscht Daten vom Server


## Response Statuscodes

- 200 OK  
Allgemeine positive Bestätigung. Daten werden im Response Body erwartet.
- 201 CREATED  
Erfolgreich eine neue Resource angelegt (POST oder PUT). Location Header sollte einen Link auf die neu angelegte Resource enthalten. Body sollte die Resource komplett zurück liefern.
- 204 NO CONTENT  
Kennzeichnet Erfolg, aber keine Daten im response body. 
Häufig bei DELETE and PUT.
- 400 BAD Request  
Falsche/fehlende Daten, etc.
- 404 NOT FOUND  
Resource existiert nicht.
- 409 CONFLICT  
Resource existiert bereits (z.B. bei POST)



## Location Header

Wird durch einen Request eine neue Resource erzeugt (was bei POST üblicherweise der Fall ist) so soll das Location Feld im Response Header einen Link auf diese Resource enthalten.

Beispiel: Anlegen eines neue Charakters für ein online Spiel:

```htttp
POST /api/player HTTP/1.1
Host: localhost:8000
Content-Type: application/json

{
    "nickname": "Geek Dev1",
    "avatarNumber": 5
}
```

Dem Spieler wird im Server Programm eine neue id zugewiesen.
Setzen des Location Headers im Code:

```javascript
res.location('/api/player/' + id)
```

Der Location Header im Response enthält den Link:

```http
HTTP/1.1 201 Created
...
Location: /api/player/1234
Content-Type: text/html; charset=UTF-8

It worked. Believe me - I'm an API
```

Ein GET Request auf diesen Link im Location Header Feld ergäbe die Daten des neu angelegten Charakters im JSON Format.


# Übungen

<div class="uebung" caption="Notenliste RESTful API">
Erstelle einen RESTful Webservice für die Notenliste (Dokument: "04_gradesService.pdf").
Die Daten sollen in Variablen verwaltet werden, d.h. gehen bei einem Neustart verloren.
</div>


# HTML Formulare

Verarbeiten von Daten die in einem HTML Formular eingegeben wurden.

## GET Methode

HTML Code des Formulars:

```html
<form action="forms/savePerson" method="GET">
    <fieldset>
        <legend>Person GET</legend>
        <input value="Müller" type="text" name="persName" placeholder="Name"><br>
        <input value="21" type="number" name="persAge" placeholder="Alter">
        <input type="submit" value="Senden">
    </fieldset>
</form>
```

URL:

```url
http://localhost:3000/forms/savePerson?persName=Müller&persAge=21
```

```javascript
const express=require('express')

const app=express()

app.get('/forms/savePerson', function(req,res){
    console.log(req.query) // { persName: 'Müller', persAge: '21' }
    res.send('GET /forms/savePerson');
})
```

`req.query` enthält die gesendeten Daten geparst als JS Objekt.


## POST Methode

```html
<form action="forms/savePerson" method="POST">
    <fieldset>
        <legend>Person GET</legend>
        <input value="Müller" type="text" name="persName" placeholder="Name"><br>
        <input value="21" type="number" name="persAge" placeholder="Alter">
        <input type="submit" value="Senden">
    </fieldset>
</form>
```

URL:

```url
http://localhost:3000/forms/savePerson
```

`body-parser` ([github](https://github.com/expressjs/body-parser)) Paket wird benötigt.

```javascript
const express=require('express')
const bodyParser = require('body-parser');
const app=express()

// parse 'Content-Type: application/x-www-form-urlencoded'
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/forms/savePerson', function(req,res){
    console.log(req.body) // { persName: 'Müller', persAge: '21' }
    res.send('POST /forms/savePerson');
})
```

`req.body` enthält die gesendeten Daten geparst als JS Objekt.


# Quellen

Allgemein:
- [expressjs.com](http://expressjs.com/)
- [GitHub](https://github.com/expressjs/express)

Liste von Tutorials/Dokumenten:   
- [stackoverflow](http://stackoverflow.com/questions/8144214/learning-express-for-node-js)
- [Create a Web App and RESTful API Server Using the MEAN Stack](https://devcenter.heroku.com/articles/mean-apps-restful-api#create-a-restful-api-server-with-node-js-and-express)
- [Using HTTP Methods for RESTful Services](http://www.restapitutorial.com/lessons/httpmethods.html)
- [Best Practices for Designing a Pragmatic RESTful API](http://www.vinaysahni.com/best-practices-for-a-pragmatic-restful-api)
- [Google Trends JSON vs. XML](https://trends.google.com/trends/explore?date=all&q=xml%20api,json%20api)
