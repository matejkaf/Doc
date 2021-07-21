#### ACTIVITY: FINDING DEVICE ADDRESSES AND SENDING NETWORK TRAFFIC

Use one of these links to look up your own network information.

[How to Find Any Device’s IP Address, MAC Address, and Other Network Connection Details](https://www.howtogeek.com/236838/how-to-find-any-devices-ip-address-mac-address-and-other-network-connection-details/), How-To Geek

[6 Ways to find the MAC address of any network card](http://www.digitalcitizen.life/4-ways-learn-mac-address-windows-7-windows-81), in Windows, Ciprian Adrian Rusen, Digital Citizen

Then, using one or more of these links, send traffic from your computer to another device on your network, as well as a device on a different network.

[How to Ping a Computer or a Web Site](https://www.lifewire.com/how-to-ping-computer-or-website-818405), Bradley Mitchell, Lifewire

[How to Ping an IP Address](http://www.wikihow.com/Ping-an-IP-Address), wikiHow

[How to run a ping test](https://iihelp.iinet.net.au/How_to_run_a_ping_test#toc_0), iiNet

You can also go to this site and find out the manufacturer of your network card through your MAC address.

[OUI Lookup Tool](https://www.wireshark.org/tools/oui-lookup.html), Wireshark

When you're finished, complete the survey and word clouds with what you were able to find out.



#### ACTIVITY: TRACING A NETWORK ROUTE

Using the process outlined in this link, trace the route from your computer to *one* website in your country and *two other website in two different countries*. Enter your results in the Number Clouds.

[How to Use Traceroute to Identify Network Problems](https://www.howtogeek.com/134132/how-to-use-traceroute-to-identify-network-problems/), How-To Geek



#### ACTIVITY: ARP CACHE

Let’s take the Unit 4 Activity: [Finding Device Addresses and Sending Network Traffic](https://courses.edx.org/courses/course-v1:RITx+CYBER501x+2T2018_2/jump_to_id/227be564324e4d1ab4ba04ccd09e2416) even further.

Open up a Command Line Interface in Windows, or a terminal in Mac, and perform some local pings as shown in the Unit 4 activity. Now, examine your ARP cache to see the MAC addresses of the devices that responded to your pings. The five Resource Links will show you how to do this.

Your computer will keep these IP to MAC bindings cached for a period of time. This way, if your computer needs to send traffic to the same destinations again, it won’t need to send an ARP request. Your machine will be able to rely on the cached entries seen with the “arp -a” command.

If you want, you can explore the command options. You will discover that it is possible to set up static IP to MAC entries in the ARP cache, so that no ARPs will be sent for certain pairs of devices that communicate with on a regular basis (for example, workstation to router or workstation to file server)

#### RESOURCE LINKS

- [TCP/IP Guide: ARP Caching](http://www.tcpipguide.com/free/t_ARPCaching.htm)
- [ARP cache: What is it and how can it help you?](https://www.petri.com/csc_arp_cache), Petri IT Knowledgebase
- [Network Administration: ARP Command](http://www.dummies.com/programming/networking/network-administration-arp-command/), Dummies.com
- [ARP](https://technet.microsoft.com/en-us/library/cc940107.aspx), TechNet
- [View IP Addresses of LAN Devices from Command Line in Mac OS](http://osxdaily.com/2016/11/03/view-lan-device-ip-address-arp/), OSXDaily



#### ACTIVITY: USING NETSTAT

Put your knowledge of ports and protocols to use with netstat, a command line utility found in all operating systems.

In its most simple usage, after instructing my Web browser to go to www.rit.edu, I immediately executed the netstat **-n** command (-n kept the output in numerical form), and saw the following line in the output:

TCP  192.168.1.52:49439  129.21.1.40:80  ESTABLISHED

This shows that my browser had opened up port 49439 to connect to the RIT Webserver on port 80.

In addition to **–n**, you can explore other powerful switches, like **-a**, **-b**, and **-f**, at these links:

- [How to See What Web Sites Your Computer is Secretly Connecting To](https://www.howtogeek.com/98601/easily-monitor-your-computers-internet-connection-activity/), Lori Kaufman, How-To Geek
- [Using the Netstat Command to Monitor Network Traffic](https://www.petri.com/netstat-command-monitor-network-traffic), Sean Wilkins, Petri IT Knowledgebase
- [Netstat tips and tricks for Windows Server admins](http://www.techrepublic.com/blog/the-enterprise-cloud/netstat-tips-and-tricks-for-windows-server-admins/), Rick Vanover, TechRepublic
- [Netstat](https://technet.microsoft.com/en-us/library/bb490947.aspx), Microsoft TechNet
- [Netstat](https://benohead.com/mac-netstat-list-ports-programs/), Mac OS X: List listening ports and programs using netstat



#### ACTIVITY: FINDING INFORMATION ABOUT YOUR SERVERS

Using the instructions found in the Resource Links, find the following information about your servers:

1. The IP address of your DHCP server
2. The IP addresses of your DNS servers
3. When your DHCP lease was obtained, and when it expires
4. The contents of your DNS client resolver cache

##### Resource Links

[Windows - Displaying, Releasing and Renewing a DHCP Lease, KnowledgeBase](https://kb.wisc.edu/page.php?id=562), University of Wisconsin-Madison

[Ipconfig](https://technet.microsoft.com/en-us/library/bb490921.aspx), Microsoft TechNet

[How do I find the DNS server being used by my PC?](http://ask-leo.com/how_do_i_find_the_dns_server_being_used_by_my_pc.html), Leo A. Notenboom, Ask Leo!

[Get All DHCP Info with ipconfig Quickly](http://osxdaily.com/2009/08/06/quickly-get-all-your-dhcp-info-with-ipconfig/), OS X Daily



#### ACTIVITY: USING NSLOOKUP

Use nslookup to find the server names and IP addresses asked for in the questions (RIT Web, Mail, etc.). These links outline the process you can use.

- [Nslookup-Common Usage Examples](https://blog.thesysadmins.co.uk/nslookup-common-usage-examples.html), The Sysadmins
- [Linux and Unix nslookup command](http://www.computerhope.com/unix/unslooku.htm), Computer Hope. (This process will work with Windows as well.)



#### ACTIVITY: WINDOWS FIREWALL

Review the instructions for configuring the advanced settings on Windows Firewall. Then complete the additional activities.

Using Windows Firewall with Advanced Security `https://www.howtogeek.com/school/windows-network-security/lesson5/all/`, How-To Geek



#### ACTIVITY: EXPLORING STEGANOGRAPHY

In the last video in this section, I talk a little bit about steganography, which is the practice of hiding data within another file. Often image or sound files are the carrier files for this hidden data. This [Steganography Demo](http://www.cs.vu.nl/~ast/books/mos2/zebras.html) from [Andrew S. Tanenbaum](https://en.wikipedia.org/wiki/Andrew_S._Tanenbaum) gives you an opportunity to see how this works (Windows users only).









#### ACTIVITY: PHISHING TESTS

Take one or all of these phishing recognition tests to see how well you can spot fraudulent emails from legitimate ones.

- [SonicWall Phishing IQ Test](https://www.sonicwall.com/phishing/), SonicWall
- [Phishing Quiz: Think you can Outsmart Internet Scammers?](https://www.opendns.com/phishing-quiz/), Cisco
- [Can you spot a fake email? Take our phishing IQ test](http://www.komando.com/tips/361345/can-you-spot-a-fake-email-take-our-phishing-iq-test), Kim Komando

In the discussion, talk about what you did right and where you were wrong.

- What was obvious in some of the fraudulent emails?
- How were you fooled?
- If you were explaining to an average user how to recognize a phishing attempt, what is the *single most important* thing you would tell them to look at?



