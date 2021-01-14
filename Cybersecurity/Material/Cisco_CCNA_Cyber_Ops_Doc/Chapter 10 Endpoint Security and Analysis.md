# Chapter 10 Endpoint Security and Analysis

## 10.0 Introduction

### 10.0.1 Welcome

#### 10.0.1.1 Chapter 10: Endpoint Security and Analysis

Endpoints are the most numerous devices on a network; therefore, they are the targets of the majority of network attacks. A cybersecurity analyst must be familiar with the threats to endpoints, the methods for protecting endpoints from attacks, and the methods for detecting compromised endpoints.

This chapter discusses how to investigate endpoint vulnerabilities and attacks.

<iframe id="media" title="interactive graphic" aria-label="interactive graphic" aria-describedby="media-description" src="https://static-course-assets.s3.amazonaws.com/CyberOps11/en/course/module10/10.0.1.1/media/index.html" style="border: none; display: block; width: 680px; height: 490.4px;"></iframe>

The figure shows a collage with the title of the chapter.



## 10.1 Endpoint Protection

### 10.1.1 Antimalware Protection

#### 10.1.1.1 Endpoint Threats

The term “endpoint” is defined in various ways. For the purpose of this course, we can define endpoints as hosts on the network that can access or be accessed by other hosts on the network. This obviously includes computers and servers, however many other devices can also access the network. With the rapid growth of the Internet of Things (IoT), other types of devices are now endpoints on the network. This includes networked security cameras, controllers, and even light bulbs and appliances. Each endpoint is potentially a way for malicious software to gain access to a network. In addition, new technologies, such as cloud, expand the boundaries of enterprise networks to include locations on the Internet for which the enterprises are not responsible.

Devices that remotely access networks through VPNs are also endpoints that need to be considered. These endpoints could inject malware into the VPN network from the public network.

The following points summarize some of the reasons why malware remains a major challenge:

- Over 75% of organizations experienced adware infections from 2015-2016.

- From 2016 to early 2017, global spam volume increased dramatically (Figure 1). 8 to 10 percent of this spam can be considered to be malicious (Figure 2).

- Malware that targets the Android mobile operating system was in the top ten most common types of malware found in 2016.

- Several common types of malware have been found to significantly change features in less than 24 hours in order to evade detection.



<iframe id="media" title="interactive graphic" aria-label="interactive graphic" aria-describedby="media-description" src="https://static-course-assets.s3.amazonaws.com/CyberOps11/en/course/module10/10.1.1.1/media/index.html" style="border: none; display: block; width: 680px; height: 490.4px;"></iframe>

Figure 1 shows the emails per second sent from 2012 through 2016 and the increase from 0 point 5 K back in 20 12 to over 3 K in 20 16. Figure 2 shows the percentage of total span from close to 0 percent in January of 2015 to how in 2016 almost 15 percent contains malicious dot w s f, and 25 percent contains malicious dot d o c m, close to 40 percent contains malicious dot zip files, almost 50 percent contains malicious dot j s files, almost 70 percent contains malicious dot h t a files, and over 70 percent contains malicious attachments based on Cisco security research.



#### 10.1.1.2 Endpoint Security

News media commonly cover external network attacks on enterprise networks. These are some examples of such attacks:

- DoS attacks on an organization’s network to degrade or even halt public access to it

- Breach of an organization’s Web server to deface their web presence

- Breach of an organization’s data servers and hosts to steal confidential information

Various network security devices are required to protect the network perimeter from outside access. As shown in the figure, these devices could include a hardened router that is providing VPN services, a next generation firewall (ASA, in the figure), an IPS appliance, and an authentication, authorization, and accounting (AAA) services (AAA server, in the figure).

However, many attacks originate from inside the network. Therefore, securing an internal LAN is nearly as important as securing the outside network perimeter. Without a secure LAN, users within an organization are still susceptible to network threats and outages that can directly affect an organization’s productivity and profit margin. After an internal host is infiltrated, it can become a starting point for an attacker to gain access to critical system devices, such as servers and sensitive information.

Specifically, there are two internal LAN elements to secure:

- **Endpoints** - Hosts commonly consist of laptops, desktops, printers, servers, and IP phones, all of which are susceptible to malware-related attacks.

- **Network infrastructure** - LAN infrastructure devices interconnect endpoints and typically include switches, wireless devices, and IP telephony devices. Most of these devices are susceptible to LAN-related attacks including MAC address table overflow attacks, spoofing attacks, DHCP related attacks, LAN storm attacks, STP manipulation attacks, and VLAN attacks.

This chapter focuses on securing endpoints.

<iframe id="media" title="interactive graphic" aria-label="interactive graphic" aria-describedby="media-description" src="https://static-course-assets.s3.amazonaws.com/CyberOps11/en/course/module10/10.1.1.2/media/index.html" style="border: none; display: block; width: 680px; height: 490.4px;"></iframe>

The figure shows internal LAN elements. The internet cloud connects to a V P N router which connects to an A S A firewall. The firewall has two connections – one to a switch that has a D H C P server, e mail server, web server, and E S A / W S A attached and another connection to an I P S. The I P S connects to a Layer 3 switch. That Layer 3 switch connects to a A A A server, another layer 3 switch, and two layer 2 switches. Each of the switches connect to all of the other switches. In the bottom right corner are desktop computers and laptops labeled hosts.

#### 10.1.1.3 Host-Based Malware Protection

The network perimeter is always expanding. People access corporate network resources with mobile devices that use remote access technologies such as VPN. These same devices are also used on unsecured, or minimally secured, public and home networks. Host-based antimalware/antivirus software and host-based firewalls are used to protect these devices.



**Antivirus/Antimalware Software**

This is software that is installed on a host to detect and mitigate viruses and malware. Examples are Windows Defender (Figure 1), Norton Security, McAfee, Trend Micro, and others. Antimalware programs may detect viruses using three different approaches:



- **Signature-based** – This approach recognizes various characteristics of known malware files.

- **Heuristics-based** – This approach recognizes general features shared by various types of malware.

- **Behavior-based** – This approach employs analysis of suspicious behavior.

Many antivirus programs are able to provide real-time protection by analyzing data as it is used by the endpoint. These programs also scan for existing malware that may have entered the system prior to it being recognizable in real time.

Host-based antivirus protection is also known as agent-based. Agent-based antivirus runs on every protected machine. Agentless antivirus protection performs scans on hosts from a centralized system. Agentless systems have become popular for virtualized environments in which multiple OS instances are running on a host simultaneously. Agent-based antivirus running in each virtualized system can be a serious drain on system resources. Agentless antivirus for virtual hosts involves the use of a special security virtual appliance that performs optimized scanning tasks on the virtual hosts. An example of this is VMware’s vShield.

**Host-based Firewall**

This software is installed on a host. It restricts incoming and outgoing connections to connections initiated by that host only. Some firewall software can also prevent a host from becoming infected and stop infected hosts from spreading malware to other hosts. This function is included in some operating systems. For example, Windows includes Windows Defender and Windows Firewall (Figure 2). Other solutions are produced by other companies or organizations. The Linux IPtables and TCP Wrapper tools are examples. Host-based firewalls are discussed in more detail later in the chapter.

**Host-based Security Suites**

It is recommended to install a host-based suite of security products on home networks as well as business networks. These host-based security suites include antivirus, anti-phishing, safe browsing, Host-based intrusion prevention system, and firewall capabilities. These various security measures provide a layered defense that will protect against most common threats.

In addition to the protection functionality provided by host-based security products, is the telemetry function. Most host-based security software includes robust logging functionality that is essential to cybersecurity operations. Some host-based security programs will submit logs to a central location for analysis.

There are many host-based security programs and suites available to users and enterprises. The independent testing laboratory AV-TEST, shown in Figure 3, provides high-quality reviews of host-based protections, as well as information about many other security products.

