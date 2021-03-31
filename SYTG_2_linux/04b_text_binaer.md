---
title: Text- und Binärdaten
tags: [2AHITS_Teach]
---

Daten können grob in 2 Klassen eingeteilt werden:

- Binär-Daten – Folge von Bytewerten
- Text-Daten – Folge von Zeichen

Da jede Datenspeicherung in binärer Form erfolgt sind auch Textdaten eigentlich Binärdaten – nur werden diese speziell interpretiert.

Darstellung von einem Byte Daten:

- Dezimal: `120`
- Hexadezimal: `78`
- Buchstabe: `x` (Nr. 120 im ASCII Code)



`cat` zeigt Daten als Buchstaben, `xxd` als Hexadezimalzahlen ([manpage](https://linux.die.net/man/1/xxd))

```bash
$ xxd shopping.txt 
```

```
00000000: 4672 6564 2061 7070 6c65 7320 3230 0a53  Fred apples 20.S
00000010: 7573 7920 6f72 616e 6765 7320 350a 4d61  usy oranges 5.Ma
00000020: 726b 2077 6174 6572 6d65 6c6c 6f6e 7320  rk watermellons 
00000030: 3132 0a52 6f62 6572 7420 7065 6172 7320  12.Robert pears 
00000040: 340a 5465 7272 7920 6f72 616e 6765 7320  4.Terry oranges 
...
000000e0: 6177 6265 7272 6965 7320 3133 0a54 6f6e  awberries 13.Ton
000000f0: 7920 6d61 7261 6375 6a61 2033 0a41 6e6e  y maracuja 3.Ann
00000100: 6520 6261 6e61 6e61 7320 370a            e bananas 7.
```

`xxd` liefert ein sogenanntes Hexdump.

  1. Spalte Offset
  2. Daten in hex
    3. Daten als ASCII Buchstaben (. für non-printable character)

Noch flexibler: `od` ([manpage](https://man7.org/linux/man-pages/man1/od.1.html))

```bash
$ od -A x -t x1z shopping.txt
```

- `-A x`: Offsets in hexadezimal (`-A d` für dezimal)
- `-t`: Ausgabeformat
  - `-t x1z` ... Hexaddezimal, 1 Byte, `z` (Zeichen als 3te Spalte ausgeben)
  - `-t u1z` unsigned Dezimal

```bash
$ od -A d -t u1z shopping.txt
```

```
0000000  70 114 101 100  32  97 112 112 108 101 115  32  50  48  10  83  >Fred apples 20.S<
0000016 117 115 121  32 111 114  97 110 103 101 115  32  53  10  77  97  >usy oranges 5.Ma<
0000032 114 107  32 119  97 116 101 114 109 101 108 108 111 110 115  32  >rk watermellons <
0000048  49  50  10  82 111  98 101 114 116  32 112 101  97 114 115  32  >12.Robert pears <
0000064  52  10  84 101 114 114 121  32 111 114  97 110 103 101 115  32  >4.Terry oranges <
0000080  57  10  76 105 115  97  32 112 101  97  99 104 101 115  32  55  >9.Lisa peaches 7<
...
0000208 110  97 115  32  49  49  10  77  97 114 105  97  32 115 116 114  >nas 11.Maria str<
0000224  97 119  98 101 114 114 105 101 115  32  49  51  10  84 111 110  >awberries 13.Ton<
0000240 121  32 109  97 114  97  99 117 106  97  32  51  10  65 110 110  >y maracuja 3.Ann<
0000256 101  32  98  97 110  97 110  97 115  32  55  10                  >e bananas 7.<
0000268
```



## Binärdaten

Download `htl_logo.jpg`:

```bash
$ wget https://matejkaf.github.io/Doc/SYTG_2_linux/testdata/htl_logo.jpg
```

Was ergibt die Ausgabe mit `cat`? Analysiere die Anzeige von `xxd`, schau dir den Anfang der Datei an (`head`).



## Sonderzeichen und UTF-8

Sonderzeichen im Text, z.B. Umlaute:

```
$ echo aäoö > test.txt
$ cat test.txt 
aäoö
$ xxd test.txt 
00000000: 61c3 a46f c3b6 0a                        a..o...
```

UTF-8 Kodierung von Unicode

`c3a4` ... ä ([Unicode U+00E4](https://www.compart.com/en/unicode/U+00E4))

`c3b6` ... ö ([Unicode U+00F6](https://www.compart.com/en/unicode/U+00F6))

UTF-8 braucht teilweise 2 Byte (manchmal 4) pro Zeichen, aber jedes Zeichen der Welt ist darstellbar!

- Unicode: Nummerierte Zeichen
- UTF-8: Binäre Darstellung (Encoding, Kodierung) der Unicode Nummer (=Codepoint)

Es sollte immer UTF-8 verwendet werden!

The power of unicode (UTF-8):

```bash
$ wget https://matejkaf.github.io/Doc/SYTG_2_linux/testdata/chinese.txt
$ wget https://matejkaf.github.io/Doc/SYTG_2_linux/testdata/arabic.txt
```



## Latin 1

Ältere Text-Kodierungen sind eingeschränkt auf ein Byte pro Zeichen und erweitern den ASCII Code.

Beispiel: `latin1.txt` Datei mit ISO 8859-1 (latin 1) Kodierung.

```bash
$ wget https://matejkaf.github.io/Doc/SYTG_2_linux/testdata/latin1.txt
```



## iconf

iconv ([manpage](https://man7.org/linux/man-pages/man1/iconv.1.html)) zum Wandeln der Kodierung

```bash
# iconv from to
$ iconv -f ISO-8859-9 -t utf-8 latin1.txt
# keine Änderung der Datei, Ausgabe auf stdout
```

Test: Welche Kodierung hat ein mit Windows Notepad erzeugtes Text-File?





