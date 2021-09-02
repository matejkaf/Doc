---
title: john the ripper
subtitle: Linux password cracking
---

# Unshadow

[[Linux Password Cracking: Explain unshadow and john Commands ( John the Ripper Tool )](https://www.cyberciti.biz/faq/unix-linux-password-cracking-john-the-ripper/)]

```sh
$ unshadow /etc/passwd /etc/shadow > crack.password
```



# Hands On: Passwort Cracking

mit `unshadow` erzeugtes Passwort File:

```
matejka:$6$Y.6vLGlD1cGsutIg$Hn2/2.hNyojM19F1AwNHPAzAHEk.3vPhsOqWOGyds5hieGvedb45DCxV5aqZ194w12zhaet1rhWJyCx/mzePk.:1000:1000:Franz MATEJKA,,,:/home/matejka:/bin/bash
test01:$6$TTPymVVpspMofDYz$aDc9NwxcZEpJ.0jxxgFTnQWdDgK948wiLPjcY8iMwJPmmpQzx6kIwe74mjLvvvMJ41I0B9B7vyx56vOR04mLU0:1001:1001:Test,,,:/home/test01:/bin/bash
test02:$6$TzGIne3m/qFINuIB$3kchXYQ8OuZcxRKe0AZe05WX/m1E.B1jfm20bj0WnrMr4m0AoyG7yEnbVPUbEzxcryfeTt11kayOJUidoy19C/:1002:1002:,,,:/home/test02:/bin/bash
weissman:$6$SotPZzHERU/nisH2$62EdHdS7dsHypMJVJeLAs1shDlx8/tr7FIWiN.RKM..wYMMXCV17.x5/KtEefcnEBLcvMsgwKA2hW32FewVqT0:1003:1003:Weissman,,,:/home/weissman:/bin/bash
test03:$6$dJJVujy5gSjhsHtI$oX8PV8jl3VFUR.YBPj4PLKSe9q5/gzbWpfdWV0o0BMmtAPovsBQmwbhjQcf8iihMVXIJQWNNCGv9tsW3zAs1N/:1004:1004:,,,:/home/test03:/bin/bash
```

Encoding des Hash Strings:

```
$6$Y.6vLGlD1cGsutIg$Hn2/2.hNyojM19F1AwNHPAzAHEk.3vPhsOqWOGyds5hieGvedb45DCxV5aqZ194w12zhaet1rhWJyCx/mzePk.
```

dreiteilig: hash_algorithm, hash_salt, and hash_data

`Algorithmus: $6$` = SHA-512 / crypt (sha512crypt)

Salt: `Y.6vLGlD1cGsutIg`

Hash: `Hn2/2.hNyojM19F1AwNHPAzAHEk.3vPhsOqWOGyds5hieGvedb45DCxV5aqZ194w12zhaet1rhWJyCx/mzePk.`

> Unix stores password hashes computed with [crypt](https://en.wikipedia.org/wiki/Crypt_(C)) in the [`/etc/passwd` file](https://en.wikipedia.org/wiki/Passwd#Password_file) using radix-64 encoding called B64. It uses a mostly-alphanumeric set of characters, plus `.` and `/`. Its 64-character set is "`./0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz`". Padding is not used. 
>
> (From [wikipedia Base64](https://en.wikipedia.org/wiki/Base64).)

Radix-64 ≠ Base64

```c
// http://cvsweb.openbsd.org/cgi-bin/cvsweb/src/lib/libc/crypt/bcrypt.c?rev=1.27&content-type=text/x-cvsweb-markup
const static u_int8_t Base64Code[] =
"./ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
```

Rounds: 5000 default wert

`crypt` ist die Standard UNIX Funktion zum berechnen der Hashwerte und prüfen der Passwörter.





# Yescrypt

"Problem" bei Kali Linux: Neue User werden mit `$y$` (yescrypt) gehasht. `john` kann noch kein yescrypt

```sh
$ john crack.password 
No password hashes loaded (see FAQ)
```

Diese Fehlermeldung kommt wenn John kein bekanntes Hashverfahren findet (z.B. nur yescrypt in Kali)

Lösung:

Erzeugen des `shadow` Eintrags mit `mkpasswd`.



# mkpasswd

```bash
# mkpasswd verwenden um Hash-Wert zu berechnen:
$ mkpasswd --method=sha512crypt --salt=Y.6vLGlD1cGsutIg franz
$6$Y.6vLGlD1cGsutIg$Hn2/2.hNyojM19F1AwNHPAzAHEk.3vPhsOqWOGyds5hieGvedb45DCxV5aqZ194w12zhaet1rhWJyCx/mzePk.

# show all hashing methods
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



Beispiele:

```sh
$ mkpasswd --method=sha512crypt p8ssw0rd  
$6$QrBQnyeXt61IcfVR$lXEiG4LME9LF9VjOmPa5R4IsZ2/oXkztP04nh.wwcdAKnHehxreneSljIis6ub2KRGTEmUgMbNQcWWUVm4BNu/

$ mkpasswd --method=sha512crypt test1  
$6$f0pzxkd2lEfJsYNn$xsnMkxoktiaZDsZ6nyw9WKeFBpSfub4ke7feEZG8H6FQhUjaFyFtcAmE/RbLqms2NcXRnJfDU1lvMpFmGTDnb/

$ mkpasswd --method=sha512crypt Test18  
$6$6ebEaPf.mvEQ0zAk$ttrtrTSc3O9qAjX7uY2aX1TKmYZBNUMGmKF1i2t3y02RRU/8hQHkH5n34UF7bmjtS/IHGMOaEFn0wRT84cUo2/

```

Generiert zufälliges Salt wenn keines angegeben!

Diesen String in `/etc/shadow` einfügen und testen:

```sh
$ su test1                                                                                                               Password: 
$ whoami
test1
$ exit
exit
```



# John the Ripper

`john` (aus dem Projekt Openwall)

```sh
$ john crack.password 
```

> If no mode is specified, john will try "single" first, then "wordlist" and finally "incremental". [man page]

[[John the Ripper's cracking modes](https://www.openwall.com/john/doc/MODES.shtml)]

- Single
- Wordlist
- Incremental



## Single

Cracking Mode **single** mit pw=username

```sh
$ john --single crack.password                     
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

$ john --show crack.password 
test1:test1:1001:1001:,,,:/home/test1:/bin/bash

1 password hash cracked, 0 left
```

Mangling rules?

```
-single
              Enables the "single crack" mode, using rules from [List.Rules:Single].
```

`[List.Rules:Single]` ist eine Verweis auf eine Section in `/etc/john/john.conf`

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

# Wedge the Jumbo-specific addons in here!
.include [List.Rules:JumboSingle]

# Weird order, eh? Can't do anything about it, the order is based on the
# number of successful cracks...
<* d
r c
-c <* (?a d c
-<5 -c >5 '5 /?u l
...
```

Nicht so übersichtlich auf den ersten Blick, die Grundidee ist, dass Standard-Änderungen durchprobiert werden (z.B. anfügen einer Zahl)

Versuch mit dem Passwort `Test18` (großer Anfangsbuchstabe und angefügte Zahl) ist erfolgreich!



## .pot File

John merkt sich bereits gecrackte Passwörter und versucht es nicht noch einmal (auch wenn man eine andere Methode ausprobieren will).

Lösung `john.pot` File löschen:

```sh
$ rm ~/.john/john.pot
```



## Wordlist

john's Standard Wordlist (ist eher klein) (`/usr/share/john/password.lst`) wird verwendet wenn keine eigene Wortliste angegeben wird.

```sh
$ more /usr/share/john/password.lst 
```



```sh
$	john --wordlist
```

> To catch weak passwords not derived from readily available users' personal information, you should proceed with cracking modes demanding more processor time. First, let's try a tiny wordlist with word mangling rules enabled: [[*](https://www.openwall.com/john/doc/EXAMPLES.shtml)]



Eigene Wortliste:

```sh
$ more password.lst 
test
pass
```

```sh
$	john --wordlist=password.lst --rules mypasswd
```

Wordlists alleine sind natürlich nicht erfolgreich:

```sh
$	john --wordlist=password.lst mypasswd
```

Auch die Standard Wordlist (Mangling) Rules helfen nicht weiter

```sh
$	john --wordlist=password.lst --rules mypasswd
```

Erfolgreich:

```sh
$ john --wordlist=password.lst --rules=Single crack.password
```

Rules ausprobieren:

```sh
$ john --rules=Single --wordlist=password.lst --stdout
```



## Incremental

["Incremental" mode](https://www.openwall.com/john/doc/MODES.shtml#:~:text="Incremental" mode)

TODO





# Wortlisten erstellen



Die Erfolgswahrscheinlichkeit ein Passwort zu knacken hängt von der Qualität der Wortliste ab. Umfangreiche Wortlisten stammen von diversen password breaches, z.B. rockyou.txt

Siehe in Kali: `/usr/share/wordlists`



## Mangling

Oft werden Passwörter **mutiert** (mangling), d.h. Sonderzeichen und Ziffern eingebaut sowie Groß-/Kleinschreibung verändert. 

John the Ripper hat dafür etliche Regeln eingebaut um mutierte Wortlisten zu erzugen

Anwendung:

```bash
$ more test.txt 
braunau
htl
gundula

$ john --wordlist=test.txt --rules --stdout >test-mutated.txt
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

Konfigurationsdatei – in der Mutationsregeln definiert sind:  `/etc/john/john.conf`

Eigene Regel in der Konfigurationsdatei ergänzen:

```bash
$ sudo -i
$ nano /etc/john/john.conf
```

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



Man kann im conf File auch eine eigene Sektion hinzufügen:

```
[List.Rules:TwoDigits]
# Ziffer am Anfang^ und Ende$ des Wortes
^[0-9]$[0-9]
```

Nur diese Regel ausführen:

```bash
$ john --wordlist=test.txt --rules=TwoDigits --stdout >test-mutated.txt | more
```



## Crunch

Tool `crunch`: zum erstellen einer brute-force liste

Länge 4 aus einer Buchstabenliste:

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

Achtung 84 PB! (Peta Byte)

Siehe `man crunch` – eher komplex in der Bedienung.

Output von crunch direkt in john **pipen**:

```sh
$ crunch 4 8 01234567890abcdefghijklmnopqrstuvwxyz | john hashes --stdin
```



# Weiterführend

- [Comprehensive Guide to John the Ripper. Part 5: Rule-based attack](https://miloserdov.org/?p=5477)

