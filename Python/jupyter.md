# Jupyter



[Documentation](https://jupyter-notebook.readthedocs.io/en/latest/?badge=latest)





# Installieren am Mac

[](https://jupyter.readthedocs.io/en/latest/install/notebook-classic.html)

```bash
$ pip3 install --upgrade pip  # upgrade pip
$ pip3 install jupyter
$ jupyter notebook # öffnet einen Browser
```

Bei Fehlermeldung:

```
$ jupyter notebook                         
zsh: command not found: jupyter
```

Es passt wahrscheinlich der Suchpfad nicht

```bash
$ ~/Library/Python/3.8/bin/jupyter notebook
```

in `~/.bash_profile`:

```
export PATH=${PATH}:~/Library/Python/3.XXX/bin:~/bin
```



