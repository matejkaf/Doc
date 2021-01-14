### ACTIVITY: USING JOHN THE RIPPER TO CRACK PASSWORDS

*This activity is ungraded.*

**Remember:** Be sure to watch these Demo videos from this unit before trying this activity. Watching me do it first will help you understand each of the steps.

- [Dictionary Attacks with John the Ripper](https://courses.edx.org/courses/course-v1:RITx+CYBER504x+3T2018/jump_to_id/b416d64cad9447e883d5ece3d00e7286)

***\*System:\**** You can complete this activity on any system.

**Time:** This activity should take you approximately 30 minutes to complete.

#### Downloads

- John the Ripper is included in the Kali VM downloaded in Unit 1. [Instructions for installing Kali VM.](https://courses.edx.org/courses/course-v1:RITx+CYBER504x+3T2018/jump_to_id/af99a11f64b3400883bc6f9f82e8fa87)

#### Goal

To experience how John the Ripper cracks passwords.

#### Instructions

**Note:** Hit **Enter** after each command.

1. Launch your Kali Virtual machine and open a terminal. [(Instructions for this were included in Unit 1.)](https://courses.edx.org/courses/course-v1:RITx+CYBER504x+3T2018/jump_to_id/af99a11f64b3400883bc6f9f82e8fa87)
2. Enter **john**, which will display usage help.
   There is also a man page for john: **man john**. Enter **q** to quit.
3. Enter **john –test**. This will give you an idea of how long it will take john to crack passwords based on various cryptographic schemes.

#### Adding users and passwords

1. Enter `adduser weissman`
2. Give the weissman user a password of `jonathan`. Hit **Enter** for all the prompts.
   [Documentation on the adduser command](https://manpages.debian.org/jessie/adduser/adduser.8.en.html)
3. Add these additional username/password combinations (pay attention to use of upper and lower case in the passwords):

| Username           | Password     |
| ------------------ | ------------ |
| ***\*weissman\**** | **jonathan** |
| ***\*upper\****    | **PASSWORD** |
| ***\*lower\****    | **password** |
| **mixed**          | **Password** |
| **story**          | **3bears**   |

I've purposely chosen dictionary words because the complexity of the password is inversely related to the time necessary to crack it.

In Linux, the **/etc/passwd** file contains potential information in the GECOS field: full name, room number, work phone, home phone, and other.

Linux stores its passwords in */etc/shadow* file.

The **unshadow** tool combines the */etc/passwd* and */etc/shadow* files, so John the Ripper can use them.

1. Enter **unshadow** by itself to see its usage.
2. Now enter **unshadow /etc/passwd /etc/shadow > rochester.txt**.
3. Take a look at this contents of this file, specifically the hashes: **cat rochester.txt**.

#### Using a wordlist that comes with John the Ripper

1. Enter `john --wordlist=/usr/share/john/password.lst rochester.txt`.
2. At the point of cracking, the passwords and usernames appear on the screen.
3. Afterwards, use the show option to list all the cracked passwords: **john --show rochester.txt**.

#### Using John the Ripper without a wordlist

1. Create a new user, bob. Enter **adduser bob**.
2. Give him a password of **bob10314**.
3. Specify a room number of **10314** when prompted.
4. Create a new unshadow file, updated with our new user, bob: 
   **unshadow /etc/passwd /etc/shadow > rochester2.txt**
5. Run John the Ripper in Single Crack Mode, which uses the GECOS field, without a wordlist: 
   ***\*john rochester2.txt\****
6. You’ll see the cracked password on screen.
7. Afterwards, enter **john --show rochester.txt**
   The GECOS information was successful!

After you've finished, answer the **Check Your Work** questions.



MATE:



```
# load a password list from github
wget https://raw.githubusercontent.com/danielmiessler/SecLists/master/Passwords/Keyboard-Combinations.txt
adduser test01
pass: zaq1xsw2

unshadow /etc/passwd /etc/shadow >unshadow.txt
john --wordlist=Keyboard-Combinations.txt unshadow.txt
john --show unshadow.txt
```

