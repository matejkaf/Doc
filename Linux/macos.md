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

