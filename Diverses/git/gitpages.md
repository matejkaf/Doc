# Math



Geht von selbst mit MathJax [[Math on GitHub Pages](https://g14n.info/2014/09/math-on-github-pages/)]

HTML include allerdings notwendig:

```html
<script src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML" type="text/javascript"></script>
```

[](https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages/about-github-pages-and-jekyll)



# Erste Zeile wegbringen

Link auf main-Page wegbringen!?

- [](https://stackoverflow.com/questions/46375765/how-do-you-remove-header-on-github-pages)

- [](https://stackoverflow.com/questions/49961202/remove-md-webpage-header-in-github)

- [](https://github.com/pages-themes/primer/issues/21)

  





Tests: [](https://matejkaf.github.io/Doc/Python/2020_Inf++/01_Basics)



[gitpage layout Vorlage:](https://github.com/pages-themes/primer/blob/master/_layouts/default.html)

```
      {% if site.title and site.title != page.title %}
      <h1><a href="{{ "/" | absolute_url }}">{{ site.title }}</a></h1>
      {% endif %}
```



SEO Tag:

- [](https://github.com/jekyll/jekyll-seo-tag)
- [](http://jekyll.github.io/jekyll-seo-tag/usage/)

- [](http://jekyll.github.io/jekyll-seo-tag/advanced-usage/)



Lösung: (`site.title`=Doc)

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

