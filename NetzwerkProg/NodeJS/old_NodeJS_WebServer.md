# Einfacher Web Server

In diesem Modul entwickeln wir einen einfachen Web-Server mit NodeJS.

```javascript
var http=require("http");
console.log("Create Server...");
var server = http.createServer(
    function(request, response) {
        console.log("Request received");
        response.writeHead(200,{"Content-Type":"text/plain"});
        response.write("Hello from Server\n");
        response.write("Second Line");
        response.end();
    }
);
console.log("Start Server...");
server.listen(4242);
console.log("Server is listening");
```

Zugriff mit `http://localhost:4242/`

`writeHead` Parameter sind der http Response Code und Header Felder.

# curl

# Server mit File Zugriff

```javascript
var http=require("http");
const path = require('path');
const fs = require('fs');

const httpDataBaseDir = 'public'
const port=4242;

console.log("Create Server...");
var server = http.createServer(
    function(request, response) {
        console.log("URL: "+request.url);

        // response with file content
        filePath = path.join(httpDataBaseDir,request.url);
        console.log(filePath);

        var stat = fs.statSync(filePath); // for size access
        response.writeHead(200, {
            'Content-Type': 'text/html',
            'Content-Length': stat.size
        });
        var readStream = fs.createReadStream(filePath);
        readStream.pipe(response); // readStream --> response
    }
);
console.log("Starting Server...");
server.listen(port);
console.log("Server is listening on "+port);
```

```
curl http://localhost:4242/index.html
```

mit header
```
curl -v http://localhost:4242/index.html
```

Stream und pipe.

[pipe](https://nodejs.org/dist/latest-v6.x/docs/api/stream.html#stream_readable_pipe_destination_options)

Unterstützung des MIME Types.

Zugriff mit leerem Pfad

```
http://localhost:4242/
``` 

Web-Server laden in diesem Fall `index.html`.
Umsetzung:

```javascript
urlPath=request.url;
if(urlPath=="/") {
    urlPath="/index.html";
}
filePath = path.join(httpDataBaseDir,urlPath);
console.log(filePath);
```

Zugriff auf nicht vorhandenes File.

```javascript
if (!fs.existsSync(filePath)) {
    console.log("File not found");
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.write("404 Not Found\n");
    response.end();
} else {
    // response with file content
    ...
}
```

Erweiterung des HTML codes um ein Bild.

```html
<img src="images/logo.gif" alt="">
```

Direktes öffnen - Problem!

```
http://localhost:4242/images/logo.gif
```

Grund: MIME Type im Response Header stimmt nicht.

[Liste von MIME Typen]https://wiki.selfhtml.org/wiki/Referenz:MIME-Typen)

```javascript
// MIME Type from File extension
var mimeType = 'text/html';
var fileExtension = path.extname(filePath).toLowerCase();
console.log(fileExtension);
if(fileExtension=='.gif')
    mimeType='image/gif';
else if (fileExtension=='.jpg' || fileExtension=='.jpeg')
    mimeType='image/jpeg';

// response with file content
var stat = fs.statSync(filePath); // for size access
response.writeHead(200, {
    'Content-Type': mimeType,
    'Content-Length': stat.size
});
```

# Dateneingabe über Formular

```javascript
<form method="get" action="user-login">
    <input type="text" placeholder="user" name="username">
    <input type="password" placeholder="password" name="password">
    <input type="submit">
</form>
```

Bei Submit wird folgender Pfad (=query string) übergeben

```
/user-login?username=sdf&password=sdf
```

Auswerten der Daten mit dem [URL modul](https://nodejs.org/api/url.html).


```javascript
var url=require("url");
const query_handler=require("./query_handler")
...
//test for formular data submit
var urlObject=url.parse(request.url, true); //parseQueryString=true
if(!(Object.keys(urlObject.query).length === 0)) {
    if(urlObject.pathname=='/user-login')
        query_handler.login(urlObject.query, response);
    return;
} 
```

`query_handler.js`:

```javascript
function login(query, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Username="+query.username);
    response.write("\nPassword="+query.password);
    response.end();
}
exports.login = login;
```

# Express

Das `npm` Modul `express` vereinfacht die Entwicklung von Web-Servern.

Express kann, u.a.

- Statische Files (HTML, jpg, ...) verwalten
- Web Services implementieren
- http Methoden (GET, POST, ...) berücksichtigen
- Im http gesendete Daten (z.B. JSON) verarbeiten
- ...
