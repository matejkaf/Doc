# Asymetrische Verschlüsselung



![Symmetric-Encryption](fig/Symmetric-Encryption.png)



Asymmetrische Verschlüsselung verwendet zwei zusammengehörende Schlüssel

- public key: frei verteilbar, zum Verschlüsseln
- private key: geheim, nur einem bekannt, zum Entschlüsseln

![Asymmetric-Encryption](fig/Asymmetric-Encryption.png)



Probleme:

- Ca. 1000x langsamer als symetrische Verschlüsselung. 
- Nachricht darf nicht länger als der Schlüssel sein (z.B. 2048 Bits)

In Praxis: Schlüssel für symmetrische Verschlüsselung wird per asymetrischer Verschlüsselung ausgetauscht.

Häufiges Verfahren: RSA, [RSA Class](https://docs.microsoft.com/en-us/dotnet/api/system.security.cryptography.rsa?view=netcore-3.1)

```csharp
using System;
using System.IO;
using System.Security.Cryptography;

namespace crypt04rsa
{
    class Program
    {
        static void Main(string[] args)
        {
            string privateKeyFile = "private.xml";
            string publicKeyFile = "public.xml";
            RSA cipher = RSA.Create();

            // creates a public/private key pair
            //System.Console.WriteLine( cipher.ToXmlString ( includePrivateParameters: false ) );

            // [RSA.ToXmlString(Boolean) Method](https://docs.microsoft.com/en-us/dotnet/api/system.security.cryptography.rsa.toxmlstring?view=netcore-3.1#System_Security_Cryptography_RSA_ToXmlString_System_Boolean_)

            /*
            <RSAKeyValue>
            <Modulus>
            wQ/+UcMFb2aPa2NR9CQUAW1ReouA1bK1sv/Uf0NAZMEjkBIKlc3M0GsYWl6+wwCoO/tc57mBgCZmQ0ddsRYSM0+dQLXSbFSxLKJZHr7RpCXrYgWtRxvaKfvm1mRfCTFNJI4dfjQBcomOa29ozI7TnDYrGsWhv8l95fByE3Docop4vqFgW00nW+yZEceug+qBR5ODzgvhykiJc0/hGasKuGaephZxbgfOXsp5tQ/RZUUl4lh6zP79ZwAnVAT9VjKaVVONJjYaq8y8FjCQrwZLQHLWvzNMnoS6q5digGqw3PBESjQYD7cgXa6E1sXuJL5CdbQeptGemRd/RiWrWmLw7w==
            </Modulus>
            <Exponent>AQAB</Exponent>
            <P>
            566uHzoRDiZCyLaGDfFL1ALaF4rQqX2HEc/VE1MsL8M6GJMX4lqD01HgWLvyT8SOht5R8ZJh9US3IrbQpwaGGsyeBypDKRZZDOQflRipJKirGYCRm6xNJfrOISUUhghbs58VzMvpbeCHjCi6u+es6Zl5s3tF7dCOGsO7iekR/pE=
            </P>
            <Q>
            1VOYRkloXm/9jHCE0MNPOfjb5faKyeQnV/hqY2WF3FfOLobaz9Nck8lywE7+GBpSBtHoXCj6jB88kLdI1nigFiMx9WO89tthLaSFJwJXIMiu4OzfOnA8AUb5xSKtSiDv3lVZFUy2LVEbi4lCeQUvPLRCBK8qmNKXkLXh2ru8t38=
            </Q>
            <DP>
            Pf3/mVtwNNkIBazRMene4Fvi/2mla7Sq75ks6n7W0/DpGqpBOc/+dgzyesvPioiNmojiZEFG9NnuJtvD+O1F9OXLYx9r2RKhwVFJIhv3Jlf7cFd2nrD7862oejXxx+t0nhtzOdlWHJB3tIkxbhYPrnHinqPdkkS7wW2eQMiciAE=
            </DP>
            <DQ>
            gAp003ssEcLWRH0kusj/vKQKGLUqCJPQqZSJBq/g8KgjMPnwS91pK6s2HQdMq9rgcQd8mBRgjcoR6CqapWAxdhgZ3FfJC8IRSfv9j7Rv51WM4aRLOCA1Y+7d690sddnfH2vK1GX+0qRkDBSOuWTLPXxUQ8t/ncqI/mqs7UTRuLE=
            </DQ>
            <InverseQ>
            g347HXUzhwu1zaW+2AQUY2IYDhR2+KOe+DWkiZzAdKqNOk/70QSv21ruEPuBsNln5859dc1qTfaGewa2xNgVnh1uGFa2ivFmLpqF94cKj3TNyHJdbCAJyeUFRSSJ8sgjkRXYJ7oJdBg2LTZBzn+bUoM0WjmdxmXgjVw1wN32TQ4=
            </InverseQ>
            <D>iJZmGTZefAgVY6Zq7s0vkirjQE2+InJC9pbkofzUa/Pw0xbQgleNlc6O9jCdyZyHaZhWjGLD6gRAyUyOTqEM01x6JrP8YUQx7SAW6RebfgSN2VWm1+4ulRFwqTFtwzUsHLamywjEFWKYbg3uGPrbX2M7b79uxh8pgSpxqqtw6Mcv+vxrB5L2Sq+rhUF7zHGrYnshbtRL6JlR2lbMzDqc+H0sdys7PYojFqo4q2N55uj4fEy5GgbYsdd3j6zjTyOq1XUVMXrPHiHFonzRMsBoD7LI/NcVvLReALgYbIWeI7pbqS7TFTOAtj6HQ0T3NUA1J1ooN8sBhrFGZSfszr5GQQ==
            </D>
            </RSAKeyValue>
            */

            /* ohne private key:
            <RSAKeyValue>
            <Modulus>
            qQH0/NOWMszuONyCwC1wXDhgyJn6xbDFYfgaK9p8nKyNoKXOy55cTKGbT/w9eREzh+oypuMDZpMmRkSX4guCe2g9YxcK1rduvMRHgVtPdyqcpXuvKRT/yOMtgRh5DDIs2Ypgol03y1VdKlJKH4WUm8B51jGdCXKDUhL5GIp1tklHtSHXUhujfIfkD9UNpBCVqmWwjX22vwW0son60QnXC6PApTqgxxJIHvx2InT1caaSY5asX+4kw0BKxJiC4GbpMfmveN1kdW8uTlYXtZd3xf9hFC3HC31Gkxmb/pCDM6ffFsX7jG7/OqIAUek5gDfQbn5dnCfDifR81jaYdv6Ddw==
            </Modulus>
            <Exponent>AQAB</Exponent>
            </RSAKeyValue>
            */

            if (!File.Exists(privateKeyFile))
            {
                // save keys to file for later reuse
                File.WriteAllText(privateKeyFile, cipher.ToXmlString ( includePrivateParameters: true ));
                File.WriteAllText(publicKeyFile, cipher.ToXmlString ( includePrivateParameters: false ));

                System.Console.WriteLine("Key files generated !");
            }

            //
            // encrypt using the public key
            //
            string publicKeyXML;
            publicKeyXML = File.ReadAllText(publicKeyFile);
            System.Console.WriteLine(publicKeyXML);
            cipher.FromXmlString(publicKeyXML); // set the public key
            System.Console.WriteLine("KeySize="+cipher.KeySize+" Bits");

            string plaintext = "Encrypt using RSA";
            byte[] plaintext_data = System.Text.Encoding.UTF8.GetBytes(plaintext);
            byte[] ciphertext_data = cipher.Encrypt(plaintext_data, RSAEncryptionPadding.Pkcs1);
            string ciphertext_base64 = Convert.ToBase64String(ciphertext_data);
            System.Console.WriteLine("Ciphertext: "+ciphertext_base64);

            // encryptable message size is restricted by key size -- 256 bytes (2048 Bits)
            // Unhandled exception. System.Security.Cryptography.CryptographicException: The message exceeds the maximum allowable length for the chosen options (245).
            /*
            plaintext = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempus est nec feugiat condimentum. Aliquam erat volutpat. Nulla facilisi. Sed vel rhoncus est, a scelerisque ligula. Nulla facilisi. Ut elit justo, vulputate at ante et, tempor lobortis neque. Mauris pellentesque justo quis ipsum accumsan.";
            plaintext_data = System.Text.Encoding.UTF8.GetBytes(plaintext);
            ciphertext_data = cipher.Encrypt(plaintext_data, RSAEncryptionPadding.Pkcs1);
            */

            //
            // dencrypt using the private key
            //
            string privateKeyXML = File.ReadAllText(privateKeyFile);
            cipher.FromXmlString(privateKeyXML);
            byte[] ciphertext_data_from_base64 = System.Convert.FromBase64String(ciphertext_base64);
            byte[] plaintext_data_decrypted = cipher.Decrypt(ciphertext_data_from_base64, RSAEncryptionPadding.Pkcs1);
            string plaintext_decrypted = System.Text.Encoding.UTF8.GetString(plaintext_data_decrypted);
            System.Console.WriteLine("Decrypted Plaintext: "+plaintext_decrypted);


        }
    }
}
```



Research: was ist wenn Schlüssel als `.pem` File vorliegt (openssl).

