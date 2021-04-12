---
title: Doc
tags: [lecture,5AHELS]
---

# Zugriff auf Web Daten

die Daten eine Website (URL) über `StreamReader` lesen:

```csharp
using System.IO;
using System.Net;

//...
string url="http://www.orf.at";
HttpWebRequest hwr = (HttpWebRequest) WebRequest.Create(url);
HttpWebResponse response = (HttpWebResponse) hwr.GetResponse();

if(response.StatusCode == HttpStatusCode.OK)
{
  Console.WriteLine("ContentType: "+response.ContentType);
  Console.WriteLine("ContentLength: "+response.ContentLength);
  Console.WriteLine("Response Header: "+response.Headers);

  StreamReader sr = new StreamReader(response.GetResponseStream());
  string line;
  while((line = sr.ReadLine()) != null)
  {
    Console.WriteLine(line);
  }
  sr.Close();
}
else
{
  Console.WriteLine("HTTP Statuscode: " + response.StatusCode);
}
```



## UserAgent

Manchmal ist es notwendig im HTTP Request den UserAgent zu setzen damit der Remote Server korrekte Daten liefert:

```csharp
HttpWebRequest hwr = (HttpWebRequest) WebRequest.Create(url);
hwr.UserAgent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0 Safari/605.1.15";

```



## Encoding

Normalerweise steht das Encoding im Response Header und wird automatisch berücksichtigt. Ausnahmen gibts trotzdem. Manuell das Encoding setzen geht folgendermaßen:

```csharp
Encoding isoEncoding = Encoding.GetEncoding("ISO-8859-1");
StreamReader sr = new StreamReader(response.GetResponseStream(),isoEncoding);
```

