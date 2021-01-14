# RESTful Webservice - Schülernoten

Beschreibt einen RESTful Webservice der eine Liste von Schülern mit deren Noten verwaltet.
Pro Schüler wird ein Name und eine Note gespeichert.
Der Web-Service weist jedem Eintrag eine eindeutige id zu.
Der Zugriff auf einen Eintrag erfolgt über diese id.

Ein Eintrag im JSON Format:

```json
{"id":1001,"name":"Max Mustermann","grade":3}
```

Ein RESTful Webservice ist ein http Server der Dienste zum Zugriff auf Resourcen über http Methoden zur Verfügung stellt.
Es gibt keine fixe Norm wie dies zu geschehen hat, eher eine Menge von üblichen Regeln. 

Dieses Beispiel zeigt eine typische Anwendung der http Methoden:

- **GET**    
Lesen aller Schüler, bzw. eines einzelnen Schülers
- **POST**    
Einen neuen Schüler anlegen. Der Server weist eine eindeutige id zu und meldet diese an den Client zurück.
- **PUT**    
Ein Eintrag wird vollständig durch neue Daten ersetzt.
- **PATCH**    
Die Daten eines Eintrags werden teilweise geändert.
- **DELETE**    
Ein Eintrag wird gelöscht.



# Liste aller Schüler

Endpunkt:
`/api/grades`    
Methode: GET

Response:  200 OK, Array aller Schüler mit deren Noten

Beispiel:

```bash
# nodeJS
curl http://localhost:3000/api/grades

# Payara/Netbeans
curl http://localhost:8080/grades_netbeans/webresources/grades
```

```json
[{"id":1001,"name":"Max Mustermann","grade":3},{"id":1002,"name":"Eva Musterfrau","grade":1}]
```

# Ein konkreter Schüler

Endpunkt:
`/api/grades/:id`    
Methode: GET

Response:  
- 200 OK,  Einzelner Schüler mit Note
- 404 Not Found, Fehlertext

Beispiele:

```bash
# nodeJS
curl http://localhost:3000/api/grades/1002

# Payara/Netbeans
curl http://localhost:8080/grades_netbeans/webresources/grades/1002
```

```json
{"id":1002,"name":"Eva Musterfrau","grade":1}
```

```bash
# nodeJS
curl http://localhost:3000/api/grades/1234

# Payara/Netbeans
curl http://localhost:8080/grades_netbeans/webresources/grades/1234
```

Die id 1234 ist nicht vorhanden, daher Status Code `404 (Not Found)`
```json
{"code":"ERR_GRADE_NOT_FOUND","message":"grade not found"}
```

# Einen neuen Schüler einfügen

Endpunkt:
`/api/grades`    
Methode: POST    
Daten: Name und Note

Response:  
- 201 Created, Daten: wie im Request, zusätzlich die vergebene ID

Beispiele:

```bash
# nodeJS
curl -i --request POST --header 'Content-Type: application/json' --data '{"name": "Sheldon Cooper", "grade": "1"}' http://localhost:3000/api/grades

# Payara/Netbeans
curl -i --request POST --header 'Content-Type: application/json' --data '{"name": "Sheldon Cooper", "grade": "1"}' http://localhost:8080/grades_netbeans/webresources/grades
```

```json
HTTP/1.1 201 Created
Location: grades/1003
...

{"name":"Sheldon Cooper","grade":"1","id":1003}
```

Beim Anlegen einer neuen Resource ist es Konvention das Http Response Feld `Location` zu setzen.
Der Wert in `Location` kann verwendet werden um einen Link auf die neue Resource zu bilden.
In diesem Beispiel kann die neu angelegt id aber auch aus den Response Daten gelesen werden, was am Client meist einfacher sein dürfte.

# Änderung eines bestehenden Schülers (komplett)

Endpunkt:
`/api/grades/:id`    
Methode: PUT    
Daten: Name und Note

Response:  
- 200 (OK), wie im Request, zusätzlich die ID
- 404 (Not Found), id nicht gefunden

Beispiele:

```bash
# nodeJS
curl -i --request PUT --header 'Content-Type: application/json' --data '{"name": "Jeff Dean", "grade": "1"}' http://localhost:3000/api/grades/1001

# Payara/Netbeans
curl -i --request PUT --header 'Content-Type: application/json' --data '{"name": "Jeff Dean", "grade": "1"}' http://localhost:8080/grades_netbeans/webresources/grades/1001
```

```json
{"id":1001,"name":"Jeff Dean","grade":"1"}
```



# Änderung eines bestehenden Schülers (teilweise)

Endpunkt:
`/api/grades/:id`    
Methode: PATCH    
Daten: Name und/oder Note

Ändert nur die übergebenen Daten und lässt alle anderen unverändert.

Response:  
- 200 (OK), wie im Request, zusätzlich die ID
- 404 (Not Found), id nicht gefunden

Beispiele:

```bash
# nodeJS
curl -i --request PATCH --header 'Content-Type: application/json' --data '{"grade": "4"}' http://localhost:3000/api/grades/1002

# Payara/Netbeans
curl -i --request PATCH --header 'Content-Type: application/json' --data '{"grade": "4"}' http://localhost:8080/grades_netbeans/webresources/grades/1002
```

```json
{"id":1002,"name":"Eva Musterfrau","grade":"4"}
```



# Löschen

Endpunkt:
`/api/grades/:id`    
Methode: DELETE


Response:  
- 204 (No Content), Löschen erfolgreich (keine Daten im Response)
- 404 (Not Found), id nicht gefunden

Beispiele:

```bash
# nodeJS
curl -i --request DELETE http://localhost:3000/api/grades/1001

# Payara/Netbeans
curl -i --request DELETE http://localhost:8080/grades_netbeans/webresources/grades/1001
```


# Quellen / Informationen

- [REST API error return good practice](http://stackoverflow.com/questions/942951/rest-api-error-return-good-practices)
- [Using HTTP Methods for RESTful Services](http://www.restapitutorial.com/lessons/httpmethods.html)
- ['Best' practice for restful POST response](http://stackoverflow.com/questions/19199872/best-practice-for-restful-post-response)
- [Best Practices for Designing a Pragmatic RESTful API](http://www.vinaysahni.com/best-practices-for-a-pragmatic-restful-api#restful)
- [JSend style](https://labs.omniti.com/labs/jsend)
- []()
