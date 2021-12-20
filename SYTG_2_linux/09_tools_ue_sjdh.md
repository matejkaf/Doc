---
title: Grundlagen UNIX shell
subtitle: Übungen
tags: [solution]
---





```sh
$ echo "5 weeks" | gdate +"%d.%m.%Y" -f -
23.01.2022

$ echo "5 weeks ago" | gdate +"%d.%m.%Y" -f -
14.11.2021

$ echo "2021-10-15 90 days" | gdate +"%d.%m.%Y" -f -
13.01.2022

$ echo "last friday 1 year ago" | gdate +"%d.%m.%Y" -f -
17.12.2020

$ echo "friday 6 month" | gdate +"%d.%m.%Y" -f - 
24.06.2022

$ echo "1639927239 seconds 1970-01-01" | gdate +"%d.%m.%Y" -f -
# oder:
$ echo "@1639927239" | gdate +"%d.%m.%Y" -f - 
19.12.2021
```

