# Schlagwörter-Sammlung

- intrusion detection
- vulnerability-detection
- Fallstudien
- CVE - Common Vulnerabilities and Exposures, [Wikipedia](https://de.wikipedia.org/wiki/Common_Vulnerabilities_and_Exposures)






![hacker](img/hacker.png)





# Lose Sammlung

The Center for Strategic and International Studies estimates that the cost of cybercrime to the global economy is more than $400 billion annually and in the United State alone as many as 3000 companies had their systems compromised in 2013. [CISCO CyberOps]



# Die Gefahr

- Hijacked People, open “rogue” wireless hotspot, When Sarah logged onto her bank’s website, the hacker hijacked her session, and gained access to her bank accounts.
- Ransomed Companies
- Targeted Nations - STUXNET, Angriff auf das Außenministerium

Cyberattacks are intentional, malicious acts meant to negatively impact another individual or organization.



Personally identifiable information (PII) is any information that can be used to positively identify an individual. Examples of PII include:

- Name

- Social security number

- Birthdate

- Credit card numbers

- Bank account numbers

- Government issued ID

- Address information (street, email, phone numbers)



Werden im Darknet lukrativ verkauft. Stolen PII can be used to create fake accounts, such as credit cards and short-term loans.

## War Stories

Home Depot Security Breach: [Analysis: Home Depot Breach Details](https://www.bankinfosecurity.com/analysis-home-depot-breach-details-a-7323), suffered a [**data breach**](https://www.databreachtoday.com/breaches-c-318), resulting in the theft of an unknown quantity of credit and debit cards details, 09/2014, The stolen cards are currently retailing for between \$9 and ​\$50 each, he says, with business cards, platinum levels and American Express Centurion Cards commanding higher prices, and debit cards selling for less.

Target Credit Card Breach 

The Stuxnet Virus 

Sony Pictures Entertainment Hack

In October 2016, a DDoS attack against the domain name provider **Dyn** took down many popular websites. The attack came from a large number of webcams, DVRs, routers, and other IoT devices that had been compromised by malicious software. These devices formed a “botnet” that was controlled by hackers. This botnet was used to create an enormous DDoS attack that disabled essential Internet services. Dyn has posted a blog [here](http://dyn.com/blog/dyn-analysis-summary-of-friday-october-21-attack/) to explain the attack and their reaction to it.

# Threat Actors

**Amateurs** (script kiddies), wenig Skill, verwenden fertige Tools 

**Hacktivists** are hackers who protest against a variety of political and social ideas. 

Financial Gain

**Nation states** hacking other countries, or otherwise interfering with internal politics. Nation states are also interested in using cyberspace for industrial espionage.



# Die Guten

SOC - Security Operations Center



- People
- Proccess
- Technology
  SIEM - security information and event management system

Security vs. Availability, a “five nines” uptime means that the network is up 99.999% of the time or down for no more than 5 minutes a year. However, security cannot be so strong that it interferes with the needs of employees or business functions. It is always a tradeoff between strong security and permitting efficient business functioning.

# Windows

TCPview von sysinternals. z.b. Website laden, man sieht die offenen Verbindungen.

view memory allocation: Sysinternal’s RamMap

Windows Registry: 

Potentially malicious applications can add registry keys so that they start when the computer is started.

The registry also contains the activity that a user performs during normal day-to-day computer use. This includes the **history of hardware devices**, including all devices that have been connected to the computer including the name, manufacturer and serial number. Other information, such as what documents a user and program have **opened**, where they are located, and when they were accessed is stored in the registry. This is all very useful information when a forensics investigation needs to be performed.

# Linux



Start 1991 Linux Torvalds, Gemeinschaftsprojekt, frei/kostenlos, open source

Unterschiedliche Plattformen und Geräte.

Linux Distribution, Kernel+Tools+Anwendungen

Ex: Debian, Red Hat, Ubuntu, CentOS, and SUSE

Linux häufig 1. Wahl für Server und für sichere Systeme. Vorteile:

- Open Source/frei: Kann adaptiert werden
- Sehr mächtige Kommandozeile. Auch Remote (SSH) - wichtig bei Server ohne Bildschirm/Tastatur
- Feinere Kontrolle über das Betriebssystem durch den Administrator
- Sehr flexibel in der Konfiguration, hoch anspassbar an lokale Bedürfnisse
- Ideal für Netzwerk-Anwendungen



Anwendung auf Geräten der SOC (Security Operations Center), darauf installiert:

- **Network packet capture software** (Wireshark)
- **Malware analysis tools**
- **Intrusion detection systems (IDSs)**
- **Firewalls**
- **Log managers**
- **Security information and event management (SIEM)**
- **Ticketing systems**



PenTesting Tools, z.B. Kali Linux



CLI / Terminal



Many command line tools are included in Linux by default. 

[JSLinux Run Linux or other Operating Systems in your browser!](https://bellard.org/jslinux/)

Grafical Text Editor SciTE (Cisco CyberOps VM). 

nano, (vi)

Lab – Working with Text Files in the CLI

SciTE als Editor, nano, 

```
ls -la
cat .bashrc
cat /etc/bash.bashrc

```

`.bashrc` Farben ändern (mit SciTe und nano)

```bash
sudo nano -l /etc/nginx/custom_server.conf
# ...
sudo nginx -c custom_server.conf -g "pid /var/run/nginx.pid;"
```

**Lab – Getting Familiar with the Linux Shell**

- man

- pwd

- cd

- mkdir

- ls

- ls -l

- cd ~

- ls -la

- cd .

- cd ..

- echo bla > file.txt

- echo bla > file.txt

- cat

- cp

- rm

- rm -r

- mv

  

Lab - Linux Servers

```bash
ps -elf
ps –ejH
netstat
netstat -tunap
ps -elf | grep 395
sudo nginx -c custom_server.conf -g "pid /var/run/nginx.pid;"
telnet 127.0.0.1 8080
telnet 127.0.0.1 22
telnet 127.0.0.1 68
```

Server Administration: Konfigurationsfiles Examples

Hardening Devices: 

- Ensure physical security
- Minimize installed packages
- Disable unused services
- Use SSH and disable the root account login over SSH
- Keep the system updated
- Disable USB auto-detection
- Enforce strong passwords
- Force periodic password changes
- Keep users from re-using old passwords
- ... und vieles andere



Monitoring Service Logs:

By monitoring Linux log files, an administrator gains a clear picture of the computer’s performance, security status, and any underlying issues.

- informational and non-critical system messages: `/var/log/syslog` (Debian), `/var/log/messages`

- all authentication-related events `/var/log/auth.log`

  - **
    /var/log/secure** - This directory is used by RedHat and CentOS computers instead of /var/log/auth.log. It also tracks sudo logins, SSH logins, and other errors logged by SSSD.

  

  

  - **/var/log/boot.log** - This file stores boot-related information and messages logged during the computer startup process.

  

  

  - **/var/log/dmesg** - This directory contains kernel ring buffer messages. Information related to hardware devices and their drivers is recorded here. It is very important because, due to their low-level nature, logging systems such as syslog are not running when these events take place and therefore, are often unavailable to the administrator in real-time.

  

  

  - **/var/log/kern.log** - This file contains information logged by the kernel.

  

  

  - **/var/log/cron** - Cron is a service used to schedule automated tasks in Linux and this directory stores its events. Whenever a scheduled task (also called a cron job) runs, all its relevant information including execution status and error messages are stored here.

  

  

  - **/var/log/mysqld.log** or **/var/log/mysql.log** - This is the MySQL log file. All debug, failure and success messages related to the mysqld process and mysqld_safe daemon are logged here. RedHat, CentOS and Fedora stores MySQL logs under /var/log/mysqld.log, while Debian and Ubuntu maintain the log in /var/log/mysql.log file.



Network Protocol and Services

`traceroute` (Lab)

imply having a wired or wireless physical connection between end devices is not enough to enable communication. For communication to occur, devices must know “how” to communicate. Communication, whether by face-to-face or over a network, is governed by rules called protocols.

Protocol Suite: z.B. http, tcp, ip

Wireshark Lab mit mininet in der Cyberops VM.





# Look into

- [DEF CON](https://www.defcon.org)

- [Core War](https://en.wikipedia.org/wiki/Core_War), programming game

- [OWASP Foundation](https://www.owasp.org/) the free and open software security community

- [OWASP WebGoat](https://github.com/WebGoat/WebGoat/tree/develop/docs). WebGoat is a deliberately insecure web application maintained by OWASP designed to teach web application security lessons.

- [Beispiele zu IT-Security - Erklärungen und Beispiele aus der Praxis](https://www.easy4me.info/downloads/workfiles/m8/it-sec-begriffe/itsec-begriffe.html)

  

  

# Quellen

[Cyber Security Austria (CSA)](https://www.cybersecurityaustria.at)


[RITx: CYBER504x, Network Security](https://courses.edx.org/courses/course-v1:RITx+CYBER504x+3T2018/course/)

[ct: IT-Sicherheit: Kostenloser Online-Kurs des BSI](https://m.heise.de/security/meldung/IT-Sicherheit-Kostenloser-Online-Kurs-des-BSI-4131915.html)

Cybercrime incidents:
Each year, Verizon publishes its [Verizon Data Breach Investigations Report](http://www.verizonenterprise.com/resources/reports/rp_DBIR_2016_Report_en_xg.pdf) (DBIR), which lists and examines thousands of incidents from around the world.
Verizon uses that data to create the [Data Breach Digest](http://www.verizonenterprise.com/resources/reports/rp_data-breach-digest-2017-perspective-is-reality_xg_en.pdf), detailed case studies of cybercrimes that illustrate many of the common or emerging cyberthreats.
[Download page](http://www.verizonenterprise.com/verizon-insights-lab/data-breach-digest/2017/)



# Windows Security

CISCO Cyberops

Class Activity – Identify Running Processes, 




# Cybersecurity Risk Management



Computer Security Assets to prtotect:
- Computing Hardware Devices: Servers, PS, Laptops, Tablet, Mobile Phone
- Network Devices: Router, Switch
- Embedded Software, Firmware, Operating Systems

Information Security (Infosec):
Can be stored (digital, paper, memory) and communicated

CIA + (from ISO) Authenticity, Accountability, non-repudiation and reliability



### Privacy vs Security (3:32)

### Basic Terminology 2 & Evolving Trends (8:07)

### Challenges Ahead (11:10)



# Stuff

[Buffer Overflow Attack - Computerphile](https://www.youtube.com/watch?v=1S0aBV-Waeo), [Buffer Overflow Tutorial](https://gist.github.com/apolloclark/6cffb33f179cc9162d0a)








# ZIP Bomb

Eine komprimierte Datei die beim entpacken riesig groß wird. 

[Wikipedia](https://en.wikipedia.org/wiki/Zip_bomb)

Ziel antivirus system außer Kraft setzten, danach wird ein Virus eingeschleust.

Zip bomb contains about petabytes of data, this if an antivirus tries to scan it, it will start to decompress it first. But just imagine what will happen if a file of about a kilobyte is decompressed and we get a file of about a few or more petabytes. The answers simple, before the zip file is completely scanned the antivirus will crash, creating a loophole for attackers.



Von [How does one make a Zip bomb?](https://stackoverflow.com/questions/1459673/how-does-one-make-a-zip-bomb):
This is easily done under Linux using the following command:

```bash
dd if=/dev/zero bs=1024 count=10000 | zip zipbomb.zip -
```

Replace count with the number of KB you want to compress. The example above creates a 10MiB zip bomb (not much of a bomb at all, but it shows the process).

You DO NOT need hard disk space to store all the uncompressed data.


Tests:

```bash
dd if=/dev/zero bs=1024 count=1000 | zip zipbomb.zip -
dd if=/dev/zero bs=1024 count=1000 | zip --password hey zipbomb.zip -
```

Lässt sich danach nicht entpacken



# Email Bomb

