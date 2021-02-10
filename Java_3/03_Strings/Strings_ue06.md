---
title: String Tokenizer (Übung)
cmds: ['md_html.bash --small']
tags: [assignment]
---



**Übung (String Tokenizer):**
Implementiere die Klasse `MyStringTokenizer`.  Diese soll es ermöglichen einen Text in einzelne Wörter zu zerlegen. Als Trennzeichen zwischen zwei Wörtern gilt das Leerzeichen. Das Leerzeichen gehört nicht zum Wort. Die Methode `nextToken()` liefert jeweils das nächste Wort. Mit `hasMoreTokens()` kann festgestellt werden ob noch ein Wort zum Lesen vorhanden ist.\

*Anwendung:*

```c
MyStringTokenizer st = 
	new MyStringTokenizer("this is atest ");
while (st.hasMoreTokens()) {
     System.out.println("\""+st.nextToken()+"\"");
}
```

*Ausgabe:*
```c
"this"
"is"
"a"
"test"
```

*Ausbaustufen:*

- Der Text besteht nur aus einzelnen Leerzeichen.
Außerdem kann angenommen werden, dass der Text aus mindestens einem Token besteht.
Beispiel: `"this is atest "`
- Es wird berücksichtigt, dass Leerzeichen hintereinander vorkommen können.
Außerdem sind mehrere Leerzeichen am Anfang und am Ende möglich.\\
Beispiel: `"  this     is atest    "`
- Teste den Fall, dass der String nur aus Leerzeichen besteht oder auch ganz leer ist.
Beispiel: `"      "` oder `""`

*Erweiterungen:*

- Das Trennzeichen soll bestimmt werden können (z.B.\ ein Komma statt dem Leerzeichen).

- Es sollen mehrere Trennzeichen unterstützt werden. Dazu wird ein String mit Trennzeichen vorgegeben (z.B.\ `",.;# "`).


---

