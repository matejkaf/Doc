---
title: Installation von Kali Linux auf VmWare Player
---

Installation von einem fertigen Image für VmWare

- Download des fertigen Images für VmWare [hier](https://www.kali.org/get-kali/#kali-virtual-machines)
- Evtl. im BIOS/UEFI:  enable virtualization (z.B. Intel VT-x/AMD-V)
- `kali-linux-2021.1-vmware-amd64.7z` entpacken (Windows: 7-zip Installation notwendig). Enthält einen Ordner mit Dateien
- VmWare Player starten und
  - Mac: 
    - An die gewünschte Stelle bewegen und mit Drag and Drop in VmWare ziehen
  - Windows: 
    - unter `Dokumente` einen Ordner `Virtual Machines` anlegen und Dateien (ganzen Ordner) reinkopieren
    - In VmWare Player: *Import an existing VM / Open a virtual Machine*
- Anzahl der Cores anpassen auf 2
- Start von Kali Linux
- Einloggen mit kali/kali
- Terminal öffnen und mit `ifconfig` testen ob Netzwerk konfiguriert ist
- Internet Test mit Browser
- VmWare Tools installieren: [Installing VMware Tools](https://www.kali.org/docs/virtualization/install-vmware-guest-tools/)

