---
title: Technische Details – Linux
subtitle: Passwörter und Cracking Tools
tags: [lecture,3AHITS]
---

* TOC
{:toc}
# Files

2 Files:

- `/etc/passwd` und
- `/etc/shadow`

```sh
# ls -l /etc/passwd /etc/shadow
-rw-r--r-- 1 root root   3042 Feb 23 05:38 /etc/passwd
-rw-r----- 1 root shadow 1577 Feb 23 05:38 /etc/shadow
```

Beachte die eingeschränkten Rechte

## Beispiel

Zeile in `passwd`:

```
matejka:x:1000:1000:Franz MATEJKA,,,:/home/matejka:/bin/bash
```

`:x:` bedeutet, dass der Passwort-Hash in der `shadow` Datei ist:

```
matejka:$6$Y.6vLGlD1cGsutIg$Hn2/2.hNyojM19F1AwNHPAzAHEk.3vPhsOqWOGyds5hieGvedb45DCxV5aqZ194w12zhaet1rhWJyCx/mzePk.
```


- `$6$`: Verwendeter Hash Algorithmus (`$6$`=crypt mit SHA-512)
- `Y.6vLGlD1cGsutIg`: Salt, Radix-64
- `Hn2/2.hNyojM19F1AwNHPAzAHEk.3vPhsOqWOGyds5hieGvedb45DCxV5aqZ194w12zhaet1rhWJyCx/mzePk.`: Passwort-Hash, Radix-64

`crypt` ist die Standard UNIX Funktion zum berechnen der Hashwerte und prüfen der Passwörter.

Achtung: Radix-64 ≠ Base64

```c
// http://cvsweb.openbsd.org/cgi-bin/cvsweb/src/lib/libc/crypt/bcrypt.c?rev=1.27&content-type=text/x-cvsweb-markup
const static u_int8_t Base64Code[] =
"./ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
```



