---
title: RESTful API
subtitle: Flask (Python)
tags: [5AHELS, lecture, python, flask, repl]
---

# Flask

Alternative zu Flask wäre Django ([Vergleich](https://testdriven.io/blog/django-vs-flask/)).

```bash
$ python3 -m pip install flask
# sudo on MacOS!
```

```python
#! /usr/bin/python3
from flask import Flask

app = Flask(__name__)

@app.route('/')
def index():
    return "Hello, World!"

if __name__ == '__main__':
    app.run(host='0.0.0.0',debug=True)
```

- [stackoverflow: What does the “at” (@) symbol do in Python?](https://stackoverflow.com/questions/6392739/what-does-the-at-symbol-do-in-python) – Decorator [](https://realpython.com/primer-on-python-decorators/), kurz: Funktion wird als Parameter übergeben.
- Interessant: automatischer restart des Server Scripts bei Änderung



## Ausbaustufe

mit POST und PUT

```python
from flask import Flask, render_template, jsonify, abort

ratings = [{
    'id': 1,
    'name': u'Kößlarner',
    'rating': 5,
}, {
    'id': 2,
    'name': 'faxe',
    'rating': 1,
}, {
    'id': 3,
    'name': 'Oettinger',
    'rating': 5,
}, {
    'id': 4,
    'name': 'Stiegl',
    'rating': 3,
}]

app = Flask(
    __name__,
    static_folder='static',
    template_folder='templates',
)


@app.route('/')
def index():
    return 'Hello Flask'


@app.route('/2')
def template_test():
    return render_template('template01.html', myVar=1234)


# GET ratings
# curl -i https://FlaskTest015AHELSGrpB.franzmatejka.repl.co/ratings
@app.route('/ratings', methods=['GET'])
def get_ratings():
    return jsonify(ratings)


# GET ratings single
# curl -i https://FlaskTest015AHELSGrpB.franzmatejka.repl.co/ratings/3
@app.route('/ratings/<int:rating_id>', methods=['GET'])
def get_rating(rating_id):
    rating = [n for n in ratings if n['id'] == rating_id]
    assert len(rating) <= 1
    if len(rating) == 0:
        abort(404)
    return jsonify(rating[0])


from flask import make_response


# Error Handler
@app.errorhandler(404)
def not_found(error):
    return make_response(jsonify({'error': 'Not found'}), 404)

## [!Gruppe B Mi. 24.02.2021]
## https://blog.miguelgrinberg.com/post/designing-a-restful-api-with-python-and-flask

from flask import request
# curl --request POST --header 'Content-Type: application/json' --data '{"name": "Augustiner", "rating": 5}' https://FlaskTest015AHELSGrpB.franzmatejka.repl.co/ratings
# curl --request POST --header 'Content-Type: application/json' --data '{"name": "Augustiner"}' https://FlaskTest015AHELSGrpB.franzmatejka.repl.co/ratings

@app.route('/ratings', methods=['POST'])
def create_rating():
  if not request.json or not 'name' in request.json:
    	abort(400)
  rating = {
    'id': ratings[-1]['id']+1,
    'name': request.json['name'],
    'rating': request.json.get('rating', -1)
  }
  ratings.append(rating)
  return jsonify(rating), 201

# PUT
# curl --request PUT --header 'Content-Type: application/json' --data '{"rating": 5}' https://FlaskTest015AHELSGrpB.franzmatejka.repl.co/ratings/4
@app.route('/ratings/<int:rating_id>', methods=['PUT'])
def change_rating(rating_id):  
    rating = [n for n in ratings if n['id'] == rating_id]
    assert len(rating) <= 1
    if len(rating) == 0:
      	abort(404)
    rating[0]['name'] = request.json.get('name',rating[0]['name'])
    rating[0]['rating'] = request.json.get('rating',rating[0]['rating'])
    return jsonify(rating[0])

if __name__ == '__main__':
    app.run(
        debug=True,
        host='0.0.0.0',
    )
```



## Finaler Stand

```python
from flask import Flask, render_template, jsonify, abort

ratings = [{
    'id': 1,
    'name': u'Kößlarner',
    'rating': 5,
}, {
    'id': 2,
    'name': 'faxe',
    'rating': 1,
}, {
    'id': 3,
    'name': 'Oettinger',
    'rating': 5,
}, {
    'id': 4,
    'name': 'Stiegl',
    'rating': 3,
}]

app = Flask(
    __name__,
    static_folder='static',
    template_folder='templates',
)


@app.route('/')
def index():
    return 'Hello Flask'


@app.route('/2')
def template_test():
    return render_template('template01.html', myVar=1234)


# GET ratings
# curl -i https://FlaskTest015AHELSGrpB.htlmatejka.repl.co/ratings
@app.route('/ratings', methods=['GET'])
def get_ratings():
    return jsonify(ratings)


# GET ratings single
# curl -i https://FlaskTest015AHELSGrpB.htlmatejka.repl.co/ratings/2
@app.route('/ratings/<int:rating_id>', methods=['GET'])
def get_rating(rating_id):
    rating = [n for n in ratings if n['id'] == rating_id]
    assert len(rating) <= 1
    if len(rating) == 0:
        abort(404)
    return jsonify(rating[0])


from flask import make_response


# Error Handler
@app.errorhandler(404)
def not_found(error):
    return make_response(jsonify({'error': 'Not found'}), 404)


## https://blog.miguelgrinberg.com/post/designing-a-restful-api-with-python-and-flask

from flask import request
# curl --request POST --header 'Content-Type: application/json' --data '{"name": "Augustiner", "rating": 5}' https://FlaskTest015AHELSGrpB.htlmatejka.repl.co/ratings
# curl --request POST --header 'Content-Type: application/json' --data '{"name": "Augustiner"}' https://FlaskTest015AHELSGrpB.htlmatejka.repl.co/ratings


@app.route('/ratings', methods=['POST'])
def create_rating():
    if not request.json or not 'name' in request.json:
        abort(400)
    rating = {
        'id': ratings[-1]['id'] + 1,
        'name': request.json['name'],
        'rating': request.json.get('rating', -1)
    }
    ratings.append(rating)
    return jsonify(rating), 201


# PUT
# curl --request PUT --header 'Content-Type: application/json' --data '{"rating": 5}' https://FlaskTest015AHELSGrpB.htlmatejka.repl.co/ratings/4
@app.route('/ratings/<int:rating_id>', methods=['PUT'])
def change_rating(rating_id):
    rating = [n for n in ratings if n['id'] == rating_id]
    assert len(rating) <= 1
    if len(rating) == 0:
        abort(404)
    rating[0]['name'] = request.json.get('name', rating[0]['name'])
    rating[0]['rating'] = request.json.get('rating', rating[0]['rating'])
    return jsonify(rating[0])

# DELETE
# curl --request DELETE https://FlaskTest015AHELSGrpB.htlmatejka.repl.co/ratings/2
@app.route('/ratings/<int:rating_id>', methods=['DELETE'])
def delete_rating(rating_id):
    rating = [n for n in ratings if n['id'] == rating_id]
    assert len(rating) <= 1
    if len(rating) == 0:
        abort(404)
    ratings.remove(rating[0])
    return jsonify(rating[0])

if __name__ == '__main__':
    app.run(
        debug=True,
        host='0.0.0.0',
    )
```



## C# Client

```c#
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace _210312_Ratings_Client
{
  class Rating {
    public int? id {get; set;}
    public string name {get; set;}
    public int rating {get; set;}
    public override string ToString()
    {
      return $"[{id}] {name} - {rating}";
    }
  }

  class Program
  {
    static async Task Main(string[] args)
    {
      Console.WriteLine("Connect to Ratings API Server ...");
      var url = "https://FlaskTest015AHELSGrpB.htlmatejka.repl.co/ratings";
      HttpClient client = new HttpClient();

      HttpRequestMessage request = new HttpRequestMessage(HttpMethod.Get, url);
      HttpResponseMessage response = await client.SendAsync(request);
      System.Console.WriteLine("Response Status: "+response.StatusCode); 
      string responseBody = await response.Content.ReadAsStringAsync();
      Console.WriteLine(responseBody);
      var ratings = JsonSerializer.Deserialize<List<Rating>>(responseBody);
      foreach (var rating in ratings)
      {
        System.Console.WriteLine(rating.ToString());
      }

      //
      // Lesen eines einzelnen Elements
      //
      url = "https://FlaskTest015AHELSGrpB.htlmatejka.repl.co/ratings/3";
      request = new HttpRequestMessage(HttpMethod.Get, url);
      response = await client.SendAsync(request);
      System.Console.WriteLine("Response Status: "+response.StatusCode); 
      responseBody = await response.Content.ReadAsStringAsync();
      Console.WriteLine(responseBody);
      var singleRating = JsonSerializer.Deserialize<Rating>(responseBody);
      Console.WriteLine(singleRating);

      //
      // Neues Element einfügen
      //
      url = "https://FlaskTest015AHELSGrpB.htlmatejka.repl.co/ratings";
      request = new HttpRequestMessage(HttpMethod.Post, url);
      var options = new JsonSerializerOptions
      {
        IgnoreNullValues = true,
        //WriteIndented = true
      };            
      var newRating = new Rating() {name="Augustinger", rating=5};
      var jsonStr = JsonSerializer.Serialize<Rating>(newRating,options);
      request.Content = new StringContent(
        jsonStr, Encoding.UTF8, "application/json");

      response = await client.SendAsync(request);
      System.Console.WriteLine("Response Status: "+response.StatusCode); 
      responseBody = await response.Content.ReadAsStringAsync();
      Console.WriteLine(responseBody);
      singleRating = JsonSerializer.Deserialize<Rating>(responseBody);
      Console.WriteLine(singleRating);

      //
      // Element Ändern
      //
      url = "https://FlaskTest015AHELSGrpB.htlmatejka.repl.co/ratings/4";
      request = new HttpRequestMessage(HttpMethod.Put, url);
      var changedRating = new Rating() {rating=5};
      jsonStr = JsonSerializer.Serialize<Rating>(changedRating,options);
      request.Content = new StringContent(jsonStr, Encoding.UTF8, "application/json");
      response = await client.SendAsync(request);
      System.Console.WriteLine("Response Status: "+response.StatusCode); 
      responseBody = await response.Content.ReadAsStringAsync();
      Console.WriteLine(responseBody);
      singleRating = JsonSerializer.Deserialize<Rating>(responseBody);
      Console.WriteLine(singleRating);

      //
      // Element löschen
      //
      url = "https://FlaskTest015AHELSGrpB.htlmatejka.repl.co/ratings/2";
      request = new HttpRequestMessage(HttpMethod.Delete, url);
      response = await client.SendAsync(request);
      System.Console.WriteLine("Response Status: "+response.StatusCode); 
      responseBody = await response.Content.ReadAsStringAsync();
      Console.WriteLine(responseBody);
      singleRating = JsonSerializer.Deserialize<Rating>(responseBody);
      Console.WriteLine(singleRating);


    }
  }
}

```







## JS Client

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h1>Ratings</h1>
  <p>Willkommen zur Ratings Datenbank.</p>

  <div id="ratingsDiv">

  </div>

  <hr>

 <form action="" onsubmit="saveRating(this);return false">
  <label for="ratingName">Name: </label><br>
  <input placeholder="z.B. Gösser" type="text" id="ratingName" name="ratingName" required><br>
  <label for="ratingRating">Rating: </label><br>
  <input placeholder="1-5" type="number" id="ratingRating" name="ratingRating" min="1" max="5" required><br>
 <input type="submit" value="Speichern">
 </form>

<script src="ratings.js"></script>
</body>
</html>
```



```js

console.log('hi there')
reloadRatings()

///////////////////////////////////////////

function createElement(element,innerText)
{
  let el = document.createElement(element)
  el.innerText = innerText
  return el
}

function createRow(element, list)
{
  let row = document.createElement('tr')
  for( text of list )
  {
    row.appendChild(createElement(element,text))
  }
  return row
}

function processRatings(ratings)
{
  console.log(ratings)
  const ratingsDiv = document.getElementById('ratingsDiv')
  const htmlTable = document.createElement('table')
  htmlTable.style.border='solid 1px black'

  htmlTable.appendChild(createRow('th',['Name','Rating']))
  for( rating of ratings)
  {
    htmlTable.appendChild(createRow('td',
    [
      rating['name'],
      rating['rating']
    ]
    ))
  }
  ratingsDiv.innerHTML = ""
  ratingsDiv.appendChild(htmlTable)

/*
  let htmlUl = document.createElement('ul')
  for( rating of ratings)
  {
    console.log(rating)
    let htmlLi = document.createElement('li')
    htmlLi.innerText = rating['name']
    htmlUl.appendChild(htmlLi)
  }
  ratingsDiv.appendChild(htmlUl)
  */
}

function reloadRatings()
{
  const httpReq = new XMLHttpRequest()
  httpReq.addEventListener("load", function() {
    console.log('Response received')
    console.log(this.responseText)
    const response = JSON.parse(this.responseText)
    processRatings(response)
  })

  const url = '/api/ratings'
  httpReq.open('GET',url)
  httpReq.send()
}

//
//
function saveRating(form)
{
  console.trace('saveRating')
  postRating(
    {
      'name':form.elements['ratingName'].value,
      'rating': form.elements['ratingRating'].value
    }
  )
}

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





## repl.it Hosting

[Flask Tutorial](https://repl.it/talk/learn/Flask-Tutorial-Part-1-the-basics/26272)

Enthält das python File `import` so wird flask automatisch installiert.

## curl

[jslinux](https://bellard.org/jslinux/vm.html?url=alpine-x86.cfg&mem=192), Geht auch in der shell von repl.it

```bash
$ curl https://flasktest01.franzmatejka.repl.co
```



## RESTful API

Siehe [Designing a RESTful API with Python and Flask](https://blog.miguelgrinberg.com/post/designing-a-restful-api-with-python-and-flask). 

[Source auf github](https://github.com/miguelgrinberg/REST-tutorial/blob/master/rest-server.py)



## sqlite

[sqlite Example auf repl.it](https://repl.it/@delamath/sqlite-example)

```python
import sqlite3

conn = sqlite3.connect("test.db")
c = conn.cursor()

c.execute('''
DROP TABLE IF EXISTS test_table2
''')

c.execute('''
CREATE TABLE IF NOT EXISTS test_table
(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)''')

c.execute('''
CREATE TABLE IF NOT EXISTS stocks
(id INTEGER PRIMARY KEY AUTOINCREMENT, date text, trans text, symbol text, qty real, price real)''')

#c.execute("INSERT INTO stocks (date, trans, symbol, qty, price) VALUES ('2006-01-05','BUY','RHAT',100,35.14)")

#c.execute("INSERT INTO stocks (date, trans, symbol, qty, price) VALUES ('2016-04-21','SELL','RHAT',200,37.14)")

print(c.fetchall())

c.execute("""
SELECT name FROM sqlite_master WHERE type='table'
""")
a = c.fetchall()
print(a)

c.execute("""
SELECT * FROM stocks
""")
a = c.fetchall()
print(a)

conn.commit()
#conn.close()
```

Legt in repl.it eine Datei `test.db` an.