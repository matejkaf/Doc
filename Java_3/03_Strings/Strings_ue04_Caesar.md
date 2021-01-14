---
title: Caesar Cipher (Übung)
type: assignment
cmds: ['md_html.bash --small']
---

Julius Caesar (100 -- 44 v.Chr.) verwendete ein sehr einfaches Verfahren um militärische Botschaften zu übermitteln. 

Prinzip: Jeder Buchstabe des Klartexts wird um eine feste Anzahl von Positionen im Alphabet verschoben. Als **Schlüssel** dient jener Buchstabe der aus dem a entsteht. Es handelt sich um ein sogenanntes **Ersetzungsverfahren**, ein Buchstabe wird durch einen anderen ersetzt, [wikipedia](http://de.wikipedia.org/wiki/Verschiebechiffre}{$\rightarrow$wikipedia).

**Beispiel:** Der Schlüssel ist C (von Caesar gerne verwendet). Das Alphabet wird um 2 Positionen verschoben.

Ver- und Entschlüsselungstabelle:

```
Klartext:   a b c ... x y z
Geheimtext: C D E ... Z A B
```

Üblich:

- Klartext (*Plaintext*) – Kleinbuchstaben
- Geheimtext (*Ciphertext*) – Großbuchtstaben



---

**Übung (Verschlüsseln):**
Verschlüssele (per Hand) den Text `rueckzug` nach Caesar mit dem Schlüssel C.



---

**Übung (Caesar Verschlüsseln):**
Schreibe eine Klasse `Caesar` die Verschlüsselung nach dem Caesar Verfahren unterstützt.
Die Klasse soll den String im Klartext und Geheimtext enthalten.
Implementiere folgende Methoden:

- `void setPlaintext(String t)`
- `void setKey(char k)`
- `char encryptChar(char c)`
- `void encrypt()`
- `String getCiphertext()`


Anwendung im Hauptprogramm:
```c
Caesar mc = new Caesar();
mc.setKey('C');
mc.setPlaintext("rueckzug");
mc.encrypt();
System.out.println(mc.getCiphertext());
```


**Hinweise fürs Programmieren**

Jedem Zeichen (`char`) ist eine Nummer zugeordnet (ASCII Code).

```
A = 65 ...  90 = Z
a = 97 ... 122 = z
```


```c
char c = 'a';
int i;
i = (int)c;  // ASCII code ermitteln
i += 2; // ASCII code ändern
c = (char)i; // Zurück in ein Zeichen wandeln
```

Hilfreich sind auch die Klassenmethoden `Character.toLowerCase(char c)` und `Character.toUpperCase(char c)`.



---

**Übung (Caesar Entschlüsselung):**
Erweitere die Klasse `Caesar` aus Übung  so, dass auch ein Text entschlüsselt werden kann. 
Implementiere die Methoden:

- `void setCiphertext(String t)`
- `char decryptChar(char c)`
- `void decrypt()`
- `String getPlaintext()`

Ergänze das Hauptprogramm entsprechend.



---

**Übung (Caesar Knacken):**
Die Klasse `Caesar` aus Übung  soll nun auch eine nach Caesar verschlüsselte Nachricht knacken können. Schreibe eine Methode `deciffer()` die für den Geheimtext alle 26 möglichen Klartexte ausgibt.  Finde heraus von wem der folgende, verschlüsselte Ausspruch stammt.

```
URMOXGFFQDQPPQEWEUSZEMOXGFFQDQPYUZPARITMFFTQZUEMZQYBFKPQEWMEUSZAR
```
---


