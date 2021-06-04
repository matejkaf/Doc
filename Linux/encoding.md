---
title: base encoding
---



# Base64

## Base64 Encoding a String

To base64 encode string you can pipe an echo command into the base64 command-line tool. To ensure no extra, hidden characters are added use the `-n` flag.

Without the `-n` flag you may capture a hidden characters, like line returns or spaces, which will corrupt your base64 encoding. 

```bash
$ echo -n 'my-string' | base64
```

Which will output the following

```
bXktc3RyaW5n
```



## Base64 Encoding a File

To base64 encode a file

```bash
$ base64 /path/to/file
```

This will output a very long, base64 encoded string. You may want to write the stdout to file instead.

```bash
$ base64 /path/to/file > output.txt
```



## Decoding Strings

To decode with base64 you need to use the `--decode` flag. With encoded string, you can pipe an echo command into base64 as you did to encode it. 

Using the example encoding shown above, let’s decode it back into its original form.

```bash
$ echo -n 'bXktc3RyaW5n' | base64 --decode
```

Provided your encoding was not corrupted the output should be your original string.



## Decoding Files

To decode a file with contents that are base64 encoded, you simply provide the path of the file with the `--decode` flag. 

```bash
$ base64 --decode /path/to/file
```

As with encoding files, the output will be a very long string of the original file. You may want to output stdout directly to a file.

```bash
$ base64 --decode /path/to/file > output.txt
```



# Base16

Bin ⟷ Hex

Lösung mit `xxd`:

`-p` "plain text" Option (kein Offset kein ASCII, aber new lines werden eingebaut)

```bash
$ echo 'Das ist ein Beispiel. Das ist ein Beispiel. Das ist ein Beispiel. Das ist ein Beispiel. Das ist ein Beispiel.ABCD' | xxd -p
446173206973742065696e20426569737069656c2e204461732069737420
65696e20426569737069656c2e20446173206973742065696e2042656973
7069656c2e20446173206973742065696e20426569737069656c2e204461
73206973742065696e20426569737069656c2e414243440a
```

Mit  `tr -d` die newlines entfernen:

```bash
$ echo 'Das ist ein Beispiel. Das ist ein Beispiel. Das ist ein Beispiel. Das ist ein Beispiel. Das ist ein Beispiel.ABCD' | xxd -p | tr -d '\n'
446173206973742065696e20426569737069656c2e20446173206973742065696e20426569737069656c2e20446173206973742065696e20426569737069656c2e20446173206973742065696e20426569737069656c2e20446173206973742065696e20426569737069656c2e414243440a
```

Die `xxd` Option `-r` (*reverse operation: convert (or patch) hexdump into binary*) und `-p` (*plain text*)

```bash
$ echo '446173206973742065696e20426569737069656c2e20446173206973742065696e20426569737069656c2e20446173206973742065696e20426569737069656c2e20446173206973742065696e20426569737069656c2e20446173206973742065696e20426569737069656c2e414243440a' | xxd -r -p
Das ist ein Beispiel. Das ist ein Beispiel. Das ist ein Beispiel. Das ist ein Beispiel. Das ist ein Beispiel.ABCD
```
