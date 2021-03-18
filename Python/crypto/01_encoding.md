---
title: Kryptographie in Python
subtitle: Encoding und Bytestrings
---

Python unterscheidet zwischen Strings und Bytestrings. 

String ⇨ Encoding ⇨ Bytestring ⇨ Decoding ⇨ String

- Ein String ist eine Folge von Zeichen
- Ein Bytestring ist eine Folge von Bytewerten



## Encoding

In python3 sind alle **Strings** Sequenzen von Buchstaben aus dem Unicode Zeichensatz (dieser enthält alle bekannten Zeichen und Symbole).

```python
text = "Text ö ä ü usw"
print(text) 
```

In Unicode ist jedem Zeichen eine Nummer (=Codepoint) zugeordnet, z.B. 

- U+00F6 (ö). 

- U+1F40C (🐌)

Durch das Encoding ist festgelegt wie diese Zeichen im Speicher abgelegt sind.

**Encoding UTF-32** Jedes Zeichen benötigt 4 Bytes diese enthalten die Nummer des Codepoints.

**Encoding UTF-16** Die häufigsten Zeichen benötigen 2 Bytes. Für selten verwendete Zeichen werden 4 Bytes verwendet.

**Encoding UTF-8** verwendet nur ein Byte für die ersten 128 code points, diese entsprechen dem ASCII Code.  Für weitere Zeichen werden 2 oder 4 Bytes verwendet. UTF-8 ist die häufigste Kodierung – weil Speichersparend.

[Liste von weiteren Encodings](https://docs.python.org/3/library/codecs.html#standard-encodings)

Um einen String in einem bestimmten Encoding darzustellen wird [str.encode](https://docs.python.org/3/library/stdtypes.html#str.encode) verwendet:

```python
text = "oö aä uü z÷ |🐌|"
text_bytes = text.encode('utf-8')
print(text_bytes)
```

```
b'o\xc3\xb6 a\xc3\xa4 u\xc3\xbc z\xc3\xb7 |\xf0\x9f\x90\x8c|'
```

Das Ergebnis ist ein sogenannter Bytestring (hier im UTF-8 Encoding)

Der selbe String im UTF-32 Encoding:

```python
text = "oö aä uü z÷ |🐌|"
text_bytes = text.encode('utf-32')
print(text_bytes)
```

```
b'\xff\xfe\x00\x00o\x00\x00\x00\xf6\x00\x00\x00 \x00\x00\x00a\x00\x00\x00\xe4\x00\x00\x00 \x00\x00\x00u\x00\x00\x00\xfc\x00\x00\x00 \x00\x00\x00z\x00\x00\x00\xf7\x00\x00\x00 \x00\x00\x00|\x00\x00\x00\x0c\xf4\x01\x00|\x00\x00\x00'
```



## Decoding

Decoding eines Bytestrings mit [bytes.decode](https://docs.python.org/3/library/stdtypes.html#bytes.decode):

```python
b'\xcf\x84o\xcf\x81\xce\xbdo\xcf\x82'.decode('utf-16')
```

```
'蓏콯캁澽苏'
```



## Encoding Beispiele

[Unicode Character “a” (U+0061)](https://www.compart.com/en/unicode/U+0061)

UTF-8 Encoding:	0x61
UTF-16 Encoding:	0x0061
UTF-32 Encoding:	0x00000061

[Unicode Character “ö” (U+00F6)](https://www.compart.com/en/unicode/U+00F6)

UTF-8 Encoding:	0xC3 0xB6
UTF-16 Encoding:	0x00F6
UTF-32 Encoding:	0x000000F6

Ab einem gewissen Codepoint sind für UTF-8 3 Bytes notwendig:

[Unicode Character “澽” (U+6FBD)](https://www.compart.com/en/unicode/U+6FBD)

UTF-8 Encoding:	0xE6 0xBE 0xBD
UTF-16 Encoding:	0x6FBD
UTF-32 Encoding:	0x00006FBD

[Unicode Character “𖼝” (U+16F1D)](https://www.compart.com/en/unicode/U+16F1D)

UTF-8 Encoding:	0xF0 0x96 0xBC 0x9D
UTF-16 Encoding:	0xD81B 0xDF1D
UTF-32 Encoding:	0x00016F1D

Weiteres dazu in [Unicode in Python](https://docs.python.org/3/howto/unicode.html)
