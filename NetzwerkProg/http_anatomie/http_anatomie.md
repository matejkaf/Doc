# http Protokoll

Das HTTP Protokoll (OSI Layer 7) definiert die "Sprache" die ein Web-Server versteht.
HTTP: Hyper Text Transfer Protocol



# GET Request

Ein http GET Request wird zum Beispiel ausgeführt wenn ein Web Browser über eine URL eine Webseite laden will:

```url
http://my-server.info/www/hallo.html
```

Vom Client zum Server:

```http
GET /www/hallo.html HTTP/1.1
Host: my-server.info
```

- GET ist die http **Methode** mit der Daten vom http Server angefordert werden.
- /www/hallo.html ist der **Pfad** angeforderte Resource
-  HTTP/1.1 definiert die Version des **Protokolls**

Es folgen Headerfelder. 
Das Feld `Host` ist verpflichtend, es ermöglicht mehrere getrennte Server unter der gleichen IP Adresse zu betreiben.

Der Server antwortet auf den Request mit einem Response:

```http
HTTP/1.1 200 OK
Date: Sat, 28 Jan 2017 10:34:48 GMT
Last-Modified: Fri, 27 Jan 2017 09:17:09 GMT
Content-Language: de
Content-Type: text/html; charset=utf-8
Content-Length: 70

<!DOCTYPE html>
<html>
<body>
<p>Hallo HTML</p>  
</body>
</html>
```

In der ersten Zeile steht der **Statuscode**. 
Die häufigsten sind 200 für Erfolg und 404 wenn die angeforderte Resource nicht vorhanden ist.

```http
HTTP/1.1 404 Not Found
```

Auf die erste Zeile folgen **Header-Felder**, z.B. für die Sprache und das Format der nachfolgenden Daten.
Eine leere Zeile trennt die eigentlichen Daten von den Header-Feldern.

Bei GET werden alle Daten vom Client in der URL übertragen.
Beispiel: Eingabedaten aus einem HTML Formular

```http
GET /wiki/Spezial:Search?search=Katzen&go=Artikel HTTP/1.1
Host: de.wikipedia.org

```

# POST Request

- Daten werden nach dem http Request Header übertragen, nicht in der URL
- Daten sind nicht in der Adresszeile des Browsers sichtbar
- Daten können umfangreicher sein (z.B. für File upload)

Übertragung von Daten aus einem HTML Formular mit POST:

```http
POST /wiki/Spezial:Search HTTP/1.1
Host: de.wikipedia.org
Content-Type: application/x-www-form-urlencoded
Content-Length: 24

search=Katzen&go=Artikel
```

JSON Daten mit POST übertragen:

```http
POST /api/newperson HTTP/1.1
Host: test.org
Content-Length: 49
Content-Type: application/json

{name:{last:"Mustermann",first:"Max"},age:42}
```


# http Methoden

- **GET** =read  
Daten abrufen ohne diese zu ändern
- **POST** =create  
schickt neue Daten an den Server
- **PUT** =update  
bestehende Daten ersetzen
- **PATCH** =modify  
bestehende Daten verändern
- **DELETE** =delete  
löscht Daten vom Server
- **HEAD**  
wie GET aber es wird nur der Header aber keine Daten der Response übertragen.

# http Header

Bei http Request und Response folgen auf die erste Zeile (`GET /www/hallo.html HTTP/1.1` bzw. `HTTP/1.1 200 OK`) die sogenannten Header-Felder

## Request Felder

### Accept

```http
Accept: text/html, application/json
```

Angabe als MIME Type.
Beispiele:
`text/html`,
`text/css`,
`text/javascript`,
`application/json`,
`application/x-www-form-urlencoded`,
`image/gif`,
`image/jpeg`.


## Response Felder

### Content-Length

Länge der im Body übertragenen Daten.

```http
Content-Length: 348
```

### Content-Type

Format der im Body übertragenen Daten.

```http
Content-Type: application/json
Content-Type: text/html; charset=utf-8
```

### Last-Modified

Änderungsdatum und Zeit

```http
Last-Modified: Tue, 15 Nov 1994 12:45:26 GMT
```

### Server

Verwendeter Server

```http
Server: Apache/1.3.27 (Unix) (Red-Hat/Linux)
```

## Cookies

http ist ein Protokoll ohne "Gedächtnis" (*state less*). Wird eine Resource am Server angesprochen hat dieser keine Information über die Vorgeschichte. Da dies aber häufig notwendig ist werden Cookies verwendet.

Cookies werden im http **Response Header** an den Client geschickt:

```http
HTTP/1.0 200 OK
Content-type: text/html
Set-Cookie: yummy_cookie=choco
Set-Cookie: tasty_cookie=strawberry

[page content]
```

Bei jedem **weiteren Request** schickt der Client diese Daten im Header Feld `Cookie`:

```http
GET /sample_page.html HTTP/1.1
Host: www.example.org
Cookie: yummy_cookie=choco; tasty_cookie=strawberry
```

Über Cookies kann der Server zum Beispiel unterschiedliche Benutzer unterscheiden.

`Expires` definiert ein Ablaufdatum.
Über `Path` kann das Cookie nur jenen Webseiten zugeordnet werden die sich an oder unter einem bestimmten Pfad befinden:

```http
HTTP/1.0 200 OK
Set-Cookie: session=Rg3vHJZnehYLjVg7qi3bZjzg; Expires=Tue, 15 Jan 2013 21:47:38 GMT; Path=/
Set-Cookie: made_write_conn=1295214458; Path=/user_accounts
Set-Cookie: reg_fb_gate=deleted; Expires=Thu, 01 Jan 1970 00:00:01 GMT; Path=/
```

Siehe [wikipedia](https://en.wikipedia.org/wiki/HTTP_cookie)