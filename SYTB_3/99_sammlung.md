

# Ideen für Übungsbeispiele

- script das in ein Logfile schreibt: `date`, `whoami`, …
- 



# Variablen in gestarteten Skripts (export)

Skript:

```sh
echo $PWD
echo $MYVAR
```

Aufruf:

```sh
MYVAR=HALLLOOOO
$ ./test.sh 
/home/runner/NaturalNanoDos

$
```

In einem gestarteten Skript stehen die selbstdefinierten Variablen nicht zur Verfügung. Wenn man das will:  exportieren:

```sh
$ export MYVAR
$ ./test.sh
/home/runner/NaturalNanoDos
HALLLOOOO
```

Erklärung: Für jedes gestartete Script wird eine eigener shell Prozess gestartet, es werden dabei nur die exportierten shell Variablen übergeben.



