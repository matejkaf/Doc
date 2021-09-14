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
read -p 'Username: ' uservar
read -sp 'Password: ' passvar
# -p ... show prompt
# -s ... hidden input
echo
echo Thank you $uservar we now have your login details
```

