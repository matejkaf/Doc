

# Hands On: Passwort Cracking

Kali Linux Passwort File, für "john the ripper" mit `unshadow` erzeugt.

```
matejka:$6$Y.6vLGlD1cGsutIg$Hn2/2.hNyojM19F1AwNHPAzAHEk.3vPhsOqWOGyds5hieGvedb45DCxV5aqZ194w12zhaet1rhWJyCx/mzePk.:1000:1000:Franz MATEJKA,,,:/home/matejka:/bin/bash
test01:$6$TTPymVVpspMofDYz$aDc9NwxcZEpJ.0jxxgFTnQWdDgK948wiLPjcY8iMwJPmmpQzx6kIwe74mjLvvvMJ41I0B9B7vyx56vOR04mLU0:1001:1001:Test,,,:/home/test01:/bin/bash
test02:$6$TzGIne3m/qFINuIB$3kchXYQ8OuZcxRKe0AZe05WX/m1E.B1jfm20bj0WnrMr4m0AoyG7yEnbVPUbEzxcryfeTt11kayOJUidoy19C/:1002:1002:,,,:/home/test02:/bin/bash
weissman:$6$SotPZzHERU/nisH2$62EdHdS7dsHypMJVJeLAs1shDlx8/tr7FIWiN.RKM..wYMMXCV17.x5/KtEefcnEBLcvMsgwKA2hW32FewVqT0:1003:1003:Weissman,,,:/home/weissman:/bin/bash
test03:$6$dJJVujy5gSjhsHtI$oX8PV8jl3VFUR.YBPj4PLKSe9q5/gzbWpfdWV0o0BMmtAPovsBQmwbhjQcf8iihMVXIJQWNNCGv9tsW3zAs1N/:1004:1004:,,,:/home/test03:/bin/bash
```

Passwörter sind gehasht abgespeichert. 

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



```c
// von
// http://cvsweb.openbsd.org/cgi-bin/cvsweb/src/lib/libc/crypt/bcrypt.c?rev=1.27&content-type=text/x-cvsweb-markup
const static u_int8_t Base64Code[] =
"./ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

```



Rounds: 5000 default wert

[siehe quickhash](https://quickhash.com)

`crypt` ist die Standard UNIX Funktion zum berechnen der Hashwerte und prüfen der Passwörter.

Kali Linux:

```bash
# mkpasswd verwenden um Hash-Wert zu berechnen:
$ mkpasswd --method=sha512crypt --salt=Y.6vLGlD1cGsutIg franz
$6$Y.6vLGlD1cGsutIg$Hn2/2.hNyojM19F1AwNHPAzAHEk.3vPhsOqWOGyds5hieGvedb45DCxV5aqZ194w12zhaet1rhWJyCx/mzePk.

# show all hashing methods
mkpasswd --method=help --salt=Y.6vLGlD1cGsutIg franz
```





# CrackStation

md5 / charley

`8d3533d75ae2c3966d7e0d4fcc69216b`

[CrackStation](https://crackstation.net)

(aus 7.3.2.4 Lab - Attacking a mySQL Database.pdf, CISCO CCNA)



## Python

```python
#####################
# https://docs.python.org/3/library/crypt.html
#
import crypt

print("available methods")
print(crypt.methods)

print("default METHOD")
cr = crypt.crypt("charley")
print(cr)

print("MD5 method")
cr = crypt.crypt("charley",crypt.METHOD_MD5)
print(cr)

# MD5 breach
breach = "$1$/5ytelKx$nhbg5/0Icyo.RO5YI6WoR1"
cr = crypt.crypt("charleY",breach)
print(cr) # if the pw is correct we get same hash here
```

```
available methods
[<crypt.METHOD_SHA512>, <crypt.METHOD_SHA256>, <crypt.METHOD_MD5>, <crypt.METHOD_CRYPT>]
default METHOD
$6$Jj3bPBa4b/nN8umM$GDfeqqGb2eyPRT8qs0jqOH7o6TPzBvXEjnlFWACJSF3QfYvpEtWNz6O6f8KuSfov3WioPO/pJABLC0e5lyFJ/1
MD5 method
$1$1dm4dxuq$Xdk3QekkfQsE3h2pC7hJH0
$1$/5ytelKx$8h6U2zW/i.2VVIFI6yfAQ1
```

