---
title: Scapy
---



# Section 4: Programming a Network Scanner

Für information gathering

Info: es gibt ein nmap Modul für Python

Scan mit [netdiscover](https://manpages.debian.org/unstable/netdiscover/netdiscover.8.en.html) (simpler ARP Scanner)

```bash
$ netdiscover -r 10.0.2.1/24 
```

![image-20210618115905093](fig/image-20210618115905093.png)

`netdiscover` hat unter Kali 2021.1 nicht funktioniert (es werden keine Hosts angezeigt). Mit nmap kann das gleiche erreicht werden:

```bash
$ nmap -sn -PR 192.168.178.75/24
# -sn  ... nur PING scan (kein PORT scan)
# -PR  ... ARP Scan
```



Offizielle VM von Windows installieren [[*](https://developer.microsoft.com/en-us/microsoft-edge/tools/vms/)]. 

![image-20210618121307942](fig/image-20210618121307942.png)

## ARP

![image-20210618161548329](fig/image-20210618161548329.png)



![image-20210618161617185](fig/image-20210618161617185.png)



![image-20210618161656614](fig/image-20210618161656614.png)



## Scapy

Python modul.

> Scapy is a powerful interactive packet manipulation program. It is able to forge or decode packets of a wide number of protocols, send them on the wire, capture them, match requests and replies, and much more. [[*](https://scapy.net)]

```python
import scapy.all as scapy
scapy.arping("10.0.0.2")
scapy.arping("10.0.0.1/24") # complete subnet
```

![image-20210618173511680](fig/image-20210618173511680.png)



![image-20210618173803063](fig/image-20210618173803063.png)


Summary:

```python
arp_request = scapy.ARP()
print(arp_request.summary())
```

```
ARP who has 0.0.0.0 says 192.168.178.81
```

Alle Felder auflisten:

```python
scapy.ls(arp_request)
```


```
hwtype     : XShortField                         = 1               (1)
ptype      : XShortEnumField                     = 2048            (2048)
hwlen      : FieldLenField                       = None            (None)
plen       : FieldLenField                       = None            (None)
op         : ShortEnumField                      = 1               (1)
hwsrc      : MultipleTypeField                   = '00:0c:29:97:77:0a' (None)
psrc       : MultipleTypeField                   = '192.168.178.81' (None)
hwdst      : MultipleTypeField                   = '00:00:00:00:00:00' (None)
pdst       : MultipleTypeField                   = '0.0.0.0'       (None)
```

Gibt eine Idee welche Felder zu setzen sind.

2 Möglichkeiten:

```python
arp_request.pdst = ip
```

oder:

```python
arp_request = scapy.ARP(pdst=ip)
```



Ethernet Frame [[*](https://scapy.readthedocs.io/en/latest/api/scapy.layers.l2.html#scapy.layers.l2.Ether)]:

```python
broadcast = scapy.Ether(dst="ff:ff:ff:ff:ff:ff")
scapy.ls(broadcast)
```

```
dst        : DestMACField                        = 'ff:ff:ff:ff:ff:ff' (None)
src        : SourceMACField                      = '00:0c:29:97:77:0a' (None)
type       : XShortEnumField                     = 36864           (36864)
```

Obwohl `dst`  default bereits auf die Broadcast Adresse gesetzt zu sein scheint, ist es trotzdem notwendig diesen zu setzen (sonst program freeeze).



BTW: Anzeige eines Werts in hex – weil der Ethertype üblicherweise in hex angegeben wird:

```python
print(hex(broadcast.type))
```

```
0x9000
```

Pakete mit `/` kombinieren

> In Python the behavior of all operators can be customized per class. Many libraries and framework make use of this to offer convenient ways to combine objects. [[*](https://stackoverflow.com/a/34832591)]

```python
# create combined packet using scapy "/"
arp_request_ether = broadcast/arp_request
print(arp_request_ether.summary())
```

```
00:0c:29:97:77:0a > ff:ff:ff:ff:ff:ff (0x9000)
Ether / ARP who has Net('192.168.178.81/24') says 192.168.178.81
```

`show()` zeigt mehr Info als `summary()`:

```python
arp_request_ether.show()
```

```
###[ Ethernet ]### 
  dst       = ff:ff:ff:ff:ff:ff
  src       = 00:0c:29:97:77:0a
  type      = ARP
###[ ARP ]### 
     hwtype    = 0x1
     ptype     = IPv4
     hwlen     = None
     plen      = None
     op        = who-has
     hwsrc     = 00:0c:29:97:77:0a
     psrc      = 192.168.178.81
     hwdst     = 00:00:00:00:00:00
     pdst      = Net('192.168.178.81/24')
```

`show()` und `summary()` können für alle Netzwerk-Pakete aufgerufen werden (Scapy: layers [[*](https://scapy.readthedocs.io/en/latest/api/scapy.layers.l2.html)]).



Senden und Empfangen [[*](https://scapy.readthedocs.io/en/latest/usage.html#send-and-receive-packets-sr)]:

```python
import scapy.all as scapy

def scan(ip):
    arp_request = scapy.ARP(pdst=ip)
    broadcast = scapy.Ether(dst="ff:ff:ff:ff:ff:ff")
    arp_request_ether = broadcast/arp_request
    # srp = send and receive packets
    # 1 sec timeout
    answered, unanswered = scapy.srp(arp_request_ether, timeout=1) 
    # return list w 2 elements
    # 1. answered packets
    # 2. unanswered packets
    print(answered.summary())

scan("192.168.178.81/24")
```

> For the record, the "without-`p`" functions like `send()` are for sending layer 3 packets (`send(IP())`) while the "with-`p`" variants are for sending layer 2 packets (`sendp(Ether() / IP())`).
>
> 

```
Begin emission:
Finished sending 256 packets.
*********...
Received 12 packets, got 9 answers, remaining 247 packets
Ether / ARP who has 192.168.178.1 says 192.168.178.81 ==> Ether / ARP is at e0:28:6d:7b:fa:91 says 192.168.178.1 / Padding
Ether / ARP who has 192.168.178.21 says 192.168.178.81 ==> Ether / ARP is at 00:11:32:65:91:7f says 192.168.178.21 / Padding
Ether / ARP who has 192.168.178.27 says 192.168.178.81 ==> Ether / ARP is at 28:f0:76:0c:00:d2 says 192.168.178.27 / Padding
Ether / ARP who has 192.168.178.40 says 192.168.178.81 ==> Ether / ARP is at 62:ff:4d:df:c2:a5 says 192.168.178.40 / Padding
Ether / ARP who has 192.168.178.22 says 192.168.178.81 ==> Ether / ARP is at 50:1e:2d:04:dd:86 says 192.168.178.22 / Padding
Ether / ARP who has 192.168.178.23 says 192.168.178.81 ==> Ether / ARP is at ac:89:95:f5:aa:91 says 192.168.178.23 / Padding
Ether / ARP who has 192.168.178.58 says 192.168.178.81 ==> Ether / ARP is at 16:92:c5:2c:00:e1 says 192.168.178.58 / Padding
Ether / ARP who has 192.168.178.59 says 192.168.178.81 ==> Ether / ARP is at 9a:e0:c6:7b:af:cc says 192.168.178.59 / Padding
Ether / ARP who has 192.168.178.62 says 192.168.178.81 ==> Ether / ARP is at 8a:42:87:22:f5:8a says 192.168.178.62 / Padding
None
```

```python
print("[+] unanswered packets")
print(unanswered.summary())
```



```
[+] unanswered packets
Ether / ARP who has 192.168.178.0 says 192.168.178.81
Ether / ARP who has 192.168.178.2 says 192.168.178.81
Ether / ARP who has 192.168.178.3 says 192.168.178.81
Ether / ARP who has 192.168.178.4 says 192.168.178.81
Ether / ARP who has 192.168.178.5 says 192.168.178.81
Ether / ARP who has 192.168.178.6 says 192.168.178.81
Ether / ARP who has 192.168.178.7 says 192.168.178.81
Ether / ARP who has 192.168.178.8 says 192.168.178.81
Ether / ARP who has 192.168.178.9 says 192.168.178.81
Ether / ARP who has 192.168.178.10 says 192.168.178.81
Ether / ARP who has 192.168.178.11 says 192.168.178.81
[...]
Ether / ARP who has 192.168.178.251 says 192.168.178.81
Ether / ARP who has 192.168.178.252 says 192.168.178.81
Ether / ARP who has 192.168.178.253 says 192.168.178.81
Ether / ARP who has 192.168.178.254 says 192.168.178.81
Ether / ARP who has 192.168.178.255 says 192.168.178.81
None
```

## Lists in Python

[...]

```python
    answered_list, _ = scapy.srp(arp_request_ether, timeout=1) 
    for answer in answered_list:
        print("[+] ARP Request")
        answer[0].show()
        print("[+] ARP Response")
        answer[1].show()
        print("---------------------------------------------------------------")
```



```
[+] ARP Request
###[ Ethernet ]### 
  dst       = ff:ff:ff:ff:ff:ff
  src       = 00:0c:29:97:77:0a
  type      = ARP
###[ ARP ]### 
     hwtype    = 0x1
     ptype     = IPv4
     hwlen     = None
     plen      = None
     op        = who-has
     hwsrc     = 00:0c:29:97:77:0a
     psrc      = 192.168.178.81
     hwdst     = 00:00:00:00:00:00
     pdst      = 192.168.178.60

[+] ARP Response
###[ Ethernet ]### 
  dst       = 00:0c:29:97:77:0a
  src       = 2e:e2:79:4f:bb:90
  type      = ARP
###[ ARP ]### 
     hwtype    = 0x1
     ptype     = IPv4
     hwlen     = 6
     plen      = 4
     op        = is-at
     hwsrc     = 2e:e2:79:4f:bb:90
     psrc      = 192.168.178.60
     hwdst     = 00:0c:29:97:77:0a
     pdst      = 192.168.178.81
###[ Padding ]### 
        load      = '\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00'
```



Auf die Felder der Netzwerk-Pakete zugreifen:

```python
answered_list, _ = scapy.srp(arp_request_ether, timeout=1) 
    for answer in answered_list:
        arp_request,arp_response=answer[0],answer[1]
        print("IP:"+arp_response.psrc)
        print("MAC:"+arp_response.hwsrc)
        print("---------------------------------------------------------------")
```

```
IP:192.168.178.1
MAC:e0:28:6d:7b:fa:91
---------------------------------------------------------------
IP:192.168.178.21
MAC:00:11:32:65:91:7f
---------------------------------------------------------------
IP:192.168.178.27
MAC:28:f0:76:0c:00:d2
---------------------------------------------------------------
IP:192.168.178.40
MAC:62:ff:4d:df:c2:a5
---------------------------------------------------------------
IP:192.168.178.23
MAC:ac:89:95:f5:aa:91
---------------------------------------------------------------
IP:192.168.178.60
MAC:2e:e2:79:4f:bb:90
---------------------------------------------------------------
IP:192.168.178.22
MAC:50:1e:2d:04:dd:86
---------------------------------------------------------------
IP:192.168.178.65
MAC:1c:91:80:bd:8d:9d
---------------------------------------------------------------
IP:192.168.178.62
MAC:8a:42:87:22:f5:8a
---------------------------------------------------------------
```



Debug Ausgaben von scapy srp deaktivieren (`verbose=False`):

```python
answered_list, _ = scapy.srp(arp_request_ether, timeout=1, verbose=False) 
```



Ergebnis des Scans in eine Datenstruktur schreiben und Programm in mehrere kleinere Funktionen aufteilen. Jede Funktion erfüllt nur eine einzige Aufgabe.

```python
import scapy.all as scapy

def scan(ip):
	""" Return a client list {"ip:"...,"mac":...} """
  arp_request = scapy.ARP(pdst=ip)
  broadcast = scapy.Ether(dst="ff:ff:ff:ff:ff:ff")
  arp_request_ether = broadcast/arp_request
  answered_list, _ = scapy.srp(arp_request_ether, timeout=1, verbose=False) 
  clients_list = []
  for answer in answered_list:
    arp_request,arp_response=answer[0],answer[1]
    target_client={"ip":arp_response.psrc, "mac":arp_response.hwsrc}
    clients_list.append(target_client)
    return clients_list

def print_clients(client_list):
  """ Print IP and MAC of clients """
  print("IP\t\t\tMAC Address\n------------------------------------------")
  for target_client in client_list:
    print(f"{target_client['ip']}\t\t{target_client['mac']}")
    print("------------------------------------------")



clients_list = scan("192.168.178.81/24")
print_clients(clients_list)
```



## tcpdump

Damit kann die tatsächliche Netzwerkkommunikation in einer eigenen shell mitgelesen werden. pcap Filter auf ARP: [Dokument zu tcpdump](/Doc/Networking/tcpdump)

