

[Install Tutorial](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/)

Mit homebrew am Mac

```bash
brew install mongodb
```

Output beim Install
```
A CA file has been bootstrapped using certificates from the SystemRoots
keychain. To add additional certificates (e.g. the certificates added in
the System keychain), place .pem files in
  /usr/local/etc/openssl/certs

and run
  /usr/local/opt/openssl/bin/c_rehash

This formula is keg-only, which means it was not symlinked into /usr/local.

Apple has deprecated use of OpenSSL in favor of its own TLS and crypto libraries

If you need to have this software first in your PATH run:
  echo 'export PATH="/usr/local/opt/openssl/bin:$PATH"' >> ~/.bash_profile

For compilers to find this software you may need to set:
    LDFLAGS:  -L/usr/local/opt/openssl/lib
    CPPFLAGS: -I/usr/local/opt/openssl/include

==> Summary
🍺  /usr/local/Cellar/openssl/1.0.2k: 1,696 files, 12M
==> Installing mongodb 
==> Downloading https://homebrew.bintray.com/bottles/mongodb-3.4.1.sierra.bottle.tar.gz
######################################################################## 100.0%
==> Pouring mongodb-3.4.1.sierra.bottle.tar.gz
==> Caveats
To have launchd start mongodb now and restart at login:
  brew services start mongodb
Or, if you don't want/need a background service you can just run:
  mongod --config /usr/local/etc/mongod.conf
==> Summary
🍺  /usr/local/Cellar/mongodb/3.4.1: 17 files, 261.5M
```

Start mongo:

```bash
mongod
```

# Verwendung mit NodeJS

[Quick Start](http://mongodb.github.io/node-mongodb-native/2.2/quick-start/)

[MongoDB Node.js](http://mongodb.github.io/node-mongodb-native/2.2/)

```bash
npm install mongodb --save
```

Intialisierung

```javascript
const mongodb = require('mongodb')
var MongoClient.connect = mongodb.MongoClient
```

# Verbinden

Mit `connect`

```javascript
const url = 'mongodb://localhost:27017/mydatabase'
MongoClient.connect.connect(url, function (err, db) {
    assert.equal(err, null) // ? error free
    db.close()
})
```

[Reference Doc](http://mongodb.github.io/node-mongodb-native/2.2/tutorials/connect/)

# Collections

Innerhalb der verbundenen Datenbank `db` können Collections verwaltet werden.
Eine Collections besteht aus weiteren Dokumenten.

`db.collection` ermöglicht den Zugriff auf die Dokumente einer bestimmten Collections.

```javascript
var collection = db.collection('mycollection')
```

[CRUD Operationen auf Collections](http://mongodb.github.io/node-mongodb-native/2.2/tutorials/crud/)

# Dokumente einfügen

Neue Dokumente werden mit den `insertOne` und `insertMany` Methoden des `collection` Objekts erzeugt.

```javascript
db.collection('mycollection').insertOne( {a:1}, function(err, r) {
    assert.equal(null, err);
    assert.equal(1, r.insertedCount);
})
```

Mehrere Dokumente werden als Array übergeben.

```javascript
db.collection('mycollection').insertMany( [{a:2}, {a:3}], function(err, r) {
    assert.equal(null, err);
    assert.equal(2, r.insertedCount);
})
```

# Lesen

```javascript
collection.find({}).toArray(function (err, docs) {
    assert.equal(err, null)
    console.log(docs)
})
```

```
[ { _id: 5895f608ea7ee62d4670f8ce, a: 1, b: 2, c: 3 },
  { _id: 5895f6257b438f2d4ea30958, a: 1, b: 2, c: 3 },
  { _id: 5895f639c4d8d62d53e26377, a: 1, b: 2, c: 3 } ]
```

`_id` wird automatisch erstellt.


# Löschen


```javascript

collectionDocuments.deleteOne({ _id: idToDelete }, function (err, result) {
    assert.equal(err, null)
    console.log(result)
})
```

```json
{"n":1,"ok":1}
```

