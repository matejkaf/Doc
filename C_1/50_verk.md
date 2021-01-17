---
title: Doc
type: lecture
cmds: ['md_html.bash']
---



# if Anweisungen verketten

Beispiel Aufgabenstellung:

Der Wert einer Variable `x` soll

- geviertelt werden falls diese größer als 30 ist.
- halbiert werden falls diese größer als 10 ist.
- andere Zahlen bleiben unverändert (Text ausgeben)

Teste $x=36$, $x=48$ 

Falsche Lösung:
```c
int x;
scanf("%d",&x);
if(x>30)
{
	x=x/4;
}
if(x>10)
{
	x=x/2;
}
printf("%d\n",x);
```

Korrekte Lösung durch `else if` Kette:
```c
int x;
scanf("%d",&x);
if(x>30)
{
	x=x/4;
} 
else if(x>10)
{
	x=x/2;
} 
else
{
	printf("Zahl nicht geändert");
}
printf("%d\n",x);
```

In einer `else if` Kette wird nur ein Code Block ausgeführt.




