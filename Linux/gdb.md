---
title: GDB – GNU Debugger
---



# GNU Debugger (gdb)

```bash
# -g ... compile with debugging flags, for use with gdb
$ g++ main.cpp -g -o main
$ gdb main
```

gdb:

- `b main` ... Breakpoint auf `main`
- `r` /  `c`  ... run / continue
- `s` ... single-step
- `n` ... next (step-over)
- `f`  ... finish (step-out)
- `p <variable>` ... Variablenwert anzeigen
- `q` beenden
- `l` ... list program
  - `l <line-nr>`
  - `l <function-name>`
- `where` `f` ... (frame) aktuell Programmzeile
- `display <variable>` ... Variablenwert ständig anzeigen

[[GDB - Quick Guide](https://www.tutorialspoint.com/gnu_debugger/gdb_quick_guide.htm)]

[[GDB frequent commands](https://www.tutorialspoint.com/gnu_debugger/gdb_commands.htm)]



Hexdump in gdb

```c++
char buf[100] = "\x01\x02\x03\x04String Data\xAA\xBB\xCC";
int x = 42;
printf("%d\n",x);

```

```
(gdb) x /20bx buf
0x7ffe25c16c80: 0x01    0x02    0x03    0x04    0x53    0x74    0x72    0x69
0x7ffe25c16c88: 0x6e    0x67    0x20    0x44    0x61    0x74    0x61    0xaa
0x7ffe25c16c90: 0xbb    0xcc    0x00    0x00
```

`x /20x buf` selbes ergebnis (d.h. `b` byte, ist default)



Siehe [stackoverflow](https://stackoverflow.com/questions/9233095/memory-dump-formatted-like-xxd-from-gdb)

Binär

```
x /4t buf
0x7ffe25c16c80: 00000001    00000010    00000011    00000100
```

Siehe [x command](https://visualgdb.com/gdbreference/commands/x)

