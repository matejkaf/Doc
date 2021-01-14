# RESTful Webservice in Netbeans

Erweiterte Funktionen mit JAX-RS.

# Http Response Code

Standardmäßig melden alle JAX-RS Webservice Endpunkte den Http Statuscode 200 zurück.
Für einen anderen Statuscode (z.B. `404 Not Found`) ist als return Wert die Klasse [`Response`](http://docs.oracle.com/javaee/7/api/javax/ws/rs/core/Response.html) zu verwenden. 

```java
public Response getEndpoint() {
    if (/* OK? */) {
        return Response.ok().entity(grade).build();
    } else {
        String ret = "{\"code\":\"ERR_GRADE_NOT_FOUND\",\"message\":\"grade not found\"}";
        return Response.status(Response.Status.NOT_FOUND).entity(ret).build();
    }
}
```

Die Methoden lassen sich, wie im obigen Beispiel, verketten (indem alle Methoden die Klasse [`Response.ResponseBuilder`](http://docs.oracle.com/javaee/7/api/javax/ws/rs/core/Response.ResponseBuilder.html) zurück geben).

`ok()` setzt Statuscode 200, mit `status()` kann ein beliebiger Statuscode gesetzt werden.

`entity()` bestimmt die im Http Response Body zu sendenden Daten (Klasse `String` oder ein Klasse die in JSON gewandelt werden kann).

Die Methode `build()` am Ende erzeugt das eigentliche `Response` Objekt.

Dies ist ein allgemein unter dem Namen [Builder Pattern](https://en.wikipedia.org/wiki/Builder_pattern) bekanntes Design Pattern des Objekt Orientierten Designs.

# Http Response Header

Zum Setzen von Response Header Feldern dient die ResponseBuilder Methode `header()`

Anwendung, zum Beispiel zum setzen des `Location` Felds im Response eines POST Requests.
Erklärung:
POST erzeugt eine neue Resource, mit dem `Location` Feld wird zurück gemeldet unter welcher URL diese angesprochen werden kann. Dies ist notwendig, da der Server der neuen Resource eine eindeutige ID zuweist, die dem Client auf diesem Weg mitgeteilt werden kann. 

```java
@POST
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public Response post(Grade grade) {
    System.out.println("post: "+grade);
    Grade newGrade = Model.getInstance().addNewGrade(grade);
    return Response.
            status(Response.Status.CREATED). // 201
            header("Location", "grades/"+newGrade.getId()).                
            entity(newGrade).
            build();
}


```

# Client Seite

Um auf der Seite des Clients Methoden wie POST zu verwenden ist folgender Code notwendig.
Setzt Felder im http Request und schickt Daten ebenfalls im Request.

```java
URL url = new URL("http://...");
HttpURLConnection con = (HttpURLConnection)url.openConnection();
con.setRequestMethod("POST");
con.setRequestProperty("content-type", "application/json");

// sende Daten im http request body
String sendJson = "{\"name\":\"Sheldon Cooper\",\"grade\":\"1\"}";
DataOutputStream outputStream = new DataOutputStream(con.getOutputStream());
outputStream.writeBytes(sendJson);
outputStream.flush();
outputStream.close();

int httpResponseCode = con.getResponseCode(); // 201, etc.
BufferedReader br = new BufferedReader(
        new InputStreamReader((con.getInputStream())));
String json = "";
String line;
while ((line = br.readLine()) != null) {
    json += line.trim();
}
System.out.println(json);

```