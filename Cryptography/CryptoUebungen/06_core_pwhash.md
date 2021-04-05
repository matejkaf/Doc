---
title: Passwort Hashing in .NET Core
tags: [5AHELS,assignment]
---

**[PBKDF2](https://en.wikipedia.org/wiki/PBKDF2)** ("Password-Based Key Derivation Function 2") ist eine der empfohlenen Hash Funktion für Passwort Hashing – ist Teil von [rfc-2898](https://tools.ietf.org/html/rfc2898#section-5.2). 

Anwendungsmöglichkeiten:

- Aus einem Passwort wird für einen Secure Channel ein key, ein Random IV

Aus einem Passwort (Text) und einem zufälligen Salt werden beliebig lange binäre Keys (bzw. auch Random-IV und MAC-Key falls benötigt).

Frage: Wie lange soll das **Salt** sein und wie viele **Iterationen**. [Salted Password Hashing - Doing it Right](https://crackstation.net/hashing-security.htm#salt)

- Laut Standard mindestens 64 Bits Salt. *The US National Institute of Standards and Technology recommends a salt length of 128 bits.[[Quelle: wikipedia](https://en.wikipedia.org/wiki/PBKDF2)]*
- *To make it impossible for an attacker to create a lookup table for every possible salt, the salt must be long. A good rule of thumb is to use a salt that is the same size as the output of the hash function. For example, the output of SHA256 is 256 bits (32 bytes), so the salt should be at least 32 random bytes.* [[Quelle](https://crackstation.net/hashing-security.htm#salt)]
  - Wichtig: Ein Salt darf nicht wiederverwendet werden. 
- Iterationen: Kontrovers! Mindestens 20000 scheint gängig zu sein. Manche fordern mehr – wegen schneller GPU Implementierungen.

PBKDF2 verwendet eine Hash Funktion, für diesen Fall ist auch SHA-1 (trotz der bekannten Kollisionen) in Ordnung [[Quelle-stackoverflow](https://stackoverflow.com/questions/4938906/is-sha1-still-secure-for-use-as-hash-function-in-pbkdf2)].



---

**Übung (PBKDF2)**

Verwende die .NET core Library (`Rfc2898DeriveBytes`) um den Hashwert (in Base64 Format) eines als String vorgegebenen Passworts zu ermitteln. Der Hashwert soll 256 Bits lang sein. Verwende `RNGCryptoServiceProvider` um dafür ein zufälliges Salt mit 64 Bits zu erzeugen. Die Anzahl der Iterationen ist so zu wählen, dass das generieren des Hashwerts ca. 200 ms benötigt.

Schreibe nach ersten Tests ein Programm das über einen Kommandozeilenschalter gesteuert 2 Modi anbietet:

- `--setpassword: Frage nach username und passwort. Der Username, Hashwert, Salt und die Anzahl der Iterationen werden in einem `passwords.txt` File gespeichert. Es sollen mehrere User unterstützt werden. Ist der User nicht bekannt so wird eine neue Zeile angelegt andernfalls die bestehenden Daten überschrieben.
  Eine Zeile im Passwort File hat folgenden Aufbau:

  ```
  username:salt:iterationen:hash
  ```

  Beispiel:

  ```
  mustermann:6vLGlD1cGsutIg:20000:0jxxgFTnQWdDgK948wiLPjcY8iMwJPmmpQzx6kIwe74mjLvv
  ```

- `--login`: Frage nach username und passwort. Das Programm prüft ob das eingegebene Passwort richtig ist.

Hinweise – User Input:

- [w3schools – C# User Input](https://www.w3schools.com/cs/cs_user_input.asp)
- [stackoverflow – Password masking console application](https://stackoverflow.com/questions/3404421/password-masking-console-application)

---



Lösung Grundlage:



```csharp
using System;
using System.Security.Cryptography;

namespace crypt02keyderivation
{
    class Program
    {
        static void Main(string[] args)
        {
            string pwd = "mypassword";

            // Create a byte array to hold the random value using a cryptographic Random Number Generator (RNG).
            // [RNGCryptoServiceProvider Class](https://docs.microsoft.com/en-us/dotnet/api/system.security.cryptography.rngcryptoserviceprovider?view=netcore-3.1)
            byte[] salt = new byte[8]; // 64 Bit salt
            using (RNGCryptoServiceProvider rngCsp = new RNGCryptoServiceProvider()){
            	rngCsp.GetBytes(salt);
            }
            //byte[] salt = {0,0,0,0,0,0,0,0};
            System.Console.WriteLine("Salt: "+System.Convert.ToBase64String(salt));

            // create object for PBKDF2 functionality
            Rfc2898DeriveBytes derived_key = new Rfc2898DeriveBytes(pwd, salt, iterations: 100000);
          	System.Console.WriteLine(derived_key.HashAlgorithm); // SHA1 = 160-bit (20-byte) hash value


            // [Rfc2898DeriveBytes.GetBytes(Int32) Method](https://docs.microsoft.com/en-us/dotnet/api/system.security.cryptography.rfc2898derivebytes.getbytes?view=netcore-3.1#System_Security_Cryptography_Rfc2898DeriveBytes_GetBytes_System_Int32_)

            // The Rfc2898DeriveBytes class implements PBKDF2 functionality by using a pseudorandom number generator based on HMACSHA1. The Rfc2898DeriveBytes class takes a password, a salt, and an iteration count, and then generates keys through calls to the GetBytes method. **Repeated calls to this method** will not generate the same key; instead, appending two calls of the GetBytes method with a cb parameter value of 20 is the equivalent of calling the GetBytes method once with a cb parameter value of 40.

            byte[] key = derived_key.GetBytes(32); // 256 Bits
            System.Console.WriteLine(System.Convert.ToBase64String(key));

            // in case we need an IV and/or MAC-key
            key = derived_key.GetBytes(32); // another (different) 256 Bits
            System.Console.WriteLine(System.Convert.ToBase64String(key));

            // because we use a random salt, these values changes (would not if salt=0)

        }
    }
}
```

