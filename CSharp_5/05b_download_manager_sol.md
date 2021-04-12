---
title: Lösungen Multithreaded Download Manager
tags: [5AHELS]
---

**Lösung (Multithreaded Download Manager)**

Mit `WebClient`

```csharp
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Net;
using System.Threading;

namespace _201007_DIC_GrpA_DownloadManager
{
    class Program
    {

        public static void DoDownload((string Url, string FileName) download)
        {
            using (var client = new WebClient())
            {
                client.OpenRead(download.Url);
                var contentType = client.ResponseHeaders["Content-Type"];// image/jpeg
                string extension = contentType.Split('/')[1];
                //System.Console.WriteLine(extension);
                client.DownloadFile(download.Url, download.FileName + "." + extension);
            }
        }

        static void Main(string[] args)
        {
            var downloads = new List<(string Url, string FileName)>
            {
                ("https://assets.orf.at/mims/2020/37/19/crops/w=347,q=90,r=2/711483_2q_235419_ibiza_ua_200910_loeger_57_cka.jpg?s=3eac32ef9801c4027347ea44fb7c616085d57ea6", "test1"),
                ("https://assets.orf.at/mims/2020/41/96/crops/w=171,q=90,r=2/711940_1k_246696_chemie_nobel_2_afp.jpg?s=3c46f1ff8965f8e015217b45d6f8eecfba2532fc", "test2"),
                ("https://assets.orf.at/mims/2020/37/19/crops/w=347,q=90,r=2/711483_2q_235419_ibiza_ua_200910_loeger_57_cka.jpg?s=3eac32ef9801c4027347ea44fb7c616085d57ea6", "test3"),
                ("https://assets.orf.at/mims/2020/41/96/crops/w=171,q=90,r=2/711940_1k_246696_chemie_nobel_2_afp.jpg?s=3c46f1ff8965f8e015217b45d6f8eecfba2532fc", "test4"),
                ("https://assets.orf.at/mims/2020/37/19/crops/w=347,q=90,r=2/711483_2q_235419_ibiza_ua_200910_loeger_57_cka.jpg?s=3eac32ef9801c4027347ea44fb7c616085d57ea6", "test5"),
                ("https://assets.orf.at/mims/2020/41/96/crops/w=171,q=90,r=2/711940_1k_246696_chemie_nobel_2_afp.jpg?s=3c46f1ff8965f8e015217b45d6f8eecfba2532fc", "test6"),
            };
            foreach (var download in downloads)
            {
                System.Console.WriteLine(download.Url);
                System.Console.WriteLine(download.FileName);
            }

            Stopwatch sw = new Stopwatch();
            sw.Start();
            // synchron
            if (false)
            {
                foreach (var download in downloads)
                {
                    DoDownload(download);
                }
            }
            else
            {
                // parallel
                Thread[] threads = new Thread[downloads.Count];
                int i = 0;
                foreach (var download in downloads)
                {
                    threads[i] = new Thread(() => DoDownload(download));
                    threads[i++].Start();
                }

                // wait for all threads to finish
                foreach (var thread in threads)
                {
                    thread.Join();
                }
            }
            sw.Stop();
            System.Console.WriteLine(sw.ElapsedMilliseconds);

        }
    }
}


```



Mit `HttpWebRequest`

```csharp
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Net;
using System.Threading;

namespace _201013_KSN_GrpB_DownloadManager
{
    class Program
    {
        public static void DoDownload((string Url, string FileName) download, string subdir)
        {
            HttpWebRequest hwr = (HttpWebRequest)WebRequest.Create(download.Url);
            using (HttpWebResponse response = (HttpWebResponse)hwr.GetResponse())
            {
                if (response.StatusCode == HttpStatusCode.OK)
                {
                    string extension = response.ContentType.Split("/")[1];
                    //Console.WriteLine($"ContentLength: {response.ContentLength} ContentType: {response.ContentType} file extension: {extension}");
                    using (BinaryReader reader = new BinaryReader(response.GetResponseStream()))
                    {
                        Byte[] lnByte = reader.ReadBytes((int)(response.ContentLength));
                        using (FileStream fileStream = new FileStream($"{subdir}/{download.FileName}.{extension}", FileMode.Create))
                        {
                            fileStream.Write(lnByte, 0, lnByte.Length);
                        }
                    }
                }
                else
                {
                    Console.WriteLine("HTTP Statuscode: " + response.StatusCode);
                }
            }
        }

        static void Main(string[] args)
        {
            var downloads = new List<(string Url, string FileName)>
            {
                ("https://assets.orf.at/mims/2020/42/48/crops/w=171,q=90,r=2/718082_2h_249048_wien_wahl_bundeskoalition_ppf.jpg?s=d52b6b2e0a17b99d542603de0030f4da102c5b69", "test1"),
                ("https://assets.orf.at/mims/2020/42/03/crops/w=875,q=90/719326_opener_249503_budget_vorschau_opposition_rendi_a.jpg?s=89235566d51e54c813726a6ec8f04491ddddf5c7", "test2"),
                ("https://assets.orf.at/mims/2020/42/34/crops/w=875,q=90/718895_opener_249334_usa_wahl_trump_wieder_wahlkampf_body3_r.jpg?s=35f67814165c1656700ebc65428dd0d1a25cf93d", "test3"),
                ("https://images.derstandard.at/img/2020/10/13/iwf1.jpg?w=750&s=41fd95e9","test4"),
                ("https://images.derstandard.at/img/2020/10/13/imf3.jpg?w=750&s=7e90eb1a","test5")
            };

            // sequentieller download
            System.Console.WriteLine("--- sequentieller download ---");
            var sw = new Stopwatch();
            sw.Start();            
            foreach (var download in downloads)
            {
                DoDownload(download, "seq_data");
            }
            sw.Stop();
            System.Console.WriteLine($"Sequentiell: {sw.ElapsedMilliseconds}");

            // paraller download
            System.Console.WriteLine("--- paraller download ---");
            var threads = new List<Thread>();
            sw.Reset();
            sw.Start();
            foreach (var download in downloads)
            {
                var thread = new Thread( ()=>DoDownload(download, "par_data"));
                threads.Add( thread );
                thread.Start();
            }
            foreach(var thread in threads)
                thread.Join();
            sw.Stop();
            System.Console.WriteLine($"Parallel: {sw.ElapsedMilliseconds}");
        }

    }
}
```



---

