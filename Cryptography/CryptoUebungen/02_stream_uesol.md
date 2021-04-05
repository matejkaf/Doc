---
title: Kryptographie Stream Cipher (Lösung zu Übungen)
description: Übungen zu Stream Cipher (Lösung)
tags: [5AHELS,assignment, krypto,assignment,solution ]
---

---

```csharp
using System;
using System.IO;

namespace _201110_KSN_GrpA_StreamCipher
{
    class Program
    {
        static void PrintHelp()
        {
            System.Console.WriteLine("Usage:");
            System.Console.WriteLine("   cmd --encrypt password <plaintext path> <encrypted path>");
            System.Console.WriteLine("   cmd --decrypt password <encrypted path> <plaintext path>");
            System.Console.WriteLine("   cmd --attack <encrypted path>");
        }
        static void Main(string[] args)
        {

            if(args.Length<2) {
                PrintHelp();
                Environment.Exit(0);
            }

            string plaintext_path;
            string encrypted_path;
            string plaintext="Das ist der zu verschlüsselnde Text";
            string password="cafe";
            switch (args[0])
            {
                case "--encrypt":
                // dotnet run --encrypt cafe input.txt output.base64
                    if (args.Length!=4)
                    {
                        PrintHelp();
                        Environment.Exit(0);
                    }
                    password=args[1];
                    plaintext_path = args[2];
                    encrypted_path = args[3];
                    plaintext = File.ReadAllText(plaintext_path);
                    string ciphertext_base64 = StreamCipherEncrypt(plaintext, password);
                    System.Console.WriteLine(ciphertext_base64);
                    File.WriteAllText(encrypted_path, ciphertext_base64);
                break;
                case "--decrypt":
                // dotnet run --decrypt cafe output.base64 decrypted.txt
                    if (args.Length!=4)
                    {
                        PrintHelp();
                        Environment.Exit(0);
                    }
                    password=args[1];
                    encrypted_path = args[2];
                    plaintext_path = args[3];
                    ciphertext_base64 = File.ReadAllText(encrypted_path);
                    plaintext = StreamCipherDecrypt(ciphertext_base64, password);
                    System.Console.WriteLine(plaintext);
                    File.WriteAllText(plaintext_path, plaintext);
                break;
                case "--attack":
                // dotnet run --attack output.base64
                    if (args.Length!=2)
                    {
                        PrintHelp();
                        Environment.Exit(0);
                    }
                    encrypted_path = args[1];
                    ciphertext_base64 = File.ReadAllText(encrypted_path);
                    System.Console.WriteLine("Thinking...");
                    password = CrackPassword(ciphertext_base64);
                    System.Console.WriteLine("cracked password: "+password);
                    plaintext = StreamCipherDecrypt(ciphertext_base64, password);
                    System.Console.WriteLine(plaintext);

                break;
                default:
                    PrintHelp();
                    Environment.Exit(0);
                break;
            }
        }
        static string CrackPassword(string ciphertext_base64)
        {
            char[] pass_arr = new char[4];
            pass_arr[0] = pass_arr[1] = pass_arr[2] = pass_arr[3] = 'a';
            for(char c1='a' ; c1<='z' ; c1++)
            {
                pass_arr[0] = c1;
                for(char c2='a' ; c2<='z' ; c2++)
                {
                    pass_arr[1] = c2;
                    for(char c3='a' ; c3<='z' ; c3++)
                    {
                        pass_arr[2] = c3;
                        for(char c4='a' ; c4<='z' ; c4++)
                        {
                            pass_arr[3] = c4;
                            string pass = new string(pass_arr);
                            //System.Console.WriteLine(pass);
                            string plaintext = StreamCipherDecrypt(ciphertext_base64, pass);
                            if(plaintext.Contains("5ahels")) {
                                return pass;
                            }
                        }

                    }

                }
            }
            return "sorry no match found";
        }
        static string StreamCipherEncrypt(string plaintext, string password)
        {
            Int32 seed=PasswordHash(password);
            var rand = new Random(seed);
            byte[] plaintext_data = System.Text.Encoding.UTF8.GetBytes(plaintext);
            byte[] pad = new byte[plaintext_data.Length];
            rand.NextBytes(pad);
            byte[] ciphertext_data = new byte[plaintext_data.Length];
            for(int i=0 ; i<plaintext_data.Length ; i++)
                ciphertext_data[i] = (byte)(plaintext_data[i]^pad[i]);
            //System.Console.WriteLine(BitConverter.ToString(ciphertext_data));
            return Convert.ToBase64String(ciphertext_data);
        }
        static string StreamCipherDecrypt(string ciphertext_base64, string password)
        {
            byte[] ciphertext_data = Convert.FromBase64String(ciphertext_base64);
            var rand = new Random(PasswordHash(password));
            byte[] pad = new byte[ciphertext_data.Length];
            rand.NextBytes(pad);
            byte[] plaintext_data = new byte[ciphertext_data.Length];
            for(int i=0 ; i<ciphertext_data.Length ; i++)
                plaintext_data[i] = (byte)(ciphertext_data[i]^pad[i]);
            return System.Text.Encoding.UTF8.GetString(plaintext_data);
        }
        static Int32 PasswordHash(string pw)
        {
            Int32 hash = 0;
            foreach(var c in pw) {
                hash += hash*31 +c;
            }
            return hash;
        }
    }

}

```



