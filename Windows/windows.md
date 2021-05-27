---
title: Windows
---

* TOC
{:toc}

# Downloads

- [Get a Windows 10 development environment](https://developer.microsoft.com/en-us/windows/downloads/virtual-machines/)
-  [ISO vom aktuellen Windows](https://www.microsoft.com/de-de/software-download/windows10ISO)



# Orientierung

- Desktop
- Taskleiste
  - Startmenü
  - Angeheftete App Symbole
  - Laufende Programme
  - Infobereich, Benachrichtigungsfeld , "systray"
- Einstellungen



# Arbeiten mit Filesystem im Datei Explorer



# Arbeiten mit Filesystem im CLI



# Basics / Sammlung

- Dateiexplorer (Dateiendungen, verborgene Dateien)
- Win-R
- Win-D
- cmd
- CLI Basics
- Verknüpfungen







# Autostart

[Windows 10-Autostart: Programme verwalten](https://tipps.computerbild.de/internet/browser/windows-10-autostart-279089.html)

Drücken Sie „Win“ + „R“ und geben Sie den Befehl **shell:startup** ein.

Übung: Ein Programm erstellen das einen Text ausgibt. Im Autostart Ordner eine Verknüpfung auf das Programm ablegen. Ausloggen und wieder einloggen.



# Task Manager

Ctl-Alt-Del



# Datei Explorer



## Dateiendungen anzeigen lassen

1. Öffnen Sie den **Explorer** auf Ihrem Desktop.
2. Klicken Sie dort im **Reiter** auf "**Ansicht**".
3. Setzen Sie einen **Haken** bei "**Dateinamenerweiterungen**".



## Versteckte Dateien anzeigen

unter Windows 10:

- Explorer öffnen (Win-R)

- Registerkarte "Ansicht" – Kategorie "Ein-/Ausblenden".
- Aktivieren der Option "Ausgeblendete Elemente"



Windows 7 und 8.1:

1. Wählen Sie die Schaltfläche „Start“ und dann **Systemsteuerung (Control Panel) > Darstellung und Anpassung** aus.
2. Wählen Sie **Ordneroptionen** und dann die Registerkarte **Ansicht** aus.
3. Wählen Sie unter **Erweiterte Einstellungen** Ausgeblendete Dateien, Ordner und Laufwerke anzeigen und dann OK aus.



# Windows Defender

## Deaktivieren

[Quelle](https://support.microsoft.com/en-us/windows/turn-off-defender-antivirus-protection-in-windows-security-99e6004f-c54c-8509-773c-a4d776b77960)

Turn off Defender antivirus protection in Windows Security

Follow these steps to temporarily turn off real-time Microsoft Defender antivirus protection in Windows Security. However, keep in mind that if you do, your device may be vulnerable to threats.

Start  > Settings  > Update & Security  > Windows Security > Virus & threat protection > Manage settings (or Virus & threat protection settings in previous versions of Windows 10).

Switch **Real-time protection** to **Off**. Note that scheduled scans will continue to run. However, files that are downloaded or installed will not be scanned until the next scheduled scan.

Hinweis: Der Defender aktiviert sich nach gewisser Zeit wieder von selbst.



## Deaktivieren – dauerhaft

Nachhaltig die Echtzeitschutzfunktion von Windows Defender

Gruppenrichtlinien Verwaltungseditor

- Suche nach gpedit.msc

- ![image-20210525104330316](fig/image-20210525104330316.png)

- Auf "Aktivieren" stellen (Doppelklick)

- Sollte automatisch aktiviert werden, oder auf Nummer sicher:

  ```
  C:> gpupdate /force
  ```

  

- Einstellungen (Zahnrad) öffnen > Update und Sicherheit

- Windows Defender

- Echtzeit Schutz ist disabled und aktiviert sich nicht wieder nach einer gewissen Zeit.



# Windows Firewall

Hinweis: Ein Windows 10 System reagiert auch nicht auf PING (in der Firewall deaktiviert).



## Deaktivieren

Start > Control Panel (Systemsteuerung) > System and Security > Windows Firewall

Oder öffnen über CLI:

```
C:> control firewall.cpl
```

- Select **Turn Windows Firewall on or off** on the left side of the screen.
- Select the bubble next to **Turn off Windows Firewall (not recommended)**.
- Select **OK** to save the changes.



Oder Beschreibung von [Microsoft](https://support.microsoft.com/en-us/windows/turn-microsoft-defender-firewall-on-or-off-ec0844f7-aebd-0583-67fe-601ecf5d774f):

To turn Microsoft Defender Firewall on or off:

1. Select the **Start** button > **Settings** (Einstellungen) > **Update & Security** > **Windows Security** and then **Firewall & network protection**. [Open Windows Security settings](ms-settings:windowsdefender?activationSource=SMC-IA-4028544)
2. Select a network profile.
3. Under Microsoft Defender **Firewall**, switch the setting to **On**. If your device is connected to a network, network policy settings might prevent you from completing these steps. For more info, contact your administrator.
4. To turn it off, switch the setting to **Off**. Turning off Microsoft Defender Firewall could make your device (and network, if you have one) more vulnerable to unauthorized access. If there's an app you need to use that's being blocked, you can allow it through the firewall, instead of turning the firewall off.


