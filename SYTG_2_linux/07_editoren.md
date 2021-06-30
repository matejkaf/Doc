---
title: Grundlagen UNIX shell
subtitle: Editoren
tags: [2AHITS_Teach]
---

Editoren die im Terminal verwendet werden können:

- vi
- vim (vi with improvements)
- nano

vi ist schwer zu erlenen, hat aber viele Möglichkeiten.

nano ist leicht zu erlernen und zu bedienen und reicht für einfache Aufgaben aus.

>Tidbit: The GNU project has a clone of Pico called nano which has been developed because Pico's license was not a free software license, since distribution of a modified version of the code was ambiguously forbidden.



# vi / vim

- Vorteil: Auf jedem System vorhanden, großer Funktionsumfang, manche Profis schwören drauf

- Nachteil: (Sehr) schwer bedienbar
- vim = vi with improvements

(Hinweis: cygwin – Standard vi)



## Bedienungsbasics

2 Modi

- Command mode (Standard)
- Insert Mode

Mit `i` nach Insert mode, mit `ESC` zurück in Command mode

Command Mode:

Cursor bewegen, Cut,Copy, Paste (wie?)

- `o` neue Zeile darunter anlegen und in INSERT Mode wechseln
- `dw` Delete Word
- `dd` Zeile löschen
- `x` Zeichen löschen
- `r` Ein Zeichen ersetzen
- `^f` Forward one screen
- `^b` Back one screen
- `:w` speichern
- `:q` beenden
- `:wq` speichern und beenden
- `:q!` beenden (Änderungen verwerfen)

**Quellen:**

-   [Basic vi Commands](https://www.cs.colostate.edu/helpdocs/vi.html)
-   [VI Text Editor with Commands: Linux/Unix Tutorial](https://www.guru99.com/the-vi-editor.html)



## VI Editing commands

[Quelle](https://www.guru99.com/the-vi-editor.html)

- i - Insert at cursor (goes into insert mode)
- a - Write after cursor (goes into insert mode)
- A - Write at the end of line (goes into insert mode)
- ESC - Terminate insert mode
- u - Undo last change
- U - Undo all changes to the entire line
- o - Open a new line (goes into insert mode)
- dd - Delete line
- 3dd - Delete 3 lines.
- D - Delete contents of line after the cursor
- C - Delete contents of a line after the cursor and insert new text. Press ESC key to end insertion.
- dw - Delete word
- 4dw - Delete 4 words
- cw - Change word
- x - Delete character at the cursor
- r - Replace character
- R - Overwrite characters from cursor onward
- s - Substitute one character under cursor continue to insert
- S - Substitute entire line and begin to insert at the beginning of the line
- ~ - Change case of individual character

## Vi editor command keys

[Quelle](https://kb.iu.edu/d/afdc)

```
  ZZ      Exit, saving changes           t<x>   Up to <x> forward
  Q       Enter ex mode                  T<x>   Back up to <x>
  <ESC>   End of insert                  <x>|   Go to column <x>
  :<cmd>  Execute ex command             w,W    Forward one word
  :!<cmd> Shell command                  b,B    Back one word
  ^g      Show filename/size             e,E    End of word
  ^f      Forward one screen             ^h     Erase last character
  ^b      Back one screen                ^w     Erase last word
  ^d      Forward half screen            ^?     Interrupt
  ^u      Backward half screen           ~      Toggle character case
  <x>G    Go to line <x>                 a      Append after
  /<x>    Search forward for <x>         i,I    Insert before
  ?<x>    Search backward for <x>        A      Append at end of line
  n       Repeat last search             o      Open line below
  N       Reverse last search            O      Open line above
  ]]      Next section/function          r      Replace character
  [[      Previous section/function      R      Replace characters
  %       Find matching () { or }        d      Delete
  ^l      Redraw screen                  dd     Delete line
  ^r      Refresh screen                 c      Change              
  z<CR>   Current line at top            y      Yank lines to buffer
  z-      Current line at bottom         C      Change rest of line 
  ^e      Scroll down one line           D      Delete rest of line 
  ^y      Scroll up one line             s      Substitute character
  ``      Previous context               S      Substitute lines    
  H       Home window line               J      Join lines          
  L       Last window line               x      Delete after        
  M       Middle window line             X      Delete before       
  +       Next line                      Y      Yank current line   
  hjkl    Cursor movement:               p      Put back lines      
          left/down/up/right             P      Put before          
  0       Beginning of line              <<     Shift line left     
  $       End of line                    >>     Shift line right    
  f<x>    Find <x> forward               u      Undo last change    
  F<x>    Find <x> backward              U      Restore current line
```



# nano

Leichter bedienbar als vi. Muss manchmal nachinstalliert werden.

Bedienung selbsterklärend.

Ausprobieren in [JSLinux](https://bellard.org/jslinux/vm.html?url=alpine-x86.cfg&mem=192) oder cygwin. In replit.com nicht unterstützt.



# Visual Studio Code

Installieren unter Windows: [User Installer](https://code.visualstudio.com/download) verwenden (kein Admin Acount notwendig).

Verwenden von cygwin als integrierte Shell: [VS Code - Cygwin as Integrated Terminal](https://stackoverflow.com/questions/46061894/vs-code-cygwin-as-integrated-terminal)

`Strg-`, für Settings



