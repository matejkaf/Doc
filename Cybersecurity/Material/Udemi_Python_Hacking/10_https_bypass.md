Mit SSLstrip

HSTS Websites (facebook, gmail, ...) gehen allerdings nicht.

SSLstrip ist in Python geschrieben

```sh
$ pip install sslstrip
```



```sh
$ sslstrip
```

SSLstrip bearbeitet alles was auf Port 10000 ankommt. Daher Port redirection notwendig:

```sh
$ iptables -t nat -A PREROUTING  -p tcp --destination-port 80 -j REDIRECT --to-port 8080
# Befehl als root user ausführen sonst kommt eine sehr irreführende unknown option "--destination-port" Fehlermeldung

# -t <table>
# -A add rule
# -p <protocol>
# -j <target> ... target of the rule
```



SSLstrip installieren problematisch da Python2 und es kein pip dafür mehr in Kali Linux gibt. Eher mühsamer Weg:

Siehe auch [](https://levelup.gitconnected.com/ethical-hacking-part-10-arp-spoofing-ssl-strip-ea5f0cc892f3)

github [](https://github.com/moxie0/sslstrip)

Alternativen?