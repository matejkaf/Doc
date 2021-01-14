### ACTIVITY: GENERATING WORDLISTS WITH CRUNCH

*This activity is ungraded.*

**Remember:** Be sure to watch these Demo videos from this unit before trying this activity. Watching me do it first will help you understand each of the steps.

- [Wordlists with Crunch 1](https://courses.edx.org/courses/course-v1:RITx+CYBER504x+3T2018/jump_to_id/daee934de23d45c8b8976dbdb54d025e)
- [Wordlists with Crunch 2](https://courses.edx.org/courses/course-v1:RITx+CYBER504x+3T2018/jump_to_id/daee934de23d45c8b8976dbdb54d025e#4495b6e4523d493faf785b82a084a0db)

***\*System:\**** You can complete this activity on any system.

**Time:** This activity should take you approximately 30 minutes to complete.

#### Downloads

- Crunch is included in the Kali VM downloaded in Unit 1. [Instructions for installing Kali VM.](https://courses.edx.org/courses/course-v1:RITx+CYBER504x+3T2018/jump_to_id/af99a11f64b3400883bc6f9f82e8fa87)

#### Goal

To understand how crunch generates lists and practice using commands to generate different types of passwords.

#### Instructions

**Note:** Hit **Enter** after each command.

1. Launch your Kali Virtual machine and open a terminal. [(Instructions for this were included in Unit 1)](https://courses.edx.org/courses/course-v1:RITx+CYBER504x+3T2018/jump_to_id/af99a11f64b3400883bc6f9f82e8fa87)
2. Enter ***\*crunch\****, which will show the basic usage of this wordlist generating utility.
3. Enter ***\*man crunch\**** to access the man page for crunch.
   To exit the man page entry for crunch, hit **q**.
4. After each command that follows, notice the listings of the amount of data and number of lines that display before the words are generated.
5. In the terminal, enter ***\*crunch 1 3\****.
   This generates passwords from length 1 to length 3, using lower case letters.
6. Enter **crunch 1 3 -o weissman.txt**.
   This will save the results to a file named *weissman.txt*, instead of outputting the results to the console.
7. Enter ***\*leafpad\**** **weissman.txt** to see the contents of the file.
8. Close the file.
9. Enter these commands to generate passwords of different lengths and character sets. Use **Ctrl+C** to break out of each.

| Command                  | Generates Passwords…                                         |
| ------------------------ | ------------------------------------------------------------ |
| ***\*crunch 3 6\****     | Length 3 to length 6, using letters                          |
| ***\*crunch 8 12\****    | Length 8 to length 12, using letters                         |
| ***\*crunch 1 3 abc\**** | Length 1 to length 3, with the only acceptable characters being a, b, and c |
| **crunch 5 8 RITx!**     | Length 5 to length 8, mixing lower case, upper case, numbers, and symbols |

Enter **cat /usr/share/rainbowcrack/charset.txt** to see choices of character sets. [Here’s a web based version.](http://project-rainbowcrack.com/charset.txt)



mate: Scheint standardmässig nicht installiert zu sein. Lösung: `sudo apt-get install rainbowcrack`

Enter these commands to generate passwords of different lengths and character sets. Use **Ctrl+C** to break out of each.

| Command                                                      | Generates…                                                   |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| `crunch 8 8 -f /usr/share/rainbowcrack/charset.txt mixalpha-numeric` | 8-character passwords using lower case letters, upper case letters, and numbers |
| ***\*crunch 8 8 -f /usr/share/rainbowcrack/charset.txt alpha-numeric-symbol32-space\**** | 8-character passwords using lower case letters, upper case letters, numbers, symbols, and even white space |

#### Targeting individuals

Let’s say I’m targeting an employee who posted his birthdate on social media. Bob Smith was born on April 15th! How can I generate passwords using this information?

| Command                                                      | Generates…                                         |
| ------------------------------------------------------------ | -------------------------------------------------- |
| ***\*crunch 8 8 -t @@@@0415 -f /usr/share/rainbowcrack/charset.txt alpha-numeric-symbol32-space\**** | Passwords of length 8 that end with Bob’s birthday |

What other information can we use? We know that Bob’s wife is named Alice.

| Command                                                      | Generates…                                                   |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| ***\*crunch 8 8 -t alice@@@ -f /usr/share/rainbowcrack/charset.txt alpha-numeric-symbol32-space\**** | Passwords of length 8 that start with Bob’s wife’s name, Alice |

The **-p** option eliminates repeating characters or words. The mix and max length values can be anything, they’re never considered, but must be included. For example:

- **crunch 22 52 -p jonathan scott weissman**
- **crunch 44 93 -p jsw**

[-p charset] OR [-p word1 word2 ...] is optional and tells crunch to generate words that don't have repeating characters.

By default crunch will generate a wordlist size of #of_chars_in_charset ^ max_length. This option will instead generate #of_chars_in_charset!.

- The ! stands for factorial. 
  For example say the charset is abc and max length is 4; crunch will by default generate 3^4 = 81 words. 
  This option will instead generate 3! = 3x2x1 = 6 words (abc, acb, bac, bca, cab, cba).
- *This must be the last option in the command!*

- -p cannot be used with -s. Also, although it ignores min and max length, you must still specify two numbers.

After you've finished, answer the **Check Your Work** questions.e