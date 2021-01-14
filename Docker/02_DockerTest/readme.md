# Tests


# Dockerize Node JS

Dockerfile:

```
FROM node:6.9.4
ENV LAST_UPDATED 20180406T165100

# copy package file
COPY package.json /app/

# Change working directory
WORKDIR /app

# Install dependencies
RUN npm install

# Copy source code
COPY . /app/

# Expose API port to the outside
EXPOSE 30020

# Launch application
CMD ["npm","start"]
```

Build the docker image:

```bash
docker build -t dockertest .
docker image ls
```

Run container from image:

```bash
docker run -p 30020:30020 -it dockertest
```

Restart container:

```bash
docker restart <CONTAINER_NAME>
```

# Zertifikat

aus `ca.cnf`:

```bash
# Erzeugen eines CA private key und Zertifikats (enthält public key)
openssl req -new -x509 -days 9999 -sha256 -config ca.cnf -keyout ca-key.pem -out ca-crt.pem
```

- `ca-key.pem`: private key
- `ca-crt.pem`: root Zertifikat, unterschrieben mit private key


```bash
# private key für Server
openssl genrsa -out server-key.pem 4096
```

aus `server.cnf`:


```bash
# certificate signing request
openssl req -new -config server.cnf -key server-key.pem -out server-csr.pem
```


```bash
# Zertifikat unterschreiben
openssl x509 -req -extfile server.cnf -extensions v3_req -days 999 -sha256 -passin "pass:tenkan" -in server-csr.pem -CA ca-crt.pem -CAkey ca-key.pem -CAcreateserial -out server-crt.pem
```

# Web Browser Einstellungen


Chrome Fehler:
`NET::ERR_CERT_AUTHORITY_INVALID`
weil dem root Zertifikat nicht vertraut wird.

Import von ca-crt.pem (macOS: Doppelklick auf File) in Keychain.
In Keychain: doppelklick und Trust auf allways trust stellen.

# Auth

[bcrypt](https://www.npmjs.com/package/bcrypt)

JWT JSON Web Token

[jsonwebtoken](https://jwt.io)
[NPM jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
[JWT Authentication in Express.js](https://medium.com/@patrykcieszkowski/jwt-authentication-in-express-js-ee898b87a60)

[How to simplify your app’s authentication by using JSON Web Token](https://medium.freecodecamp.org/how-to-make-authentication-easier-with-json-web-token-cc15df3f2228)


[Securing Node.js RESTful APIs with JSON Web Tokens](https://medium.freecodecamp.org/securing-node-js-restful-apis-with-json-web-tokens-9f811a92bb52)

`x-access-token`

[Best HTTP Authorization header type for JWT](https://stackoverflow.com/questions/33265812/best-http-authorization-header-type-for-jwt)

Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9

[Create and Verify JWTs with Node.js](https://stormpath.com/blog/nodejs-jwt-create-verify)


[Where to Store your JWTs – Cookies vs HTML5 Web Storage](https://stormpath.com/blog/where-to-store-your-jwts-cookies-vs-html5-web-storage)

Antwort: als Cookie ist die bessere Option

```http
HTTP/1.1 200 OK
 
Set-Cookie: access_token=eyJhbGciOiJIUzI1NiIsI.eyJpc3MiOiJodHRwczotcGxlL.mFrs3Zo8eaSNcxiNfvRh9dqKP4F1cB; Secure; HttpOnly;
```

To pass the access token back to your protected APIs on the same domain, the browser would automatically include the cookie value.

Cookies, when used with the `HttpOnly` cookie flag, are not accessible through JavaScript, and are immune to cross-site scripting. 
You can also set the `Secure` cookie flag to guarantee the cookie is only sent over HTTPS.


# JWT

Generate the secret key

```bash
$ npm install uuid --save
```


```javascript
let secretKey = uuid.v4();
```


```javascript
jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => 
{
  if (err || !decodedToken)
  {
    return reject(err)
  }
  resolve(decodedToken)
})
```





```javascript
window.localStorage.setItem('token', 'the-long-access-token');
// or sessionStorage
```

user permissions?


Zugriff auf den Inhalt des Tokens am Client:

```javascript
// parse jwt token
let payload = JSON.parse(window.atob(token.split('.')[1])); 
console.log(payload)
```

[redirect html page if not login](https://stackoverflow.com/questions/19333043/redirect-html-page-if-not-login)

```javascript
// Put this in your login function, just before the redirect
var sessionTimeout = 1; //hours
var loginDuration = new Date();
loginDuration.setTime(loginDuration.getTime()+(sessionTimeout*60*60*1000));
document.cookie = "CrewCentreSession=Valid; "+loginDuration.toGMTString()+"; path=/";


// Put this at the top of index page
if (document.cookie.indexOf("CrewCentreSession=Valid") == -1) {
  location.href = "/Login.html";
}
```


# Cookies

[Cookies npm library for express](https://github.com/pillarjs/cookies)