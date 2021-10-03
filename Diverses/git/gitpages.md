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



# Images


```markdown
![bla](fig/image.png){: width="250" }
```

Image Größe Jekyll kompatibel:

```markdown
![bla](fig/image.png){: width="250" }
```

Image Größe Pandoc kompatibel:

```markdown
![bla](fig/image.png){ width="250" }
```

TODO: Skript zum herausfiltern des `':'`



# Math

Geht von selbst mit MathJax [[Math on GitHub Pages](https://g14n.info/2014/09/math-on-github-pages/)]

```
$x^2=2$$
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



# H4 ausblenden

`_includes/hideAllButId`:

```js
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

<script type="text/javascript">
    // http://jsfiddle.net/krnwcav1/2/
    console.log('hideAllButId V1 included');

    $(document).ready(function(e) {   
        console.log('document ready')
        /*
        test ob der Query parameter hideAllButId vorhanden ist 
        in der URL z.B.: ?hideAllButId=notenliste
        wenn ja dann nur dieses Beispiel darstellen (alle anderen verbergen)
        */
        const params = new URLSearchParams(window.location.search)
        //console.log(window.location.search)
        if(params.has('hideAllButId')) {
            let paravalue = params.get('hideAllButId')
            console.log('show only '+paravalue)
            hideAllButId(paravalue);
        } else {
            console.log('hideAllButId inactive (no hideAllButId value)')
        }
    });
    
    function hideAllButId(idToShow) {
        console.log('hideAllButId '+idToShow);
        // alle h4 bis zum nächsten h4 in ein div packen (h4 ist auch im div)
        $('#div_content h4').each(function(){ 
            let heading_id = $(this)[0].id
            console.log(heading_id)
            let $set = $(this).nextUntil("h4").addBack();
            let idtxt = '<div class="assignment" id="'+heading_id+'"_ />'
            $set.wrapAll(idtxt); 
        });
        // all Elemente mit Klasse assignment auf die gesuchte id überprüfen
        $('.assignment').each( function() {
            let div_id=$(this)[0].id;
            console.log(div_id)
            if(div_id==idToShow) {
                console.log('show '+div_id)
                //$(this).show(); 
            } else {
                console.log('hide '+div_id)
                $(this).hide(); 
            }
        });
    }
</script>

```

`_layouts/default.html`

```html
    <main id="content" class="main-content" role="main">

      <div id="div_content">
        {{ content }}
      </div>

      <footer style="border-top: none;opacity: 0.5" class="site-footer">
        <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons Licence" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a>
        – Franz Matejka – HTL Braunau
      </footer>
    </main>

    {% if page.hideAllButId %}
      {% include hideAllButId %}
    {% endif %}

  </body>
</html>
```

Alles in einem eigenen div eingebettet sonst ist beim letzten H4 auch der footer mit dabei.

```md
---
title: Einstieg in Java
subtitle: Übungen
hideAllButId: true
---
```



# Jekyll lokal

[Jekyll on macOS](https://jekyllrb.com/docs/installation/macos/)

```sh
$ brew install ruby

# M1
$ echo 'export PATH="/opt/homebrew/opt/ruby/bin:$PATH"' >> ~/.zshrc
# Intel
echo 'export PATH="/usr/local/opt/ruby/bin:$PATH"' >> ~/.zshrc

$ export SDKROOT=$(xcrun --show-sdk-path)
$ gem install --user-install bundler jekyll
WARNING:  You don't have /Users/matejkafr/.gem/ruby/3.0.0/bin in your PATH,
	  gem executables will not run.
	  
# M1
$ echo 'export PATH="$HOME/.gem/ruby/3.0.0/bin:$PATH"' >> ~/.zshrc
# Intel
$ echo 'export PATH="$HOME/.local/share/gem/ruby/3.0.0/bin:$PATH"' >> ~/.zshrc

```

Inhalt von `.zshrc`

```sh
# M1
export PATH="/opt/homebrew/opt/ruby/bin:$HOME/.gem/ruby/3.0.0/bin:$PATH"
```



[](https://jekyllrb.com/docs/)

Create a new Jekyll site at

```
jekyll new myblog
```

Change into your new directory.

```
cd myblog
```



```sh
# im myblog directory (für Ruby 3 notwendig)
$ bundle add webrick
# fügt eine Zeile im Gemfile hinzu
```

Build the site and make it available on a local server.

```
bundle exec jekyll serve
```

1. Browse to [http://localhost:4000](http://localhost:4000/)



`jekyll-theme-cayman`

[](https://github.com/pages-themes/cayman)

Vom github repo aus aufgebaut!



Bei Änderungen im `Gemfile` 

```sh
bundle install
bundle update
```

