

## Testdaten von git

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



## Noch irgendwo einbauen

- Verborgene Dateien/Ordner (`ls -a`)
- `.bashrc`, `.bash_profile`
  - z.B. Command Prompt ändern
- Bedeutung der Linux System Directories (`/etc`, `/usr` (UNIX System Resources) ...)
