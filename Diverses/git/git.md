


# Einleitung

GitHub is a code hosting platform for version control and collaboration. It lets you and others work together on projects from anywhere.

# Links

[git](https://git-scm.com)
[github](https://github.com)
[Git in Visual Studio Code](https://code.visualstudio.com/Docs/editor/versioncontrol)


# Allgemeine Begriffe

## Repository

A **repository** is usually used to organize a single project. Repositories can contain folders and files, images, videos, spreadsheets, and data sets – anything your project needs. We recommend including a README, or a file with information about your project.



## Create a Branch

Branching is the way to work on different versions of a repository at one time.

By default your repository has one branch named master which is considered to be the definitive branch. We use branches to experiment and make edits before committing them to master.

When you create a branch off the master branch, you’re making a copy, or snapshot, of master as it was at that point in time. If someone else made changes to the master branch while you were working on your branch, you could pull in those updates.



## Commit

On GitHub, saved changes are called commits. Each commit has an associated commit message, which is a description explaining why a particular change was made. Commit messages capture the history of your changes, so other contributors can understand what you’ve done and why.






# Allgemein

Lokales Verzeichnis `.git`


# CLI

## Konfiguration

```bash
git config --global user.name "Franz Matejka"
git config --global user.email matejkaf@gmail.com

# Passwort eine Zeit speichern beim remote Zugriff
git config --global credential.helper 'cache --timeout 7200'
```

## Initialisierungen

Im aktuellen Verzeichnis ein Local Repository anlegen.

```
mkdir new_dir
cd new_dir
git init
```

Vom Remote Repository nach Lokal übernehmen. Basisverzeichnis wird auch angelegt:

```bash
git clone https://github.com/matejkaf/hello-world

# Anderer Name des Basisverzeichnis
git clone https://github.com/matejkaf/hello-world hello_world
```

## Basics

Zustand der Files anzeigen

```
git status
git status -uall  # rekursiv
```

Vom Working Directory in Staged Bereich übernehmen (neue Datei oder Änderungen).

```
git add [file]
```

Übernehme alle Änderungen (geänderte, neue, gelöschte und umbenannte Dateien) in den Staged Breich.

```
git add .
```

Commit vom Staged Bereich ins Local Repository

```bash
git commit -m "[descriptive message]"

# add & commit
$ git commit -a -m 'message'

# recommit
git commit --amend --no-edit
git commit --amend -m 'new commit message'
```

Namentlich genannte Files werden direkt ins Local Repository übernommen (ohne Umweg in den Staged Bereich).

```
git commit file.xyz
```


# File History

Commits für ein File:

```
git log --pretty=oneline jsfileupload2.php
```

```bash
# For full path names of changed files:
git log --name-only

# For full path names and status of changed files
#   Modified, Add, Delete
git log --name-status

# --oneline makes it dense
git log --name-status --oneline

# For abbreviated pathnames and a diffstat of changed files:
git log --stat

# show branches
git log --graph

```

# Branching

Neuen Branch erzeugen und aktiv setzen:

```
git branch branchname
git checkout branchname
```

Staging und Commit

```
git add .
git commit -m "[descriptive message]"
```

In master Branch übernehmen:

```
git checkout master
git merge branchname
```

Branch löschen

```
git branch -d branchname
```

# Remote Repository


Remote Repository festlegen (einmalig notwendig)
```
git remote add origin https://github.com/try-git/try_git.git
```

`origin` ist der Remote Name.

Lokale Commits ins Remote Repository übernehmen

```
git push -u remote-name branch
```
Mit der Option `-u` werden die Parameter gespeichert, es genügt dann später:
`git push`


Änderungen in den aktuellen lokalen Branch übernehmen (führt ein merge aus wenn notwendig).

```
git pull origin master
```


# clean

Löscht alle Files die nicht im Repository sind.

```
git clean -d -X -f
```

- `-d` auch Verzeichnisses
- `-X` nur "ignored" files
- `-f` forced


# Taging

[auf git-scm](https://git-scm.com/book/en/v2/Git-Basics-Tagging)

Tag erzeugen:

```
git tag -a v1.4 -m "my version 1.4"
```

Tags anzeigen:

```
git tag
```

Tags müssen extra auf den Remote Server gepusht werden:

```
git push origin v2.43
```


# Snippets


## Änderungen verwerfen

[stackoverflow: Various ways to remove local Git changes](http://stackoverflow.com/questions/22620393/various-ways-to-remove-local-git-changes)

There could be only three categories of files when we make local changes:

Type 1. Staged Tracked files

Type 2. Unstaged Tracked files

Type 3. Unstaged UnTracked files a.k.a UnTracked files

- Staged - Those that are moved to staging area/ Added to index
- Tracked - modified files
- UnTracked - new files. Always unstaged. If staged, that means they are tracked.
What each commands do:

```
git checkout . - Removes Unstaged Tracked files ONLY [Type 2]
git clean -f - Removes Unstaged UnTracked files ONLY [Type 3]
git reset --hard - Removes Staged Tracked and UnStaged Tracked files ONLY[Type 1, Type 2]
git stash -u - Removes all changes [Type 1, Type 2, Type 3]
```


## Vergleichen

Vergleicht das aktuelle mit dem letzten Commit

```bash
git diff HEAD HEAD^
git difftool HEAD HEAD^
```

# gitignore

macOS : show hidden files `CMD + SHIFT + .`

```
# macOS specific
*.DS_Store
.AppleDouble
.LSOverride
.dropbox
Icon*
.vscode

# ignore specific file
test.exe

# no .o and .a files
*.[oa]

# but track lib.a
!lib.a

# no files ending in ~
*~

# ignore all files in the build/ directory
build/

# ignore doc/notes.txt, but not doc/server/arch.txt
doc/*.txt

# ignore all .pdf files in the doc/ directory
doc/**/*.pdf
```

- [dotnet core .gitignore](https://gist.github.com/vmandic/ac2ecc9c24f6899ee0ec46e4ce444a0e)
- [csharp.gitignore](https://gist.github.com/takekazuomi/10955889)


# vi Basics

Command mode, mit `i` nach Insert mode mit `ESC` zurück in Command mode

Command Mode:

- `:w` speichern
- `:q` beenden
- `:q!` beenden trotz ungesicherter Änderungen 


# git in VSCODE

- [How to use Visual Studio Code as Default Editor for Git MergeTool](https://stackoverflow.com/questions/44549733/how-to-use-visual-studio-code-as-default-editor-for-git-mergetool)
```
# ~/.gitignore
[user]
	name = matejkafr
	email = matejkaf@gmail.com
[color]
	ui = auto
# Comment: Start of "Extra Block"
# Comment: This is to unlock VSCode as your git diff and git merge tool    
[merge]
    tool = vscode
[mergetool "vscode"]
    cmd = code --wait $MERGED
[diff]
    tool = vscode
[difftool "vscode"]
    cmd = code --wait --diff $LOCAL $REMOTE
# Comment: End of "Extra Block"
```
- Zusätzlich "Install "code" from VSCode commander(Shift + Command + P)" [Set Visual Studio Code to be global Git editor on OSX](https://stackoverflow.com/questions/34746045/set-visual-studio-code-to-be-global-git-editor-on-osx)