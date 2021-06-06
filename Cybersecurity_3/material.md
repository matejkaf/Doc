# Cyber Killchain

![Die Cyber-Killchain](fig/Die Cyber-Killchain.jpeg)



# Amberg Video 211 – Prozesse überprüfen

**Task Manager**, Details Tab, begrenzte Infos

![image-20210604175720300](fig/image-20210604175720300.png)



**sysinternals – Process Explorer**, bessere Anzeige, z.B. Prozesshierarchie

- VirusTotal Überprüfung eines Prozesses kann mit rechtcklick angestoßen werden
- 

![image-20210604175527255](fig/image-20210604175527255.png)



**sysinternals – Process Monitor**,  Einblick in die aktuellen Aktivitäten von Prozessen

![image-20210604175805590](fig/image-20210604175805590.png)

Hier sieht man z.B. die Reverse Shell des putty Trojaners:

![image-20210604175949668](fig/image-20210604175949668.png)

Malware versucht typischerweise sich zu verstecken und nicht als eigener Prozess aufzuscheinen, daher schwindeln diese sich gerne in andere Prozesse (z.B. explorer.exe) per process injection.



# 212. Netzwerkaktivitäten prüfen (Amberg)

`netstat -nap tcp`

![image-20210604181320750](fig/image-20210604181320750.png)



Mehr Übersicht mit Tool `CurrPorts` von [NirSoft](http://www.nirsoft.net)



