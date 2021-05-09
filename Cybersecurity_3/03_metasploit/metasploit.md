---
title: Metasploit
subtitle: Exploit Framework
---



msf – Metasploit Framework + shellcode Archiv

In Ruby geschriebene opensource Plattform – entwickeln testen und anwenden von Exploit Code.

Bedienung über die Kommandozeile.

Sehr Umfangreich!



## msf einrichten

Starten der Datenbank PostgreSQL notwendig für "Workspaces" und abspeichern der Ergebnisse.

```bash
$ systemctl start postgresql
```

> To tell `systemd` to start services automatically at boot, you must enable them. [[Quelle](https://www.digitalocean.com/community/tutorials/how-to-use-systemctl-to-manage-systemd-services-and-units)]

```bash
$ systemctl enable postgresql
```

Initialisieren der Datenbank:

```bash
$ msfdb init
```

Diese 3 Befehle sind nur einmalig notwendig.



## msf Erste Schritte

Starten von msf:

```bash
$ msfconsole
```

```
msf6 > db_status
[*] Connected to msf. Connection type: postgresql.
```

Hilfe anzeigen

```
msf6 > help

Core Commands
=============

    Command       Description
    -------       -----------
    ?             Help menu
    banner        Display an awesome metasploit banner
    cd            Change the current working directory
    color         Toggle color
    connect       Communicate with a host
    debug         Display information useful for debugging
    exit          Exit the console
    features      Display the list of not yet released features that can be opted in to
    get           Gets the value of a context-specific variable
    getg          Gets the value of a global variable
    grep          Grep the output of another command
    help          Help menu
    history       Show command history
    load          Load a framework plugin
    quit          Exit the console
    repeat        Repeat a list of commands
    route         Route traffic through a session
    save          Saves the active datastores
    sessions      Dump session listings and display information about sessions
    set           Sets a context-specific variable to a value
    setg          Sets a global variable to a value
    sleep         Do nothing for the specified number of seconds
    spool         Write console output into a file as well the screen
    threads       View and manipulate background threads
    tips          Show a list of useful productivity tips
    unload        Unload a framework plugin
    unset         Unsets one or more context-specific variables
    unsetg        Unsets one or more global variables
    version       Show the framework and console library version numbers


Module Commands
===============

    Command       Description
    -------       -----------
    advanced      Displays advanced options for one or more modules
    back          Move back from the current context
    clearm        Clear the module stack
    info          Displays information about one or more modules
    listm         List the module stack
    loadpath      Searches for and loads modules from a path
    options       Displays global options or for one or more modules
    popm          Pops the latest module off the stack and makes it active
    previous      Sets the previously loaded module as the current module
    pushm         Pushes the active or list of modules onto the module stack
    reload_all    Reloads all modules from all defined module paths
    search        Searches module names and descriptions
    show          Displays modules of a given type, or all modules
    use           Interact with a module by name or search term/index


Job Commands
============

    Command       Description
    -------       -----------
    handler       Start a payload handler as job
    jobs          Displays and manages jobs
    kill          Kill a job
    rename_job    Rename a job


Resource Script Commands
========================

    Command       Description
    -------       -----------
    makerc        Save commands entered since start to a file
    resource      Run the commands stored in a file


Database Backend Commands
=========================

    Command           Description
    -------           -----------
    analyze           Analyze database information about a specific address or address range
    db_connect        Connect to an existing data service
    db_disconnect     Disconnect from the current data service
    db_export         Export a file containing the contents of the database
    db_import         Import a scan result file (filetype will be auto-detected)
    db_nmap           Executes nmap and records the output automatically
    db_rebuild_cache  Rebuilds the database-stored module cache (deprecated)
    db_remove         Remove the saved data service entry
    db_save           Save the current data service connection as the default to reconnect on startup
    db_status         Show the current data service status
    hosts             List all hosts in the database
    loot              List all loot in the database
    notes             List all notes in the database
    services          List all services in the database
    vulns             List all vulnerabilities in the database
    workspace         Switch between database workspaces


Credentials Backend Commands
============================

    Command       Description
    -------       -----------
    creds         List all credentials in the database


Developer Commands
==================

    Command       Description
    -------       -----------
    edit          Edit the current module or a file with the preferred editor
    irb           Open an interactive Ruby shell in the current context
    log           Display framework.log paged to the end if possible
    pry           Open the Pry debugger on the current module or Framework
    reload_lib    Reload Ruby library files from specified paths


msfconsole
==========

`msfconsole` is the primary interface to Metasploit Framework. There is quite a
lot that needs go here, please be patient and keep an eye on this space!

Building ranges and lists
-------------------------

Many commands and options that take a list of things can use ranges to avoid
having to manually list each desired thing. All ranges are inclusive.

### Ranges of IDs

Commands that take a list of IDs can use ranges to help. Individual IDs must be
separated by a `,` (no space allowed) and ranges can be expressed with either
`-` or `..`.

### Ranges of IPs

There are several ways to specify ranges of IP addresses that can be mixed
together. The first way is a list of IPs separated by just a ` ` (ASCII space),
with an optional `,`. The next way is two complete IP addresses in the form of
`BEGINNING_ADDRESS-END_ADDRESS` like `127.0.1.44-127.0.2.33`. CIDR
specifications may also be used, however the whole address must be given to
Metasploit like `127.0.0.0/8` and not `127/8`, contrary to the RFC.
Additionally, a netmask can be used in conjunction with a domain name to
dynamically resolve which block to target. All these methods work for both IPv4
and IPv6 addresses. IPv4 addresses can also be specified with special octet
ranges from the [NMAP target
specification](https://nmap.org/book/man-target-specification.html)

### Examples

Terminate the first sessions:

    sessions -k 1

Stop some extra running jobs:

    jobs -k 2-6,7,8,11..15

Check a set of IP addresses:

    check 127.168.0.0/16, 127.0.0-2.1-4,15 127.0.0.255

Target a set of IPv6 hosts:

    set RHOSTS fe80::3990:0000/110, ::1-::f0f0

Target a block from a resolved domain name:

    set RHOSTS www.example.test/24


```

Kommandos können mittel TAB vervollständigt werden.

```
msf6 > workspace -a lab
[*] Added workspace: lab
[*] Workspace: lab
msf6 > help workspace
Usage:
    workspace                  List workspaces
    workspace -v               List workspaces verbosely
    workspace [name]           Switch workspace
    workspace -a [name] ...    Add workspace(s)
    workspace -d [name] ...    Delete workspace(s)
    workspace -D               Delete all workspaces
    workspace -r <old> <new>   Rename workspace
    workspace -h               Show this help information
```

Anzeige von Modulen

```
msf6 > show exploits
```

Kann ein wenig dauern

Suche nach Begriff (z.B. "scanner")

```
msf6 > search scanner
```

Auswahl eines Moduls  – automatische Vervollständigung wird unterstützt:

```
msf6 > use auxiliary/scanner/ssh/ssh_version 
msf6 auxiliary(scanner/ssh/ssh_version) > 
```

msf Konsole wechselt in den Kontext des Moduls.

Mit `clear` kann die msfconsole Anzeige gelöscht werden.

`show info` zeigt Informationen zum aktiven Modul

```
msf6 auxiliary(scanner/ssh/ssh_version) > show info

       Name: SSH Version Scanner
     Module: auxiliary/scanner/ssh/ssh_version
    License: Metasploit Framework License (BSD)
       Rank: Normal

Provided by:
  Daniel van Eeden <metasploit@myname.nl>

Check supported:
  No

Basic options:
  Name     Current Setting  Required  Description
  ----     ---------------  --------  -----------
  RHOSTS                    yes       The target host(s), range CIDR identifier, or hosts file with syntax 'file:<path>'
  RPORT    22               yes       The target port (TCP)
  THREADS  1                yes       The number of concurrent threads (max one per host)
  TIMEOUT  30               yes       Timeout for the SSH probe

Description:
  Detect SSH Version.

References:
  http://en.wikipedia.org/wiki/SecureShell

```

Nur die Optionen anzeigen mit `show options`:

```
msf6 auxiliary(scanner/ssh/ssh_version) > show options

Module options (auxiliary/scanner/ssh/ssh_version):

   Name     Current Setting  Required  Description
   ----     ---------------  --------  -----------
   RHOSTS                    yes       The target host(s), range CIDR identifier, or hosts file with syntax 'file:<path>'
   RPORT    22               yes       The target port (TCP)
   THREADS  1                yes       The number of concurrent threads (max one per host)
   TIMEOUT  30               yes       Timeout for the SSH probe
```

Ist `Current Setting` leer aber `Required`, so muss dieser Parameter gesetzt werden. 

Setzen eines Parameters mit `set` – automatische Vervollständigung wird unterstützt – case insensitive.

```
msf6 auxiliary(scanner/ssh/ssh_version) > set rhosts 192.168.178.71
rhosts => 192.168.178.71
```

Mit `run` oder `exploit` wird das Modul ausgeführt.

```
msf6 auxiliary(scanner/ssh/ssh_version) > run

[+] 192.168.178.71:22     - SSH server version: SSH-2.0-OpenSSH_4.7p1 Debian-8ubuntu1 ( service.version=4.7p1 openssh.comment=Debian-8ubuntu1 service.vendor=OpenBSD service.family=OpenSSH service.product=OpenSSH service.cpe23=cpe:/a:openbsd:openssh:4.7p1 os.vendor=Ubuntu os.family=Linux os.product=Linux os.version=8.04 os.cpe23=cpe:/o:canonical:ubuntu_linux:8.04 service.protocol=ssh fingerprint_db=ssh.banner )
[*] 192.168.178.71:22     - Scanned 1 of 1 hosts (100% complete)
[*] Auxiliary module execution completed
```

Diese Informationen wurden auch in der Datenbank gespeichert.

Mit dem Kommando `hosts` sieht man alle gefundenen Host Rechner:

```
msf6 auxiliary(scanner/ssh/ssh_version) > hosts

Hosts
=====

address         mac  name  os_name  os_flavor  os_sp  purpose  info  comments
-------         ---  ----  -------  ---------  -----  -------  ----  --------
192.168.178.71             Linux               8.04   server
```

`services` zeigt die gefundenen Dienste an:

```
msf6 auxiliary(scanner/ssh/ssh_version) > services
Services
========

host            port  proto  name  state  info
----            ----  -----  ----  -----  ----
192.168.178.71  22    tcp    ssh   open   SSH-2.0-OpenSSH_4.7p1 Debian-8ubuntu1
```

Alle Informationen (z.B. run weiterer Module) akkumulieren sich in der Datenbank.







```

```



## nmap in msf

`db_nmap` kann genauso aufgerufen werden wie `nmap` alleine. Die Ergebnisse werden in der Datenbank gespeichert. 

```
msf6 > db_nmap -T4 -A -v 192.168.178.0/24
```

Das kann dauern!

Ergebnisse über `hosts`

```
msf6 > hosts

Hosts
=====

address         mac                name                           os_name   os_flavor  os_sp  purpose  info  comments
-------         ---                ----                           -------   ---------  -----  -------  ----  --------
192.168.178.1   e0:28:6d:7b:fa:91  fritz.box                      Linux                3.X    server         
192.168.178.21  00:11:32:65:91:7f  Ventress.fritz.box             Linux                2.6.X  server         
192.168.178.22  50:1e:2d:04:dd:86  Beoplay-M3-28720449.fritz.box  Linux                3.X    server         
192.168.178.23  ac:89:95:f5:aa:91  Beoplay-M5-28186652.fritz.box  Linux                3.X    server         
192.168.178.27  28:f0:76:0c:00:d2  Franzs-iMac.fritz.box          iOS                  11.X   device         
192.168.178.40  62:ff:4d:df:c2:a5  fritz.repeater                 Linux                3.X    server         
192.168.178.61  b2:f6:30:1a:f7:1b  miniPad.fritz.box              embedded                    device         
192.168.178.62  8a:42:87:22:f5:8a  FranziPhone.fritz.box          embedded                    device         
192.168.178.64                     kali.fritz.box                                                            
192.168.178.65  1C:91:80:BD:8D:9D  FranzM1.fritz.box                                                         
192.168.178.71  08:00:27:04:0a:09                                 Linux                2.6.X  server         
```





## Kommando Kurzübersicht

Suchen

```
search platform:windows type:exploit FTP
```



Module:

```
use <modulename>
show info
show options
set <parameter> <value>
```



Datenbank:

```
hosts
services
```



Sonstiges:

```
clear
exit
```



## TODO



`auxiliary/scanner/http/dir_scanner`

```
msf6 auxiliary(scanner/http/dir_scanner) > run

[*] Detecting error code
[*] Using code '404' as not found for 192.168.178.71
[+] Found http://192.168.178.71:80/cgi-bin/ 404 (192.168.178.71)
[+] Found http://192.168.178.71:80/doc/ 200 (192.168.178.71)
[+] Found http://192.168.178.71:80/icons/ 200 (192.168.178.71)
[+] Found http://192.168.178.71:80/index/ 404 (192.168.178.71)
[+] Found http://192.168.178.71:80/phpMyAdmin/ 200 (192.168.178.71)
[+] Found http://192.168.178.71:80/test/ 404 (192.168.178.71)
[*] Scanned 1 of 1 hosts (100% complete)
[*] Auxiliary module execution completed
```



`auxiliary/gather/browser_info`

```
msf6 auxiliary(scanner/ssh/ssh_version) > use auxiliary/gather/browser_info 
msf6 auxiliary(gather/browser_info) > show info 

       Name: HTTP Client Information Gather
     Module: auxiliary/gather/browser_info
    License: Metasploit Framework License (BSD)
       Rank: Normal
  Disclosed: 2016-03-22

Provided by:
  sinn3r <sinn3r@metasploit.com>

Available actions:
  Name       Description
  ----       -----------
  WebServer  A web server that collects information about the browser.

Check supported:
  No

Basic options:
  Name     Current Setting  Required  Description
  ----     ---------------  --------  -----------
  Retries  true             no        Allow the browser to retry the module
  SRVHOST  0.0.0.0          yes       The local host or network interface to listen on. This must be an address on the local machine or 0.0.0.0 to listen on all addresses.
  SRVPORT  8080             yes       The local port to listen on.
  SSL      false            no        Negotiate SSL for incoming connections
  SSLCert                   no        Path to a custom SSL certificate (default is randomly generated)
  URIPATH                   no        The URI to use for this exploit (default is random)

Description:
  This module gathers information about a browser that exploits might 
  be interested in, such as OS name, browser version, plugins, etc. By 
  default, the module will return a fake 404, but you can customize 
  this output by changing the Custom404 datastore option, and redirect 
  to an external web page.

```

