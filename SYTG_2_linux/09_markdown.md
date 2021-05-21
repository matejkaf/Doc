---
title: Grundlagen UNIX shell
subtitle: Markdown
tags: [lecture,2AHITS_Teach]
---

Einfache Auszeichnungssprache (markup language) für plain-text Files. Dateiendung `.md`

```markdown
# Überschrift 1
## Überschrift 2

Das ist ein Text. **FETT**
*kursiv*
```

Markdown ist eine Möglichkeit Formatierungen in Plaintext auszudrücken.

Vorteile:

- Sehr einfach zu verwenden
- Schon in der Plaintext Form gut zu lesen
- Für einfache Dokumentationsaufgaben ausreichend (statt z.B. Word)
- In viele Formate wandelbar (HTML, PDF, ...)
- Viele Editoren unterstützen markdown (teilweise auch mit preview)

Elemente von markdown: [wiki](https://de.wikipedia.org/wiki/Markdown)



## Sammlung

- replit.com

- pandoc (geht unter cygwin ?)

- [markdown_py](https://python-markdown.github.io) – unter REPLIT verfügbar. Wandelt nach HTML Code.

  ```bash
  $ markdown_py test.md >test.html
  ```

  ```html
  <h1>Überschrift 1</h1>
  <h2>Überschrift 2</h2>
  <p>Das ist ein Text. <strong>FETT</strong>
  <em>kursiv</em></p>
  ```

- Typora

