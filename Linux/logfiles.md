---
title: Logfiles
---

[12 Critical Linux Log Files You Must be Monitoring](https://www.eurovps.com/blog/important-linux-log-files-you-must-be-monitoring/)


Bsp. ubuntu docker container

```bash
root@2569fd4b293f:/# cd /var/log
root@2569fd4b293f:/var/log# tail dpkg.log 
2019-08-07 13:03:31 status unpacked procps:amd64 2:3.3.12-3ubuntu1.1
2019-08-07 13:03:31 status unpacked procps:amd64 2:3.3.12-3ubuntu1.1
2019-08-07 13:03:31 status unpacked procps:amd64 2:3.3.12-3ubuntu1.1
2019-08-07 13:03:31 status unpacked procps:amd64 2:3.3.12-3ubuntu1.1
2019-08-07 13:03:31 status unpacked procps:amd64 2:3.3.12-3ubuntu1.1
2019-08-07 13:03:31 status half-configured procps:amd64 2:3.3.12-3ubuntu1.1
2019-08-07 13:03:31 status installed procps:amd64 2:3.3.12-3ubuntu1.1
2019-08-07 13:03:31 trigproc libc-bin:amd64 2.27-3ubuntu1 <none>
2019-08-07 13:03:31 status half-configured libc-bin:amd64 2.27-3ubuntu1
2019-08-07 13:03:31 status installed libc-bin:amd64 2.27-3ubuntu1
```



[What are Linux Logs? How to View Them, Most Important Directories, and More](https://stackify.com/linux-logs/)

[Ultimate Guide to Logging – Linux Logging Basics](https://www.loggly.com/ultimate-guide/linux-logging-basics/)



Varianten:

- syslog
- systemd – journald (ersetzt oder erweitert syslog)

# journalctl

Anzeige der logs von `systemd` (starten der Service mit `systemctl start <service>`)

[Ultimate Guide to Logging – Using journalctl](https://www.loggly.com/ultimate-guide/using-journalctl/). Einige Beispiele aus diesem Dokument

```sh
$ journalctl

#limit the logs shown to the current boot, use the -b switch.
$ journalctl -b

# To list the boots of the system, use the following command.
$ journalctl --list-boots

# journal messages logged within the last hour.
$ journalctl --since "1 hour ago"

# show all messages logged by the apache2 web server
$ journalctl -u apache2.service

# print log messages to the console as they are added
$ journalctl -u apache2.service -f
```

