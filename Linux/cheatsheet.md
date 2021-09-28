---
title: Cheat Sheet der Linux Befehle
---

* TOC
{:toc}
## Allgemein

### bash keyboard shortcuts

[Cheatsheet: Productivity-boosting Bash shortcuts](https://blog.ssdnodes.com/blog/cheatsheet-bash-shortcuts/)



### **root** shell

```sh
$ sudo -i
```



### **Tastaturlayout** einstellen

```sh
# Kali, Ubuntu, ... 
$ setxkbmap -layout de
```

```sh
# Metasploitable
$ loadkeys de
```



### **Shutdown**

```sh
$ shutdown -h now
```



## Netzwerk



### **IP Adresse**

```sh
$ ifconfig [eth0]
$ ip a
```



### Gebundene Netzwerkservices

```sh
$ netstat -tlpn | grep 80
```



### **Default Gateway**

```sh
$ route -n
```



### **ARP** cache (geht auch unter Windows)

```sh
arp -a -n
# `-a` ... Use alternate BSD style output format (with no fixed columns)
# `-n`, `--numeric` ... shows numerical addresses instead of trying to determine symbolic host, port or user names
```



### **Apache** Webserver

```sh
$ service apache2 start
$ cd /var/www/html
```



## vi, vim

`i` → Insert mode, `ESC` → Command mode

- `o` neue Zeile darunter + INSERT Mode
- `$` end of line, `A` +INSERT Mode
- `^` oder `_`  beginning (first non-whitespace), `I` +INSERT Mode
- `0` (zero) start of line
- `:w` speichern
- `:q` beenden, `:wq` speichern und beenden
- `:x` speichern (wenn Änderungen) und beenden
- `:q!` beenden (Änderungen verwerfen)

