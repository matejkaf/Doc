---
title: Kryptographie in Python
subtitle: Bytestrings
---

Kryptographische Operationen nehmen größtenteils Bytestrings als Input und Output.

[Python Datentyp `bytes`](https://docs.python.org/3/library/stdtypes.html#bytes)

Bytestring **von einem String**


```python
text = "oö aä uü z÷ |🐌|"
text_bytes = text.encode('utf-8')
print(text_bytes)
```

```
b'o\xc3\xb6 a\xc3\xa4 u\xc3\xbc z\xc3\xb7 |\xf0\x9f\x90\x8c|'
```

Erklärung: String aus Bytewerten, alle Werte <128 werden als Buchstabe angezeigt bzw. Werte <32 (0x20) können auch als Escapesequenz aufscheinen (`\n` für `\x0a`, `\t` für `\x09`). Werte ab 128 bzw. wenn keine Escape-Sequenz definiert ist werden als Hex in der Form `\x##` dargestellt.

```
bytestr = b'\n\x0a\x09\x20\x30\x31\x50\x7E\x8F'
print(bytestr)
```

```
b'\n\n\t 01P~\x8f'
```

Einen Bytestring in einen **String aus Hex-Ziffern** wandeln – Methode [`hex()`](https://docs.python.org/3/library/stdtypes.html#bytes.hex) von Bytestring:

```
bytestr = b'\n\x0a\x09\x20\x30\x31\x50\x7E\x8F'
print(bytestr.hex())
print(bytestr.hex(' ')) # mit Abstand
```

```
0a0a09203031507e8f
0a 0a 09 20 30 31 50 7e 8f
```

Länge eines Bytestrings:

```python
>>> len(bytestr)
9
```



## Dateien

Bytestrings in Dateien schreiben bzw. lesen.

Dazu Datei im "binary mode" öffnen.

```python
msg = b'\xe9\x87\x96s\xc6\x10\xd7^{&\xa4;O=,\xcc'
f = open('key.bin', 'wb') # write / binary mode
f.write(msg)
f.close()
```

```python
f = open('key.bin','rb')
data_read = f.read()
f.close()
```

