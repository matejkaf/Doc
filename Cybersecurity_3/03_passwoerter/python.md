---
title: Passwörter mit Hilfe von Python knacken
---



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

