---
title: Kompression mit gzip und tar
---

- Archiving: Combines multiple files into one, which eliminates the overhead in individual files and makes the files easier to transmit.
- Compression: Makes the files smaller by removing redundant information.



## gzip

Packen

```bash
gzip [file]
# creates file.gz, removes file

gzip -k [file]
# keep file - don't delete

# Dateigrößen zeigen
$ gzip -l file.gz
 
```



Entpacken

```bash
gzip –d rockyou.txt.gz
# auch gunzip
```



Ganze Verzeichnisse zippen: Nicht möglich! `gzip` ist zum komprimieren einzelner Dateien gedacht. Es gibt zwar eine "rekursiv" Option `-r` aber wird dabei jede Datei im angegebenen Verzeichnis für sich komprimiert (`gzip -r myfolder`, `gunzip -r myfolder`).

## tar

TApe aRchive. It was used to stream many files to a tape for backups or file transfer.

A tar file, often called a *tarball*, is a collection of files wrapped up in one single file for easy storage. Rather than keep track of a whole folder of files, you only need to keep track of one. Tar files are often compressed after being created, giving it the .tar.gz [file extension](https://www.howtogeek.com/356448/what-is-a-file-extension/). Technically these are TGZ files, but nearly everyone calls both .tar and .tar.gz files simple “tar files.”

### uncompress tar

```bash
# uncompress
tar -xzf tarfile.tar.gz
```



- **-v:** Enables verbose mode, showing the progress of the command

- **-x**: Extract

- **-z:** Uses gzip, omit this if you just have a .tar

- **-f**: specifies file input, rather than STDIN

### create tar

Creating a tar file is just as easy. Just replace the **-x** with a **-c** to “Create”.

```bash
# Compress a directory called 'test'
tar -zcvf test.tar.gz test
```

- **-z:** Uses gzip
- **-c:** Create
- **-v:** verbose mode
- **-f**: specifies file input, rather than STDIN