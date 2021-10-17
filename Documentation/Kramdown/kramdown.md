



# Kramdown



[Kramdown Homepage](https://kramdown.gettalong.org)

```sh
# evtl.
$ sudo gem install kramdown

# test
$ kramdown --version
2.3.1
```



```sh
$ kramdown test.md >test.html
```



# Github flavoured markdown

[Kramdown GFM Parser](https://github.com/kramdown/parser-gfm), Installation notwendig?

```sh
$ kramdown --no-auto-ids --input=GFM test.md >test.html
```



# SASS

Für [cayman](https://github.com/pages-themes/cayman/tree/master/_sass) scss nach css Konvertierung.

[Installation von sass](https://sass-lang.com/install):

```sh
$ brew install sass/sass/sass
```

Konvertieren:

```sh
$ sass cayman.scss > cayman.css
```



# Rogue

Wird automatisch vom GFM Parser verwendet.

Der generierte Quelltext muss ohne Einrückung ganz links stehen sonst ist der Quelltext nach der ersten Zeile auch eingerückt.



# Liquid

- [Liquid Homepage](https://shopify.github.io/liquid/)

- [github: Liquid template engine](https://github.com/Shopify/liquid)

- [Jekyll Liquid](https://jekyllrb.com/docs/liquid/)

Python fähige Alternative scheint **Jinja** zu sein.

- [Jinja Homepage](https://jinja.palletsprojects.com/en/3.0.x/)
- [](https://jinja.palletsprojects.com/en/3.0.x/api/#jinja2.Template.render)

