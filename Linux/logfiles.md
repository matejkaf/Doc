---
title: Logfiles
---

[12 Critical Linux Log Files You Must be Monitoring](https://www.eurovps.com/blog/important-linux-log-files-you-must-be-monitoring/)


Bsp. ubuntu docker container

```bash
root@2569fd4b293f:/# cd /var/log
root@2569fd4b293f:/var/log# tail dpkg.log 
2019-08-07 13:03:31 status unpacked procps:amd64 2:3.3.12-3ubuntu1.1
2019-08-07 13:03:31 status unpacked procps:amd64 2:3.3.12-3ubuntu1.1
2019-08-07 13:03:31 status unpacked procps:amd64 2:3.3.12-3ubuntu1.1
2019-08-07 13:03:31 status unpacked procps:amd64 2:3.3.12-3ubuntu1.1
2019-08-07 13:03:31 status unpacked procps:amd64 2:3.3.12-3ubuntu1.1
2019-08-07 13:03:31 status half-configured procps:amd64 2:3.3.12-3ubuntu1.1
2019-08-07 13:03:31 status installed procps:amd64 2:3.3.12-3ubuntu1.1
2019-08-07 13:03:31 trigproc libc-bin:amd64 2.27-3ubuntu1 <none>
2019-08-07 13:03:31 status half-configured libc-bin:amd64 2.27-3ubuntu1
2019-08-07 13:03:31 status installed libc-bin:amd64 2.27-3ubuntu1
```

