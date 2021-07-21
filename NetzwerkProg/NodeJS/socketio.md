# Quellen

- [socket.io](https://socket.io)

# Client

```html
<script src="/socket.io/socket.io.js"></script>
```

```javascript
let socket = io();

socket.emit('my message', {my: 'data'} );

socket.on('my message', function (msg) {
});
```


# Server

[Chat Beispiel](https://socket.io/get-started/chat/)

```javascript
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});


io.on('connection', function (socket) {
    console.log('a user connected');
    socket.on('disconnect', function () {
        console.log('user disconnected');
    });
    socket.on('chat message', function (msg) {
        console.log('message: ' + msg);
        io.emit('chat message', msg);
    });
});

http.listen(3000, function () {
    console.log('listening on *:3000');
});

```

# Diverses

`socket.id` eindeutige Client Kennzeichnung -- String (z.B. `BA0yIQhFb5R55OnvAAAC`)
