# Übungen

[!TODO] Die Script Aufgabe ist etwas fortgeschritten. In einen höheren Jahrgang verlagern!

Hashwert von `putty.exe` prüfen.

- EXE downloaden und den SHA-256 Wert überprüfen
- Automatisierter download und überprüfung

Lösung:

```bash
# wget https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html
$ wget https://the.earth.li/~sgtatham/putty/latest/w64/putty.exe
$ wget https://the.earth.li/~sgtatham/putty/latest/sha256sums
$ grep w64/putty.exe sha256sums
961b36bb78d27b3432fae08e5c4272fe295b5e24e832c6f6bf1ec3cf87057dab  w64/putty.exe
dcf66ed0d39bb3c1cd154d595bfa39d18148b3e1e68b8f18dd89221cf66ff4ba  w64/putty.exe (installer version)

# regular expression für Ende der Zeile
$ grep w64/putty.exe$ sha256sums
961b36bb78d27b3432fae08e5c4272fe295b5e24e832c6f6bf1ec3cf87057dab  w64/putty.exe

# wget auf stdout
# -q ... Quiet (nur Daten, keine Progress Info etc.)
# -O - ... Output auf stdout (-O /dev/stdout)
$ wget -q -O - https://the.earth.li/~sgtatham/putty/latest/sha256sums | more

$ wget -q -O - https://the.earth.li/~sgtatham/putty/latest/sha256sums | grep w64/putty.exe$
961b36bb78d27b3432fae08e5c4272fe295b5e24e832c6f6bf1ec3cf87057dab  w64/putty.exe

# cut Befehl verwenden um nur den Hashwert zu filtern
# -d ... delimiter
# -f ... field number
$ cut -d ' ' -f 1 sha256sums
...
961b36bb78d27b3432fae08e5c4272fe295b5e24e832c6f6bf1ec3cf87057dab
...

$ wget -q -O - https://the.earth.li/~sgtatham/putty/latest/sha256sums | grep w64/putty.exe$ | cut -d ' ' -f 1
961b36bb78d27b3432fae08e5c4272fe295b5e24e832c6f6bf1ec3cf87057dab

# Hashwert mit openssl berechnen
$ openssl dgst -sha256 putty.exe
SHA256(putty.exe)= 961b36bb78d27b3432fae08e5c4272fe295b5e24e832c6f6bf1ec3cf87057dab

# Man sieht, dass die Hashwerte gleich sind, wie kann das automatisiert werden?

$ openssl dgst -sha256 putty.exe | cut -d '=' -f 2

#
# Berechneten und gelesenen Hashwert in 2 unterschiedliche Dateien schreiben
# und diese vergleichen
#
$ openssl dgst -sha256 putty.exe | cut -d '=' -f 2 > hash_calc
$ wget -q -O - https://the.earth.li/~sgtatham/putty/latest/sha256sums | grep w64/putty.exe$ | cut -d ' ' -f 1 > hash_read

# Problem: hash_calc hat ein zusätzliches Leerzeichen am Anfang
$ xxd hash_calc 
00000000: 2039 3631 6233 3662 6237 3864 3237 6233   961b36bb78d27b3
00000010: 3433 3266 6165 3038 6535 6334 3237 3266  432fae08e5c4272f
00000020: 6532 3935 6235 6532 3465 3833 3263 3666  e295b5e24e832c6f
00000030: 3662 6631 6563 3363 6638 3730 3537 6461  6bf1ec3cf87057da
00000040: 620a                                     b.
                                                                                                                     
$ xxd hash_read 
00000000: 3936 3162 3336 6262 3738 6432 3762 3334  961b36bb78d27b34
00000010: 3332 6661 6530 3865 3563 3432 3732 6665  32fae08e5c4272fe
00000020: 3239 3562 3565 3234 6538 3332 6336 6636  295b5e24e832c6f6
00000030: 6266 3165 6333 6366 3837 3035 3764 6162  bf1ec3cf87057dab
00000040: 0a

# Löschen mit tr (translate)
$ cat hash_calc | tr -d [:space:]

$ cat hash_calc | tr -d [:space:] | xxd 
00000000: 3936 3162 3336 6262 3738 6432 3762 3334  961b36bb78d27b34
00000010: 3332 6661 6530 3865 3563 3432 3732 6665  32fae08e5c4272fe
00000020: 3239 3562 3565 3234 6538 3332 6336 6636  295b5e24e832c6f6
00000030: 6266 3165 6333 6366 3837 3035 3764 6162  bf1ec3cf87057dab
# Das entfernt auch das 0x0a newline am Ende

#
# Verbesserte Version
#
$ openssl dgst -sha256 putty.exe | cut -d '=' -f 2  | tr -d [:space:] > hash_calc
$ wget -q -O - https://the.earth.li/~sgtatham/putty/latest/sha256sums | grep w64/putty.exe$ | cut -d ' ' -f 1  | tr -d [:space:] > hash_read
$ diff hash_read hash_calc

# Automatisierter Vergleich
$ cmp -s hash_read hash_calc
# -s ... silent (keine Ausgabe, auch bei Unterschied)

# exit status 0 ... gleich, 1 ... ungleich
$ echo $?                                                                                                      0

# exit status von cmp in if verarbeiten
$ if [[ $? = 0 ]]; then
    echo "Files are the same (HASH OK)"
else
    echo "Files are different (HASH missmatch)"
fi

```

Das ganze dann noch in einem Skript schreiben.



Die Links als Variablen machen, falls sich diese einmal ändern.

Idee: Eine Version von putty.exe mit Trojaner besorgen.
