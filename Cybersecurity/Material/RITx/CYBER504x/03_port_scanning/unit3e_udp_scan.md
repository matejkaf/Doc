### ACTIVITY: UDP SCAN

*This activity is ungraded.*

**Remember:** Watch this Demo video. Seeing me complete the activity first will help you understand each of the steps.

- [UDP Scan Demo](https://courses.edx.org/courses/course-v1:RITx+CYBER504x+3T2018/jump_to_id/df4f90969bb345f58d460e7b601c1d30#9683c53435c6427a8c6d5a143486ca85)

**System:** During this activity, you’ll use the Kali VM and Wireshark as you did in the packet sniffing exercises in Unit 1.

- [Instructions for installing and launching the Kali VM and Wireshark.](https://courses.edx.org/courses/course-v1:RITx+CYBER504x+3T2018/jump_to_id/af99a11f64b3400883bc6f9f82e8fa87)

**Time:** This activity should take you 15 to 30 minutes to complete.

#### Goal

- To execute UDP scans and interpret the results

#### Instructions

**Note:** During this activity, replace these references, italicized in the instructions, with your local IP addresses:

- Kali VM: 192.168.1.104
- Windows IP: 192.168.1.101

***Note: \**You will get different results depending on whether your Windows Firewall is on or off.\*****

**Note:** Hit **Enter** after each command.

Let’s conclude with some UDP scans.

1. First, we’re going to ask nmap to send a UDP scan to port 99 of your router with the display filter **udp.port==99**.
2. Nmap reports that port as closed, and a look at Wireshark reveals that the destination machine sent an ICMP Destination Unreachable Port Unreachable error message back to the Kali box.
3. Let’s start a new capture and filter by the ip address of your Kali box, **ip.addr==\*192.168.1.104\* and udp.port==53** (use your Kali’s IP). This will eliminate any DNS traffic to or from the Windows host machine in the display, zoning in on DNS traffic to and from the Kali box.
4. Now in Kali, we’re going to ask nmap to probe for a service that uses UDP listening on port 53 of that box that everyone simply calls router. Of course, we’re talking about DNS.
5. Lo and behold, the UDP scan has identified a DNS server in the router. In Wireshark, we can see that the server status request has received a response.
6. Let’s try a UDP scan with port 67 now, looking for a DHCP server in that little box called router by changing the display filter port from 53 to 67: **ip.addr==\*192.168.1.104\* and udp.port==67**.
   Nmap now reports that port 67 is open or filtered. After, we can see that Wireshark shows that there is no response from the DHCP server, like we got from the DNS server.

How can we tell if port 67 is open or filtered?

Yep, you guessed it. The ACK scan once again. Even though DHCP uses UDP, the ACK scan, which uses TCP can still identify that port as filtered or unfiltered.

Looking in Wireshark (after changing the filter to **tcp.port==67**), an RST was sent by the DHCP server in response to the ACK scan, so it is unfiltered. Since it is unfiltered, we know that in the previous UDP scan, the result of open or filtered can now be changed to open, since we just proved that the port is unfiltered.

After you've finished, answer the **Check Your Work** questions.