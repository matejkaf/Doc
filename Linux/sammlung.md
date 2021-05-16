# Arbeiten mit der Unix Shell

- [Ryans Tutorials - Linux Tutorial](https://ryanstutorials.net/linuxtutorial/)
- [Ryans Tutorials - Bash Scripting Tutorial](https://ryanstutorials.net/bash-scripting-tutorial/)
- [30 Bash Script Examples](https://linuxhint.com/30_bash_script_examples/)
- [GETTING AROUND DIRECTORIES & FILES](https://www.english.upenn.edu/~curran/205-505/unix.html)
- [UNIX SHELL Quote Tutorial](http://www.grymoire.com/Unix/Quote.html)
- [Sed - An Introduction and Tutorial](http://www.grymoire.com/Unix/Sed.html)
- [Sh - the Bourne Shell](http://www.grymoire.com/Unix/Sh.html)
- [shellscript.sh](https://www.shellscript.sh/)
- [Bash variables and command substitution](http://www.compciv.org/topics/bash/variables-and-substitution/)

- Standard Tools
    - [Basic UNIX Commands List](https://www.tipsandtricks-hq.com/basic-unix-commands-list-366)
    - [The 15 Essential UNIX commands](https://www.petefreitag.com/item/426.cfm)
    - [Basic UNIX Tools](http://www.cs.toronto.edu/~maclean/csc209/unixtools.html)
    - [Basic Unix Commands](https://www.unixtutorial.org/basic-unix-commands?cn-reloaded=1)
    - [List of GNU Core Utilities commands](https://en.wikipedia.org/wiki/List_of_GNU_Core_Utilities_commands)





# Tidbits



## Mehrere Befehle hintereinander:

- If previous command failed with `;` the second one will run.
- But with `&&` the second one will not run.



## Command Prompt

Ändern auf $

```bash
PS1="$ " ; export PS1
```




# command substitution syntax

Backticks:

```bash
`command`
oder neuere Varienate
$(command)
```

```bash
echo "Hello, $(whoami)."
```






# .bashrc .bash_profile

`.bash_profile` is executed for login shells, while `.bashrc` is executed for interactive non-login shells.
When you login (type username and password) via console, either sitting at the machine, or remotely via ssh: .bash_profile is executed to configure your shell before the initial command prompt.



# macOS zsh

Ändern des Command Prompts

Standard:
```
matejkafr@Franzs-iMac shell % 
# PROMPT=%m%#
```

Die letztend 2 Subdirs + `%` als prompt (bzw. `#` wenn super user)
```zsh
$ PROMPT='%2~ %# '
```

Prompt in hellem Grau darstellen:

```zsh
$ PROMPT='%F{243}%2~ %#%f '
```



# Package Manager (Debian, Ubuntu, Kali)

[Debian package management](https://www.debian.org/doc/manuals/debian-reference/ch02.en.html)

`apt` (früher `apt-get`, *Advanced Package Tool*)

- To update the list of packages known by your system:

  ```
  apt update
  ```

  (you should execute this regularly to update your package lists)

- To install the foo package and all its dependencies:

  ```
  apt install foo
  ```

- To remove the foo package from your system:

  ```
  apt remove foo
  # plus remove configuration files
  apt purge foo     
  ```

- To list all packages for which newer versions are available:

  ```
  apt list --upgradable
  ```

- To upgrade all the packages on your system:

  ```
  apt upgrade
  ```



# GNU, BSD, POSIX

GNU und BSD sind 2 unterschiedliche Implementierungen der UNIX Tools unterscheiden sich in so manchen Feinheiten. Der kleinste gemeinsame Nenner dieser beiden ist der POSIX Standard.

[What is the difference between Unix, Linux, BSD and GNU?](https://unix.stackexchange.com/questions/104714/what-is-the-difference-between-unix-linux-bsd-and-gnu)



# Windows Subsystem for Linux (WSL)

- [Windows Subsystem for Linux Documentation](https://docs.microsoft.com/en-us/windows/wsl/about)
- [How to setup Apache, MySQL and PHP in Linux Subsystem for Windows 10](https://medium.com/@fiqriismail/how-to-setup-apache-mysql-and-php-in-linux-subsystem-for-windows-10-e03e67afe6ee)

[See which version of Windows 10 you have](https://support.microsoft.com/en-us/help/4027391/windows-10-see-which-version-you-have)


# Ideen / ToDo

- Absoluten Pfad aus relativen Pfad ermitteln. Quelle der Idee: Shared filesystem von docker braucht absolute Pfade.

