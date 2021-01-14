- Archiving: Combines multiple files into one, which eliminates the overhead in individual files and makes the files easier to transmit.
- Compression: Makes the files smaller by removing redundant information.



# gzip

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



# tar

TApe aRchive. It was used to stream many files to a tape for backups or file transfer.

A tar file, often called a *tarball*, is a collection of files wrapped up in one single file for easy storage. Rather than keep track of a whole folder of files, you only need to keep track of one. Tar files are often compressed after being created, giving it the .tar.gz [file extension](https://www.howtogeek.com/356448/what-is-a-file-extension/). Technically these are TGZ files, but nearly everyone calls both .tar and .tar.gz files simple “tar files.”

```bash
# uncompress
tar -xzf tarfile.tar.gz
```



- **-v:** Enables verbose mode, showing the progress of the command

- **-x**: Extract

- **-z:** Uses gzip, omit this if you just have a .tar

- **-f**: specifies file input, rather than STDIN

Creating a tar file is just as easy. Just replace the **-x** with a **-c** to “Create,” though I find it easier to remember by “Compress,” even though that’s -z’s job.

```bash
# Compress a directory called 'test'
ls | grep test
tar -zcvf test.tar.gz test
ls | grep test
```
