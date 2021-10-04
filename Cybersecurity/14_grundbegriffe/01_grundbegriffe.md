---
title: Grundbegriffe der Cybersecurity
---



# Grundbegriffe der Cybersecurit

- **Asset** (Schützenswertes)
  Informationen, Firmengeheimnisse, Finanzen, Guter Ruf, Vertrauen, Software Code, Datenbanken, Angestellte, Kunden, Besucher


- **Threat** (Bedrohung)
  Bedrohung: Ereignis, durch das ein Schaden entstehen kann. Im Allgemeinen Verlust bzw. Beschädigung eines Assets.
- **Vulnerability** (Schwachstelle, Sicherheitslücke, Angriffsfläche)
  Eine Schwäche/Lücke im System. Beispiel: Nicht durchgeführte Security Patches.
- **Exploit**
  Möglichkeit zum ausnutzen der Schwachstelle
- **Risk** (Risiko) - spezielle Form der Unsicherheit
  *Wahrscheinlichkeit* dass eine Bedrohung die Schwachstelle eines Asset ausnutzen kann und dadurch ein bestimmter *Schadensumfang* entsteht.

Quellen:

- [BSI - IT-Grund­schutz-Kom­pen­di­um](https://www.bsi.bund.de/DE/Themen/ITGrundschutz/ITGrundschutzKompendium/vorkapitel/Glossar_.html)


- [Threat, vulnerability, risk – commonly mixed up terms](https://www.threatanalysis.com/2010/05/03/threat-vulnerability-risk-commonly-mixed-up-terms/)



# Weitere Begriffe

- **Payload**: Teil des Exploits, führt die gewünschte Aktion aus z.B. backdoor
- **Zero Day Exploit**: Angriff auf eine unbekannte Schwachstelle abzielt (es gibt noch keinen Patch)
- **Hack Value**: Belohnung für den erfolgreichen Angriff
- **Bot Net**: Ferngesteurte Software verteilt auf viele Systeme
- **Daisy Chaining**: Ein erfolgreich angegriffenes System ist Sprungbrett für weitere.
- **Doxing**: Veröffentlichen von (kompromitierenden) personenbezogenen Daten



# CIA-AA Model

Definiert die 3+2 wesentlichen **Ziele** der IT Sicherheit (Computer Security) – Verlust dieser Einzelziele → Bedrohung:

- **Confidentiality** (*Vertraulichkeit*)
  Daten nur für autorisierte zugänglich.
- **Integrity** (*Integrität*)
  - Daten-Integrität: Daten dürfen nicht unbemerkt geändert werden. Änderungen sind nachvollziehbar. 
  - System-Integrität: Sicherstellen dass Computer- und Netzwerksysteme ihre zugedachten Aufgaben unbeeinträchtigt erfüllen und vor Manipulation geschützt sind.
- **Availability** (*Verfügbarkeit*)
  Daten und Systeme sollen zuverlässig und zeitgerecht verfügbar sein wenn sie gebraucht werden. Angriffe: DOS (denial of service), Ransomware



Um die Ziele zu erreichen: **Sicherheitsrichtlinie** (Security Policy) definiert die Grundsätze der IT-Security in der Organisation. Für einige Bereiche gibt es ggf. Sub-Policies, wie z.B. Computer-Sicherheitsrichtlinie, Netzwerk-Sicherheitsrichtlinie, Remote-Access-Richtlinie



Weitere Ziele (AA):

- **Authenticity** (*Authentizität*)
  Sicherstellen, dass Daten tatsächlich von einem bestimmten Urheber stammen. Z.B. Aufträge, Rechnungen, elektronischer Zahlungsverkehr.
- **Accountability** (*Verantwortlichkeit*, Non-repudiation)
  Rückverfolgbarkeit und Nachweisbarkeit von Aktivitäten. Ermöglicht die forensiche Analyse von Sicherheits-Verletzungen (security breaches).

*Siehe konkrete Beispiele!*





# Risiko Management

Kaufmännische Sichtweise – Abwägung zwischen Kosten und Nutzen der Schutzmaßnahmen. Möglichkeiten:

-   **Risk acceptance** – Wenn die Kosten der Maßnahmen den Nutzen übersteigen.
-   **Risk avoidance** – Völlige vermeidung des Risikos. Ist am teuersten
-   **Risk limitation** – Nimmt einen Teil des Risikos in Kauf bei begrenzung der Auswirkungen. Ist die häufigst angewendete Risiko Strategie.
-   **Risk transfer** – Risiko trägt jemand anderer, z.B. Versicherung ([Beispiel](https://www.wienerstaedtische.at/firmenkunden/betrieb-absicherung/technik-it/cyber-versicherung-premium.html))





# CVE – Common Vulnerabilities and Exposures

Datenbank bekannter Sicherheitslücken (SL) – Siehe [MITRE CVE](https://cve.mitre.org/index.html)

Beispiele

-   [CVE-2016-4829](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2016-4829)
-   [CVE-2019-18426](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-18426)

SL werden durch Patches meist rasch geschlossen. Ein effizientes **Patch Management**, d.h. ein rasches einspielen dieser Patches, ist enorm wichtig um das Zeitfenster für einen  Angriff so klein wie möglich zu halten.

Als **zero-day (0-day) vulnerabilities** werden Sicherheitslücken bezeichnet die der Allgemeinheit unbekannt sind und für die es daher auch keinen Patch gibt. Diese werden im Darknet zu sehr hohen Preisen (mehrere 10.000 Euro) gehandelt. Hersteller bieten **bug bounty** Angebote zum legalen melden von Sicherheitslücken (auch gegen Geld).
