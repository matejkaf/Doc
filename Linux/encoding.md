---
title: encoding
---



# Base64

## Base64 Encoding a String

To base64 encode string you can pipe an echo command into the base64 command-line tool. To ensure no extra, hidden characters are added use the `-n` flag.

Without the `-n` flag you may capture a hidden characters, like line returns or spaces, which will corrupt your base64 encoding. 

```bash
echo -n 'my-string' | base64
```

Which will output the following

```bash
bXktc3RyaW5n
```



## Base64 Encoding a File

To base64 encode a file

```bash
base64 /path/to/file
```

This will output a very long, base64 encoded string. You may want to write the stdout to file instead.

```none
bas64 /path/to/file > output.txt
```

## Decoding Strings

To decode with base64 you need to use the `--decode` flag. With encoded string, you can pipe an echo command into base64 as you did to encode it. 

Using the example encoding shown above, let’s decode it back into its original form.

```none
echo -n 'bXktc3RyaW5n' | base64 --decode
```

Provided your encoding was not corrupted the output should be your original string.

## Decoding Files

To decode a file with contents that are base64 encoded, you simply provide the path of the file with the `--decode` flag. 

```none
base64 --decode /path/to/file
```

As with encoding files, the output will be a very long string of the original file. You may want to output stdout directly to a file.

```none
base64 --decode /path/to/file > output.txt
```