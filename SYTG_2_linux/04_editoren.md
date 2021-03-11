---
title: Grundlagen UNIX shell
subtitel: Editoren
tags: [2AHITS_Teach]
---

Editoren die im Terminal verwendet werden können:

- vi
- vim (vi with improvements)
- nano

vi ist schwer zu erlenen, hat aber viele Möglichkeiten.

nano ist leicht zu erlernen und zu bedienen und reicht für einfache Aufgaben aus.

>Tidbit: The GNU project has a clone of Pico called nano which has been developed because Pico's license was not a free software license, since distribution of a modified version of the code was ambiguously forbidden.



## vi /vim

- Vorteil: Auf jedem System vorhanden, großer Funktionsumfang, manche Profis schwören drauf

- Nachteil: (Sehr) schwer bedienbar
- vim = vi with improvements

(Hinweis: cygwin – Standard vi)

### Bedienungsbasics

2 Modi

- Command mode (Standard)
- Insert Mode

Mit `i` nach Insert mode, mit `ESC` zurück in Command mode

Command Mode:

- `:w` speichern
- `:q` beenden
- `:x` speichern und beenden
- `:q!` beenden (Änderungen verwerfen)

**Quellen:**

-   [Basic vi Commands](https://www.cs.colostate.edu/helpdocs/vi.html)
-   [VI Text Editor with Commands: Linux/Unix Tutorial](https://www.guru99.com/the-vi-editor.html)



## nano

Leichter bedienbar als vi. Muss manchmal nachinstalliert werden.

Bedienung selbsterklärend.

Ausprobieren in [JSLinux](https://bellard.org/jslinux/vm.html?url=alpine-x86.cfg&mem=192) oder cygwin. In replit.com nicht unterstützt.



## Visual Studio Code

Installieren unter Windows: [User Installer](https://code.visualstudio.com/download) verwenden (kein Admin Acount notwendig).

Verwenden von cygwin als integrierte Shell: [VS Code - Cygwin as Integrated Terminal](https://stackoverflow.com/questions/46061894/vs-code-cygwin-as-integrated-terminal)

`Strg-`, für Settings



