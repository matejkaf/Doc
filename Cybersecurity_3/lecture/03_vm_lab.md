---
title: VM Hacking Labor
tags: [lecture,3AHITS]
---



- Kali Linux
- Metasploitable
- Windows 10 (später)

Jeweils als virtuelle Maschine

Grundlagen für die Übungen:

# Linux Netzwerk

Netwerkkonfiguration wird häufig benötigt:

- `ifconfig` für IP Adresse, netmask und MAC Adresse:

```sh
$ ifconfig eth0      
eth0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 192.168.126.2  netmask 255.255.255.0  broadcast 192.168.126.255
...
```

- `route` für Default Gateway:


```sh
$ route -n       
Kernel IP routing table
Destination     Gateway         Genmask         Flags Metric Ref    Use Iface
0.0.0.0         192.168.126.1   0.0.0.0         UG    100    0        0 eth0
192.168.126.0   0.0.0.0         255.255.255.0   U     100    0        0 eth0
```



# Shutdown

Aus der Kommandozeile:

```sh
$ shutdown -h now
```

