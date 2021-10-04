### ACTIVITY: NULL, FIN, AND XMAS SCANS

*This activity is ungraded.*

**Remember:** Watch this Demo video. Seeing me complete the activity first will help you understand each of the steps.

- [Null/FIN/Xmas Scan Demos](https://courses.edx.org/courses/course-v1:RITx+CYBER504x+3T2018/jump_to_id/df4f90969bb345f58d460e7b601c1d30)

**System:** During this activity, you’ll use the Kali VM and Wireshark as you did in the packet sniffing exercises in Unit 1.

- [Instructions for installing and launching the Kali VM and Wireshark.](https://courses.edx.org/courses/course-v1:RITx+CYBER504x+3T2018/jump_to_id/af99a11f64b3400883bc6f9f82e8fa87)

**Time:** This activity should take you 15 to 30 minutes to complete.

#### Goal

- To execute Null, FIN, and Xmas scans and interpret the results

#### Instructions

**Note:** During this activity, replace these references, italicized in the instructions, with your local IP addresses:

- Kali VM: 192.168.1.104
- Windows IP: 192.168.1.101
- Router IP: 192.168.1.1

***Note: \**You will get different results depending on whether your Windows Firewall is on or off.\*****

**Note:** Hit **Enter** after each command.

Let’s take another peek at the help screen of nmap. What do you say we try the trio of Null, FIN, and Xmas scans?

1. Start **VMware**, and launch your Kali VM.
2. To run a Null scan, enter ***\*nmap –sN –p 445 \*192.168.1.101\*\**** (Use your Windows host machine IP address).
   Interestingly, nmap says the port is closed. Why is that? Remember that Windows machines will always send an RST to Null, FIN, and Xmas scans, regardless if the port is open or closed.
3. You can see the same results when you change the N to an F for the FIN scan: ***\*nmap –sF –p 445 \*192.168.1.101\*\****.
4. …and an X for the Xmas Scan: **nmap –sX –p 445 \*192.168.1.101\***.
5. Scan your router: **nmap –sX \*192.168.1.1\*** (use your router’s IP address).
   To find your router’s IP, open up a Windows Command Line interface on the host and enter **ipconfig**. The *Default Gateway IP* address is the one to use here.
6. Depending on your router configuration, you might see that both ports 80 and 443 are showing up as open or filtered. We can continue sniffing on Wireshark on the host, since all traffic to and from the VM still has to pass through the Windows host machine’s physical NIC.
7. Change the Wireshark display filter to **ip.addr==\*192.168.1.1\* and tcp.port==80**.
   You can see that the scans to your router on port 80 didn’t return RSTs, which means either the port is open or the port is filtered. How can we tell which one it is?
8. That’s where the ACK scan comes into play. The ACK scan will identify a port as filtered or unfiltered. Let’s change to the X to an A for an ACK scan: **nmap –sA –p 445 \*192.168.1.101\***.
9. The output in nmap should be: *All 1000 scanned ports on [IP address] are unfiltered.
   *Combine that with the logic from the Xmas scan, and we can conclude that your router has ports 80 and 443 open for business.

In Wireshark, we’re still using a display filter of your router’s IP address and TCP related traffic on port 80.

You’ll notice that the ACK scan received an RST reponse from your router. That means the ACK scan wasn’t filtered, and it got there. Then your router sent an RST. If there was a firewall filtering the scan, your router would not have sent the RST, since it wouldn’t have received the ACK.

Changing the filter to just the IP address of my router and TCP on any port: **ip.addr==\*192.168.1.1\* and tcp**, we can see all of the ACKs and RSTs. Wireshark captured them in groups of each.

After you've finished, answer the **Check Your Work** questions.