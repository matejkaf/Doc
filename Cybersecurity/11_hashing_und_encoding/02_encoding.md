# Encoding

Hashwerte sind große Binärzahlen (typisch 128/256/512 Bits). Diese möchte man als Text darstellen.
Die Art Darstellung von Daten/Information nennt man **Kodierung** (engl. Encoding).

Möglichkeiten:
- Hex (Radix-16), 1 Buchstabe = 4 Bit
  - NT: Platzbedarf
  - 1 Byte --> 2 Buchstaben
- Base64 (Radix-64), 1 Buchstabe = 6 Bit
  - 3 Byte --> 4 Buchstaben

**Aufgabe:**
Kodiere den Hashwert aus voriger Aufgabe (Goethe) nach Base64.

```
Hex:
a36110e65caab98c5bfdaa2f75d731e54c58f496e4e1e73bc9bdf79543f0cac74fe866cfa0d21372793c3dc6ea36f5bd04079593f25d991e72d7fd558f1082c9

Base64:
o2EQ5lyquYxb/aovddcx5UxY9Jbk4ec7yb33lUPwysdP6GbPoNITcnk8PcbqNvW9BAeVk/JdmR5y1/1VjxCCyQ==
```

**Aufgabe:**
Was machen die `=` am Ende des Base64 Strings?

[Base64 wikipedia en](https://en.wikipedia.org/wiki/Base64)

3 Bytes (3*8=24 Bits) werden als 4 Buchstaben dargestellt (4*6=24).
Wenn die Länge der Daten kein Vielfaches von 3 ist wird `=` oder `==` hinten angefügt (Padding).

**Aufgabe:**
Kodiere ASCII `"Nb"` als Base64.
`'N'=0x4e`, `'b'=0x62`
Verwende [Tabelle](https://en.wikipedia.org/wiki/Base64#Base64_table).

