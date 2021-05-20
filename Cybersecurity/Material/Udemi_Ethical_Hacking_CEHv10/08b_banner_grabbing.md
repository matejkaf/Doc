

## Banner Grabbing

Banner = Information des Servers, Software Bezeichnung und Version

### telnet

mit `telnet`:

```bash
$ telnet 192.168.178.70 80
# telnet  <ip> <port>
```

Auf metasploitable:

```bash
$ telnet 192.168.178.70 22
# es meldet sich der SSH Server mit einigen Details
quit eingeben um auszusteigen (oder sonst irgendwas)
```

### netcat

`nc` bzw. `ncat`

`nc` kann als client oder server genutzt werden.

```bash
# Auf metasploitable
$ nc -n -vv 192.168.178.70 80
# nc <opt> <ip> <port>
# -n keine Namensauflösung
# -vv sehr ausführliche Ausgabe
```

Eingabe von 

```http
GET / HTTP/1.0
2 x return
```

Zurück kommen Banner Informationen

Müsste auch so gehen (nicht probiert):

```bash
$ echo "GET / HTTP/1.0\n\n" | nc -n -vv 192.168.178.70 80
```

 