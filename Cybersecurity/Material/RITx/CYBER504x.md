# edX RITx: CYBER504x, Network Security



## Packet Sniffing

Wireshark, Promiscuous Mode, Monitor Mode (WLAN)

### Local Communication

Display Filter: arp or icmp
ARP Request/Reply after a Ping on local network

### remote communication

arp -d clear arp cache

Ping of a server in a different network, communication through a router (default gateway)

### DNS

Display Filter: dns
Website öffnen

### DHCP

Display Filter: dhcp


## Password Cracking

Passwords are an almost universal and ubiquitous method to protect computer accounts and systems. As a result, cybercriminals spend a lot of time trying to find ways to guess or crack them.

Password Guessing, automated tools (=online attack): Medusa, Ncrack, Hydra
Can be used to test for weak passwords

passwords should not be stored in plain text but in a strong hashed form.

problem: database storing the passwords ist stolen

attack options afterward:

- brute force
- dictionary 
- rainbow table

SHA Variants are too fast! (GPU, ASICs, FPGAs)

Hash-Functions to be used for passwords:
PBKDF2, Bcrypt, Scrypt, Argon2
Need longer for calculation, therefore reducing brute force attack rate

### Brute Force Attacks

test all possible characters and length

Programm: crunch (Kali Linux, generates word lists from certain rule)
John the Ripper


### Dictionary based attacks

Dictionary attacks attempt to put some more structure around a brute force attack by focusing on likely passwords and basic permutations of them.

rockyou.txt: 14 Mio. words


### Rainbow table attacks

A rainbow table produces chains of alternating plaintext passwords and hashes to reduce the need to generate a huge dictionary file.

hashes -> reduction function -> plaintext password

its not reversing the hash, its a chain 

Tool: rtgen 


### salt

against rainbow table attacks
random bits that are inputed into the hashing algorithm



### Real world password attacks

Yahoo, linkedIn


- crunch (part of Kali Linux)
- John the Ripper is a tool that is used in a dictionary attack.
- rockyou.txt is a huge wordlist that can be used with John.
- Ophcrack is a tool used in a rainbow table attack.

Linux
/etc/passwd
/etc/shadow (hashes)

## Other

