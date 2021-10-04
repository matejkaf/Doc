### ACTIVITY: SYN SCAN

*This activity is ungraded.*

**Remember:** Watch this Demo video. Seeing me complete the activity first will help you understand each of the steps.

- [SYN Scan Demo](https://courses.edx.org/courses/course-v1:RITx+CYBER504x+3T2018/jump_to_id/0c4605e0316b4a8b9bbc5868292caa62#0bbbd0b0714b4fb18b16ec4715748bf8)

**System:** During this activity, you’ll use the Kali VM and Wireshark as you did in the packet sniffing exercises in Unit 1.

- [Instructions for installing and launching the Kali VM and Wireshark.](https://courses.edx.org/courses/course-v1:RITx+CYBER504x+3T2018/jump_to_id/af99a11f64b3400883bc6f9f82e8fa87)

**Time:** This activity should take you 5 to 10 minutes to complete.

#### Goal

- To execute a SYN scan and interpret the results

#### Instructions

**Note:** During this activity, replace these references, italicized in the instructions, with your local IP addresses:

- Kali VM: 192.168.1.104
- Windows IP: 192.168.1.101

***Note: \**You will get different results depending on whether your Windows Firewall is on or off.\*****

**Note:** Hit **Enter** after each command.

1. Start **VMware**, and launch your Kali VM. Make sure the NIC is set to *Bridged* mode.
2. In Kali, open up a terminal, enter **nmap | less**. We see a very detailed help output. As you can see, nmap does more than port scanning, including host discovery, service and version detection, and much more.
3. Open up a Windows Command Line Interface on your host machine, and enter **ipconfig**, to get the IP address of your host machine.
4. Let’s start sniffing with Wireshark on the Windows machine, and filter by the IP address of the Kali VM: **ip.addr==\*192.168.1.104\*** (substitute the IP address of your Kali box).
5. To get the Kali IP address, open up a terminal and enter **ip a**. The IP address will be listed in the *eth0* section.
6. When the scan type is not specified, nmap uses a SYN scan. Enter **nmap** followed by the IP address of your Windows host machine, for instance, **nmap \*192.168.1.101\***.
   (For the rest of the assignment, I will use *192.168.1.101* as the IP address of the Windows host machine. *Substitute the IP address of your Windows host machine in those places.*)
7. Notice that the output reveals ports, and their related service names, indicative of a Windows system.
8. Stop the capture in Wireshark.
9. Change the filter to **tcp.port==445**.

You’ll notice that after the Kali box sent the SYN, the open port 445 sent a SYN/ACK. Then, the Kali box closed the connection with an RST. Compare that to the sequence related to the scanning of port 21. The Kali box sent the SYN, but since port 21 is closed (unless you’re running an FTP server), on the Windows host machine, the Windows host machine responded back with an RST, that closed the connection, and said “Sorry, no FTP server here!”

After you've finished, answer the **Check Your Work** questions.