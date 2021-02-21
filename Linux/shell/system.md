# System Kommandos



## Shutdown/ Reboot

```bash
$ sudo shutdown -h now
$ sudo reboot
```



## Get Root

```bash
$ su -
# -, -l, --login: Provide an environment similar to what the user would expect had the user logged in directly.
```



## System Informationen

```bash
$ uname -a
Linux secOps 4.15.15-1-ARCH #1 SMP PREEMPT Sat Mar 31 23:59:25 UTC 2018 x86_64 GNU/Linux
#
$ cat /etc/*release
NAME="Arch Linux"
PRETTY_NAME="Arch Linux"
ID=arch
ID_LIKE=archlinux
ANSI_COLOR="0;36"
HOME_URL="https://www.archlinux.org/"
SUPPORT_URL="https://bbs.archlinux.org/"
BUG_REPORT_URL="https://bugs.archlinux.org/"

```



## Keyboard

[ArchLinux](https://wiki.archlinux.org/index.php/Linux_console/Keyboard_configuration)

Layouts (CISCO cyberops VM)

```bash
$ sudo setxkbmap -layout de -variant mac
```



