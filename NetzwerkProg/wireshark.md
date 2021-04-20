---
title: Wireshark
---

## Filter

Use these instruction and documentation links to learn how to use Wireshark’s filters:

- [Display filters](https://wiki.wireshark.org/DisplayFilters)

- [Capture filters](https://wiki.wireshark.org/CaptureFilters)

- [Wireshark 2.1 User’s Guide](https://www.wireshark.org/docs/wsug_html_chunked/)

- [Wireshark Manual Pages](https://www.wireshark.org/docs/man-pages/)

  - Manual page: [Wireshark Filters](https://www.wireshark.org/docs/man-pages/wireshark-filter.html)

### Filter examples

ARP/ICMP

```
arp or icmp
```

DNS

```
dns
```

Für DHCP:

```
bootp
```



```
tcp and ip.addr==198.246.117.106
```



```
ftp
```

