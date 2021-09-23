---
title: macOS Command Line Tools
---

* TOC
{:toc}

# sips

> macOS has long included a command line tool called *sips*. It’s a comprehensive image manipulation tool 

[macOS image manipulation with sips](https://blog.smittytone.net/2019/10/24/macos-image-manipulation-with-sips/)

```sh
$ sips --help
```



Get dpi

```sh
$ sips --getProperty dpiHeight --getProperty dpiWidth image-20210910165854169.png
/Users/matejkafr/Documents/Htl/Doc/Documentation/pandoc/MDtoPDF/tmp/image-20210910165854169.png
  dpiHeight: 300.000
  dpiWidth: 300.000
```



Set the dpi:

```sh
$ sips <file> -s dpiHeight <dpi> -s dpiWidth <dpi>
$ sips image-20210910165854169.png -s dpiHeight 600 -s dpiWidth 600 -o image_600.png
```



Hinweis:

- DPI haben keine Auswirkungen in HTML Browsern
- Bei LaTeX wird das Bild kleiner wenn die DPI erhöht werden.



# wakeonlan

```sh
brew install wakeonlan
```



# .zshenv

```sh
# ~/.zshenv
PATH=$PATH:~/Documents/Htl/lib/bin
CDPATH=.:~/Documents/Htl
```

- [What should/shouldn't go in .zshenv, .zshrc, .zlogin, .zprofile, .zlogout?](https://unix.stackexchange.com/a/71258)
- [Quick directory navigation in the bash shell](https://unix.stackexchange.com/questions/31161/quick-directory-navigation-in-the-bash-shell)](https://unix.stackexchange.com/a/31179)



# Homebrew

**macOS installs Homebrew GNU tools**

[Small Sharp Software Tools](https://smallsharpsoftwaretools.com/tutorials/gnu-mac/)

[How to replace Mac OS X utilities with GNU core utilities?](https://apple.stackexchange.com/questions/69223/how-to-replace-mac-os-x-utilities-with-gnu-core-utilities)



```sh
$ brew install coreutils findutils gnu-tar gnu-sed gawk gnu grep
# Die GNU Utilities beginnen alle mit einem g (ggrep, gawk, gsed, ...)
```



```sh
$ brew install pandoc
$ brew install node
```







# Python



```sh
$ brew install python
```

Pandas für M1 [[*](https://github.com/pandas-dev/pandas/issues/40611#issuecomment-819833220)]:

```sh
$ pip3 install cython
$ pip3 install numpy --no-use-pep517
$ pip3 install pandas --no-use-pep517
$ pip3 install matplotlib
```

