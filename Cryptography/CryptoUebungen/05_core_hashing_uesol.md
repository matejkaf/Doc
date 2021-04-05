---
title: Hashing in .NET Core
tags: [5AHELS,assignment, krypto,assignment,solution ]
---



```csharp
using System;

using System.Text; // Encoding
using System.Security.Cryptography;

namespace crypt01
{
    class Program
    {
        static void Main(string[] args)
        {
            string plaintext_str = "die 5AHELS hat heuer Matura";
            byte[] plaintext_data = System.Text.Encoding.UTF8.GetBytes(plaintext_str);

            // Hashwert berechnen
            SHA512 sha = SHA512.Create();
            byte[] hash = sha.ComputeHash(plaintext_data);

            // Ausgabe in Hex
            // [BitConverter Class](https://docs.microsoft.com/en-us/dotnet/api/system.bitconverter?view=netcore-3.1)
            string hash_str_base16 = BitConverter.ToString(hash);
            System.Console.WriteLine(hash_str_base16);

            // Ausgabe in Base64
            // [Convert.ToBase64String Method](https://docs.microsoft.com/en-us/dotnet/api/system.convert.tobase64string?view=netcore-3.1)
            string hash_str_base64 = System.Convert.ToBase64String(hash);
            System.Console.WriteLine(hash_str_base64);
        }
    }
}

```


