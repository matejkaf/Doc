---
title: Networking Command Line
subtitle: Linux
---

* TOC
{:toc}

Sammlung von Kommandozeilen Befehlen in Zusammenhang mit Netzwerk


# IP Adresse

**IP Adresse** ermitteln / Interface finden

```bash
$ ifconfig
$ ifconfig | grep inet
```

Neuere Linux Distributionen:

```bash
$ ip a
# oder
$ ip address
```

Folgendes ist noch nicht getestet.

IP Adresse ändern – von DHCP auf manuell. Wird nicht permanent gespeichert. [[*](https://devconnected.com/how-to-change-ip-address-on-linux/#Change_IP_Address_using_ifconfig)]

```bash
# CIDR notation
$ sudo ifconfig eth0 192.168.178.32/24
# oder netmask
$ sudo ifconfig eth0 192.168.178.32 netmask 255.255.255.0
```

Permanente Änderung in `/etc/network/interfaces`:

```bash
$ vim /etc/network/interfaces

# Content of /etc/network/interfaces

iface eth0 inet static
address 192.168.178.32
netmask 255.255.255.0
gateway 192.168.178.1
```

Restart networking service

```bash
# For systemd hosts
$ sudo systemctl restart networking.service

# For pre-systemd hosts
$ sudo /etc/init.d/networking restart
```

DHCP wieder aktivieren [[*]](https://docs.oracle.com/cd/E19683-01/806-4075/dhcp-overview-21/index.html):

```bash
$ ifconfig <interface> dhcp start
```





# DHCP

**DHCP** aktuelle Einstellungen:

`ipconfig` ist evtl. extra zu installieren

```bash
$ ipconfig getpacket en6
```

**DHCP** release/renew:

```bash
$ sudo ipconfig set en6 DHCP
```



# ARP

**ARP** cache anzeigen:

```sh
$ arp   
Address                  HWtype  HWaddress           Flags Mask            Iface
fritz.box                ether   e0:28:6d:7b:fa:91   C                     eth0
```

`-n`, `--numeric` ... shows numerical addresses instead of trying to determine symbolic host, port or user names:

```bash
$ arp -n
Address                  HWtype  HWaddress           Flags Mask            Iface
192.168.178.1            ether   e0:28:6d:7b:fa:91   C                     eth0
```

`-a` ... Use alternate BSD style output format (with no fixed columns):

```sh
$ arp -a
fritz.box (192.168.178.1) at e0:28:6d:7b:fa:91 [ether] on eth0
```



**ARP** cache leeren:

```bash
$ ip -s -s neigh flush all
```



# DNS

**DNS** cache leeren:

```bash
sudo systemd-resolve --flush-caches
```

**DNS**:

```bash
$ nslookup orf.at
Server:		10.10.10.1
Address:	10.10.10.1#53

Non-authoritative answer:
Name:	orf.at
Address: 194.232.104.3
Name:	orf.at
Address: 194.232.104.4
Name:	orf.at
Address: 194.232.104.139
Name:	orf.at
Address: 194.232.104.140
Name:	orf.at
...
```

- Warum `Non-authoritative answer`?
- Warum mehrere IP Adressen?

**DNS Server** ermitteln

```bash
$ cat /etc/resolv.conf 
# Generated by resolvconf 
nameserver 192.168.1.1 
```



# MAC Adresse

Ändern der MAC Adresse:

```bash
# disable interface
$ ifconfig eth0 down
# change mac address
$ ifconfig eth0 hw ether 11:22:33:44:55:66
# enable interface
$ ifconfig eth0 up
```



# Default Gateway / Routing Table

Linux:

```bash
$ route -n
Kernel IP routing table
Destination     Gateway         Genmask         Flags Metric Ref    Use Iface
0.0.0.0         192.168.178.1   0.0.0.0         UG    100    0        0 eth0
192.168.178.0   0.0.0.0         255.255.255.0   U     100    0        0 eth0
```

macOS & Linux

```sh
$ netstat -rn
```



# netstat – open Sockets

[[manpage : netstat](https://linux.die.net/man/8/netstat)]

Prüfen ob ein Serverprozess an einen Port **gebunden** ist:

```bash
$ netstat -tlpn | grep 80
# displays a list of open sockets
# -t ... TCP
# -l ... Show only listening sockets. 
# -p ... Show the PID and name of the program to which each socket belongs.
# -n ... Show numerical addresses instead of [...] symbolic host [...]
```

Übersicht über alle offenen Kommunikationskanäle (TCP und UDP):

```bash
$ netstat -tunap
# -t TCP
# -u UDP
# -n numerical addresses instead of symbolic host, port, user
# -a shows also listening sockets
# -p PID using this socket
```

Default gateway ermitteln (display the IP routing table )

```bash
$ netstat -r
# -r, Display the kernel routing tables.
Kernel IP routing table
Destination     Gateway         Genmask         Flags   MSS Window  irtt Iface
default         _gateway        0.0.0.0         UG        0 0          0 enp0s3
10.12.0.0       0.0.0.0         255.255.0.0     U         0 0          0 enp0s3
_gateway        0.0.0.0         255.255.255.255 UH        0 0          0 enp0s3
```



# macOS

ARP Cache leeren (MacOS)

```bash
arp -a -d
```

DNS cache leeren

```bash
sudo killall -HUP mDNSResponder
```



# IP Forwarding

[How to Disable/Enable IP forwarding in Linux](https://linuxconfig.org/how-to-turn-on-off-ip-forwarding-in-linux)

> It may be necessary to configure IP forwarding on a [Linux system](https://linuxconfig.org/linux-download) in certain scenarios. If the Linux server is acting as a firewall, router, or NAT device, it will need to be capable of forwarding packets that are meant for other destinations (other than itself)

Forwarding wird gesteuert durch das File `/proc/sys/net/ipv4/ip_forward`

Enthält 0 (forwarding off) oder 1 (forwarding on)

Aktuelle Zustand abfragen:

```sh
$ cat /proc/sys/net/ipv4/ip_forward
0
```

Forwarding Ein- bzw. Ausschalten:

```sh
# forwarding on
$ echo 1 > /proc/sys/net/ipv4/ip_forward
# forwarding off
$ echo 0 > /proc/sys/net/ipv4/ip_forward
```

