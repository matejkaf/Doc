# DNS

Domain Name System - Auflösung von Namen auf IP Adressen.

*Beispiel/Demonstration mit ping*

```bash
$ ping -c 3 google.com
PING google.com (216.58.214.206): 56 data bytes
64 bytes from 216.58.214.206: icmp_seq=0 ttl=118 time=21.582 ms
64 bytes from 216.58.214.206: icmp_seq=1 ttl=118 time=16.922 ms
64 bytes from 216.58.214.206: icmp_seq=2 ttl=118 time=18.941 ms
...
$ nslookup google.com
Server:		192.168.178.1
Address:	192.168.178.1#53

Non-authoritative answer:
Name:	google.com
Address: 172.217.16.110

```

- Oder mit einem online tool: [Online Ping](https://www.ipaddressguide.com/ping)

- Oder online Linux: [JSLinux](https://bellard.org/jslinux/)



# DNS hijacking

- DNSchanger Malware/Trojaner
  - [Video: DNSChanger Demo on Mac OSX](https://youtu.be/XrGuVTzYEsw)
  - [DNS Changer Malware: FBI Shutting Down Internet for Thousands Today](https://youtu.be/G1cOSwAFBN4)

- "Switcher" Android Trojaner
  - [Switcher hacks Wi-Fi routers, switches DNS](https://www.kaspersky.com/blog/switcher-trojan-attacks-routers/13771/)



# DNS poisoning

DNS Cache Poisoning, DNS spoofing

> DNS Caching:
> The Internet doesn’t just have a single DNS server, as that would be extremely inefficient. Your Internet service provider runs its own DNS servers, which cache information from other DNS servers. Your home router functions as a DNS server, which caches information from your ISP’s DNS servers. Your computer has a local DNS cache, so it can quickly refer to DNS lookups it’s already performed rather than performing a DNS lookup over and over again. [What is DNS Cache Poisoning?](https://www.howtogeek.com/161808/htg-explains-what-is-dns-cache-poisoning/)



> The real reason DNS cache poisoning is such a problem is because there’s no real way of determining whether DNS responses you receive are actually legitimate or whether they’ve been manipulated.
>
> The long-term solution to DNS cache poisoning is DNSSEC.

[Video – DNS Cache Poisoning - Computerphile](https://youtu.be/7MT1F0O3_Yw)

[DNS Poisoning and Domain Hijacking - CompTIA Security+ SY0-501 - 1.2](https://youtu.be/c76GbfM_QsI) ... ist besser erklärt – im ersten Eindruck

`edx Video: 7_1_5 DNS Cache Poisoning Attack _ 7.1 DHCP, DNS, and Switch Attacks and Mitigations _ CYBER504x Courseware _ edX.mp4`



# DNS Exfiltration und Tunneling

[Kleingehackt und verschlüsselt: So wandern Daten heimlich über das DNS](https://www.computerwoche.de/a/kleingehackt-und-verschluesselt-so-wandern-daten-heimlich-ueber-das-dns,3331295)

DNS Nachrichten in Netzwerken sind sehr häufig und eignen sich daher gut zum Verstecken von Daten. Huckepack werden DNS Nachrichten verwendet um Daten aus einem kompromitierten System abzusaugen (exfiltration), zur Kommunikation mit einem Command and Control (C&C) Server oder zum einschleusen von Daten (infiltration) z.B. weitere Schadsoftware.



# Schutz

Weiterentwicklung von DNS: **DNSSEC** – Absicherung durch kryptographische Methoden





