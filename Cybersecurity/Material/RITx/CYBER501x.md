[RITx: CYBER501x, Cybersecurity Fundamentals](https://courses.edx.org/courses/course-v1:RITx+CYBER501x+2T2018_2/course/)

# Definition


Cybersecurity protects:

- Confidentiality
- Integrity
- Availability

of computer systems and networks

Cybersecurity involves protecting data while it is in transit, while it is being processed, and when it is at rest.

cybersecurity is achieved through
- procedures
- products
- people

information security vs. cubersecurity (digital form).

penetration testers

social engineering attack (link klicking, ...)

# Vulnerabilities

Bug bounty programs (pay the hacker)

Using a laptop, security researchers controlled a Jeep Cherokee.
Cold air was blasted from the vents.
Next up on the blasting list was hip hop music from the speakers.
Then wipers, and wiper fluid followed.
The car's display then showed a picture of the hackers.
After the car went out on the highway, the hackers cut the transmission.
The car was now completely stopped.
This was actually the second time the driver allowed the researchers
to use him as a crash test dummy.
Previously, they had disabled the brakes, made the horn honk, and also had some fun
with the seatbelt and steering wheel.

[Hackers Remotely Kill a Jeep on a Highway | WIRED](https://youtu.be/MK0SrxBC1xs)



## Examples

All across the world, researchers were able to hack an internet-connected toilet in Japan.
Potential damage includes flushing the toilet and bringing up the owner's water bill,
flipping the toilet lid up and down, and running the bidet
and air-dry functions causing discomfort or distress, in the words of the researchers.

From a hospital and medical perspective, researchers found drug infusion pumps
that can have dosages changed, defibrillators that can give shocks,
or prevent the shock, via Bluetooth.
X-rays that were accessible.
Refrigerators storing blood and drugs that can have temperatures changed.
Digital medical records that can be altered causing misdiagnoses or incorrect prescriptions,
as well as tons of other vulnerabilities.
Of course, crashing systems and bringing them down was also possible.
These systems all shared poor or no authentication.
Weak, default, or hard-coded passwords, as well as embedded web interfaces for ease of hacking.

In a real attack, not by researchers, hackers controlled a baby monitor
and even injected audio into the baby's room.
The frantic parents stormed in fearing the worst.

There are websites that show live streams from unsecured websites all across the world.
Webcams that haven't had their default username and password combination changed.

## Personal Security

IoT devices als Quelle eines DDoS.

## Who are the Hackers?

A hacker is someone who thinks outside the box, is technology inclined an finds unconventional solution to problems, focusing on what is important.

Arten:

- Cracker
- Black hat hacker
- White hat hackers
- Script kiddies
- Security researcher
- Penetration tester
- Security architect

motivations for the hacker community can be thought of as MEECES, money, ego,
entertainment, cause, entrance, and status.
Attackers could be outsiders, competition, hacktivists, organized crime,
terrorists, governments, even hired guns!
They could be insiders, disgruntled employees, customers, suppliers, vendors,
business partners, contractors, temps, as well as consultants.

## Data Breaches

Different examples...

## Rising Cybersecurity Threats

Ransomware
Locked and encrypted, [WannaCry ransomware attack](https://en.wikipedia.org/wiki/WannaCry_ransomware_attack)

IBM, 2016: 4000 ransomware attacks each day

Integrity - Sabotaging data
Whats is real? What is fake? Affects trust.

## Resources

- [Ungesicherte WebCams](http://www.insecam.org/en/)
- [Bruce Schneier: The Security Mindset](https://www.schneier.com/blog/archives/2008/03/the_security_mi_1.html)
- [Cyberthreat Map](http://threatmap.fortiguard.com)

# Unit 2

## The CIA Model (2:34)

C ... Confidentiality (privacy), Encryption
I ... Integraty (not changed), Hashing
A ... Availability (resiliance against DDoS, fault toleranca, load balancing)


## The AAA Model: Authentication (4:31)

- identification: claiming who you are
- authentication: proving who you are

prove:
- something you know, password
- something you have, keyfile
- something you are, biometrics

combination of above: multi factor authentication, 2FA

Beispiel: Passwort + code der per SMS versendet wird. Allerdings SMS können abgefangen und verändert/umgeleitet werden, enthalten keinen Schutz gegen Veränderung, daher nach NIST deprecated, es hält sich aber niemand daran. Bsp.: [Reddit discloses hack, says SMS intercept allowed attackers to skirt 2FA protections](https://www.csoonline.com/article/3293904/cloud-security/reddit-discloses-hack-says-sms-intercept-allowed-attackers-to-skirt-2fa-protections.html).

## The AAA Model: Authorization (1:18)

What is a user allowed to do.

Principle of least privilege. Nur so viel wie zur ausführung der Aufgaben notwendig ist.


## The AAA Model: Accounting (1:30)

E.g. repeated login attempts.
Should tie actions to an individual. No shared accounts.

## Security vs. Convenience (1:15)

Wie eine Kipp-Schaukel.

## Threat Agents (4:30)

Cybersecurity: protect assets from threats

agents:
- hacker
- mother nature (flood, )
- vulnerabulity (hw, configuration faults), gets exploited

Risk = probability of an event + consequences

what can be done:
- mitigate
- transfer (different company, ...)
- accept


# Cryptography

## Hashing

Hashing algorithms:
Variable let input, fixed let output.

Also called a message digest.
If one bit in the input changes, the resulted hash is completely different.
You can't go back.

banana smoothie example

Hashing is also used to protect the confidentiality of pass word data bases
from both system administrators with prying eyes and hackers who steal password data bases.
Passwords should always be stored in hashed format.

stolen password hashes can be attacked
to derive the plain text passwords by multiple methods.
- Including a brute force attack.
- A dictionary attacks.
- And an attack involving a rainbow table.

We'll also explore a salt which defeats attacks using precome posted dictionaries
and rainbow tables.

SHA-2s, SHA-256 and SHA-512 and even SHA-3 variants are not appropriate for passwords
because they're too quick for hackers attempting brute force attacks
with today's graphics processing units.
Application specific integrated circuits and field programmable gate arrays.

PBKDF2. Bcrypt and Scrypt which use SHA functions as part of their algorithms as well
as new comer Argon2 should be the only functions used for hashing passwords
because this key stretching functions are significantly slower with tens
or hundreds of thousands additional rounds.
The longer calculation time wouldn't be noticed by a user logging in but will be great
for reducing the rate of brute force attacks.


# Networking

[The TCP/IP Guide](http://www.tcpipguide.com/toc.htm)

## Introduction to Networking (1:52)

## MAC and IP Addresses (3:03)

## Subnet Masks (4:48)

## Local Communication (2:28)

## Remote Communication (5:16)

## The Routing of a Packet (5:15)

## MAC and IP Addresses Used Together (2:38)

## Binding IP Addresses to MAC Addresses (3:48)



# Networking 2

## Ports (4:55)

Port Analogie:

Adresse des Gebäude: IP Adresse
Apartment Nummer: Port

## TCP and UDP (4:47)

RTSP - Real Time Streaming Protocol, sorgt für die richtige Reihenfolge der UDP Pakete

## How Switches Work (5:02)

[Cisco Networking Academy's Introduction to Switched Networks](http://www.ciscopress.com/articles/article.asp?p=2181835&seqNum=5)

[Switch Operation for the CCNP BCMSN Exam](http://www.ciscopress.com/articles/article.asp?p=101629&seqNum=2)

SAT - Source Address Table

## Autonomous Systems (4:04)

Systems independent of an ISP.

Routers. access control list


## Dynamic Routing (4:11)

edge router

routing protocols

IGP internal gateway protocol

topoplogy is determined, best path

## Aufgaben

`traceroute` verwenden

ARP Cache analysieren

Tool: `netstat`

# Systems Administration

SysAdmins

## Static Addressing, RARP, BOOTP, DHCP

relay agents (broadcast--> unicast)

DHCP ist eine Erweiterung von BOOTP, um die Möglichkeit der relay agents zu nutzen

## DHCP's DORA

Discover, Offer, Request, Ack

Ablauf DHCP

## DNS

File called Hosts, FQDN

Vergleich mit Telefonbuch im Handy

## The DNS Process

Hirarchical, distributed

2 Konfiguriert (Backup, Load Balancing)

--> one of 13 root dns servers (for top level domain - TLD)

Verteilt auf der ganzen Welt, mehrere Maschinen teilen sich die gleiche logische IP Adresse

authorative DNS server --> referes to point of contact 

sub level domain

Übungen: Tool nslookup

## Weiteres

DNS Server Attacks

- [2016 Dyn cyberattack](https://en.wikipedia.org/wiki/2016_Dyn_cyberattack)
- [Switcher hacks Wi-Fi routers, switches DNS](https://www.kaspersky.com/blog/switcher-trojan-attacks-routers/13771/)
- DNSChanger

# Detection and Prevention

## Firewalls (5:08)

Filter traffic (packets) based on rules.
Trusted inside, untrusted outside.
Logging. Malware detection.
Hardware (network based) firewall.
IDS intrusion detection system
IPS intrusion prevention system

Software (host based) firwalls. for single system.

## Firewall Techniques (5:16)

- Packet filtering (permit/deny)
    - Stateless (each packet in isolation)
    - Stateful (sessions)
- 

ALG: Application Layer Gateway, looking deeper into the protocols
e.g. FTP, HTTP, ...
- DPI: deep packet inspection
 snooping, sensoring
- DCI: deep content inspection, e.g. virus scan in files, looks into data-content

In addition to firewalls, organizations can deploy a DMZ (demilitarized zone) to physically separate servers that the public should access from the servers that the public should not access


## Intrusion Detection Systems and Intrusion Prevention Systems 1 (3:32)

firewall is on the boarder, what is in the inside?

airport analogy

- IDS out of band (traffic is logged, forensic, packed history)
- IPS in line (traffic passed through, latency added)

vulnerable to: false positve, false negative

Host- or Network Based

Signature Based: like antivirus software, looking for patterns
unknown patterns can not be detected

Update the signature data base.


## Honeypots and Deception Software (2:26)

PII personaly identifiably information (passwords, credit card numbers, ...)
Honeypot, Decoy system

Deception software, virtualization, centraly managed, 


## Social Engineering (6:56)

doesnt involce technology.

no tech hacking, e.g. defcon videos


Despite technological precautions, human activity remains a major problem in securing computer systems and networks. This video is our first look at social engineering, dealing with the vocal interaction (in person or over the phone) of attacker and victim. Other forms of social engineering involving electronic communication, including phishing and others, will be covered in our next unit.

Phishing involves sending out "bait," mostly through email, to a large number of people, hoping some users will "bite," by sending usernames, passwords, and even credit card information. When clicking a link in a phishing email, the user is brought to a webpage that looks and feels like a real banking site, the real PayPal site, the real eBay site, the real Facebook site, the real LinkedIn site, and much more. Therefore, the user feels safe and secure in entering sensitive information, which goes directly to the attacker. Furthermore, simply visiting these sites could install malware on a victim's machine. More on this type of social engineering coming up next week!

- call from tech support, ..., give me your password
- hold the door, I forgot my key
- employee finds USB stick in parking lot, label reads: top secret financial information

- information gathering (finding weaknesses), dumpster diving
- exploitation (relationships, trust, threaten, make seem things very urgent)

- teach users
- make them read polices
- test them
- rewards, incentives

## Activity

- Using Windows Firewall with Advanced Security


# Malware and Forensics

## Virus vs Worm (4:26)

Malicious Software,

Programm = collection of instructions (for tasks)

Virus = injects itself into programm instructions, programm is infectet
replicate itself to other programms on same machine, 
spreading accross networks only with human intervention (e.g. Email attachement)
Virus: malicious payload

Worm = is a stand alone programm
propagation over networks by itself, e.g. worm sends a Email by itself

Zombies in Botnet: DDoS (affects the availablity of a system)


## Logic Bomb, Trojan Horse, and RAT (5:29)

Logic Bomb: Latency to execution (e.g. date or event)

Trojan Horse: Programm with use but hidden malicious component (e.g. Free App, Free Screensaver, ...)

Remote Access Trojan: to contral the system
 inside Cracked Games, pirated software
kaystroke loging, screen capture, camera capture, ...


## Rootkit, Backdoor, Spyware, Adware, and PUP (3:49)

Rootkit: set of programs and code that allows a persistent
or permanent undetectable presence on a computer

Rootkits also install another piece of malware called a backdoor.
bypassing the normal authentication process
through software left after the initial penetration

Spyware covertly monitors user's activities and reports personal user data
to a third party that expects financial gain

Adware automatically plays or displays advertisements
or downloads promotional material

PUP, potentially unwanted program (companies that made these programs did in fact mention the extras
in the EULA, end-user license agreement)


## Phishing, Spearphishing, Whaling, Pharming, Watering Hole, Ransomware (4:59)

e-mail versions of social engineering: Phishing, Spearphishing, Whaling

sending out bait, 

Whaling (Spearphishing for CEO´s, etc.)

Pharming: Farming is the hijacking of a legitimate website's IP address and or domain name.

watering hole is a computer attack strategy in which the victim is in a particular group by infected e.g. websites the group often uses.

Ransomware: most common and rising form of malware, 97% of phishing emails


## What is Digital Forensics? (5:07)

incident analysis after or during the attack.

Cybercrime

## Evidence (4:34)

Digital evidence

## The Three Steps for Forensics Investigations (8:20)

Acquiring digital evidence
Analyzing that evidence
Reporting on what that evidence shows

Investigators must also deal with anti-forensics—activities carried out specifically to destroy or hide evidence.

Steganography

