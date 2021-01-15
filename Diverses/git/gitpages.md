# Math



Geht von selbst mit MathJax [[Math on GitHub Pages](https://g14n.info/2014/09/math-on-github-pages/)]

HTML include allerdings notwendig:

```html
<script src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML" type="text/javascript"></script>
```



# Erste Zeile wegbringen

Link auf main-Page wegbringen!?

- [](https://stackoverflow.com/questions/46375765/how-do-you-remove-header-on-github-pages)
- [](https://stackoverflow.com/questions/49961202/remove-md-webpage-header-in-github)
- [](https://github.com/pages-themes/primer/issues/21)
- 





[](https://matejkaf.github.io/Doc/Python/2020_Inf++/01_Basics)



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