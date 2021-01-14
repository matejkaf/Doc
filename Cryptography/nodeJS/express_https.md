

- [stackoverflow](http://stackoverflow.com/questions/11744975/enabling-https-on-express-js)
- [tls.createServer](https://nodejs.org/api/tls.html#tls_tls_createserver_options_secureconnectionlistener)
- [mit openSSL](http://blog.mgechev.com/2014/02/19/create-https-tls-ssl-application-with-express-nodejs/)
- [Let’s Encrypt](https://letsencrypt.org)
- [How to Use SSL/TLS with Node.js](https://www.sitepoint.com/how-to-use-ssltls-with-node-js/)
- Client-authenticated TLS: [HTTPS Authorized Certs with Node.js](https://engineering.circle.com/https-authorized-certs-with-node-js-315e548354a2)


```javascript
var fs = require('fs');
var http = require('http');
var https = require('https');
var privateKey  = fs.readFileSync('sslcert/server.key', 'utf8');
var certificate = fs.readFileSync('sslcert/server.crt', 'utf8');

var credentials = {key: privateKey, cert: certificate};
var express = require('express');
var app = express();

// your express configuration here

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(8080);
httpsServer.listen(8443);
```

    For self-signed certificates, the certificate is its own CA, and must be provided.

Hmm, Option `ca` in `credentials`

Test

```bash
openssl s_client -connect 127.0.0.1:8443
```

Anderes Beispiel mit Let's Encrypt und Redirection

[taylorpetrick](https://taylorpetrick.com/blog/post/https-nodejs-letsencrypt)

```javascript
var http = require('http')
var https = require('https')
 
... 
 
http.createServer(function(req, res) {   
        res.writeHead(301, {"Location": "https://" + req.headers['host'] + req.url});
        res.end();
}).listen(80);
 
https.createServer({ 
        key: fs.readFileSync("/etc/letsencrypt/archive/example.com/privkey1.pem"),
        cert: fs.readFileSync("/etc/letsencrypt/archive/example.com/fullchain1.pem"),
        ca: fs.readFileSync("/etc/letsencrypt/archive/example.com/chain1.pem")
}, app).listen(443);
```

# macOS und self signed Certificates

Ein Self Signed Certificate kann leicht mit folgendem shell Befehl angelegt werden.

```bash
openssl req -x509 -sha256 -nodes -days 365 -newkey rsa:2048 -keyout privateKey.key -out certificate.crt
```

`certificate.crt` ist das self signed certificate.

Browser melden aber einen Fehler (untrusted ...), diesen muss in der Konfiguration das Zertifikat als Trusted eingestellt werden.
Chrome und Safari verwenden zum überprüfen des Zertifikatis den Standard *Keychain Access* von macOS. Man kann `certificate.crt` durch drag and drop in den System Bereich kopieren, das Zertifikat mit doppelklick öffnen und unter Trust auf "Always Trust" stellen.
Dann funnktionierts unter Safari nicht jedoch mit Chrome. Chrome meldet dass der Common Name (CN) nicht stimmt. Im CN wird der domain name angegeben, ist nun jedoch deprecated und stattdessen soll Subject Alternate Name (SAN) verwendet werden. Mögliche Lösung des Problems unter
[How to create a self-signed certificate with openssl?](http://stackoverflow.com/questions/10175812/how-to-create-a-self-signed-certificate-with-openssl/27931596#27931596) 


# Zertifikat mit eigenem root CA

Certification Authority (CA) Konfiguration `ca.cnf`

```
[ ca ]
default_ca      = CA_default

[ CA_default ]
default_md = sha256
name_opt   = ca_default
cert_opt   = ca_default

[ req ]
# used when processing certificate signing requests 
default_bits           = 4096
default_md             = sha256
distinguished_name     = req_distinguished_name
attributes             = req_attributes
prompt                 = no
output_password        = password

[ req_distinguished_name ]
countryName            = AT
stateOrProvinceName    = OOe
localityName           = Braunau
organizationName       = HTL Braunau
organizationalUnitName = Elektronik
commonName             = HTL Braunau Certificate Authority
emailAddress           = cert@htl-braunau.at

[ req_attributes ]
challengePassword      = test
```

Erzeugen eines CA private key und Zertifikats (enthält public key):

```bash
openssl req -new -x509 -days 9999 -sha256 -config ca.cnf -keyout ca-key.pem -out ca-crt.pem
```

- `ca-key.pem`: private key
- `ca-crt.pem`: root Zertifikat, unterschrieben mit private key


Einen private key für Server generieren:

```bash
openssl genrsa -out server-key.pem 4096
```

Konfiguaration für Server Zertifikat, `server.cnf`

```
[ req ]
default_bits           = 4096
distinguished_name     = req_distinguished_name
prompt                 = no
attributes             = req_attributes
req_extensions         = v3_req
x509_extensions        = v3_req

[ req_distinguished_name ]
commonName       = localhost
emailAddress     = server@example.com
organizationName = HTL Braunau
localityName     = Braunau
countryName      = AT

[ req_attributes ]
challengePassword = password

[ v3_req ]
subjectAltName      = DNS:localhost
```

certificate signing request generieren:

```bash
openssl req -new -config server.cnf -key server-key.pem -out server-csr.pem
```

Zertifikat unterschreiben:

```bash
openssl x509 -req -extfile server.cnf -extensions v3_req -days 999 -sha256 -passin "pass:password" -in server-csr.pem -CA ca-crt.pem -CAkey ca-key.pem -CAcreateserial -out server-crt.pem
```

Achtung: SHA1 wird von der Browsern nicht mehr akzeptiert
Standard von `openssh` : `Signature Algorithm: sha1WithRSAEncryption`
Option `-sha256`: `sha256WithRSAEncryption`

Chrome Fehler:
`NET::ERR_CERT_AUTHORITY_INVALID`
weil dem root Zertifikat nicht vertraut wird.

Import von ca-crt.pem (macOS: Doppelklick auf File) in Keychain.
In Keychain: doppelklick und Trust auf allways trust stellen.

Chrome Fehler:

`NET::ERR_CERT_COMMON_NAME_INVALID`

Lösung: Ab Chrom 58 ist der Common Name (CN) alleine nicht mehr ausreichend, daher notwendig in `server.cnf` `subjectAltName`

# Test mit node.js

```javascript
const fs = require('fs');
const http = require('http');
const https = require('https');
const express = require('express')
const app = express()

let privateKey  = fs.readFileSync('server-key.pem'); // geheim !!!
let certificate = fs.readFileSync('server-crt.pem');
let certificateAuthority = fs.readFileSync('ca-crt.pem');
var credentials = {key: privateKey, cert: certificate, ca: certificate };

//var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

//httpServer.listen(3080);
httpsServer.listen(3443);

app.get('/', function (req, res) {
    console.log(new Date()+' '+ 
        req.connection.remoteAddress+' '+ 
        req.method+' '+req.url); 
    res.send('Hello secure !')
})

// https://localhost:3443
```

# Ubuntu

Obiger Vorgang scheint noch einfacher zu gehen, siehe [OpenSSL Certification Authority (CA) on Ubuntu Server](https://networklessons.com/uncategorized/openssl-certification-authority-ca-ubuntu-server/)

Systemweit
[How do I install a root certificate?]()

In Chrome (verwendet Chrome die System Certs?)
[]()

Go to Chrome's 'Settings' via the right hand button or this URL in address bar
`chrome://chrome/settings/`

> Show advanced Settings > Manage certificates > Authorities > Import , browse to the certificate you saved (e.g. `www.scaryscary.com.pem`) and import

Tick 'trust this Ceritificate for identifying web sites', Ok.


# Inhalt eines pem Files anzeigen

You can display the contents of a PEM formatted certificate under Linux, using openssl:

```bash
openssl x509 -in server-crt.pem -text
```

# Zertifikat laden

```bash
openssl s_client -connect www.github.com:443 -showcerts
openssl s_client -connect derstandard.at:443 -showcerts
openssl s_client -connect www.ebay.at:443 -showcerts
```


# ToDo

- Selbst ein CA werden. 
- Dieses CA Zertifikat als root Zertifikat im Browser installieren (macOS siehe oben, Ubuntu: todo).
- Ein Serverzertifikat erstellen und mit CA Zert. unterschreiben

Siehe [How do you sign Certificate Signing Request with your Certification Authority?](http://stackoverflow.com/questions/21297139/how-do-you-sign-certificate-signing-request-with-your-certification-authority/21340898#21340898)
und auch
[How to create a self-signed certificate with openssl?](http://stackoverflow.com/questions/10175812/how-to-create-a-self-signed-certificate-with-openssl/27931596#27931596) 
sowie
[HTTPS Authorized Certs with Node.js](https://engineering.circle.com/https-authorized-certs-with-node-js-315e548354a2)

[How do I install a root certificate?](https://askubuntu.com/questions/73287/how-do-i-install-a-root-certificate)


# SSH/SCP auf Ubuntu

VirtualBox VM  port forwarding - one interface using NAT - Network settings - Port Forwarding button - new Rule:

```
Host port 3022, guest port 22, name ssh, other left blank.
```
Quelle: [stackoverflow - SSH auf Ubuntu](https://stackoverflow.com/questions/5906441/how-to-ssh-to-a-virtualbox-guest-externally-through-a-host)

Auf Virtual Box Ubuntu kopieren - Host system Unix:

```
scp -P 3022 -p ca.cnf htldev@localhost:~/dev/ssl
scp -P 3022 -p server.cnf htldev@localhost:~/dev/ssl
scp -P 3022 -p tmp.js htldev@localhost:~/dev/ssl
```

Unter Host System Windows evtl. möglich: [WinSCP](https://winscp.net/)

Oder `pscp` - das Command Line Tool ist Bestandteil von [PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/), siehe
[Chapter 5: Using PSCP to transfer files securely](https://tartarus.org/~simon/putty-snapshots/htmldoc/Chapter5.html#pscp)

```
C:\> pscp  -P 3022 -p C:\Users\Admin\Desktop\ca.cnf ckg8221@thor.cs.wmich.edu:
```


# Synology

Pfad: [Quelle](https://forum.synology.com/enu/viewtopic.php?t=124932)
```
/usr/syno/etc/certificate/_archive/
```