> Unix stores password hashes computed with [crypt](https://en.wikipedia.org/wiki/Crypt_(C)) in the [`/etc/passwd` file](https://en.wikipedia.org/wiki/Passwd#Password_file) using radix-64 encoding called B64. It uses a mostly-alphanumeric set of characters, plus `.` and `/`. Its 64-character set is "`./0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz`". Padding is not used. 
>
> ([wikipedia Base64](https://en.wikipedia.org/wiki/Base64).)

## Rounds

Default: 5000 – kann als Option in `shadow`  auf einen anderen Wert gesetzt werden:

```
$6$rounds=5000$
```



## yescrypt

Neueres Verfahren zum speichern von Passwörtern – z.B. in Kali

```
kali:x:1000:1000:Kali,,,:/home/kali:/usr/bin/zsh
```

```
kali:$y$j9T$h.cekCfg097LWvTwVtk8T0$fcGogK/pi581lOUbxBwtEzH7l/zKL0atAeu9DV.BW86:18681:0:99999:7:::
```

- `$y$`: yescrypt
- `j9T`: Parameter für yescrypt
- `h.cekCfg097LWvTwVtk8T0`: Salt
- `pi581lOUbxBwtEzH7l/zKL0atAeu9DV.BW86`: PW Hash

yescrypt existiert erst seit 2015 [[*](https://www.password-hashing.net/submissions/specs/yescrypt-v2.pdf)]. Wird noch nicht von den Cracking Tools unterstützt.





# Linux Tools



## adduser

Fügt einen neuen User hinzu.

```sh
$ adduser htltest
```



## passwd

Setzt ein neues Passwort für einen User.

```sh
$ passwd alice
$ passwd bob
```



## mkpasswd

Ist ein Tool um Passwort Hashwerte zu berechnen. Generierte Strings können 1:1 in  `/etc/shadow` eingefügt werden.

```bash
$ mkpasswd --method=sha512crypt --salt=Y.6vLGlD1cGsutIg franz
$6$Y.6vLGlD1cGsutIg$Hn2/2.hNyojM19F1AwNHPAzAHEk.3vPhsOqWOGyds5hieGvedb45DCxV5aqZ194w12zhaet1rhWJyCx/mzePk.
```

Alle verfügbaren Hash Methoden anzeigen:

```bash
$ mkpasswd --method=help
Available methods:
yescrypt        Yescrypt
gost-yescrypt   GOST Yescrypt
scrypt          scrypt
bcrypt          bcrypt
bcrypt-a        bcrypt (obsolete $2a$ version)
sha512crypt     SHA-512
sha256crypt     SHA-256
sunmd5          SunMD5
md5crypt        MD5
bsdicrypt       BSDI extended DES-based crypt(3)
descrypt        standard 56 bit DES-based crypt(3)
nt              NT-Hash
```



Beispiel – wenn kein Salt angegeben wird ein zufälliges generiert:

```sh
$ mkpasswd --method=sha512crypt p8ssw0rd  
$6$QrBQnyeXt61IcfVR$lXEiG4LME9LF9VjOmPa5R4IsZ2/oXkztP04nh.wwcdAKnHehxreneSljIis6ub2KRGTEmUgMbNQcWWUVm4BNu/
```



Beispiel – gleiches Passwort (`test1`) aber unterschiedliches Salt:

```sh
$ mkpasswd --method=sha512crypt test1  
$6$f0pzxkd2lEfJsYNn$xsnMkxoktiaZDsZ6nyw9WKeFBpSfub4ke7feEZG8H6FQhUjaFyFtcAmE/RbLqms2NcXRnJfDU1lvMpFmGTDnb/
```

Zweiter Aufruf generiert wieder ein zufälliges Salt und damit ist der Hashwert unterschiedlich:

```sh
$ mkpasswd --method=sha512crypt test1  
$6$2zZ27E60wx7caMIV$gC7p6u0Jp1GtC4cQBBE36aZRIjT.WMe9Drlde9KSAVvzS22hIlkF6rNTRabIr/MHObkwNKmGgrf5GDRag4TfI1
```

Beispiel – mit Anzahl von Runden (`--rounds=<RUNDEN>`).

```sh
$ mkpasswd --method=sha512crypt --rounds=20000 p8ssw0rd 
$6$rounds=20000$zRsXAj3dLKuy4ynB$lb9OMX/eqfPRKzbSCC6.Z0o/zJ/zlfU17FOQ6yGANLMth0OblyXoG1zv8qqhoiQQma0y9zacqepAynxnU8VYk1
```



# Kali Tools



## unshadow

Kombiniert `/etc/passwd` mit  `/etc/shadow` zu einer einzigen Datei, diese kann von **John the Ripper** gelesen werden.

```sh
$ unshadow /etc/passwd /etc/shadow > crack.password
```



## John the Ripper

[[Linux Password Cracking: Explain unshadow and john Commands ( John the Ripper Tool )](https://www.cyberciti.biz/faq/unix-linux-password-cracking-john-the-ripper/)]

`john` (aus dem Projekt Openwall)

[[John the Ripper's cracking modes](https://www.openwall.com/john/doc/MODES.shtml)]:

- **Single**
  Versucht aus Informationen des `passwd` Files (z.B. Login Name) das Passwort abzuleiten. Dabei werden Varianten durchprobiert die in sogenannten "mangling rules" (Mutationsregeln) definiert sind.
- **Wordlist**
  Es wird eine Liste von Passwörtern durchprobiert (Dictionary Attack)
- **Incremental**
  Kombination aller möglichen Zeichen durchprobieren



[John the Ripper usage examples](https://www.openwall.com/john/doc/EXAMPLES.shtml)

**Single** crack mode:

```sh
$ john --single crack.password
```



**Wordlist** crack mode:

```sh
$	john --wordlist crack.password
```

Verwendet john's Standard Wordlist (`/usr/share/john/password.lst` – ist eher klein)



**Incremental** cracking mode:

```sh
$ john --incremental crack.password
```



Wenn **kein Mode** angegeben probiert john in der Reihenfolge single, wordlist, incremental:

```sh
$ john crack.password 
```



### pot File

John merkt sich bereits gecrackte Passwörter (pro User) in einer Datenbank und versucht es nicht noch einmal. Wenn man ganz von vorne beginnen möchte (z.B. Passwort wurde geändert) muss folgendes File gelöscht werden:

```sh
$ rm ~/.john/john.pot
```



### Single Mode

Cracking Mode **single** (z.B. pw=username)

```sh
$ john --single crack.password   
```

```
Using default input encoding: UTF-8
Loaded 1 password hash (sha512crypt, crypt(3) $6$ [SHA512 256/256 AVX2 4x])
Cost 1 (iteration count) is 5000 for all loaded hashes
Will run 2 OpenMP threads
Press 'q' or Ctrl-C to abort, almost any other key for status
Warning: Only 3 candidates buffered for the current salt, minimum 8 needed for performance.
test1            (test1)
1g 0:00:00:00 DONE (2021-08-05 10:51) 100.0g/s 300.0p/s 300.0c/s 300.0C/s test1..test0
Use the "--show" option to display all of the cracked passwords reliably
Session completed
```

Die gecrackten Passworter werden im `pot` File gespeichert und können mit der `--show` Option abgefragt werden:

```sh
$ john --show crack.password 
test1:test1:1001:1001:,,,:/home/test1:/bin/bash

1 password hash cracked, 0 left
```

Mangling rules? Auszug aus Dokumentation:

```
--single
              Enables the "single crack" mode, using rules from [List.Rules:Single].
```

`[List.Rules:Single]` ist eine Verweis auf eine Section in `/etc/john/john.conf`:

```
# "Single crack" mode rules
[List.Rules:Single]
# Simple rules come first...
:
-s x**
-c (?a c Q
-c l Q
-s-c x** /?u l
# These were not included in crackers I've seen, but are pretty efficient,
# so I include them near the beginning
-<6 >6 '6
-<7 >7 '7 l
-<6 -c >6 '6 /?u l
-<5 >5 '5
...
```

[Wordlist rules syntax](https://www.openwall.com/john/doc/RULES.shtml)

Oft wird für ein Passwort ein Wort gewählt das man sich gut merken kann. Die meisten Passwortregeln erzwingen zusätzlich Großbuchstaben, Ziffern und/oder Sonderzeichen. Also verändert der User sein gewähltes Passwort (z.B. `cybersecurity`) ein wenig damit es den Passwortregeln entspricht sich aber immer noch gut merken lässt, z.B. `Cybersecurity21` oder `cybersecuritY#`.

Die *mangling rules* bilden diese kleinen üblichen Änderungen in John the Ripper nach.



### Wordlist Mode

```sh
$ more /usr/share/john/password.lst 
```

```sh
$	john --wordlist crack.password
```

john's Standard Wordlist (ist eher klein) (`/usr/share/john/password.lst`) wird verwendet wenn keine andere Wortliste angegeben wird.



#### Wortlisten

Die Erfolgswahrscheinlichkeit ein Passwort zu knacken hängt stark von der **Qualität der Wortliste** ab. Umfangreiche Wortlisten stammen von diversen password breaches, z.B. `rockyou.txt`. 

- Siehe in Kali: `/usr/share/wordlists`. 
- Mit dem Tool `metasploit` kommen Listen von Default Passwörtern: `/usr/share/metasploit-framework/data/wordlists`
- Wortlisten können selber erstellt oder [gekauft](https://www.openwall.com/wordlists/) werden. Es gibt auch Tools zum erzeugen von Wortlisten, z.B. `crunch` oder `cewl` (Passwort Profiling von Begriffen die auf einer Internetseite gefunden werden).





#### Eigene Wortliste

Wortlisten sind simple Textfiles

```sh
$ more test.lst
braunau
htl
gundula
```

```sh
$	john --wordlist=test.lst crack.password
```



#### Mangling Rules

Die Erfolgswahrscheinlichkeit im Wordlist Mode kann wesentlich erhöht werden wenn zusätzlich Mangling Rules angewendet werden. Dafür gibt es die Option `--rules`:

```sh
$	john --wordlist=password.lst --rules crack.password
```

Wird die Option `--rules` bei `--wordlist` verwendet so arbeitet john mit den Mutationsregeln der Sektion `[List.Rules:Wordlist]` in `/etc/john/john.conf`. Diese sind weniger rechenintensiv als die Regeln vom Single Mode. Die Mutationsregeln können zusätzlich angegeben werden.



```sh
$ john --wordlist=password.lst --rules=Single crack.password
```

`Single` ist bspw. erfolgreich bei Mutation von `test` in `Test24` – die `WordList` Rules scheitern daran.

Mit der Option `--stdout` werden die Passwortkandidaten ausgegeben ohne diese mit den Hashwerten zu vergleichen.

```sh
$ more test.lst
braunau
htl
gundula
```



```sh
$ john --rules --wordlist=test.lst --stdout
```



```
...
Gundula1
htlhtl
uanuarb
aludnug
1braunau
1htl
1gundula
BRAUNAU
HTL
GUNDULA
...
Gundula4
Braunau6
Htl6
Gundula6
Braunau8
Htl8
Gundula8
Braunau.
Htl.
Gundula.
Braunau?
Htl?
Gundula?
Braunau0
..
```



#### Eigene Regeln

**Eigene Regel** in der Konfigurationsdatei von John the Ripper ergänzen:

```bash
$ sudo -i
$ nano /etc/john/john.conf
```

Beispiel: Erweitern der `WordList` Sektion durch eine Regel (`^[0-9]$[0-9]`) die alle Ziffern am Anfang und am Ende des Worts ausprobiert:

```
...
# Wordlist mode rules
[List.Rules:Wordlist]
# Try words as they are
:
# Lowercase every pure alphanumeric word
-c >3 !?X l Q
...
...
# Ziffer am Anfang ^ und Ende $ des Wortes
^[0-9]$[0-9]
```



```bash
$ john --wordlist=test.txt --rules --stdout >test-mutated.txt
Using default input encoding: UTF-8
Press 'q' or Ctrl-C to abort, almost any other key for status
448p 0:00:00:00 100.00% (2021-05-13 05:16) 8960p/s 9gundula9

#########################
$ tail test-mutated.txt 
9gundula6
9braunau7
9htl7
9gundula7
9braunau8
9htl8
9gundula8
9braunau9
9htl9
9gundula9

```



Man kann in `/etc/john/john.conf` auch eine **eigene Sektion** hinzufügen:

```
[List.Rules:TwoDigits]
# Ziffer am Anfang^ und Ende$ des Wortes
^[0-9]$[0-9]
```

Nur diese Regel ausführen:

```bash
$ john --wordlist=test.txt --rules=TwoDigits --stdout >test-mutated.txt | more
```





### Incremental Mode

Der stärkste (un rechenaufwändigste) cracking mode. Probiert alle Möglichkeiten durch

["Incremental" mode](https://www.openwall.com/john/doc/MODES.shtml#:~:text="Incremental" mode)

```sh
$ john --incremental crack.password
```

Default Einstellungen in `/etc/john/john.conf` in der Sektion `[Incremental:ASCII]`:

- 95 ASCII Zeichen
- alle möglichen Längen bis 13

Dies kann lange (ewig) dauern.

Schwächere Passwörter können mit anderen vordefinierten Incremental Mode Parametern gefunden werden, z.B. `digits`:

```sh
$ john --incremental=digits mypasswd
```

probiert alle Ziffernkombinationen von `0` bis `99999999999999999999`

Siehe auch [hier](https://www.openwall.com/john/doc/EXAMPLES.shtml).



## Crunch

Tool `crunch`: zum erstellen einer brute-force Wortliste – ähnlich zum Incremental Mode von John the Ripper.

BeispieL: Länge 4 aus einer Buchstabenliste:

```sh
$ crunch 4 4 "asdfgzxcv1234567890#?" | head
Crunch will now generate the following amount of data: 972405 bytes
0 MB
0 GB
0 TB
0 PB
Crunch will now generate the following number of lines: 194481 
aaaa
aaas
aaad
aaaf
aaag
aaaz
aaax
aaac
aaav
aaa1

```

Alle Wörter von Länge 4 bis 6 aus bestimmten Buchstaben zusammengesetzt:

```bash
$ crunch 4 6 abcdefg123456789! -o crunchlist.txt
# crunch <min-len> <max-len> [<charset string>] [options]
# -o wordlist.txt
#              Specifies the file to write the output to, eg: wordlist.txt
```

Fertige charsets aus `/usr/share/crunch/charset.lst`

```bash
$ crunch 4 8 -f /usr/share/crunch/charset.lst mixalpha-numeric-all-sv -o crunch2.txt
# -f /path/to/charset.lst charset-name
#              Specifies a character set from the charset.lst
```

Achtung kann groß werden: 84 PB! (Peta Byte)

Siehe `man crunch` – eher komplex in der Bedienung.

Output von crunch direkt in john **pipen**:

```sh
$ crunch 4 8 01234567890abcdefghijklmnopqrstuvwxyz | john hashes --stdin
```

Wortkombinationen "crunchen" (aus der man page):

```sh
$ crunch 4 5 -p dog cat bird
#       The numbers aren't processed but are needed.
#       crunch will generate birdcatdog, birddogcat, catbirddog, catdogbird,  
#           dogbirdcat,dogcatbird.
```



[[Create Wordlists with Crunch](https://null-byte.wonderhowto.com/how-to/tutorial-create-wordlists-with-crunch-0165931/)]

