---
title: Übung Web Server (.NET sockets)
cmds: ['md_html.bash','md_html.bash --small']
---

**Übung (WebServer)**

Implementiere einen Web-Server, der html, png und jpg Dateien liefern kann.

http Protokoll Basics:

Request

```http
GET / HTTP/1.1
Host: www.example.com

```

Zeilenende ist `\r\n`.  Ganz am Ende ist eine Leerzeile, d.h. `\r\n\r\n`.

Response

```http
HTTP/1.1 200 OK
Content-Type: text/html; charset=UTF-8
Content-Length: 155
Connection: close

<html>
  <head>
    <title>An Example Page</title>
  </head>
  <body>
    <p>Hello World, this is a very simple HTML document.</p>
  </body>
</html>
```

Zwischen dem Header und den Daten ist eine Leerzeile

404 (not found) Response

```http
HTTP/1.1 404 Not Found
Content-Type: text/html
Content-Length: 169
Connection: close

<html>
<head><title>404 Not Found</title></head>
<body bgcolor="white">
<center><h1>404 Not Found</h1></center>
<hr><center>nginx/0.8.54</center>
</body>
</html>
```

---

