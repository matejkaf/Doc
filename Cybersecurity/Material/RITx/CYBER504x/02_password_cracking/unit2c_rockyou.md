### ACTIVITY: GENERATING PASSWORDS WITH ROCKYOU.TXT

*This activity is ungraded.*

**Remember:** Be sure to watch this Demo video from this unit before trying this activity. Watching me do it first will help you understand each of the steps.

- [The rockyou.txt Wordlist](https://courses.edx.org/courses/course-v1:RITx+CYBER504x+3T2018/jump_to_id/b416d64cad9447e883d5ece3d00e7286#b38144eba883467d92adea06f24b1d8c)

***\*System:\**** You can complete this activity on any system.

**Time:** This activity should take you approximately 15 minutes to complete.

#### Downloads

- rockyou.txt is included in the Kali VM downloaded in Unit 1. Instructions for installing Kali VM `https://courses.edx.org/jump_to_id/af99a11f64b3400883bc6f9f82e8fa87`

#### Goal

To see how using an additional wordlist extends the capabilities of John the Ripper.

#### Instructions

When the wordfile that comes with John the Ripper is unsuccessful in cracking a password, it’s time to use John the Ripper with rockyou.txt, an enormous wordlist that contains over 14 million words!

**Note:** Hit **Enter** after each command.

1. Launch your Kali Virtual machine and open a terminal. [(Instructions for this were included in Unit 1.)](https://courses.edx.org/courses/course-v1:RITx+CYBER504x+3T2018/jump_to_id/af99a11f64b3400883bc6f9f82e8fa87)
2. Enter **john** to launch John the Ripper.
3. Copy the compressed *rockyou.txt* file to the current directory (the dot at the end of the command represents the current directory):
   **cp /usr/share/wordlists/rockyou.txt.gz** **.** 
4. Decompress the file:
   **gzip –d rockyou.txt.gz
   **
5. Compare the size of the john file, **ls –l /usr/share/john/password.ls****t** 
   to the size of rockyou.txt: **ls –l rockyou.txt**.
   Quite a difference!

#### Compare the contents of the wordlists

1. Display the john file: **cat /usr/share/john/password.lst**
2. Display rockyou.txt: **cat rockyou.txt**

Enjoy the show! When you want to stop, break out with **Ctrl + C**.

After generating more users with very complex passwords, and making a new unshadow file, you can use the *rockyou.txt* file with john.

This command assumes a new unshadow file called *rochester3.txt*: 
**john --wordlist=rockyou.txt rochester3.txt**.

After you've finished, answer the **Check Your Work** questions.