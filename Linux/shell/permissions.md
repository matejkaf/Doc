# Permissions

- [Ryans Tutorials Linux Tutorial - 8. Permissions](https://ryanstutorials.net/linuxtutorial/permissions.php)
- [Unix / Linux - File Permission / Access Modes](https://www.tutorialspoint.com/unix/unix-file-permission.htm)
- [Unix file types](https://en.wikipedia.org/wiki/Unix_file_types)
- [What do the fields in ls -al output mean?](https://unix.stackexchange.com/questions/103114/what-do-the-fields-in-ls-al-output-mean)

# Basics

```bash
$ pwd
/home/htluser
$ touch myfile.txt
$ mkdir mydir
$ ls -l
total 4
drwxr-xr-x 2 htluser htluser 4096 Nov  3 09:38 mydir
-rw-r--r-- 1 htluser htluser    0 Nov  3 09:37 myfile.txt
```

10 permission Flags

- 1x directory
- 3x file owner permissions
- 3x group permissions
- 3x permissions für alle Anderen

```
-rw-r--r-- 1 htluser htluser    0 Nov  3 09:37 myfile.txt
^
|
directory
```

```
-rw-r--r-- 1 htluser htluser    0 Nov  3 09:37 myfile.txt
 ^  ^  ^     ^       ^
 |  |  |     owner   group
 |  |  |
 |  |  other
 |  group
 owner
```

Siehe auch:  [tutorialspoint](https://www.tutorialspoint.com/unix/unix-file-permission.htm)

## File Access Modes

The permissions of a file are the first line of defense in the security of a Unix system. The basic building blocks of Unix permissions are the **read**, **write**, and **execute** permissions, which have been described below −

### Read

Grants the capability to read, i.e., view the contents of the file.

### Write

Grants the capability to modify, or remove the content of the file.

### Execute

User with execute permissions can run a file as a program.



## Directory Access Modes

Directory access modes are listed and organized in the same manner as any other file. There are a few differences that need to be mentioned.

[**Linux File Permission Confusion pt 2**](https://www.hackinglinuxexposed.com/articles/20030424.html)

### Read

allows the affected user to list the files within the directory.

### Write

allows the affected user to create, rename, or delete files within the directory, and modify the directory's attributes. If you don't have execute perms, then write perms are meaningless.

### Execute

allows the affected user to enter the directory (make this directory your working directory), and access files and directories inside. Ist `x` gesetzt `r` aber nicht so kann man zwar den Inhalt des Directories nicht anzeigen aber in ein Subdir darin wechseln (wenn man weiß wie dieses heißt).

**Interesting case**: If you have write + execute permissions on a directory, you can {delete,rename} items living within even if you don't have write perimission on those items. (use sticky bit to prevent this).



# Permissions Ändern

`chmod`

```bash
$ chmod o=rw myfile.txt
$ chmod g-r myfile.txt
$ chmod u+x myfile.txt 
$ chmod +x myfile.txt 
```

Oktale Schreibweise

```bash
$ chmod 755 myfile.txt
# das selbe wie:
$ chmod u=rwx,g=rx,o=rx myfile.txt

```

# owner / group

- `chown`: change owner
- `chgrp`: change group

Ein File/Directory hat genau einen owner (User) und gehört zu genau einer Gruppe.

Ein User kann zu mehreren Gruppen gehören.


# Arbeiten mit Gruppen

Zeige die Gruppen zu denen der aktuell eingeloggte User gehört:

```bash
$ groups
htluser sudo
```

How to set the group that new files will be created with?

You can change the default group for all files created in a particular directory by setting the setgid flag on the directory (`chmod g+s _dir_`). New files in the directory will then be created with the group of the directory (set using `chgrp <group> <dir>`). This applies to any program that creates files in the directory.

Note that this is automagically inherited for new subdirectories (as of Linux 3.10), however, if sub-directories were already present, this change won't be applied to them (use the -R flag for that).

If the setgid flag is not set, then the default group will be set to the current group id of the creating process. If you want to execute a particular command (or set of commands) with the changed group, use the command `sg <group> <command>`.


## Beispiel

```bash
# logged in as user 'htluser'

# create a new group 'prj'
$ sudo groupadd prj
$ cd /
$ mkdir projects
mkdir: cannot create directory 'projects': Permission denied
$ sudo mkdir projects 
$ ls -ld projects
# -d ansonsten sieht man den content des directories
drwxr-xr-x 2 root root 4096 Nov  3 13:40 projects

# Gruppe des dir ändern
$ sudo chgrp prj projects
$ ls -ld projects 
drwxr-xr-x 2 root prj 4096 Nov  3 13:40 projects

# htluser ist nicht in der Gruppe 'prj' und auch nicht owner d.h. es gelten die permissions für 'other'

$ cd /projects
$ touch myfile.txt
touch: cannot touch 'myfile.txt': Permission denied
```

Mit Hilfe der root Shell eine Datei anlegen

```bash
$ sudo -i
# cd /projects/
# cat >file.txt
das ist
eine datei
zum testen 
der 
permissions
^C
# exit
$ 
```

```bash
# htluser zu Gruppe prj hinzufügen
$ sudo usermod -aG prj htluser
# htluser must relogin now!
...
$ groups
htluser sudo prj
$ cd /projects/
$ cat file.txt
```



## Advanced Directory Permission Flags

[**Linux File Permission Confusion**](https://www.hackinglinuxexposed.com/articles/20030417.html)

[**Linux File Permission Confusion pt 2**](https://www.hackinglinuxexposed.com/articles/20030424.html)

### Sticky Bit

The **sticky bit** (Anzeige anstatt others `x`: `T`, or `t` if the execute bit is set for others) states that files and directories within that directory may only be deleted or renamed by their owner (or root). 
So what do you do when you need to allow write permissions on a directory for a group of people, but don't want to let them delete each other's files? That's the purpose of the "sticky" bit, `t` which you can apply to a directory[[2\]](https://www.hackinglinuxexposed.com/articles/20030424.html#footnote-2). When this bit is set, a user can only delete files if they are the owner. This is most common in directories like `/tmp`:

```bash
$ ls -ld /tmp
  drwxrwxrwt    4 root     root         4096 Jan 22 16:43 /tmp
```



### Set group id bit

If you set the sgid bit on a directory, any files created in that directory will have their group ownership set to the directory's group owner.

```bash
$ cd /path/to/some/sgid_directory; ls -ld .
  drwxrwsrwt    2 root     fuzzies      4096 Oct 13  9:52 .
  # Note the 's' in group's execute field above 
  # (small s: x is set, large S: x is cleared).
```



### Set uid bit

Normally, on a unix-like operating system, the ownership of files and directories is based on the default `uid` (user-id) and `gid` (group-id) of the user who created them. The same thing happens when a process is launched: it runs with the effective user-id and group-id of the user who started it, and with the corresponding privileges. This behavior can be modified by using special permissions.

When the `setuid` bit is used, the behavior described above it's modified so that when an executable is launched, it does not run with the privileges of the user who launched it, but with that of the file owner instead. So, for example, if an executable has the `setuid` bit set on it, and it's owned by root, when launched by a normal user, it will run with root privileges. It should be clear why this represents a potential security risk, if not used correctly. 

An example of an executable with the setuid permission set is `passwd`, the utility we can use to change our login password. We can verify that by using the `ls` command: 

```bash
ls -l /bin/passwd
-rwsr-xr-x. 1 root root 27768 Feb 11  2017 /bin/passwd
```

How to identify the `setuid` bit? As you surely have noticed looking at the output of the command above, the `setuid` bit is represented by an `s` in place of the `x` of the executable bit. The `s`implies that the executable bit is set, otherwise you would see a capital `S`. This happens when the `setuid` or `setgid` bits are set, but the executable bit is not, showing the user an inconsistency: the `setuid` and `setgit` bits have no effect if the executable bit is not set. The setuid bit has no effect on directories.

Quelle: [How to use special permissions: the setuid, setgid and sticky bits](https://linuxconfig.org/how-to-use-special-permissions-the-setuid-setgid-and-sticky-bits)

### Setzen der speziellen Bits

Set the `setgid` bit on the directory:

```bash
$ chmod g+s test
```

To apply the `setuid`

```
$ chmod u+s file
```

While to apply the sticky bit: 

```
$ chmod o+t test
```



## Aufgabe

Wie sollte man die permissions des eigenen Homedirectories setzen damit niemand spionieren kann?

## Aufgabe

Idee:
Admin/super user/root legt einen Ordner `projects` an in dem befinden sich weitere Projektordner die unterschiedlichen Gruppen zugeordnet sind.

- User: Alice, Bob
- User: Carol, Dan

- Gruppe: math
- Gruppe: sew

# 2do

- ACL (access control lists)
    - [Access Control Lists(ACL) in Linux](https://www.geeksforgeeks.org/access-control-listsacl-linux/)
    - [FilePermissionsACLs](https://help.ubuntu.com/community/FilePermissionsACLs)
