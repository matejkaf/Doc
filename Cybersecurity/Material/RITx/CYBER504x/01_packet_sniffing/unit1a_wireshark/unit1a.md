### ACTIVITY: VIEWING NETWORK DATA WITH WIRESHARK

*This activity is ungraded.*

**Remember:** Be sure to watch these Demo videos from this unit before trying this activity. Watching me do it first will help you understand each of the steps.

- [Welcome to Wireshark](https://courses.edx.org/courses/course-v1:RITx+CYBER504x+3T2018/jump_to_id/0130532cad154423b2ea030de8b0f67a)
- [Local Communication through Wireshark](https://courses.edx.org/courses/course-v1:RITx+CYBER504x+3T2018/jump_to_id/0130532cad154423b2ea030de8b0f67a#aeb2daa600e14c5792878358bfe7a5f4)
- [Remote Communication through Wireshark](https://courses.edx.org/courses/course-v1:RITx+CYBER504x+3T2018/jump_to_id/0130532cad154423b2ea030de8b0f67a#e83cdbaf38304efebbddaa727a61738a)

***\*System:\**** You can complete this activity on any system. You should have at least 6GB of RAM.

**Time:** This activity should take you 30 to 60 minutes to complete.

#### Downloads

- [Download and install Wireshark](https://www.wireshark.org/download.html)
- [Download and install VMware Workstation Player](https://www.vmware.com/products/player/playerpro-evaluation.html)
- [Download Kali Linux](https://www.kali.org/downloads/)

#### Goal

To learn how to find and interpret network activity within Wireshark

#### Instructions

##### Set up your virtual machine

1. Launch **VMware Workstation Player**.
2. Enter a valid email address and then click the **Continue** button.
3. Click the **Finish** button.
4. Click **Create a New Virtual Machine.**
5. Click the **Browse…** button, and browse to the location of your Kali ISO. This should be the *Downloads* folder.
6. Double click the Kali ISO.
7. Click the **Next >** button.
8. In the Version dropdown, select **Debian 8.x 64-bit** and click the **Next >** button.
9. Change the Virtual machine name in the text box to **Kali** and click the **Next >** button.
10. Select the radio button for **Store virtual disk as a single file** and click the **Next >** button.
11. Click the **Finish** button.
12. Click **Edit virtual machine settings**.
13. Change the Memory for this virtual machine to **2048 MB** (if you have at least 6 GB of RAM).
14. Select **Network Adapter**, click the radio button for **Bridged** and put a check in the box next to **Replicate**.
15. Click the **OK** button.
16. Click **Play virtual machine**.

##### Install VMware (and optionally, VMware Tools)

1. When prompted for *VMware Tools*, click the **Download and Install** button.
2. In the Kali screen, use your arrow to scroll down to **Graphical install** and hit **Enter**.
3. Click through the installer using default settings, or change them for your location.
4. Select your own hostname and password when prompted, and continue to accept all default selections, when applicable.
5. When prompted, select /dev/sda for the boot loader installation.
6. When prompted, login with the username of root, and the password you selected.
7. *Optional, but recommended*: Manually install or upgrade VMware Tools in a Linux Virtual Machine
   [Instructions](https://docs.vmware.com/en/VMware-Workstation-Pro/12.0/com.vmware.ws.using.doc/GUID-08BB9465-D40A-4E16-9E15-8C016CC8166F.html)
8. Change the Kali resolution by clicking the triangle at the top on the far right, then the **All Settings** button (first of 3), and then **Displays**.
9. Click the second icon on the left toolbar to open up a terminal.
10. Type ***\*ip a\****, and notice the IP address assigned to the eth0 interface.
11. Open up a command line window in the Windows host, by clicking the **Start** button, typing ***\*cmd\****, and hitting Enter.
12. Type ***\*ipconfig\**** to locate your host’s IP address.



Addendum (mate):

MacOS

```bash
ifconfig
ifconfig |grep inet

```





##### Use Wireshark to view network activity

1. Open Wireshark on the host
2. Click the **Wi-Fi** adapter (assuming you’re not using a wired Ethernet connection). This will start a live capture.
3. In the filter box (below the toolbar at the top), type ***\*arp or icmp\**** and hit **Enter**.
4. In the command line on the host, ping the IP address of your Kali VM.
5. In Wireshark, you should see an ARP Request, an ARP Reply, as well as four ICMP Echo Requests and Replies. Click the red square icon (second from the left) on the toolbar at the top to stop the capture.
6. In the middle Wireshark pane (*Packet Details*), look for the first ARP, and expand the triangle next to **Ethernet_II** and the triangle next to **Address Resolution Protocol (Request)**.

##### Things to note

- In the Ethernet frame, the source MAC address is the MAC address of the host machine, and the destination MAC address is the Layer 2 Broadcast Address (12 Fs).
- In the ARP (which is encapsulated inside the Ethernet frame), the Sender MAC and Sender IP address belong to the host machine. Also notice that the Target MAC is all 0s (the sender left that field blank), but the Target IP address is that of the Kali box.
- In the top pane (Packet List), Wireshark turns this into a nice English question in the Info column.
- The next frame, below the Packet List, is the response. Compare the fields in the Ethernet frame and the ARP in this response to the frame above, the request. ARP is a pure Layer 2 protocol. It is not routable. There is no IP header. Even though you did see IP addresses in the ARP fields, that does not make it a Layer 3 routable protocol.

Now that the host machine got the ARP reply, with the MAC address of the Kali box, it can send the ICMP Echo Replies. The next 8 rows should be 4 ICMP Echo Requests and 4 ICMP Echo Replies. ICMP is a Layer 3 protocol.

1. Select the first ICMP Echo Request.
2. Notice how ICMP is encapsulated inside of an IP packet, which is encapsulated inside an Ethernet frame.
3. Expand the fields of all protocols, by clicking the triangles.

Notice with the ICMP Echo Requests that the source MAC address and the source IP address are those of the host machine, while the destination MAC address and the destination IP address are those of the Kali box.

- For the ICMP Echo Replies, the pairs are reversed. This is local communication. The source determined that the destination was on the same subnet by first logically ANDing its IP address with its subnet mask, and then logically ANDing the destination IP address subnet mask with the source subnet mask. When both resultant network IDs came out the same, the source realized it had to ARP for the MAC address of the actual destination.

##### Viewing Remote Communication

1. Start a new Wireshark capture by clicking **the blue fin (first icon from the left)**, with the same filter as in Step 3 under *Use Wireshark to view network activity*(***\*arp or icmp\****).
2. Open up a new command line interface with Administrator privileges, by clicking the **Start** button, typing ***\*cmd\****, right clicking on the icon, selecting **Run As Administrator**, and clicking the **Yes** button.
3. At the prompt, type **arp -d**, which will clear the host’s ARP cache. Then, immediately type **ping www.google.com**. You will have a new set of ARPs and ICMPs.



MacOS(mate): `sudo arp -a -d`

