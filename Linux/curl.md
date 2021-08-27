---
title: cURL
tags: [lecture]
---

cURL = client URL

> curl is used in command lines or scripts to transfer data

Tool für die Kommandozeile zum Absetzen von http Requests und Anzeige der http Response.
[curl Homepage](https://curl.haxx.se)

Grundlegende Verwendung:

```bash
curl http://httpbin.org/ip
```

Hinweis – Für Tests eines http clients: [http://httpbin.org](http://httpbin.org)



## Allgemeine Optionen

`-i`, `--include`: Zeigt den Header der http Response an.

```bash
curl --include http://httpbin.org/ip
```

`-v`, `--verbose`: Zeigt Details über den Verbindungsaufbau, den http request header und den http response header.

`--header`: Zeigt nur den Header

`--silent`: Keine Fortschrittsanzeige

```sh
$ curl --head --silent google.com | grep 'Content-Length' | cut -d ' ' -f 2
219
```



# http request header Feld

`-H`, `--header`:  
Setzt ein request header field. Mehrfach anwendbar. Beispiel:

```bash
curl --header 'Accept:application/json' http://httpbin.org/headers
```



# http Methode

`-X`, `--request`  
Bestimmt die http Request Methode

```bash
curl --request DELETE httpbin.org/delete
```


`-d`, `--data`:  
Daten für POST.

```bash
curl --request POST --header 'Content-Type: application/json' --data '{"name": "Max Mustermann", "grade": "3"}' http://httpbin.org/post
```
