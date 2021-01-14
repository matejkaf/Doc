### ACTIVITY: THE TCP THREE-WAY HANDSHAKE

*This activity is ungraded.*

**Remember:** Watch this Demo video. Seeing me complete the activity first will help you understand each of the steps.

- [The TCP Three-Way Handshake Demo](https://courses.edx.org/courses/course-v1:RITx+CYBER504x+3T2018/jump_to_id/ 0c4605e0316b4a8b9bbc5868292caa62)

**System:** During this activity, you’ll use the Kali VM and Wireshark as you did in the packet sniffing exercises in Unit 1.

- [Instructions for installing and launching the Kali VM and Wireshark.](https://courses.edx.org/courses/course-v1:RITx+CYBER504x+3T2018/jump_to_id/af99a11f64b3400883bc6f9f82e8fa87)

**Time:** This activity should take you 15 to 20 minutes to complete.

#### Goal

- To observe the TCP Three-Way Handshake when contacting a website.

#### Instructions

**Note:** Hit **Enter** after each command.

1. Start **VMware**, and launch your Kali VM.
2. Open up a browser in the Kali VM.
3. Open up **Wireshark**, and start a capture.
4. Go to [www.rit.edu](http://www.rit.edu/), with Wireshark capturing the packets.
5. Enter a display filter of **ip.addr==129.21.1.40**, which is the IP address of the RIT webserver.
6. The TCP Three Way Handshake appears right at the top: SYN, SYN-ACK, ACK.
7. Find the numbers used in the TCP Three-Way Handshake. *Record or hold on these numvbers to complete the activity below.*

> - First, the SYN is sent from your web browser using a dynamic port to the RIT webserver on port 80.
>   Notice the SYN flag raised. Find the sequence number in hex.
> - Next, the RIT webserver ACKs that SYN by turning on the ACK flag and incrementing the sequence number by one.
>   Notice your Acknowledgment Number is one more than the Sequence Number sent in the SYN. The RIT webserver also turns on the SYN flag, and comes up with its own sequence number. Find that number.
> - Finally, your browser raises the ACK flag, and increments the webserver’s Sequence Number by one. Notice that the Acknowledgement Number is one more than the Sequence Number seen in the ACK.

Now there is a bidirectional TCP connection established between client and server for guaranteed, connection oriented, acknowledged communications. The sequence numbers established by each side now increment by the size of the TCP data, to make sure that all bits sent are received.

After you've finished, answer the **Check Your Work** questions.