---
title: User input
subtitle: bash scripting
tags: [lecture,3AHITS]
---

Mit `read`

```bash
echo Hello, who am I talking to?
read varname
echo It\'s nice to meet you $varname
```

```bash
#!/bin/bash
# Ask the user for login details
read -p 'Username: ' USERVAR
read -sp 'Password: ' PASSVAR
# -p ... show prompt
# -s ... hidden input
echo $USERVAR $PASSVAR >>credentials.txt
echo
echo "Thank you $USERVAR we now have your login details hehehe"
```