- [Pwned Passwords](https://www.troyhunt.com/introducing-306-million-freely-downloadable-pwned-passwords/),
- Activity: Generating Wordlists with Crunch
- Activity: Using John the Ripper to Crack Passwords
- ACTIVITY: RAINBOW TABLES WITH OPHCRACK


## Port Scanning

### The TCP Three-Way Handshake (7:20)

The “TCP Three-Way Handshake” describes the sequence of communications that establishes a connection between two systems.

TCP: HTTP, SSH, ...
UDP: DNS, DHCP

TCP Header: ...

Step 1
Flag: SYN, Seq: random, Ack: 0

Step 2
Flag: ACK, SYN, Seq: random, Ack: seq+1, 

Step 3
Flag: ACK, Ack: seq+1, Syn: seq+1

[Why do we need a 3-way handshake? Why not just 2-way?](https://networkengineering.stackexchange.com/questions/24068/why-do-we-need-a-3-way-handshake-why-not-just-2-way)


### Introduction to Port Scanning (6:16)

Through port scanning, a hacker or pentester can determine what’s running on a remote system. By sending specially crafted packets to a destination port, it’s possible to tell the destination port’s state, giving clues to services that the destination machine is running.

A service is a program that runs in the background independent of a logon.

Port scanning: find the services.

Port states:
- Open (listening service)
- Closed
- Filtered (scan can not reach the port, because of firewall, router rules ). Scans may be dropped

Firewalls filter ports

Scanning Tool: `nmap`


### Is Port Scanning Legal? (3:57)

Port scanning could be interpreted as unauthorized access of a system, or may even be interpreted as a DDoS attack. Port scanning can be seen as a violation of different laws, which vary widely from place to place across the globe.


### SYN and Connect Scans (5:59)

The SYN scan is the most common scan, while the Connect scan is the least common scan.

Step 1 of 3-way HS. Closed Port send RST Flag (designed reaction to SYN flag) set. 
Step 3: Source sends an RST flag and ends the connection. This is not shown in the logs of destination service. Bypass of normal TCP stack necessary - nmap sends raw packets (root access necessary)

Connect Scan:
uses operating system function connect. Connection is established - shows up in logs of target service. Not recommended!


### Null/FIN/Xmas Scans (3:40)

RFC 793: TCP segment without SYN, ACK or RST 
RST response if port closed
no response if port is open

Null Scan
All 6 Flags are set to zero.
FIN/Xmas
...

open: no response
closed: RST is sent

Scan is very Staelthy but can be fingerprinted.

Offen: Besser als SYN Scan

### ACK Scan (2:40)

The ACK scan has one goal: to determine whether a port is being filtered by a firewall.

Sends an ACK to port, if no reply or ICMP Unreachable -> firewall
if RST back -> there is no filter


### UDP Scan (2:30)

UDP scans look for services that don’t use TCP, like DNS and DHCP.

Send UDP to port: ICMP Unreachable (-> closed) otherwise open or filtered


## Exploits and Exploiting

### Vulnerability, Exploit, Payload (4:39)

Vulnerability (weakness, gap or hole) can be exploited. 

Vulnerability:
weak passwords, buffer overflows

zero-day vulnerability: not published, no one knows about them


### WannaCry (7:34)

Ransomeware.

EternalBlue Exploit of SMB Protocol

Discovered by NSA (not published)

Later MS Patch was released.

Patch was ignored for a month.

200000 computer in 150 countries.
Including health care systems (even MRIs !)

Problem: old systems, not updated systems (Windows 7)


### NotPetya (3:14)

Wiper: deletes data
maskerading as Ransomware for media attention


### Bug Bounty Programs (2:20)

Companies pay for Vulnerability found by hackers.


### Exploit and Payload (3:29)

Payload = Code transported using the exploit

Rapid7 - Metasploit, 1600 exploits, 500 payloads

Exploit Database: www.exploit-db.com

### Demos

Metasploit Demo (Kali Linux)
ms08_067_metapi

payload: reverse_tcp
target machine can be remotely controlled (Meterpreter)

Backdoor: maintain access to an exploited system,
netcat creates a backdoor

armitage: GUI for Metasploit



## Access Control Lists

### Introduction to ACLs (4:42)

stateless packet filter (a type of firewall)

Access Control Lists (ACLs) are stateless packet filters that can filter inbound or outbound network traffic, based on specific criteria.

Ordering of ACL rules is important!

ACL rules are processed in order, if there is a match the packet is permitted or denied. After that no more rules gets checked.

rule -> permit or deny

at the end of any ACL is an implicit "deny any"

### Standard vs. Extended ACLs (4:03)

Standard ACLs permit or deny traffic based only on the source IP address. Extended ACLs can use additional criteria to enable more specific filtering of network traffic.

Standard: Source IP Adress only, (efficiency!)

Extended: + destination, protocol, port

Addresses:

- actual addresses
- classful address
- specific subnet (129.21.0.0/24)


### Wildcard Masks

```
access-list <1-99> {permit|deny} <source IP> <wildcard mask>
```
wildcard mask: 0 = check, 1 = ignore

umgekehrt wie subnet mask!

### Standard ACLs (4:55)

```
access-list 1 deny 129.21.52.0 0.0.0.255
access-list 1 permit any
```
checks first 3 octets.


### Applying ACLs to Interfaces (3:42)

inbound outbound

recommendation: place standard ACL as close as possible to the destination network

only one ACL can be applied per interface and per direction


### Extended ACLs (7:03)

Source/destination/port/protocol

```
access-list <100-199> {permit|deny} {tcp|udp|icmp|ip} host <source ip> host <destination ip> [eq <port>]
```

Alternativ zu `host <ip>`: `<ip> <wildcard mask>`

```
access-list 100 deny tcp host 129.21.19.75 host 129.21.1.40 eq 80
access-list 100 permit ip any any
```

recommendation: place as close to the source as possible

### Infos

- [Cisco IOS access lists: 10 things you should know](https://www.techrepublic.com/article/cisco-ios-access-lists-10-things-you-should-know/)
- ACTIVITY: WORKING IN PACKET TRACER


## Snort


### Introduction to Snort (4:26)

Snort can be used as either an Intrusion Detection System or Intrusion Prevention System to provide specific configurable alerts and actions, based on network security needs.

- IDS (out of band - copy of data, e.g. network tap)
- IPS (inline - can block network traffic)

### Snort Components (5:48)

### Snort Placement and Modes (3:18)

Switch: Port Mirroring - SPAN Switched Port Analyzer

Network Tap

### Snort Rules (7:40)


## DHCP, DNS, and Switch Attacks and Mitigations

### Rogue DHCP Server Attack/DHCP Snooping (5:57)

Attackers can place an unauthorized DHCP server on a subnet. This rogue DHCP server can divert subsequent network traffic to the attacker.

Relay agents. 
Rogue DHCP Server lists itself as default gateway

Snooping: Switch Ports are trusted or untrusted (drops DHCP offer messages) . 
Stores MAC Address, IP Address, Interface, etc.


### CAM Overflow Attack/Switchport Security (6:55)

Switches capture the source MAC addresses of incoming Ethernet frames, and associate them with incoming ports. If the switch runs out of memory to store these bindings, it will send frames out of all ports, except the port on which the frame originated.

Switches learn by the Source MAC Address
CAM (= Content Adressable Table = MAC Addresses)
if no entry: switch floods on all ports

MAC flooding attack. switch port flooded with generated ethernet frames with different Addresses
CAM Table run out of space. New addresses can not be stored. Switch behaves like a hub.
Attacker can sniff every frame from the switch.

Switch feature:
Port Security, port knows valid MAC addresses


### DHCP Starvation Attack and Mitigation (3:05)

A DHCP starvation attack depletes a DHCP server’s pool of available addresses, leaving none for legitimate clients.

DHCP mith random spoofed MAC Adresses. No leases more available. Denial of service attack.
Tools: Gobbler, Metasploit, ...


### DNS Attacks and Mitigation (4:04)

DDoS

### DNS Cache Poisoning Attack (5:43)

DNS cache poisoning occurs when attackers associate spoofed IP addresses with legitimate websites.


### DNSSEC

Domain Name Security Extensions (DNSSEC) were developed to provide additional integrity and authentication to DNS


## Man-In-The-Middle Attacks and Mitigations


### ARP Cache Poisoning Part 1 (8:01)

Attacker located between communication parts.
MAC of default gateway

Host schickt eigene MAC adresse gibt sich als Gateway aus.

hacker uses a programm like "Cain and Abel", Ettercap oder arpspoof.

[ARP Cache Poisoning und Paket-Sniffing](https://www.admin-magazin.de/Das-Heft/2012/05/ARP-Cache-Poisoning-und-Paket-Sniffing)

### ARP Cache Poisoning Part 2 (5:38)

Once a man-in-the-middle attack takes hold, the attacker is able to view sensitive encrypted information and misdirect users to fraudulent websites.

The accessed web-server sendes a certifacte. The malicious host replaces this certificate with a fake, self-signed certificate.

Browser zeigt eine Warnung an. Wenn der User diese ignoriert, kann der komplette Datentransfer mitgeschnitten werden.


### Dynamic ARP Inspection

DAI (Dynamic ARP Inspection) is a method to help mitigate ARP cache poisoning attacks, by inspecting and validating packets. This is done by the switch.

### WiFi Risks (8:16)

Many people use public WiFi without understanding the potential risks.

Very dangerous.

aircrack-ng -> airmon-ng

ARP spoofing attack is a possible risk.

Evil Twin or Rogue Access Point (special HW device)
lures clients with stronger signals.

aireplay-ng

SSL Strip, ändert im Durchlauf https auf http.

Solution: HSTS

### VPN Part 1 (2:34)

Virtual Private Networks (VPNs) provide an extra level of security, when using an insecure medium.

General advice: don't use any public Wi-Fi.

If you have to:

- turn off all sharing (folders, ...)
- Firewall is on!
- only log in to HTTPS sites
- most important: use VPN

For about $5 a month, a VPN service can be worth its weight in gold.

### VPN Part 2 (7:57)

Here’s a man-in-the-middle attack from start to finish, including obtaining a victim’s encrypted usernames and passwords for secure sites, like banks.

cain and abel

abel: windows service
cain: grafische oberfläche (für ARP spoofing, sniffing und password extraction)

