---
title: tcpdump
---

Paket capture with pcap. 

```sh
$ ifconfig eth0
eth0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 192.168.178.81  netmask 255.255.255.0  broadcast 192.168.178.255
        inet6 2001:871:235:d5dd:36d:b0d0:4386:b64a  prefixlen 64  scopeid 0x0<global>
        inet6 fe80::20c:29ff:fe97:770a  prefixlen 64  scopeid 0x20<link>
        inet6 2001:871:235:d5dd:20c:29ff:fe97:770a  prefixlen 64  scopeid 0x0<global>
        ether 00:0c:29:97:77:0a  txqueuelen 1000  (Ethernet)
```

[[tcpdump manpage](http://manpages.ubuntu.com/manpages/precise/en/man8/tcpdump.8.html)] [[pcap-filter](http://manpages.ubuntu.com/manpages/precise/en/man7/pcap-filter.7.html)]

# Ethernet

```sh
$ tcpdump -eni eth0 ether host 00:0c:29:97:77:0a
#   -e Print the link-level header on each dump line.
#   -n Don't convert addresses (i.e., host addresses, port numbers, etc.) to names.
#   -i <interface> Listen on interface.
#   rest: "expression"
# For the expression syntax, see pcap-filter(7).
# http://manpages.ubuntu.com/manpages/precise/en/man7/pcap-filter.7.html
#   ether host 00:0c:29:97:77:0a
#   ether host ehost
#              True if either the Ethernet source or destination address is ehost.
```

Obiges zeigt alle Ethernet Frames von oder zu einer MAC Adresse.

# ARP

Nur ARP Pakete:

```sh
$ tcpdump -eni eth0 arp
```

oder noch zusätzlich eingeschränkt auf eine MAC Adresse:

```sh
$ tcpdump -eni eth0 arp and ether host 00:0c:29:97:77:0a
```

Ausgabe von `tcpdump`:

```
tcpdump: verbose output suppressed, use -v[v]... for full protocol decode
listening on eth0, link-type EN10MB (Ethernet), snapshot length 262144 bytes
06:16:52.245546 00:0c:29:97:77:0a > ff:ff:ff:ff:ff:ff, ethertype ARP (0x0806), length 42: Request who-has 192.168.178.0 tell 192.168.178.81, length 28
06:16:52.246113 00:0c:29:97:77:0a > ff:ff:ff:ff:ff:ff, ethertype ARP (0x0806), length 42: Request who-has 192.168.178.1 tell 192.168.178.81, length 28
06:16:52.246539 00:0c:29:97:77:0a > ff:ff:ff:ff:ff:ff, ethertype ARP (0x0806), length 42: Request who-has 192.168.178.2 tell 192.168.178.81, length 28
06:16:52.246942 00:0c:29:97:77:0a > ff:ff:ff:ff:ff:ff, ethertype ARP (0x0806), length 42: 
[...]
06:16:52.250804 00:0c:29:97:77:0a > ff:ff:ff:ff:ff:ff, ethertype ARP (0x0806), length 42: 

Request who-has 192.168.178.11 tell 192.168.178.81, length 28
06:16:52.250805 e0:28:6d:7b:fa:91 > 00:0c:29:97:77:0a, ethertype ARP (0x0806), length 60: Reply 192.168.178.1 is-at e0:28:6d:7b:fa:91, length 46
06:16:52.251207 00:0c:29:97:77:0a > ff:ff:ff:ff:ff:ff, ethertype ARP (0x0806), length 42: 

Request who-has 192.168.178.12 tell 192.168.178.81, length 28
06:16:52.251579 00:0c:29:97:77:0a > ff:ff:ff:ff:ff:ff, ethertype ARP (0x0806), length 42: [...]

Request who-has 192.168.178.27 tell 192.168.178.81, length 28
06:16:52.258135 28:f0:76:0c:00:d2 > 00:0c:29:97:77:0a, ethertype ARP (0x0806), length 60: Reply 192.168.178.27 is-at 28:f0:76:0c:00:d2, length 46
06:16:52.258350 00:0c:29:97:77:0a > ff:ff:ff:ff:ff:ff, ethertype ARP (0x0806), length 42: 

Request who-has 192.168.178.28 tell 192.168.178.81, length 28
06:16:52.258716 00:0c:29:97:77:0a > ff:ff:ff:ff:ff:ff, ethertype ARP (0x0806), length 42: 
[...]
```



# http/https

```sh
tcpdump -nX port 80

tcpdump -nX port 443
```

-n     Don't convert addresses (i.e., host addresses, port numbers, etc.) to names.
-X     When parsing and printing, in addition to printing the headers of each packet, print the  data  of
       each  packet (minus its link level header) in hex and ASCII.  This is very handy for analysing new
       protocols.



Oder

```
tcpdump -nA port 80
```

-A     Print each packet (minus its link level header) in ASCII.  Handy for capturing web pages.

