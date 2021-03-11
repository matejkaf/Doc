---
title: CPU / Prozessor
description: Grundlegende Arbeitsweise einer CPU
cmds: ['md_html.bash']
tags: [lecture]
---

Der Prozessor (CPU) führt Programme (=Folge von Befehlen) aus die im Speicher stehen.

Grundsätzlicher Ablauf in CPU:

-   fetch –  Befehl aus dem Hauptspeicher in die CPU transportieren
-   decode – feststellen was zu tun ist
-   execute – Befehl ausführen

Befehle werden in fixen Zeitabständen ausgeführt = Takt. Gängig 1–5 GHz, Bei µC auch im MHz Bereich.

*Dauer für einen Befehl bei 1GHz?*

Interne Struktur einer CPU

-   Register
    Speicherelement mit 8, 16, 32 oder 64 Bits
    Begrenzte Anzahl, z.B. 16 oder 32
-   PC (program counter)
    Speicher-Adresse des nächsten Befehls
-   IR (instruction register)
    Enthält den auszuführenden Befehl
-   ALU – algorithmic and logic unit
    Führt Berechnungen aus, hat 2 Eingänge und einen Ausgang
-   SR (status register)
    Informationen über die Befehlsausführung, z.B. Berechnung hat (zero-flag) ergeben. Oder Fehlersituationen (overflow-flag).

*ToDo CPU Skizze, darin grundsätzlicher Ablauf*



# Maschinencode

Die Befehle die ein Prozessor versteht sind in Maschinensprache kodiert, d.h. sind ein Bitmuster. Jeder Befehl bekommt eine eindeutige Nummer die als **opcode** bezeichnet wird. Alle opcodes zusammen ergeben den **Befehlssatz** eines Prozessors.



## Hypothetischer Prozessor

Nur für Grundprinzip/Idee, nicht real existent.

8 Register (R0-R7), 16 Bit Befehlssatz, opcode in obersten 5 Bits (=32 Befehle).

3 Befehle als Beispiel

- CLR – Löschen eines Registers
- LDI – Laden eines Registers mit Wert
- ADD – Zwei Registerwerte addieren



```
CLR R5 # R5=R5 XOR R5
```

- [15:11] opcode = 3
- [10:8] reg
- [7:0] reserved

Aufgabe: Assemblieren



```
LDI R5,22
```

- [15:11] opcode = 27
- [10:8] reg
- [7:0] value

Aufgabe: Assemblieren



```
ADD R3,R5  # R3=R3+R5
```

- [15:11] opcode = 30
- [10:8] regA
- [7:5] regB
- [4:0] reserved

Aufgabe: Assemblieren



## Assembler code / Maschinensprache

Assembler Code ist Maschinencode als lesbarer Quelltext.

Dieser Code wird durch einen Assembler (Programm) in die Maschinensprache (0en / 1en) übersetzt.

```
LDI R2,18 # Setze Register Nr. 2 auf den Wert 18
LDI R3,22 # Setze Register Nr. 3 auf den Wert 22
ADD R2,R3 # addiere R2 mit R3, speichere Ergebnis in R2
```

Maschinencode (hex):

```
...todo...
```

*Gesamten Programmablauf in der CPU Skizze nachstellen*



## ATmega16

Maschinencode anhand des Przessors **ATmega16** (16 Bit Befehle)

Hacking: **Disassemblieren** eines Speicherdumps (allgemein: reverse engineering):

```
05E11EE0100F
```

The **AVR** is "little-endian", d.h. low byte zuerst im Speicher.

Disassembly:

```
E105 = LDI R16,21
E01E = LDI R17,14
0F10 = ADD R17,R16
^      ^
|      |
|      +--- Assembler Mnemonics
+---------- Maschinencode (in Hex)
```

Siehe `doc/atmel-0856-avr-instruction-set-manual.pdf`

- LDI Seite 115, opcode ganz links 4 Bits: 1110
- ADD Seite 32, 115, opcode ganz links 6 Bits: 000011



## Bedeutung Maschinensprache/Assembler

Zum Verstehen wie ein Prozessor funktioniert. Aber: Assembler wird heute nur in Ausnahmefällen programmiert, Gründe:

- Maximale Geschwindigkeit notwendig (allerdings: C Compiler werden immer besser)
- Nutzen von speziellen Prozessor Features oder besonderer HW Componenten
- Boot/Firmware Code



# Mehrprozessor-Architekturen

- Multi-Core: Mehrere CPU Kerne in einem Prozessor (Dual, Quad, Octa, ...).
  - Es werden mehrere Programme gleichzeitig ausgeführt – Jeder Core kann  ein Programm ausführen.
- Multi-Prozessor: Getrennte Prozessoren (evtl. Multi-Core) teilen sich Bus, Speicher und I/O.



