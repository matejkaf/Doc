# Quellen

- [How to calculate portfolio returns in Python](https://www.codingfinance.com/post/2018-04-05-portfolio-returns-py/)

- [Pandas](https://pandas.pydata.org)

Info: Die Installation von Anaconda ist nicht unbedingt notwendig

- Bibliotheken installieren
    ```
    $ sudo python3 -m pip install pandas
    $ sudo python3 -m pip install matplotlib
    $ sudo python3 -m pip install pandas_datareader
    ```

# Finanzplan

- Verteilung
    - Kapital: ca. 450.000,-
    - Cash Basis: 20.000,-
    - Liquiditätsreserve: 130.000,-
    - Savity: 25.000,-
    - Invest Volumen (theoretisch): 275.000,-

- Cash-Flow In: ca. 2.000,- pro Monat (Schätzung von 2018 und 2019 abgeleitet)


# Investmentfahrplan

- Für 3 Jahre
    - Q3 2020 - Q3 2023
    - 12 Quartale
- Hello! von 200.000,- auf 275.000,- (ca. +75.000,-)
    - 70% High-Risk / 30% Low-Risk (max. kumm. Verlust 45%)
    - Kontinuierliches (Quartalsweise) Rebalancing innerhalb von 2 Jahren.
    - Auf 3 Jahre: **Plus 6.000,- pro Quartal** (12x6000,– = 72.000,–)
- Savity: 500 – 1.500 pro Monat
- Einzeltitel komplett abbauen
- Gehaltskonto: 15. des letzen Monats im Quartal Abschöpfen in ganze 1000,– >10.000,– bleiben am Konto
  
    -  1 Teil Savity / 1 Teil Hello / 1 Teil Fill Up Fond
    
## Fill Up Fond

Wenn Aktienteil mehr als 20% vom Höchstand verliert zum Auffüllen.

Aktueller Stand: **€ 0,–**

## Ziel Allokation

### Infos

-   MSCI World Standard (Large + Mid Cap)
    -   Die 23 Industrieländer machen 89% des Weltaktienmarktes aus
    -   Anteil US: 66%
    -   ca. 15 % davon entfallen auf Europa (inkl. GB und CH)
-   Emerging Markets ca. 11% des Weltaktienmarktes
-   Small Caps sind per definition die untersten 15% eines Markts (diese sind nicht im MSCI enthalten)
- [Rohstoffe sinnvoll](https://www.gerd-kommer-invest.de/sind-rohstoff-investments-sinnvoll/) Kurz: Nein



### Aufteilung High-Risk

Siehe `allocation.py`




# Wertpapierauswahl

Grundlagen: Gerd Kommer

- IE00BFG1RG61, Invesco Goldman Sachs Equity Factor Index World
- LU1781541179, Lyxor Core MSCI World
- LU1437018838, Amundi ETF FTSE EPRA NAREIT Global




## Faktoren

**[Invesco Goldman Sachs Equity Factor Index World UCITS ETF](https://www.justetf.com/en/etf-profile.html?isin=IE00BFG1RG61)**

-   ISIN IE00BFG1RG61, WKN A1W6MU
-   [Invesco Goldman Sachs Equity Factor Index World UCITS ETF (GS EFI World ETF) Acc](https://etf.invesco.com/at/private/de/product/invesco-goldman-sachs-equity-factor-index-world-ucits-etf-gs-efi-world-etf-acc/trading-information)
-   The Goldman Sachs Equity Factor World index tracks the global equity markets. The stock selection and weighting is based on five factors (Low beta, Size, Value, Momentum and Quality).
-   Index: Goldman Sachs Equity Factor World index. Der Index ist ein von Goldman Sachs International entwickelter regelbasierter Investmentindex, und er ist darauf ausgelegt, die
    Wertentwicklung eines Portfolios mit globalen Aktien abzubilden, die bestimmte im Verkaufsprospekt näher erläuterte Kriterien einschließlich von Größe und Qualität erfüllen. Das Aktienportfolio wird aus einem Universum mit ca. **11.500** Wertpapieren in 85 Märkten in aller Welt zusammengestellt. Der Index hat keinen geografischen oder Marktschwerpunkt. Der Index umfasst nur Long-Positionen und beschränkt die Gewichtung einzelner Komponenten auf 0,5 %. Zu jedem monatlichen Neugewichtungsstichtag werden in den Referenzindex die Aktien einbezogen, die gemäß der regelbasierten Methodik unter Bezugnahme auf die folgenden fünf Anlagefaktoren ermittelt wurden (gefunden im Prospekt Nachtrag – Supplement):
    (a) Faktor Qualität: ausgerichtet auf die Erfassung potenzieller Überrenditen von Aktien mit soliden Bilanzen im Vergleich zu Titeln mit schwächeren Bilanzen.
    (b) Faktor Wert: orientiert auf die Erfassung potenzieller Überrenditen „billiger“ Unternehmen im Vergleich zu „teuren“. Dabei wird der Wertmaßstab aus verschiedenen Bilanzkennzahlen abgeleitet.
    (c) Low Beta Factor: orientiert auf die Erfassung potenzieller risikoadjustierter Überrenditen von Aktien mit niedrigem Beta zum Markt im Vergleich zu Titeln mit hohen Beta-Werten. Dabei ist Beta der Maßstab für die Ertragssensitivität einer Aktie bezüglich des Marktertrags.
    (d) Faktor Momentum: orientiert auf die Erfassung potenzieller künftiger Überrenditen von Aktien mit hohen historischen Erträgen im Vergleich zu Aktien mit niedrigen historischen Erträgen.
    (e) Faktor Größe: orientiert auf die Erfassung potenzieller risikoadjustierter Überrenditen kleinerer Unternehmen, die für die Aufnahme in den Referenzindex infrage kommen, im Vergleich zu größeren Unternehmen, die für die Aufnahme in den Index infrage kommen, gemessen an der Marktkapitalisierung.
-   in knapp 700 Positionen investiert
-   510 Mio.
-   0,55% TER
-   Seit 8.1.2014
-   Acc.
-   synthetisch! Bei der großen Auswahl an Wertpapieren (11.500 aus 85 Märkten) vielleicht auch anders nicht möglich. Die anderen ETFs verwenden eine Auswahl des MSCI World (der hat nur ca. 1700 Wertpapiere!)



[iShares Edge MSCI World Multifactor UCITS ETF USD (Acc)](https://www.justetf.com/en/etf-profile.html?isin=IE00BZ0PKT83)

-   ISIN IE00BZ0PKT83, WKN A14YPA
-   The MSCI World Diversified Multiple-Factor index tracks companies in developed equity markets globally. The title selection and weighting is based on 4 style factors: Value, Momentum, Quality and Small Size.
-   subset of equity securities (e.g. shares) within the MSCI World Index (“Parent Index”). Small Caps sind nicht wirklich abgebildet, da diese nicht im MSCI World Index sind.
-   253 Mio.
-   Seit 4.9.2015
-   0,50% TER
-   Acc.



[JPMorgan Global Equity Multi-Factor UCITS ETF Accumulating](https://www.justetf.com/en/etf-profile.html?isin=IE00BJRCLL96)

- ISIN IE00BJRCLL96, WKN A2PJEP
- The JP Morgan Diversified Factor Global Developed (Region Aware) Equity index tracks companies worldwide. The Diversified Factor index series uses a rules-based risk allocation and multi-factor selection process, developed by J.P. Morgan Asset Management. The methodology targets equity risk premia factor characteristics such as attractive relative valuation, positive price momentum, low volatility and small market capitalization and seeks to equally diversify risk across global regions and industries.
- Nach KII ist small caps kein berücksichtigter Faktor. 
- Index: [JP Morgan Diversified Factor Global Developed (Region Aware) Equity Index](https://www.ftserussell.com/products/indices/jpmorgan-factor). 520 Items. comprised of **large and mid-cap equity securities** selected from the FTSE Developed Index
- 23 Mio.
- Seit 9.7.2019
- TER 0,19%
- Acc.



[Amundi Index Equity Global Multi Smart Allocation Scientific Beta UCITS ETF DR EUR (C)](https://www.justetf.com/en/etf-profile.html?isin=LU1602145119)

-   ISIN LU1602145119, WKN A2DR4K
-   The Scientific Beta Developed Multi-Beta Multi-Strategy ERC index aims to outperform market cap weighted indices with a systematic and consequent factor selection and a diversified weighting process.
-   Index: [Scientific Beta Developed Multi-Beta Multi-Strategy Four-Factor ERC Index](https://www.scientificbeta.com/#/) ist ein Aktienindex, der aus Aktien von Unternehmen **mittlerer und großer Marktkapitalisierung in Industrieländern** besteht. 
-   56 Mio.
-   Seit 20.3.2017
-   TER 0,4%
-   Acc





## MSCI World Standard

Unhegded

[iShares Core MSCI World UCITS ETF USD (Acc)](https://www.justetf.com/en/etf-profile.html?isin=IE00B4L5Y983)

-   ISIN IE00B4L5Y983, WKN A0RPWH
-   Seit 25.09.2009

-   Acc
-   TER 0,20
-   20 Mrd Volumen!
-   1638 Aktien

Hohe Kosten (im Vergleich)



Xtrackers MSCI World UCITS ETF 1C

-   Mit TER 0,19 nicht attraktiv genug!



**[Lyxor Core MSCI World (DR) UCITS ETF](https://www.justetf.com/en/etf-profile.html?isin=LU1781541179)**

-   ISIN LU1781541179, WKN LYX0YD
-   Seit 28.02.2018
-   Acc
-   TER 0,12
-   0,55 Mrd
-   Optimized sampling
-   ca. 1650 Aktien (aus dem Jahresbericht)



[Amundi Prime Global UCITS ETF DR (C)](https://www.justetf.com/en/etf-profile.html?isin=LU2089238203)

-   ISIN LU2089238203, WKN A2PWMK
-   Seit 21.01.2020
-   Acc
-   TER 0,05
-   0,1 Mrd
-   Solactive GBS Developed Markets Large & Mid Cap index
-   1570 Aktien

Sehr günstig. Aber Risiko: geringes Volumen, anderer Indexanbieter


## Immobilien

[iShares Developed Markets Property Yield UCITS ETF](https://www.justetf.com/de/etf-profile.html?isin=IE00B1FZS350)
- ISIN IE00B1FZS350, WKN A0LEW8
- Dividendenstrategie
- Dist
- TER 0,59%
- teurer aber handelbar

[Amundi ETF FTSE EPRA NAREIT Global UCITS ETF DR](https://www.justetf.com/de/etf-profile.html?isin=LU1437018838)

- ISIN LU1437018838, WKN A2ATZC
- Seit 17.11.2016
- Acc
- TER 0,24%
- 528 Mio.
- FTSE EPRA/NAREIT Developed Index
- Vollständige Repl.
- 339 Items aus den Industrieländern

Günstiges TER (im Vergleich zu Alternative).
Leider nicht handelbar.