Click [here](https://www.av-test.org/) to learn more about AV-TEST.

<iframe id="media" title="interactive graphic" aria-label="interactive graphic" aria-describedby="media-description" src="https://static-course-assets.s3.amazonaws.com/CyberOps11/en/course/module10/10.1.1.3/media/index.html" style="border: none; display: block; width: 680px; height: 490.4px;"></iframe>

Figure 1 shows the Windows Defender window. Figure 2 shows the advanced security settings for the Windows Firewall. The windows has 3 sections - domain profile, private profile is active, and public profile. Under each section are 3 options 1. windows firewall is on. 2. inbound connections that do not match a rule are blocked. 3. Outbound connections that do not match a rule are allowed. Figure 3 shows part of the web page for A V - TEST.



#### 10.1.1.4 Network-Based Malware Protection

New security architectures for the borderless network address security challenges by having endpoints use network scanning elements. These devices provide many more layers of scanning than a single endpoint possibly could. Network-based malware prevention devices are also capable of sharing information among themselves to make better informed decisions.

Protecting endpoints in a borderless network can be accomplished using network-based, as well as host-based techniques, as shown in Figure 1. The following are examples of devices and techniques that implement host protections and the network level.



- **Advanced Malware Protection (AMP)** – This provides endpoint protection from viruses and malware.

- **Email Security Appliance (ESA)** – This provides filtering of SPAM and potentially malicious emails before they reach the endpoint. An example is the Cisco ESA.

- **Web Security Appliance (WSA)** – This provides filtering of websites and blacklisting to prevent hosts from reaching dangerous locations on the web. The Cisco WSA provides control over how users access the Internet and can enforce acceptable use policies, control access to specific sites and services, and scan for malware.

- **Network Admission Control (NAC)** – This permits only authorized and compliant systems to connect to the network.

These technologies work in concert with each other to give more protection than host-based suites can provide, as shown in Figure 2.

<iframe id="media" title="interactive graphic" aria-label="interactive graphic" aria-describedby="media-description" src="https://static-course-assets.s3.amazonaws.com/CyberOps11/en/course/module10/10.1.1.4/media/index.html" style="border: none; display: block; width: 680px; height: 490.4px;"></iframe>

Figure 1 title is advanced malware protection everywhere with five discrete sections: 1. Next-generation firewalls. 2. Intrusion prevention systems. 3. Network access control. 4. Gateway security. 5. Endpoint security. Figure 2 shows a cybersecurity operations circle with a box within it labeled deployment examples of next generation firewall, next generation I P S, endpoint H I D S sensors, W S A, E S A, and other infrastructure devices. There are 4 external boxes pointing inward toward the cybersecurity operations circle. The 4 boxes are A M P public / private cloud, sandboxing, third party integration, and Talos / Threat Grid intelligence.



#### 10.1.1.5 Cisco Advanced Malware Protection (AMP)

Cisco Advanced Malware Protection (AMP) addresses all phases of a malware attack, from breach prevention to detection, response, and remediation. AMP is an integrated, enterprise-class malware analysis and protection solution. It provides comprehensive protection for organizations across the attack continuum:

- **Before an attack** - AMP uses global threat intelligence from Cisco’s Talos Security Intelligence and Research Group, and Threat Grid’s threat intelligence feeds to strengthen defenses and protect against known and emerging threats.

- **During an attack** - AMP uses that intelligence coupled with known file signatures and Cisco Threat Grid’s dynamic malware analysis technology. It identifies and blocks policy-violating file types and exploit attempts, as well as malicious files trying to infiltrate the network.

- **After an attack** – The solution goes beyond point-in-time detection capabilities and continuously monitors and analyzes all file activity and traffic, regardless of disposition, searching for any indications of malicious behavior. This happens not only after an attack, but also after a file is initially inspected. If a file with an unknown or previously deemed “good” disposition starts behaving badly, AMP will detect it and instantly alert security teams with an indication of compromise. It then provides visibility into where the malware originated, what systems were affected, and what the malware is doing. It also provides the controls to rapidly respond to the intrusion and remediate it with a few clicks. This gives security teams the level of deep visibility and control they need to quickly detect attacks, determine the impact, and contain malware before it causes damage.

Cisco AMP is very flexible and can be deployed on endpoints, on ASA and FirePOWER firewalls, and on various other appliances, such as ESA, WSA, and Meraki MX.

Click [here](https://youtu.be/ZDBMH7X4Dr4) for a video overview of the core Cisco AMP functionalities.

<iframe id="media" title="interactive graphic" aria-label="interactive graphic" aria-describedby="media-description" src="https://static-course-assets.s3.amazonaws.com/CyberOps11/en/course/module10/10.1.1.5/media/index.html" style="border: none; display: block; width: 680px; height: 490.4px;"></iframe>

Three sections are shown. Section on the left is protect endpoints AMP for endpoints blocks malware at the point of entry and provides visibility into file and executable level activity. Also removes malware from P Cs, MACs, Linux, and mobile devices. The middle box is protect the network. Provides deep visibility into network level and network edge threat activity and blocks advanced malware. The box on the right is protect email and web traffic. Add AMP capabilities to e mail and web security appliances, or to cloud email and web security deployments.





#### 10.1.2.1 Host-Based Firewalls

Host-based personal firewalls are standalone software programs that control traffic entering or leaving a computer. Firewall apps are also available for Android phones and tablets.

Host-based firewalls may use a set of predefined policies, or profiles, to control packets entering and leaving a computer. They also may have rules that can be directly modified or created to control access based on addresses, protocols, and ports. Host-based firewall applications can also be configured to issue alerts to users if suspicious behavior is detected. They can then offer the user the ability to allow an offending application to run or to be prevented from running in the future.

Logging varies depending on the firewall application. It typically includes date and time of the event, whether the connection was allowed or denied, information about the source or destination IP addresses of packets, and the source and destination ports of the encapsulated segments. In addition, common activities such as DNS lookups and other routine events can show up in host-based firewall logs, so filtering and other parsing techniques are useful for inspecting large amounts of log data.

One approach to intrusion prevention is the use of distributed firewalls. Distributed firewalls combine features of host-based firewalls with centralized management. The management function pushes rules to the hosts and may also accept log files from the hosts.

Whether installed completely on the host or distributed, host-based firewalls are an important layer of network security along with network-based firewalls. Here are some examples of host-based firewalls:

- **Windows Firewall** –First included with Windows XP, Windows Firewall uses a profile-based approach to configuring firewall functionality. Access to public networks is assigned the restrictive Public firewall profile. The Private profile is for computers that are isolated from the Internet by other security devices, such as a home router with firewall functionality. The Domain profile is the third available profile. It is chosen for connections to a trusted network, such as a business network that is assumed to have an adequate security infrastructure. Windows Firewall has logging functionality and can be centrally managed with customized group security policies from a management server such as System Center 2012 Configuration Manager.

- **iptables** – This is an application that allows Linux system administrators to configure network access rules that are part of the Linux kernel Netfilter modules.

- **nftables** – The successor to iptables, nftables is a Linux firewall application that uses a simple virtual machine in the Linux kernel. Code is executed within the virtual machine that inspects network packets and implements decision rules regarding packet acceptance and forwarding.

- **TCP Wrapper** – This is a rule-based access control and logging system for Linux. Packet filtering is based on IP addresses and network services.



<iframe id="media" title="interactive graphic" aria-label="interactive graphic" aria-describedby="media-description" src="https://static-course-assets.s3.amazonaws.com/CyberOps11/en/course/module10/10.1.2.1/media/index.html" style="border: none; display: block; width: 680px; height: 490.4px;"></iframe>

The figure shows a laptop, tablet, and smartphone receiving a firewall update.



#### 10.1.2.2 Host-Based Intrusion Detection

The distinction between host-based intrusion detection and intrusion prevention is blurred. In fact, some sources refer to host-based intrusion detection and prevention systems (HIPDS). Because the industry seems to favor the use of the acronym HIDS, we will use it in our discussion here.

A host-based intrusion detection system (HIDS) is designed to protect hosts against known and unknown malware. A HIDS can perform detailed monitoring and reporting on the system configuration and application activity. It can provide log analysis, event correlation, integrity checking, policy enforcement, rootkit detection, and alerting. A HIDS will frequently include a management server endpoint, as shown in the figure.

A HIDS is a comprehensive security application that combines the functionalities of antimalware applications with firewall functionality. A HIDS not only detects malware but also can prevent it from executing if it should reach a host. Because the HIDS software must run directly on the host, it is considered an agent-based system.

<iframe id="media" title="interactive graphic" aria-label="interactive graphic" aria-describedby="media-description" src="https://static-course-assets.s3.amazonaws.com/CyberOps11/en/course/module10/10.1.2.2/media/index.html" style="border: none; display: block; width: 680px; height: 490.4px;"></iframe>

Figure shows the host based intrusion detection architecture. Up top are two icons for the security team labeled logs and alerts. There is also a hacker with a no symbol on top of it. A host based intrusion detection management server has arrows pointing to each of the security team. This server is connected to the same network that contains the email server, the intranet server, other servers, P Cs, laptops, tablets, and smart phones. Each device has an icon showing that it has a host based intrusion detection agent installed.



#### 10.1.2.3 HIDS Operation

It can be said that host-based security systems function as both detection and prevention systems because they prevent known attacks and detect unknown potential attacks. A HIDS uses both proactive and reactive strategies. A HIDS can prevent intrusion because it uses signatures to detect known malware and prevent it from infecting a system. However, this strategy is only good against known threats. Signatures are not effective against new, or zero day, threats. In addition, some malware families exhibit polymorphism. This means that variations of a type, or family, of malware may be created by attackers that will evade signature-based detections by changing aspects of the malware signature just enough so that it will not be detected. An additional set of strategies are used to detect the possibility of successful intrusions by malware that evades signature detection:

- **Anomaly-based** - Host system behavior is compared to a learned baseline model. Significant deviations from the baseline are interpreted as the result of some sort of intrusion. If an intrusion is detected, the HIDS can log details of the intrusion, send alerts to security management systems, and take action to prevent the attack. The measured baseline is derived from both user and system behavior. Because many things other than malware can cause system behavior to change, anomaly detection can create many erroneous results which can increase the workload for security personnel and also lower the credibility of the system.

- **Policy-based** - Normal system behavior is described by rules, or the violation of rules, that are predefined. Violation of these policies will result in action by the HIDS. The HIDS may attempt to shut down software processes that have violated the rules and can log these events and alert personnel to violations. Most HIDS software comes with a set of predefined rules. With some systems, administrators can create custom policies that can be distributed to hosts from a central policy management system.



<iframe id="media" title="interactive graphic" aria-label="interactive graphic" aria-describedby="media-description" src="https://static-course-assets.s3.amazonaws.com/CyberOps11/en/course/module10/10.1.2.3/media/index.html" style="border: none; display: block; width: 680px; height: 490.4px;"></iframe>

The figure shows a man pointing to a digital representation of a map of the world.



#### 10.1.2.4 HIDS Products

There are a number of HIDS products on the market today. Most of them utilize software on the host and some sort of centralized security management functionality that allows integration with network security monitoring services and threat intelligence. Examples are Cisco AMP, AlienVault USM, Tripwire, and Open Source HIDS SECurity (OSSEC).

OSSEC uses a central manager server and agents that are installed on individual hosts. Currently, agents only exist for Microsoft Windows platforms. For other platforms, OSSEC can also operate as an agentless system, and can be deployed in virtual environments. The OSSEC server can also receive and analyze alerts from a variety of network devices and firewalls over syslog. OSSEC monitors system logs on hosts and also conducts file integrity checking. OSSEC can detect rootkits, and can also be configured to run scripts or applications on hosts in response to event triggers.

Click [here](https://ossec.github.io/) to learn more about OSSEC.

<iframe id="media" title="interactive graphic" aria-label="interactive graphic" aria-describedby="media-description" src="https://static-course-assets.s3.amazonaws.com/CyberOps11/en/course/module10/10.1.2.4/media/index.html" style="border: none; display: block; width: 680px; height: 490.4px;"></iframe>

The figure shows the logos of Cisco AMP, AlienVault USM, Tripwire, and (OSSEC)

### 10.1.3 Application Security

#### 10.1.3.1 Attack Surface

Recall that a vulnerability is a weakness in a system or its design that could be exploited by a threat. An attack surface is the total sum of the vulnerabilities in a given system that is accessible to an attacker. The attack surface can consist of open ports on servers or hosts, software that runs on Internet-facing servers, wireless network protocols, and even users.

The attack surface is continuing to expand, as shown in the figure. More devices are connecting to networks through the Internet of Things (IoT) and Bring Your Own Device (BYOD). Much of network traffic now flows between devices and some location in the cloud. Mobile device use continues to increase. All of these trends contribute to a prediction that global IP traffic will increase threefold in the next five years.

The SANS Institute describes three components of the attack surface:

- **Network Attack Surface** - The attack exploits vulnerabilities in networks. This can include conventional wired and wireless network protocols, as well as other wireless protocols used by smartphones or IoT devices. Network attacks also exploit vulnerabilities at the network and transport layers.

- **Software Attack Surface** - The attack is delivered through exploitation of vulnerabilities in web, cloud, or host-based software applications.

- **Human Attack Surface** - The attack exploits weaknesses in user behavior. Such attacks include social engineering, malicious behavior by trusted insiders, and user error.

<iframe id="media" title="interactive graphic" aria-label="interactive graphic" aria-describedby="media-description" src="https://static-course-assets.s3.amazonaws.com/CyberOps11/en/course/module10/10.1.3.1/media/index.html" style="border: none; display: block; width: 680px; height: 490.4px;"></iframe>

A building is in the center with text boxes pointing toward the building. Textbox 1 I o T connected devices projected to double to 30 billion by 20 20. Textbox 2 cloud by 20 20 92 percent of data center workloads will be processed by cloud data centers. Textbox 3 mobility 20 percent of total I P traffic will be from mobile devices by 20 21. Textbox 4 global operations global IP traffic will increase nearly threefold over the next 5 years. Textbox 5 B Y O D Gartner predicts that 70 percent of professionals will conduct work on their own smart devices by 2018.



#### 10.1.3.3 Application Blacklisting and Whitelisting

One way of decreasing the attack surface is to limit access to potential threats by creating lists of prohibited applications. This is known as blacklisting.

Application blacklists can dictate which user applications are not permitted to run on a computer. Similarly, whitelists can specify which programs are allowed to run, as shown in Figure 1. In this way, known vulnerable applications can be prevented from creating vulnerabilities on network hosts.

Whitelists are created in accordance with a security baseline that has been established by an organization. The baseline establishes an accepted amount of risk, and the environmental components that contribute to that level of risk. Non-whitelisted software can violate the established security baseline by increasing risk.

Figure 2 shows the Windows Local Group Policy Editor blacklisting and whitelisting settings. Figure 3 shows how entries can be added, in this case to the list of blacklisted applications.

Click [here](https://kevtownsend.wordpress.com/2011/08/24/whitelisting-vs-blacklisting/) for an interesting discussion by Kevin Townsend on the issues around whitelisting and blacklisting.

Websites can also be whitelisted and blacklisted. These blacklists can be manually created, or they can be obtained from various security services. Blacklists can be continuously updated by security services and distributed to firewalls and other security systems that use them. Cisco’s FireSIGHT security management system is an example of a device that can access the Cisco Talos security intelligence service to obtain blacklists. These blacklists can then be distributed to security devices within an enterprise network.

Click [here](https://www.spamhaus.org/xbl/) for information on SpamHaus, an example of a free blacklist service.

<iframe id="media" title="interactive graphic" aria-label="interactive graphic" aria-describedby="media-description" src="https://static-course-assets.s3.amazonaws.com/CyberOps11/en/course/module10/10.1.3.2/media/index.html" style="border: none; display: block; width: 680px; height: 490.4px;"></iframe>

Figure 1 shows a PC up top and two clouds below with arrows leading from each cloud to the PC. The left cloud is white list apps and is to allow only. The right cloud is black list apps with the words prevent only. Figure 2 is a screen capture of Windows Local Group policy editor with a box around two of the options. Option 1 is don’t run specified Windows applications. Option 2 is run only specified Windows applications. Figure 3 shows the don’t run specified windows applications window with 3 options of not configured, enabled (which is enabled) and disabled. In the options section that is a show button that shows a list of disallowed applications. This show contents window is also shown with a value of application1.exe and application2.exe within the list of disallowed applications section.



#### 10.1.3.3 System-Based Sandboxing

Sandboxing is a technique that allows suspicious files to be executed and analyzed in a safe environment. Automated malware analysis sandboxes offer tools that analyze malware behavior. These tools observe the effects of running unknown malware so that features of malware behavior can be determined and then used to create defenses against it.

As mentioned previously, polymorphic malware changes frequently and new malware appears regularly. Malware will enter the network despite the most robust perimeter and host-based security systems. HIDS and other detection systems can create alerts on suspected malware that may have entered the network and executed on a host. Systems such as Cisco AMP can track the trajectory of a file through the network, and can “roll back” network events to obtain a copy of the downloaded file. This file can then be executed in a sandbox, such as Cisco Threat Grid Glovebox, and the activities of the file documented by the system. This information can then be used to create signatures to prevent the file from entering the network again. The information can also be used to create detection rules and automated plays that will identify other systems that have been infected.

Cuckoo Sandbox is a free malware analysis system sandbox. It can be run locally and have malware samples submitted to it for analysis. Click [here](https://cuckoosandbox.org/) for more information on Cuckoo Sandbox.

A number of online public sandboxes also exist. These services allow malware samples to be uploaded for analysis. Some of these services are VirusTotal, Payload Security VxStream Sandbox (shown in the figure), and Malwr.

<iframe id="media" title="interactive graphic" aria-label="interactive graphic" aria-describedby="media-description" src="https://static-course-assets.s3.amazonaws.com/CyberOps11/en/course/module10/10.1.3.3/media/index.html" style="border: none; display: block; width: 680px; height: 490.4px;"></iframe>

The figure shows a web page from www.hybrid-analysis dot com and shows the 0 0 0 0 0 0 0 1 dot exe file marked as malicious and analyzed on June 20th 2016. It shows the guest system is a Windows 7 32 bit home premium 6 point 1 and service pack 1. The malicious indicators shown are external systems sample was identified as malicious by a large number of antivirus engines and sample was identified as malicious by at least one antivirus engine. The next indicator is hiding 2 malicious indicators.



#### 10.1.3.4 Video Demonstration - Using a Sandbox to Launch Malware

Click Play to view a demonstration of using sandbox environment to launch and analyze a malware attack.



Click [here](https://static-course-assets.s3.amazonaws.com/CyberOps11/en/course/files/10.1.3.4 Video - Using a Sandbox to Launch Malware.pdf) to read a transcript of the video.

<iframe id="media" src="https://static-course-assets.s3.amazonaws.com/CyberOps11/en/course/module10/10.1.3.4/media/index.html" title="interactive graphic" aria-label="interactive graphic" aria-describedby="media-description" style="border: none; display: block; width: 680px; height: 490.4px;"></iframe>

This page contains a video titled using a sandbox to launch malware.



## 10.2 Endpoint Vulnerability Assessment
### 10.2.1 Network and Server Profiling
#### 10.2.1.1 Network Profiling

In order to detect serious security incidents, it is important to understand, characterize, and analyze information about normal network functioning. Networks, servers, and hosts all exhibit typical behavior for a given point in time. Network and device profiling can provide a baseline that serves as a reference point. Unexplained deviations from the baseline may indicate a compromise.

Increased utilization of WAN links at unusual times can indicate a network breach and exfiltration of data. Hosts that begin to access obscure Internet servers, resolve domains that are obtained through dynamic DNS, or use protocols or services that are not needed by the system user can also indicate compromise. Deviations in network behavior are difficult to detect if normal behavior is not known.

Tools like NetFlow and Wireshark can be used to characterize normal network traffic characteristics. Because organizations can make different demands on their networks depending on the time of day or day of the year, network baselining should be carried out over an extended period of time. Some questions to ask when establishing a network baseline, as shown in the figure, address important elements of the network profile:

- **Session duration** – This is the time between the establishment of a data flow and its termination.

- **Total throughput** – This is the amount of data passing from a given source to a given destination in a given period of time.

- **Ports used** – This is a list of TCP or UDP processes that are available to accept data.

- **Critical asset address space** – These are the IP addresses or the logical location of essential systems or data.

In addition, a profile of the types of traffic that typically enter and leave the network is an important tool in understanding network behavior. Malware can use unusual ports that may not be typically seen during normal network operation. Host-to-host traffic is another important metric. Most network clients communicate directly with servers, so an increase of traffic between clients can indicate that malware is spreading laterally through the network. Finally, changes in user behavior, as revealed by AAA, server logs, or a user profiling system like Cisco Identity Services Engine (ISE) is another valuable indicator. Knowing how individual users typically use the network leads to detection of potential compromise of user accounts. A user who suddenly begins logging in to the network at strange times from a remote location should raise alarms if this behavior is a deviation from a known norm.

![image-20200430155813286](Chapter%2010%20Endpoint%20Security%20and%20Analysis/image-20200430155813286.png)

The figure shows the elements of a network profile as a cloud with 4 textboxes along the 4 corners of the cloud. Textbox 1 says session duration What is the average time between the establishment of a data flow and its termination? Textbox 2 is total throughput what is the average amount of data passing from a given source to a given destination in a given period of time? Textbox 3 is critical asset address space what is the I P address space of critical assets owned by the organization? Textbox 4 is port used what is the list of acceptable T C P or U C P processes that are available to accept data?



#### 10.2.1.2 Server Profiling

Server profiling is used to establish the accepted operating state of servers. A server profile is a security baseline for a given server. It establishes the network, user, and application parameters that are accepted for a specific server.

In order to establish a server profile, as shown in the figure, it is important to understand the function that a server is intended to perform in a network. From there, various operating and usage parameters can be defined and documented. A server profile may establish the following:

- **Listening ports** – These are the TCP and UDP daemons and ports that are allowed to be open on the server.

- **User accounts** – These are the parameters defining user access and behavior.

- **Service accounts** – These are the definitions of the type of service that an application is allowed to run on a given host.

- **Software environment** – These are the tasks, processes, and applications that are permitted to run on the server.

![image-20200430160030021](Chapter%2010%20Endpoint%20Security%20and%20Analysis/image-20200430160030021.png)

Figure shows elements of a server profile being listening ports, logged in users/service accounts, running processes, running tasks, and applications.



#### 10.2.1.3 Network Anomaly Detection

# Network Anomaly Detection

Network behavior is described by a large amount of diverse data such as the features of packet flow, features of the packets themselves, and telemetry from multiple sources. One approach to detection of network attacks is the analysis of this diverse, unstructured data using Big Data analytics techniques.

This entails the use of sophisticated statistical and machine learning techniques to compare normal performance baselines with network performance at a given time. Significant deviations can be indicators of compromise.

Anomaly detection can recognize network congestion caused by worm traffic that exhibits scanning behavior. Anomaly detection also can identify infected hosts on the network that are scanning for other vulnerable hosts.

The figure illustrates a simplified version of an algorithm designed to detect an unusual condition at the border routers of an enterprise. For example, the cybersecurity analyst could provide the following values:

- X = 5

- Y = 100

- Z = 30

- N = 500

Now, the algorithm can be interpreted as: Every 5th minute, get a sampling of 1/100th of the flows during second 30. If the number of flows is greater than 500, generate an alarm. If the number of flows is less than 500, do nothing. This is a simple example of using a traffic profile to identify the potential for data loss.

![image-20200430160253568](Chapter%2010%20Endpoint%20Security%20and%20Analysis/image-20200430160253568.png)



The figure shows a textbox labeled on border routers every x min: and an arrow to the next textbox labeled count flows with sampling 1 / 6 during z sec with an arrow flowing down to a decision symbol with the words if # of flows > N. The yes arrow points to a box labeled Alarm! The now arrow points to a box labeled end. The alarm! Box has an arrow pointing to the same box labeled end.

#### 10.2.1.4 Network Vulnerability Testing

Most organizations connect to public networks in some way due to the need to access the Internet. These organizations must also provide Internet facing services of various types to the public. Because of the vast number of potential vulnerabilities, and the fact that new vulnerabilities can be created within an organization network and its Internet facing services, periodic security testing is essential. Network security can be tested using a variety of tools and services. Various types of tests can be performed:

- **Risk Analysis** – This is a discipline in which analysts evaluate the risk posed by vulnerabilities to a specific organization. A risk analysis includes assessment of the likelihood of attacks, identifies types of likely threat actors, and evaluates the impact of successful exploits on the organization.

- **Vulnerability Assessment** – This test employs software to scan Internet facing servers and internal networks for various types of vulnerabilities. These vulnerabilities include unknown infections, weaknesses in web-facing database services, missing software patches, unnecessary listening ports, etc. Tools for vulnerability assessment include the open source OpenVAS platform, Microsoft Baseline Security Analyzer, Nessus, Qualys, and FireEye Mandiant services. Vulnerability assessment includes, but goes beyond, port scanning.

- **Penetration Testing** – This type of test uses authorized simulated attacks to test the strength of network security. Internal personnel with hacker experience, or professional ethical hackers, identify assets that could be targeted by threat actors. A series of exploits is used to test security of those assets. Simulated exploit software tools are frequently used. Penetration testing does not only verify that vulnerabilities exist, it actually exploits those vulnerabilities to determine the potential impact of a successful exploit. An individual penetration test is often known as a pen test. Metasploit is a tool used in penetration testing. CORE Impact offers penetration testing software and services.

![image-20200430160526319](Chapter%2010%20Endpoint%20Security%20and%20Analysis/image-20200430160526319.png)

Figure is a table with three columns – activity, examples, and tools. The first row is risk analysis individual conduct comprehensive analysis of impacts of attacks on core company assets and functioning. Internal or external consultants, risk management frameworks. The second row is vulnerability assessment with patch management, host scans, port scanning, other vulnerability scans and services as examples and open vas, Microsoft baseline analyzer, Nessus, Quays, and nmap as tools. The last row is penetration testing with use of hacking techniques and tools to penetrate network defenses and identify depth of potential penetration as examples and meta sploit, CORE impact, and ethical hackers as tools



### 10.2.2 Common Vulnerability Scoring System (CVSS)

#### 10.2.2.1 CVSS Overview

# CVSS Overview

The Common Vulnerability Scoring System (CVSS) is a risk assessment designed to convey the common attributes and severity of vulnerabilities in computer hardware and software systems. The third revision, CVSS 3.0, is a vendor-neutral, industry standard, open framework for weighting the risks of a vulnerability using a variety of metrics. These weights combine to provide a score of the risk inherent in a vulnerability. The numeric score can be used to determine the urgency of the vulnerability, and the priority of addressing it. The benefits of the CVSS can be summarized as follows:

- It provides standardized vulnerability scores that should be meaningful across organizations.

- It provides an open framework with the meaning of each metric openly available to all users.

- It helps prioritize risk in a way that is meaningful to individual organizations.

The Forum of Incident Response and Security Teams (FIRST) has been designated as the custodian of the CVSS to promote its adoption globally. Version 3.0 was under development for 3 years, and Cisco and other industry partners contributed to the standard. The figure displays the [specification page](https://www.first.org/cvss/specification-document) for the CVSS at the FIRST website.

<iframe id="media" title="interactive graphic" aria-label="interactive graphic" aria-describedby="media-description" src="https://static-course-assets.s3.amazonaws.com/CyberOps11/en/course/module10/10.2.2.1/media/index.html" style="border: none; display: block; width: 680px; height: 490.4px;"></iframe>

Figure shows part of the CVSS web site page.



#### 10.2.2.2 CVSS Metric Groups

Before performing a CVSS assessment, it is important to know key terms that are used in the assessment instrument.

Many of the metrics address the role of what the CVSS calls an authority. An authority is a computer entity, such as a database, operating system, or virtual sandbox, which grants and manages access and privileges to users.

As shown in the figure, the CVSS uses three groups of metrics to assess vulnerability:

**Base Metric Group**

This represents the characteristics of a vulnerability that are constant over time and across contexts. It has two classes of metrics:

- **Exploitability** - These are features of the exploit such as the vector, complexity, and user interaction required by the exploit.

- **Impact metrics** - The impacts of the exploit are rooted in the CIA triad of confidentiality, integrity, and availability.



**Temporal Metric Group**

This measures the characteristics of a vulnerability that may change over time, but not across user environments. Over time, the severity of a vulnerability will change as it is detected and measures to counter it are developed. The severity of a new vulnerability may be high, but will decrease as patches, signatures, and other countermeasures are developed.



**Environmental Metric Group**

This measures the aspects of a vulnerability that are rooted in a specific organization’s environment. These metrics help to guide consequences within an organization and also allow adjustment of metrics that are less relevant to what an organization does.

<iframe id="media" title="interactive graphic" aria-label="interactive graphic" aria-describedby="media-description" src="https://static-course-assets.s3.amazonaws.com/CyberOps11/en/course/module10/10.2.2.2/media/index.html" style="border: none; display: block; width: 680px; height: 490.4px;"></iframe>

Figure shows the three main CVSS metric groups – base metric group, temporal metric group, and environmental metric group. The base metric group is made up of 2 columns labeled exploitability metrics and impact metrics. In the exploitability metrics column are attack vector, attack complexity, privileges required, and user interaction. In the impact metrics column are confidentiality impact, integrity impact, and availability impact. A box labeled scope is in the center of both columns. In the temporal metric group there are 3 boxes labeled exploit code maturity, remediation level, and report confidence. In the environmental metric group there are the modified base metrics of confidentiality requirement, integrity requirement, and availability requirement.





#### 10.2.2.3 CVSS Base Metric Group

The Base Metric Group Exploitability metrics include the following criteria:

- **Attack vector** – This is a metric that reflects the proximity of the threat actor to the vulnerable component. The more remote the threat actor is to the component, the higher the severity. Threat actors close to your network or inside your network are easier to detect and mitigate.

- **Attack complexity** – This is a metric that expresses the number of components, software, hardware, or networks, that are beyond the attacker’s control and that must be present in order for a vulnerability to be successfully exploited.

- **Privileges required** – This is a metric that captures the level of access that is required for a successful exploit of the vulnerability.

- **User interaction** - This metric expresses the presence or absence of the requirement for user interaction in order for an exploit to be successful.

- **Scope** – This metric expresses whether multiple authorities must be involved in an exploit. This is expressed as whether the initial authority changes to a second authority during the exploit.

The Base Metric Group Impact metrics increase with the degree or consequence of loss due to the impacted component. Impact metric components include:

- **Confidentiality Impact** – This is a metric that measures the impact to confidentiality due to a successfully exploited vulnerability. Confidentiality refers to the limiting of access to only authorized users.

- **Integrity Impact** – This is a metric that measures the impact to integrity due to a successfully exploited vulnerability. Integrity refers to the trustworthiness and authenticity of information.

- **Availability Impact** – This is a metric that measures the impact to availability due to a successfully exploited vulnerability. Availability refers to the accessibility of information and network resources. Attacks that consume network bandwidth, processor cycles, or disk space all impact the availability.



<iframe id="media" title="interactive graphic" aria-label="interactive graphic" aria-describedby="media-description" src="https://static-course-assets.s3.amazonaws.com/CyberOps11/en/course/module10/10.2.2.3/media/index.html" style="border: none; display: block; width: 680px; height: 490.4px;"></iframe>

Figure has the same CVSS metric groups figure as before with the base metric group highlighted.

#### 10.2.2.4 The CVSS Process

The CVSS Base Metrics Group is designed as a way to assess security vulnerabilities found in software and hardware systems. It describes the severity of a vulnerability based on the characteristics of a successful exploit of the vulnerability. The other metric groups modify the base severity score by accounting for how the base severity rating is affected by time and environmental factors.

The CVSS process uses a tool called the CVSS v3.0 Calculator, shown in Figure 1. The calculator is similar to a questionnaire in which choices are made that describe the vulnerability for each metric group. After all choices are made, a score is generated. Pop-up text that offers an explanation for each metric and metric value are displayed by hovering a mouse over each. Choices are made by choosing one of the values for the metric. Only one choice can be made per metric.

Click [here](https://www.first.org/cvss/calculator/3.0) to explore the CVSS calculator.

A detailed user guide that defines metric criteria, examples of assessments of common vulnerabilities, and the relationship of metric values to the final score is available to support the process.

After the Base Metric group is completed, the numeric severity rating is displayed, as shown in Figure 2. A vector string is also created that summarizes the choices made. If other metric groups are completed, those values are appended to the vector string. The string consists of the initial(s) for the metric, and an abbreviated value for the selected metric value separated by a colon. The metric-value pairs are separated by slashes. An example vector for the Base Metric group is shown in the Figure 3. The vector strings allow the results of the assessment to be easily shared and compared.

In order for a score to be calculated for the Temporal or Environmental metric groups, the Base Metric group must first be completed. The Temporal and Environmental metric values then modify the Base Metric results to provide an overall score. The interaction of the scores for the metric groups is shown in Figure 4.



![image-20200430161538899](Chapter%2010%20Endpoint%20Security%20and%20Analysis/image-20200430161538899.png)

Figure 1 is the web page containing the CVSS version 3 point 0 calculator. The sections shown for the base score include attack vector, attack complexity, privileges required, user interaction, scope, confidentiality, integrity, and availability. Figure 2 shows a score of 3 point 8 low with the attack vector network option selected and adjacent, local, and physical options deselected. In the attack complexity section, the low option is selected and the high section is not selected. In the privileges required section the high option is selected with none and low deselected. In the user interaction section, the none option is selected and required is not selected. In the scope section, the unchanged option is selected with changed deselected. The confidentiality and integrity sections have low selected and none and high deselected. In the availability section, the none option is selected with low and high options deselected. Figure 3 shows the vector string of C V S S : 3 point 0 / A V : N / A C : L / P R : H / U I : N / S : U / C : L / I : L / A : N. A tabled labeled key has four columns labeled metric name, initials possible values and values. The first row is attack vector initials of A V, possible values of N A L or P, and values of N = network A = adjacent L = local P = physical. The second row is attack complexity initials AC possible values L or H Values L = low H = high. Third row is privileges required initials PR possible values N L H where N = none L = low and H = high. Fourth row is user interaction initials U I possible values of N or R where N = none and R = required. The next row is scope with initials of S possible values of U C where U = unchanged and C = changed. The last three rows are confidentiality impact, integrity impact, and availability impact. All three rows have the possible values of H, L, or N where H = high, L = low and N = None. The initial for confidentiality impact is C, integrity impact I, and availability impact A. A second table of vector values has the metric name column and the values column. In the first row is attack vector, A V with a value of Network. The second row of attack complexity A C value is low. The privileges required P R row value is high. The user interaction U I row the value is None. The Scope S value is unchanged. The confidentiality impact C value is low. The integrity impact I value is low. The availability impact A value is none. Figure 4 show the metrics for the base metric group is set by vendor once set doesn’t change feeding into the base formula cloud. Metrics for the temporal metric group are set by vendor and once set, changes with time. These metrics flow into the Temp formula cloud. The metrics for the environmental metric group are optionally set by end users and these metrics flow into the E N V period formula. The Base formula could feeds into the base score which also feeds into the Temp formula cloud. The tem formula cloud outputs to a temporarily adjusted score which is input into the E n v period formula. That cloud feeds into an environmentally adjusted score. This graphic source is w w w dot first dot org.



10.2.2.5 CVSS Reports

The ranges of scores and the corresponding qualitative meaning is shown in the figure. Frequently, the Base and Temporal metric group scores will be supplied to customers by the application or security vendor in whose product the vulnerability has been discovered. The affected organization completes the environmental metric group to tailor the vendor-supplied scoring to the local context.

The resulting score serves to guide the affected organization in the allocation of resources to address the vulnerability. The higher the severity rating, the greater the potential impact of an exploit and the greater the urgency in addressing the vulnerability. While not as precise as the numeric CVSS scores, the qualitative labels are very useful for communicating with stakeholders who are unable to relate to the numeric scores.

In general, any vulnerability that exceeds 3.9 should be addressed. The higher the rating level, the greater the urgency for remediation.

![image-20200430161655645](Chapter%2010%20Endpoint%20Security%20and%20Analysis/image-20200430161655645.png)

Figure is a table for CVSS qualitative scores for ranges. The table is 2 columns labeled rating and CVSS score. In a rating of none the CVSS score is 0. In the rating of low, the score is 0 point 1 to 3 point 9. A rating of medium has a score of 4 point 0 to 6 point 9. A rating of higher is a score of 7 point 0 to 8 point 9. A rating of critical is a score of 9 to 10.



#### 10.2.2.6 Other Vulnerability Information Sources

There are other important vulnerability information sources. These work together with the CVSS to provide a comprehensive assessment of vulnerability severity. There are two systems that operate in the United States:

**Common Vulnerabilities and Exposures (CVE)**

This is a dictionary of common names, in the form of CVE identifiers, for known cybersecurity vulnerabilities. The CVE identifier provides a standard way to research a reference to vulnerabilities. When a vulnerability has been identified, CVE identifiers can be used to access fixes. In addition, threat intelligence services use CVE identifiers, and they appear in various security system logs. The CVE Details website provides a linkage between CVSS scores and CVE information. It allows browsing of CVE vulnerability records by CVSS severity rating.

Click [here](http://cve.mitre.org/index.html) for more information on CVE (Figure 1). Click [here](https://www.cvedetails.com/cvss-score-distribution.php) to explore the linkages between CVE and CVSS.



**National Vulnerability Database (NVD)**

This utilizes CVE identifiers and supplies additional information on vulnerabilities such as CVSS threat scores, technical details, affected entities, and resources for further investigation. The database was created and is maintained by the U.S. government National Institute of Standards and Technology (NIST) agency.

Click [here](http://nvd.nist.gov/) for more information on NVD (Figure 2).

Figure 3 illustrates an example of the NVD CVSS page for CVE-2016-0051, the WebDAV Elevation of Privilege Vulnerability.

<iframe id="media" title="interactive graphic" aria-label="interactive graphic" aria-describedby="media-description" src="https://static-course-assets.s3.amazonaws.com/CyberOps11/en/course/module10/10.2.2.6/media/index.html" style="border: none; display: block; width: 680px; height: 490.4px;"></iframe>

Figure 1 shows the web page for C V e dot m I t r e dot org. Figure 2 shows the web site for h t t p s : / / n v d dot n I s t dot gov. Figure 3 shows the NVD web site with the vulnerability metrics using the CVSS v 3 calculator.



### 10.2.3 Compliance Frameworks

#### 10.2.3.1 Compliance Regulations

Recent history is full of instances in which sensitive information has been lost to threat actors. Recent security breaches at large retailers have resulted in the loss of personally identifiable information for millions of people. Corporations have lost valuable intellectual property which has resulted in the loss of millions of dollars in revenue. In addition, security breaches have resulted in the loss of sensitive information related to national security.

To prevent similar losses, a number of security compliance regulations have emerged. The regulations offer a framework for practices that enhance information security while also stipulating incidence response actions and penalties for failure to comply. Organizations can verify compliance through the process of compliance assessment and audit. Assessments verify compliance or non-compliance for informational purposes. Audits also verify compliance but can result in consequences, such as financial penalties or loss of business opportunity.

This topic will discuss and differentiate the important and far reaching compliance regulations shown in the figure.

<iframe id="media" title="interactive graphic" aria-label="interactive graphic" aria-describedby="media-description" src="https://static-course-assets.s3.amazonaws.com/CyberOps11/en/course/module10/10.2.3.1/media/index.html" style="border: none; display: block; width: 680px; height: 490px;"></iframe>

The figure shows a circle labeled U S regulations that impact cybersecurity. The circle has five other circles around it labeled FIS MA, SOX, HIP A A, P C I – D S S and G L B A.

#### 10.2.3.2 Overview of Regulatory Standards

There are five major regulatory compliance regulations.

**Payment Card Industry Data Security Standard (PCI-DSS)**

PCI-DSS is a proprietary, non-governmental standard maintained by the Payment Card Industry Security Standards Council which was formed by the five major credit card companies. The standard specifies requirements for the secure handling of customer credit card data by merchants and service providers. It dictates standards for how credit card information is to be stored and transmitted, and when customer information must be removed from storage systems.

The PCI-DSS applies to any entity that stores, processes, and/or transmits data about credit cardholders. As shown in the figure, cardholder data includes:

-   Cardholder name
-   Primary account number (PAN)

-   Expiration date

-   Service Code (part of the magnetic strip)

-   Card Verification Code (CVC), Card Verification Value (CVV), Card Security Code (CSC)

-   Card Identification Code (CID)

-   Sensitive Data stored on magnetic strip or chip

Many network management platforms include compliance reporting in their security-management related functionalities.

Click [here](https://www.pcisecuritystandards.org/pci_security/) for more information on PCI-DSS.

**Federal Information Security Management Act of 2002 (FISMA)**

FISMA was established by NIST by an act of the US Congress. FISMA regulations specify security standards for U.S. government systems and contractors to the U.S. government. FISMA also provides standards for the categorization of information and information systems according to a range of risk levels, and requirements for the security of information in each risk category.

Click [here](https://www.nist.gov/programs-projects/federal-information-security-management-act-fisma-implementation-project) for more information on FISMA.

**Sarbanes-Oxley Act of 2002 (SOX)**

SOX set new or expanded requirements for all U.S. public company boards, management, and public accounting firms regarding the way in which corporations control and disclose financial information. The act is designed to ensure the integrity of financial practices and reporting. It also dictates controls for access to financial information and information systems.

Click [here](http://legcounsel.house.gov/Comps/Sarbanes-oxley Act Of 2002.pdf) for more information on SOX.

**Gramm-Leach-Bliley Act (GLBA)**

GLBA established that financial institutions must ensure the security and confidentiality of customer information; protect against any anticipated threats or hazards to the security or integrity of such information; and protect against unauthorized access to or use of customer information that could result in substantial harm or inconvenience to any customer. Financial institutions are considered to be banks, brokerages, insurance companies, etc.

Click [here](https://www.ftc.gov/tips-advice/business-center/privacy-and-security/gramm-leach-bliley-act) for more information on GLBA.

**Health Insurance Portability and Accountability Act (HIPAA)**

HIPAA requires that all patient personally identifiable healthcare information be stored, maintained, and transmitted in ways that ensure patient privacy and confidentiality. HIPAA stipulates controlled access policies and data encryption of patient information. HIPAA specifies detailed administrative safeguards and implementation specifications in the areas of security management, workforce security, and information access management, among others.

Click [here](https://www.hhs.gov/hipaa/) for more information on HIPAA.

**Note**: Although the scope of this course and the CCNA Cybersecurity Operations certification are limited to United States regulations, click [here](https://ec.europa.eu/digital-single-market/en/cybersecurity) to learn more about European Union cybersecurity regulations.

<iframe id="media" title="interactive graphic" aria-label="interactive graphic" aria-describedby="media-description" src="https://static-course-assets.s3.amazonaws.com/CyberOps11/en/course/module10/10.2.3.2/media/index.html" style="border: none; display: block; width: 680px; height: 490px;"></iframe>

The figure shows a credit card with a chip on it. The credit card number is labeled PAN. The small number below it which is the first four digits repeated is labeled C I D. The words labeled cardholder are shown as cardholder name. The expiration date has an arrow to it. On the back of the card, the section labeled magnetic strip points to a blackened horizontal box that is at the top of the card. A box with 3 numbers is labeled C V V.

#### 10.2.3.3 Activity - Identify Regulatory Standards



### 10.2.4 Secure Device Management

#### 10.2.4.1 Risk Management

Risk management involves the selection and specification of security controls for an organization. It is part of an ongoing organization-wide information security program that involves the management of the risk to the organization or to individuals associated with the operation of a system.

Risk management is an ongoing, multi-step, cyclical process, as shown in the figure.

Risk is determined as the relationship between threat, vulnerability, and the nature of the organization. It first involves answering the following questions as part of a risk assessment:

-   Who are the threat actors who want to attack us?

-   What vulnerabilities can threat actors exploit?

-   How would we be affected by attacks?

-   What is the likelihood that different attacks will occur?

NIST Special Publication 800-30 describes risk assessment as:

*…the process of identifying, estimating, and prioritizing information security risks. Assessing risk requires the careful analysis of threat and vulnerability information to determine the extent to which circumstances or events could adversely impact an organization and the likelihood that such circumstances or events will occur.*

Click [here](http://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-30r1.pdf) to download the full NIST Special Publication 800-30.

A mandatory activity in risk assessment is the identification of threats and vulnerabilities and the matching of threats with vulnerabilities in what is often called threat-vulnerability (T-V) pairing. The T-V pairs can then be used as a baseline to indicate risk before security controls are implemented. This baseline can then be compared to ongoing risk assessments as a means of evaluating risk management effectiveness. This part of risk assessment is referred to as determining the inherent risk profile of an organization.

After the risks are identified, they may be scored or weighted as a way of prioritizing risk reduction strategies. For example, vulnerabilities that are found to have corresponded with multiple threats can receive higher ratings. In addition, T-V pairs that map to the greatest institutional impact will also receive higher weightings.

There are four potential ways to respond to risks that have been identified, based on their weightings or scores:

-   **Risk avoidance** - Stop performing the activities that create risk. It is possible that as a result of a risk assessment, it is determined that the risk involved in an activity outweighs the benefit of the activity to the organization. If this is found to be true, then it may be determined that the activity should be discontinued.

-   **Risk reduction** - Decrease the risk by taking measures to reduce vulnerability. This involves implementing management approaches discussed earlier in this chapter. For example, if an organization uses server operating systems that are frequently targeted by threat actors, risk can be reduced through ensuring that the servers are patched as soon as vulnerabilities have been addressed.

-   **Risk sharing** - Shift some of the risk to other parties. For example, a risk-sharing technique might be to outsource some aspects of security operations to third-parties. Hiring a security as a service (SECaaS) CSIRT to perform security monitoring is an example. Another example is to buy insurance that will help to mitigate some of the financial losses due to a security incident.

-   **Risk retention** - Accept the risk and its consequences. This strategy is acceptable for risks that have low potential impact and relatively high cost of mitigation or reduction. Other risks that may be retained are those that are so dramatic that they cannot realistically be avoided, reduced, or shared.



<iframe id="media" title="interactive graphic" aria-label="interactive graphic" aria-describedby="media-description" src="https://static-course-assets.s3.amazonaws.com/CyberOps11/en/course/module10/10.2.4.1/media/index.html" style="border: none; display: block; width: 680px; height: 490px;"></iframe>

Figure shows risk management circles with each circle pointing to the next circle. The circle at the top is risk identification identify assets, vulnerabilities, threats. The next circle is risk assessment score, weigh, prioritize risks. The next circle is risk response planning to determine risk response, plan actions. The next circle is response implementation to implement risk response. The last circle is monitor and assess results to do continuous risk monitoring and response evaluation.

#### 10.2.4.2 Activity - Identify the Risk Response

#### 10.2.4.3 Vulnerability Management

According to NIST, vulnerability management is a security practice designed to proactively prevent the exploitation of IT vulnerabilities that exist within an organization. The expected result is to reduce the time and money spent dealing with vulnerabilities and the exploitation of those vulnerabilities. Proactively managing vulnerabilities of systems will reduce or eliminate the potential for exploitation, and involve considerably less time and effort than responding after an exploitation has occurred.

Vulnerability management requires a robust means of identifying vulnerabilities based on vendor security bulletins and other information systems such as CVE. Security personnel must be competent in assessing the impact, if any, of vulnerability information they have received. Solutions should be identified with effective means of implementing and assessing the unanticipated consequences of implemented solutions. Finally, the solution should be tested to verify that the vulnerability has been eliminated.

The steps in the Vulnerability Management Life Cycle, shown in the figure, are described below.

-   **Discover** - Inventory all assets across the network and identify host details, including operating systems and open services, to identify vulnerabilities. Develop a network baseline. Identify security vulnerabilities on a regular automated schedule.

-   **Prioritize Assets** - Categorize assets into groups or business units, and assign a business value to asset groups based on their criticality to business operations.

-   **Assess** - Determine a baseline risk profile to eliminate risks based on asset criticality, vulnerability, threats, and asset classification.

-   **Report** - Measure the level of business risk associated with your assets according to your security policies. Document a security plan, monitor suspicious activity, and describe known vulnerabilities.

-   **Remediate** - Prioritize according to business risk and address vulnerabilities in order of risk.

-   **Verify** - Verify that threats have been eliminated through follow-up audits.



<iframe id="media" title="interactive graphic" aria-label="interactive graphic" aria-describedby="media-description" src="https://static-course-assets.s3.amazonaws.com/CyberOps11/en/course/module10/10.2.4.3/media/index.html" style="border: none; display: block; width: 680px; height: 490px;"></iframe>

The figure is a set of 6 circles that are part of the vulnerability management life cycle. Each circle points to the next circle. The circle at the top is labeled discover which points to prioritize assets, which points to assess, which points to report, which points to remediate, which points to verify, which points to the beginning circle of discover.



#### 10.2.4.4 Asset Management

Asset management involves the implementation of systems that track the location and configuration of networked devices and software across an enterprise. As part of any security management plan, organizations must know what equipment accesses the network, where that equipment is within the enterprise and logically on the network, and what software and data those systems store or can access. Asset management not only tracks corporate assets and other authorized devices, but also can be used to identify devices that are not authorized on the network.

NIST specifies in publication NISTIR 8011 Volume 2, the detailed records that should be kept for each relevant device. NIST describes potential techniques and tools for operationalizing an asset management process:

-   Automated discovery and inventory of the actual state of devices

-   Articulation of the desired state for those devices using policies, plans, and procedures in the organization’s information security plan

-   Identification of non-compliant authorized assets

-   Remediation or acceptance of device state, possible iteration of desired state definition

-   Repeat the process at regular intervals, or ongoing

The figure provides an overview of this process.

Click [here](http://nvlpubs.nist.gov/nistpubs/ir/2017/NIST.IR.8011-2.pdf) to download the NISTIR 8011 Volume 2 document.

<iframe id="media" title="interactive graphic" aria-label="interactive graphic" aria-describedby="media-description" src="https://static-course-assets.s3.amazonaws.com/CyberOps11/en/course/module10/10.2.4.4/media/index.html" style="border: none; display: block; width: 680px; height: 490px;"></iframe>

Figure is An operational concept for asset management with two textboxes at the top labeled collect current state of all authorized devices and specify desired state of devices. Each of these textboxes point to another textbox labeled find discrepancies in device state. This textbox points to another textbox labeled correct discrepancies, accept risk, or update policies. This last text box has arrows pointing back to each of the top two textboxes.



#### 10.2.4.5 Mobile Device Management

Mobile device management (MDM), especially in the age of BYOD, presents special challenges to asset management. Mobile devices cannot be physically controlled on the premises of an organization. They can be lost, stolen, or tampered with, putting data and network access at risk. Part of an MDM plan is taking action when devices leave the custody of the responsible party. Measures that can be taken include disabling the lost device, encrypting the data on the device, and enhancing device access with more robust authentication measures.

Due to the diversity of mobile devices it is possible that some devices that will be used on the network are inherently less secure than others. Network administrators should assume that all mobile devices are untrusted until they have been properly secured by the organization.

MDM systems, such as Cisco Meraki Systems Manager, shown in the figure, allow security personnel to configure, monitor and update a very diverse set of mobile clients from the cloud.

Click [here](https://www.netacadadvantage.com/prepare-for-work-blog/-/blogs/cisco-meraki-cloud-networking-webinar) to learn more about Cisco Meraki, watch some video demonstrations, and access a self-enroll course.

<iframe id="media" title="interactive graphic" aria-label="interactive graphic" aria-describedby="media-description" src="https://static-course-assets.s3.amazonaws.com/CyberOps11/en/course/module10/10.2.4.5/media/index.html" style="border: none; display: block; width: 680px; height: 490px;"></iframe>

The figure shows the Cisco Meraki software.



#### 10.2.4.6 Configuration Management

Configuration management addresses the inventory and control of hardware and software configurations of systems. Secure device configurations reduce security risk. For example, an organization provides many computers and laptops to its workers. This enlarges the attack surface for the organization, because each system may be vulnerable to exploits. To manage this, the organization may create baseline software images and hardware configurations for each type of machine. These images may include a basic package of required software, endpoint security software, and customized security policies that control user access to aspects of the system configuration that could be made vulnerable. Hardware configurations may specify the permitted types of network interfaces and the permitted types of external storage.

Configuration management extends to the software and hardware configuration of networking devices and servers as well. As defined by NIST, configuration management:

*Comprises a collection of activities focused on establishing and maintaining the integrity of products and systems, through control of the processes for initializing, changing, and monitoring the configurations of those products and systems.*

Click [here](http://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-128.pdf) to download the complete NIST Special Publication 800-128 on configuration management for network security.

For internetworking devices, software tools are available that will backup configurations, detect changes in configuration files, and enable bulk change of configurations across a number of devices.

With the advent of cloud data centers and virtualization, management of numerous servers presents special challenges. Configuration management tools like Puppet, Chef, Ansible, and SaltStack were developed to allow efficient management of servers that enable cloud-based computing.

<iframe id="media" title="interactive graphic" aria-label="interactive graphic" aria-describedby="media-description" src="https://static-course-assets.s3.amazonaws.com/CyberOps11/en/course/module10/10.2.4.6/media/index.html" style="border: none; display: block; width: 680px; height: 490px;"></iframe>

The figure shows the logos for Puppet, Chef, Ansible, and SaltStack.



#### 10.2.4.7 Enterprise Patch Management

Patch management is related to vulnerability management. Vulnerabilities frequently appear in critical client, server, and networking device operating systems and firmware. Application software, especially Internet applications and frameworks like Acrobat, Flash, and Java, also are frequently discovered to have vulnerabilities. Patch management involves all aspects of software patching, including identifying required patches, acquiring, distributing, installing, and verifying that the patch is installed on all required systems. Installing patches is frequently the most effective way to mitigate software vulnerabilities. Sometimes, they are the only way to do so.

Patch management is required by some security compliance regulations, such as SOX and HIPAA. Failure to implement patches in a systematic and timely manner could result in audit failure and penalties for non-compliance. Patch management depends on asset management data to identify systems that are running software that requires patching. The figure shows a screen shot of the [SolarWinds Patch Manager](http://www.solarwinds.com/patch-manager) tool.

<iframe id="media" title="interactive graphic" aria-label="interactive graphic" aria-describedby="media-description" src="https://static-course-assets.s3.amazonaws.com/CyberOps11/en/course/module10/10.2.4.7/media/index.html" style="border: none; display: block; width: 680px; height: 490px;"></iframe>

The figure is a patch manager summary showing nodes managed by W S U S servers, operating system overview graph, desktop node health overview graph, All patches section, and top 10 patches missing section.



#### 10.2.4.8 Patch Management Techniques

At the enterprise level, patch management is most efficiently run from a patch management system. Most patch management systems incorporate a client-centralized server architecture, as do other end point-related security systems. There are three patch management technologies.

-   **Agent-based** – This requires a software agent to be running on each host to be patched. The agent reports whether vulnerable software is installed on the host. The agent communicates with the patch management server, determines if patches exist that require installation, and installs the patches. The agent runs with sufficient privileges to allow it to install the patches. Agent-based approaches are the preferred means of patching mobile devices. (Figure 1)

-   **Agentless scanning** - Patch management servers scan the network for devices that require patching. The server determines which patches are required and installs those patches on the clients. Only devices that are on scanned network segments can be patched in this way. This can be a problem for mobile devices. (Figure 2)

-   **Passive network monitoring** - Devices requiring patching are identified through the monitoring of traffic on the network. This approach is only effective for software that includes version information in its network traffic. (Figure 3)



<iframe id="media" title="interactive graphic" aria-label="interactive graphic" aria-describedby="media-description" src="https://static-course-assets.s3.amazonaws.com/CyberOps11/en/course/module10/10.2.4.8/media/index.html" style="border: none; display: block; width: 680px; height: 490px;"></iframe>

Figure 1 shows agent-based with two clouds labeled vendor 1 patches and vendor 2 patches. Each cloud has an arrow pointing to a box that has a PC labeled caching device in it and the words security / I T team patch evaluation and testing in the bottom. An arrow goes from this box to the patch management server. 2 PCs, a laptop, and a mobile device have an agent installed and arrows pointing to and from the patch management server and each of these devices. The words host agent reports on patch status, server deploys and installs as required is bellows the devices. Figure 2 shows agentless scanning with the same topology as agent-based, but the arrows are different. In this one all of the arrows are away from the patch management server pointing toward the four devices. The words are server detects patch status and installs as required. Figure 3 is the same topology except the patch management server connects to a switch as well as all of the other devices to the same switch. There is only one arrow that goes from the patch management server into the switch. The words at the bottom are Server monitors and tracks software version from network traffic, patches deployed as required.



#### 10.2.4.9 Activity - Identify Device Management Activities

### 10.2.5 Information Security Management Systems

#### 10.2.5.1 Security Management Systems

An Information Security Management System (ISMS) consists of a management framework through which an organization identifies, analyzes, and addresses information security risks. ISMSs are not based in servers or security devices. Instead, an ISMS consists of a set of practices that are systematically applied by an organization to ensure continuous improvement in information security. ISMSs provide conceptual models that guide organizations in planning, implementing, governing, and evaluating information security programs.

ISMSs are a natural extension of the use of popular business models, such as Total Quality Management (TQM) and Control Objectives for Information and Related Technologies (COBIT), into the realm of cybersecurity.

An ISMS is a systematic, multi-layered approach to cybersecurity. The approach includes people, processes, technologies, and the cultures in which they interact in a process of risk management.

An ISMS often incorporates the “plan-do-check-act” framework, known as the Deming cycle, from TQM. It is seen as an elaboration on the process component of the People-Process-Technology-Culture model of organizational capability, as shown in the figure.

<iframe id="media" title="interactive graphic" aria-label="interactive graphic" aria-describedby="media-description" src="https://static-course-assets.s3.amazonaws.com/CyberOps11/en/course/module10/10.2.5.1/media/index.html" style="border: none; display: block; width: 680px; height: 490px;"></iframe>

Figure show one box up top labeled people with bidirectional arrows going to two other boxes labeled culture and process. Each of these boxes have bidirectional arrows pointing to a box at the bottom labeled technology. They also have bidirectional arrows pointing to a center box labeled capability. A straight line connects from the capability center box to the people box on top and the technology box on the bottom. The process box has a breakout graphic showing a circle labeled develop improve maintain I S M S. Around this circle are 4 smaller circles. Each circle has an arrow pointing to the next circle. The circle up top is plan which points to do which points to check which points to act which points back to the original circle up top labeled plan.



#### 10.2.5.2 ISO-27001

ISO is the International Organization for Standardization. ISO’s voluntary standards are internationally accepted and facilitate business conducted between nations.

ISO partnered with the International Electrotechnical Commission (IEC) to develop the ISO/IEC 27000 family of specifications for ISMSs, as shown in Figure 1.

The ISO 27001 Certification is a global, industry-wide specification for an ISMS. Figure 2 illustrates the relationship of actions stipulated by the standard with the plan-do-check-act cycle. Certification means an organization’s security policies and procedures have been independently verified to provide a systematic and proactive approach for effectively managing security risks to confidential customer information.

<iframe id="media" title="interactive graphic" aria-label="interactive graphic" aria-describedby="media-description" src="https://static-course-assets.s3.amazonaws.com/CyberOps11/en/course/module10/10.2.5.2/media/index.html" style="border: none; display: block; width: 680px; height: 490px;"></iframe>

Figure 1 is a table of the I S O / I E C 27 thousand family of standards. There are 2 columns standard and title / description. The first row is I S O / I E C 27 thousand information security management systems overview and vocabulary introduction to the standards family, overview of I S M S, essential vocabulary. The second row is I S O I E C 27 0 0 1 information security management systems requirements provides an overview of I S M S and the essentials of I S M S processes and procedures. The third row is I S O I E C 27 0 0 3 information security management system implementation guidance critical factors necessary for successful design and implementation of I s M S. All specification up to the production of implementation plans. The next to last row is I S O / I e C 27 0 0 4 information security management measurement discussion of metrics and measurement procedures to assess effectiveness of I S M S implementation. The last row is I S O / I e c 27 0 0 5 information security risk management supports the implementation of I S M S based on a risk centered management approach. Figure 2 is the I S 0 2 7 0 0 1 I S M S plan Do Act Check cycle. These are the same 4 circles shown previously. The plan circle has the following bullets understand relevant business objectives, define scope of activities, access and manage support, assess and define risk, and perform asset management and vulnerability assessment. The do circle has 3 bullets of create and implement risk management plan, establish and enforce risk management policies and procedures, and train personnel, allocate resources. The check circle also has 3 bullets of monitor implementation, compile reports, and support external certification audit. The act circle has 4 bullets of continually audit processes, continual process improvement, take corrective action, and take preventive action.



#### 10.2.5.3 NIST Cybersecurity Framework

NIST is very effective in the area of cybersecurity, as we have seen in this chapter. More NIST standards will be discussed later in the course.

NIST has developed the Cybersecurity Framework, which, like ISO/IEC 27000, is a set of standards designed to integrate existing standards, guidelines, and practices to help better manage and reduce cybersecurity risk. The framework was first issued in February, 2014 and continues to undergo development.

The framework consists of a set of activities suggested to achieve specific cybersecurity outcomes, and references examples of guidance to achieve those outcomes. The core functions, defined in Figure 1, are split into major categories and subcategories. The major categories provide an understanding of the types of activities related to each function, as shown in Figure 2.

Organizations of many types are using the Framework in a number of ways. Many have found it helpful in raising awareness and communicating with stakeholders within their organization, including executive leadership. The Framework is also improving communications across organizations, allowing cybersecurity expectations to be shared with business partners, suppliers, and among sectors. By mapping the Framework to current cybersecurity management approaches, organizations are learning and showing how they match up with the Framework's standards, guidelines, and best practices. Some parties are using the Framework to reconcile internal policy with legislation, regulation, and industry best practice. The Framework also is being used as a strategic planning tool to assess risks and current practices.

Click [here](https://www.nist.gov/cyberframework) to learn more about the NIST Cybersecurity Framework.

<iframe id="media" title="interactive graphic" aria-label="interactive graphic" aria-describedby="media-description" src="https://static-course-assets.s3.amazonaws.com/CyberOps11/en/course/module10/10.2.5.3/media/index.html" style="border: none; display: block; width: 680px; height: 490px;"></iframe>

Figure 1 is a table of NIST cybersecurity framework core and functions. The table has 2 columns labeled core function and description. The identify function is to develop the organizational understanding to manage cybersecurity risk to systems assets data and capabilities. The protect function is to develop and implement the appropriate safeguards to ensure delivery of critical infrastructure services. The detect function is to develop and implement the appropriate activities to identify the occurrence of a cybersecurity event. The respond function is to develop and implement the appropriate activities to take action regarding a detected cybersecurity event. The recover function is to develop and implement the appropriate activities to maintain plans for resilience and to restore any capabilities or services that were impaired due to a cybersecurity event. Figure 2 is also a 2 column table with the core function shown with activities. The identify core function has the activities of asset management business environment risk assessment and risk management strategy. The protect function has the activities of access control, data security, information protection processes and procedures, maintenance, and protective technology. The detect function has the 3 activities of anomalies and events, security continuous monitoring, and detection processes. The respond function has the 5 activities of response planning, communications, analysis, mitigation, and improvements. The recover function has 3 activities of recovery planning, improvements, and communications.



## 10.3 Summary

### 10.3.1 Conclusion

#### 10.3.1.1 Chapter 10: Endpoint Security and Analysis

# Chapter 10: Endpoint Security and Analysis

In this chapter, you learned how to investigate endpoint vulnerabilities and attacks. Antimalware for network devices and hosts provides a method for mitigating the impact of attacks. Host-based personal firewalls are standalone software programs that control traffic entering or leaving a computer. A host-based intrusion detection system (HIDS) is designed to protect hosts against known and unknown malware. A HIDS is a comprehensive security application that combines the functionalities of antimalware applications with firewall functionality. Host-based security solutions are essential to protecting the expanding attack surfaces.

Cybersecurity analysts and security experts use a variety of tools to perform endpoint vulnerability assessments. Network and device profiling provide a baseline that serves as a reference point for identifying deviations from normal operations. Similarly, server profiling is used to establish the accepted operating state of servers. Network security can be evaluated using a variety of tools and services including:

-   Risk analysis to evaluate the risk posed by vulnerabilities to a specific organization.

-   Vulnerability assessment, which uses software to scan Internet-facing servers and internal networks for various types of vulnerabilities.
-   Penetration testing, which uses authorized simulated attacks to test the strength of network security.

The Common Vulnerability Scoring System (CVSS) is a risk assessment designed to convey the common attributes and severity of vulnerabilities in computer hardware and software systems. The benefits of CVSS include:

-   Standardized vulnerability scores that should be meaningful across organizations

-   Open framework with the meaning of each metric openly available to all users

-   Prioritization of risk in a way that is meaningful to individual organizations

A number of security compliance regulations have emerged including:

-   **Federal Information Security Management Act of 2002 (FISMA)** – This provides security standards for U.S. government systems and contractors to the U.S. government.

-   **Sarbanes-Oxley Act of 2002 (SOX)** – This provides the requirements for the way in which U.S. corporations control and disclose financial information.

-   **Gramm-Leach-Bliley Act (GLBA)** – This states that financial institutions must secure customer information, protect against threats to customer information, and protect against unauthorized access to customer information.

-   **Health Insurance Portability and Accountability Act (HIPAA)** – This requires that all patient personally identifiable healthcare information be stored, maintained, and transmitted in ways that ensure patient privacy and confidentiality.

-   **Payment Card Industry Data Security Standard (PCI-DSS)** – This is a proprietary, non-governmental standard for the secure handling of customer credit card data.

Risk management involves the selection and specification of security controls for an organization. There are four potential ways to respond to risks that have been identified, based on their weightings or scores:

-   Risk avoidance if it is determined that the activity should be discontinued.

-   Risk reduction by implementing management approaches to reduce vulnerability.

-   Risk sharing to shift risk by outsourcing some aspects of security operations to third-parties.

-   Risk retention and acceptance for risks that have low potential impact and/or relatively high cost of mitigation or reduction.

Risk management tools include:

-   Vulnerability management

-   Asset management

-   Mobile device management
-   Configuration management

-   Enterprise patch management

Organizations can use an Information Security Management System (ISMS) to identify, analyze, and address information security risks. Standards for managing cybersecurity risk are available from ISO and NIST.

<iframe id="media" title="interactive graphic" aria-label="interactive graphic" aria-describedby="media-description" src="https://static-course-assets.s3.amazonaws.com/CyberOps11/en/course/module10/10.3.1.1/media/index.html" style="border: none; display: block; width: 680px; height: 490px;"></iframe>

The figure shows a collage with the words Summary chapter 10.