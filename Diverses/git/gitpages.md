---
title: Github Pages
---

# Inhaltsverzeichnis

* TOC
{:toc}

## Inhaltsverzeichnis erstellen

```
**Inhalt**

* TOC
{:toc}

My first paragraph.
```

[Rendering table of contents in Jekyll](https://ouyi.github.io/post/2017/12/31/jekyll-table-of-contents.html)



# Allgemeines

[Markdown Guide GitHub Pages](https://www.markdownguide.org/tools/github-pages/)

Jekyll



# Eigene Layout Einstellungen

Default theme auswählen: [Step 5 - Selected a Github pages default theme](https://aregsar.com/blog/2019/how-to-setup-a-github-pages-blog-in-five-minutes/)

`Cayman` ausgewählt. `git pull` für `_config.yml`

[How to customize your github pages blog layout in five minutes](https://aregsar.com/blog/2019/how-to-customize-your-github-pages-blog-layout-in-five-minutes/)

`title` und `description` wird übernommen.

`subtitle` hinzugefügt.



# Links

- [Easy Markdown to Github Pages](https://nicolas-van.github.io/easy-markdown-to-github-pages/) enthält Informationen zu Links

```markdown
[Lokaler Link](test2)
[Relativer Link](../../../17_restful_api/apitest)
[Kompletter Link](https://matejkaf.github.io/Doc/Python/Scripts/17_restful_api/apitest)
[Absoluter Link](/Doc/Python/Scripts/17_restful_api/apitest)
```



# Math

Geht von selbst mit MathJax [[Math on GitHub Pages](https://g14n.info/2014/09/math-on-github-pages/)]

```
$$x^2=2$$
```



HTML include allerdings notwendig:

```html
<script src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML" type="text/javascript"></script>
```

[](https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages/about-github-pages-and-jekyll)

`_config.yml`



- [How to typeset a matrix with MathJax?](https://tex.stackexchange.com/questions/43444/how-to-typeset-a-matrix-with-mathjax)



# Diverse Tricks

## Erste Zeile wegbringen

Link auf main-Page wegbringen!?

- [stackoverflow](https://stackoverflow.com/questions/46375765/how-do-you-remove-header-on-github-pages)

- [stackoverflow](https://stackoverflow.com/questions/49961202/remove-md-webpage-header-in-github)

- [github](https://github.com/pages-themes/primer/issues/21)

  





Tests: [Tests](https://matejkaf.github.io/Doc/Python/2020_Inf++/01_Basics)



[gitpage layout Vorlage:](https://github.com/pages-themes/primer/blob/master/_layouts/default.html)

Achtung wird in gitpages weg-gerendert

```
      {% if site.title and site.title != page.title %}
      <h1><a href="{{ "/" | absolute_url }}">{{ site.title }}</a></h1>
      {% endif %}
```



SEO Tag:

- [info 1](https://github.com/jekyll/jekyll-seo-tag)
- [info 2](http://jekyll.github.io/jekyll-seo-tag/usage/)

- [info 3](http://jekyll.github.io/jekyll-seo-tag/advanced-usage/)



**Lösung: (`site.title`=Doc)**

```
---
title: Doc
---
```

Dann ist zwar der Seitentitel immer Doc aber die erste Zeile ist nicht mehr da



```
---
description: Description Text
---
```



```
<meta name="description" content="Description Text">
<meta property="og:description" content="Description Text">
```

