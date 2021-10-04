---
title: Excel Backdoor Makro
---

VBA Makros – z.B. in Excel – starten automatisch und öffnen eine reverse shell.

# Makro erstellen

z.B. mit `empire` oder `msfvenom`.



# Excel Datei

Neue Datei anlegen

Ansicht > Makros > Erstellen

Code reinkopieren

---

Notwendige Anpassungen im generierten **Empire** Makro:

```vbscript
Sub AutoClose()
	kWrTvGVW
End Sub
```

`AutoClose` ändern auf `Auto_Open`. Auf `Auto_Close()` kann man es auch ändern, dann wird die reverse shell beim Schließen des Excel Dokuments geöffnet.

```vbscript
Sub Auto_Open()
	kWrTvGVW
End Sub
```

Warum das notwendig ist? KA!

Das `msfvenom` Makro hat ohne Änderungen funktioniert

---



Nun müssen noch Sicherheitseinstellungen deaktiviert werden:

Datei > Optionen > Trust Center > Einstellungen für das Trust Center ...

Neuer Dialog: Makroeinstellungen > Alle Makros aktivieren

[Quelle: Multiple Ways to Exploit Windows Systems using Macros](https://www.hackingarticles.in/multiple-ways-to-exploit-windows-systems-using-macros/)

Excel Datei schließen und nochmals öffnen (Makro sollte gestartet werden und eine reverse shell Verbindung aufbauen)

