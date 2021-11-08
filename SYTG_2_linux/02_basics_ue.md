---
title: Grundlagen UNIX shell
subtitle: Übungen – Elemementare bash Bedienung
tags: [assignment, unix, shell, bash,SYTG_2_Linux, 2AHITS ]
---

#### Übung (Directories und Files)

Lege mit `mkdir` und `touch` folgende Verzeichnisstruktur an:

```
./
└── abcd/
    ├── first_dir/
    │   ├── abcd.01.1.txt
    │   ├── abcd.01.2.txt
    │   └── abcd.01.3.txt
    └── second_dir/
        ├── xyz.02.1.txt
        ├── xyz.02.2.txt
        └── xyz.02.3.txt
```

Weiters:

- Stelle das Arbeitsverzeichnis auf `abcd/abcd_02` und erstelle (ohne `cd` ein weiteres Mal zu verwenden):
  - ein Unterverzeichnis `in_first_dir`  in `first_dir`, und
  - darin wiederum eine Datei `neu.txt`
    Endgültig sieht es dann so aus:

  ```
  ./
  └── abcd/
      ├── first_dir/
      │   ├── in_first_dir/
      │   │   └── neu.txt
      │   ├── abcd.01.1.txt
      │   ├── abcd.01.2.txt
      │   └── abcd.01.3.txt
      └── second_dir/
          ├── xyz.02.1.txt
          ├── xyz.02.2.txt
          └── xyz.02.3.txt
  ```

---

#### Übung (Bewegen und Kopieren)

Ausgehend von der in der vorigen Übungen angelegten Directory und Filestruktur:

- Nenne `neu.txt` in `umbenannt.txt`  um.
- Bewege das Verzeichnis `first_dir` in das Verzeichnis `second_dir`
- Bewege `umbenannt.txt` eine Verzeichnisebene höher (d.h. nach `second_dir`)
- Kopiere den Inhalt von `first_dir` in ein neues Verzeichnis `kopie_von_first` im Verzeichnis `second_dir`.
- Lösche das Verzeichnis `first_dir`

---

