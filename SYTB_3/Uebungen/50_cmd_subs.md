

## Command substitution

Die Ausgabe eines Kommandos kann als Wert für eine Variable verwendet werden.

Die Syntax ist `$(<Kommando>)`

```bash
echo "Hello, $(whoami)."
```

```bash
mydir='/etc'
myvar=$( ls /etc | wc -l )
echo There are $myvar entries in the directory $mydir
```

---

#### Übung (Datum)

Schreibe ein Skript. Der Name einer Datei wird über die Kommandozeile übergeben. Es soll eine Backup dieser Datei angelegt werden indem eine Kopie erstellt wird, der Dateiname dieser Kopie enthält das heutige Datum.

```
test.txt --> 2021-09-14-test.txt
```

Schreibe einen Einzeiler mit Hilfe von Command Substitution.

---



