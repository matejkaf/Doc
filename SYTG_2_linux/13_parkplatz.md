# Umgebungsvariablen

*environment variables*

```bash
$ printenv
```

```
TERM_PROGRAM=Apple_Terminal
SHELL=/bin/bash
TERM=xterm-256color
TMPDIR=/var/folders/5y/plspysms6_lclw5h3g6ddkwc0000gn/T/
Apple_PubSub_Socket_Render=/private/tmp/com.apple.launchd.w7J9KFtYuI/Render
TERM_PROGRAM_VERSION=421.2
TERM_SESSION_ID=6813554E-F883-44CB-81FC-FCD515AED5B4
USER=matejkafr
SSH_AUTH_SOCK=/private/tmp/com.apple.launchd.k8iezSnEjX/Listeners
PATH=/Users/matejkafr/.npm-global/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Library/TeX/texbin:/usr/local/share/dotnet:~/.dotnet/tools:/Applications/Wireshark.app/Contents/MacOS
PWD=/Users/matejkafr
NODE_PATH=/Users/matejkafr/.npm-global/lib/node_modules
XPC_FLAGS=0x0
PS1=$ 
XPC_SERVICE_NAME=0
SHLVL=1
HOME=/Users/matejkafr
LOGNAME=matejkafr
LC_CTYPE=UTF-8
_=/usr/bin/printenv
```

## Testdaten

Download eines **git Repositories** 

git: source control system, Verwaltung von Dateien

**Zielrechner:**

cygwin Installation von git:

```bash
$ cd /
$ ./setup-x86_64.exe --no-admin -q -P git
$ git --version
```

git Repository klonen:

```bash
$ git clone https://github.com/matejkaf/sytg2-testdata
```

Es gibt viele Repos (meist für Source Code):

```bash
$ git clone https://github.com/iryndin/10K-Most-Popular-Passwords
```

**Quellrechner:**

```bash
$ git init
$ git add .
$ git commit -m "start"
$ git remote add origin https://github.com/matejkaf/sytg2-testdata.git
$ git branch -M main
$ git push -u origin main
```



# Noch irgendwo einbauen

- Verborgene Dateien/Ordner (`ls -a`)
- `.bashrc`, `.bash_profile`
  - z.B. Command Prompt ändern
- Bedeutung der Linux System Directories (`/etc`, ...)



# Übungen
