---
title: JSON / YAML
---

[pyyaml](https://pyyaml.org)

```python
import yaml # pip3 install pyyaml

# https://pyyaml.org
with open('config.yaml', 'r') as stream:
  # 'document.yaml' contains a single YAML document.
  yaml_obj = yaml.load(stream, Loader=yaml.FullLoader)
  print(yaml_obj)
```

`config.yaml`:

```yaml
---
  docbase: /Users/matejkafr/Documents/Htl/Work/publish/test
  ftphost: 142.hosttech.eu
  ftpuser: 'web275'
  ftppass: 'P*7ErCd8h'
  ftpbase: /html/htltest1
```

Ausgabe:

```
{'docbase': '/Users/matejkafr/Documents/Htl/Work/publish/test', 'ftphost': '142.hosttech.eu', 'ftpuser': 'web275', 'ftppass': 'P*7ErCd8h', 'ftpbase': '/html/htltest1'}
```

