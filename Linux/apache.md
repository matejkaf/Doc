# Ubuntu Setup

[Install and Configure Apache](https://tutorials.ubuntu.com/tutorial/install-and-configure-apache#0)

```bash
$ sudo apt update
$ sudo apt install apache2
```

[Test](http://localhost/)

```bash
$ cd /var/www/html/
$ touch test.html
touch: cannot touch 'test.html': Permission denied
```

```bash
$ cd /var/www/html/
$ ls -l
$ sudo mkdir myhtml
$ ls -l
```

Ownership und Permissions anpassen.

```bash
$ whoami
$ groups
$ echo $USER
$ sudo chown $USER:$USER myhtml
$ ls -l
$ touch index.html
$ nano index.html   # create content
```

```bash
wget -O - http://localhost/myhtml/index.html
# -O -   write content to stdout (creates file otherwise)
```

# PHP

```bash
$ touch phptest.php
$ nano phptest.php
```

<!DOCTYPE html>
<html>
<body>
<h1>PHP Test</h1>
<?php
echo "My first PHP script!";
?>

</body>
</html>

```bash
$ wget -O - http://localhost/myhtml/phptest.php
$ sudo apt install php
# check install
$ wget -O - http://localhost/myhtml/phptest.php
```

# mysql

```bash
$ sudo apt install php-mysql

$ sudo service apache2 restart
```




# Quellen

- [How To Install Linux, Apache, MySQL, PHP (LAMP) stack on Ubuntu](https://www.digitalocean.com/community/tutorials/how-to-install-linux-apache-mysql-php-lamp-stack-ubuntu-18-04)