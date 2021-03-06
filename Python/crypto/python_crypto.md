---
title: Doc
tags: [crypto,info]
---

# Kryptographie in Python

[tutorialspoint.com – Cryptography with Python - Quick Guide](https://www.tutorialspoint.com/cryptography_with_python/cryptography_with_python_quick_guide.htm)



## Encoding und Bytestrings

- [Unicode in Python](https://docs.python.org/3/howto/unicode.html)
- [bytes.decode](https://docs.python.org/3/library/stdtypes.html#bytes.decode)
- [str.encode](https://docs.python.org/3/library/stdtypes.html#str.encode)
- [Standard Encodings](https://docs.python.org/3/library/codecs.html#standard-encodings)



```python
text = "Text ö ä ü usw"
print(text)
# In python3 sind alle Strings Unicode

# Erzeuge einen Bytestring (Encoding UTF-8)
text_bytes = text.encode('utf-8')
print(text_bytes)
```

> https://stackoverflow.com/questions/6224052/what-is-the-difference-between-a-string-and-a-byte-string:
>
> Assuming Python 3: a string is a sequence of characters, ie [unicode codepoints](http://en.wikipedia.org/wiki/Unicode); these are an abstract concept, and can't be directly stored on disk. A byte string is a sequence of, unsurprisingly, bytes - things that *can* be stored on disk. The mapping between them is an *encoding* - there are quite a lot of these (and infinitely many are possible) - and you need to know which applies in the particular case in order to do the conversion, since a different encoding may map the same bytes to a different string: 
>
> ```python
> >>> b'\xcf\x84o\xcf\x81\xce\xbdo\xcf\x82'.decode('utf-16')
> '蓏콯캁澽苏'
> >>> b'\xcf\x84o\xcf\x81\xce\xbdo\xcf\x82'.decode('utf-8')
> 'τoρνoς'
> ```
>
> Once you know which one to use, you can use the `.decode()` method of the byte string to get the right character string from it as above. For completeness, the `.encode()` method of a character string goes the opposite way:
>
> ```python
> >>> 'τoρνoς'.encode('utf-8')
> b'\xcf\x84o\xcf\x81\xce\xbdo\xcf\x82'
> ```





## Standard Libraries

- Cryptographic Services
  - [`hashlib` — Secure hashes and message digests](https://docs.python.org/3/library/hashlib.html)
  - [`hmac` — Keyed-Hashing for Message Authentication](https://docs.python.org/3/library/hmac.html)
  - [`secrets` — Generate secure random numbers for managing secrets](https://docs.python.org/3/library/secrets.html)



### hashlib + base64

```python
import hashlib

##
## Hash algorithms
##

plaintext = "Text der gehasht werden soll ö ä ü"
print(plaintext)
# In python3 sind alle Strings Unicode

# Erzeuge eine Bytestring (Encoding UTF-8)
plaintext_bytes = plaintext.encode('utf-8')
print(plaintext_bytes)

# https://stackoverflow.com/questions/6224052/what-is-the-difference-between-a-string-and-a-byte-string

m = hashlib.sha256()
m.update(plaintext_bytes)
hash_value = m.digest() # hashwert als bytestring
print(type(hash_value)) # <class 'bytes'>
print('digest:')
print(hash_value)
print(f'digest_size:{m.digest_size*8} bits {m.digest_size} bytes')

#
# base16 Encoding
hash_value_base16 = m.hexdigest()
print(hash_value_base16)
print(type(hash_value_base16)) # <class 'str'>

#
# base64 Encoding
# https://docs.python.org/3/library/base64.html
import base64 # import module
print('## BASE64 ENCODING ##')
hash_value_base64 = base64.b64encode(hash_value) # bytestring als parameter
print(hash_value_base64)
print(type(hash_value_base64)) # <class 'bytes'>
hash_value_base16 = base64.b16encode(hash_value)
print(hash_value_base16)

# decoding
decoded = base64.b64decode(hash_value_base64)
print(decoded)

print('## --------------- ##')




#
print(hashlib.algorithms_available)

##
## Key derivation
##

# TODO


"""
Text der gehasht werden soll ö ä ü
b'Text der gehasht werden soll \xc3\xb6 \xc3\xa4 \xc3\xbc'
Text der gehasht werden soll ö ä ü
b'Text der gehasht werden soll \xc3\xb6 \xc3\xa4 \xc3\xbc'
<class 'bytes'>
Text der gehasht werden soll ö ä ü
b'Text der gehasht werden soll \xc3\xb6 \xc3\xa4 \xc3\xbc'
<class 'bytes'>
digest:
Text der gehasht werden soll ö ä ü
b'Text der gehasht werden soll \xc3\xb6 \xc3\xa4 \xc3\xbc'
<class 'bytes'>
digest:
b'\xf8\xb4y\t\xfc\xa9\r\xec\x18\xd3\xef8U\x1c\xb3\x11>N\x17\xe5\x81\xf8\xd8{\xf6RM\xd5~\xfd\xcf\xb7'
Text der gehasht werden soll ö ä ü
b'Text der gehasht werden soll \xc3\xb6 \xc3\xa4 \xc3\xbc'
<class 'bytes'>
digest:
b'\xf8\xb4y\t\xfc\xa9\r\xec\x18\xd3\xef8U\x1c\xb3\x11>N\x17\xe5\x81\xf8\xd8{\xf6RM\xd5~\xfd\xcf\xb7'
digest_size:256 bits 32 bytes
f8b47909fca90dec18d3ef38551cb3113e4e17e581f8d87bf6524dd57efdcfb7
<class 'str'>
## BASE64 ENCODING ##
b'+LR5CfypDewY0+84VRyzET5OF+WB+Nh79lJN1X79z7c='
<class 'bytes'>
b'F8B47909FCA90DEC18D3EF38551CB3113E4E17E581F8D87BF6524DD57EFDCFB7'
b'\xf8\xb4y\t\xfc\xa9\r\xec\x18\xd3\xef8U\x1c\xb3\x11>N\x17\xe5\x81\xf8\xd8{\xf6RM\xd5~\xfd\xcf\xb7'
## --------------- ##
{'sha384', 'sha3_224', 'sha512_224', 'sm3', 'sha3_512', 'sha224', 'shake_256', 'sha1', 'md5-sha1', 'sha512_256', 'md4', 'blake2b', 'whirlpool', 'sha512', 'md5', 'sha3_256', 'sha3_384', 'blake2s', 'ripemd160', 'shake_128', 'sha256'}
"""
```



Experiment:

sha256 Hash in Base64 Format einer Datei ermitteln.

```python
import hashlib
import base64

in_file = open("goethe.md", "rb") # opening for [r]eading as [b]inary
data = in_file.read()
print(type(data)) # <class 'bytes'>

m = hashlib.sha256()
m.update(data)
hash_value = m.digest() # hashwert als bytestring
hash_value_base64 = base64.b64encode(hash_value)
print(hash_value_base64)

in_file.close()

"""
<class 'bytes'>
b'v/jIRLy+z5z9BTzvD3oJ9ZjllY5K64wIkaNsyaeWPkM='
"""
```



## Ladbare Libraries

```bash
pip install cryptography
```



