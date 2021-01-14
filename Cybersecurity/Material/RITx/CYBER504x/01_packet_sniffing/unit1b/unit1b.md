### ACTIVITY: VIEWING DNS AND DHCP COMMUNICATIONS

*This activity is ungraded.*

*You must complete* [Viewing Network Data with Wireshark](https://courses.edx.org/courses/course-v1:RITx+CYBER504x+3T2018/jump_to_id/af99a11f64b3400883bc6f9f82e8fa87) *before attempting this activity.*

**Time:** This activity should take you 20 to 30 minutes to complete.

#### Goal

To use different Wireshark filters to view network traffic.

#### Instructions

Following these Demo Videos, mirror what I did to capture DHCP and DNS traffic using Wireshark:

- [DNS through Wireshark](https://courses.edx.org/courses/course-v1:RITx+CYBER504x+3T2018/jump_to_id/bdbe22427607407982b4e80e981872d4)

  - Filter auf dns

- [DHCP through Wireshark](https://courses.edx.org/courses/course-v1:RITx+CYBER504x+3T2018/jump_to_id/bdbe22427607407982b4e80e981872d4#c0b6501d368247dda79ffaf93a34379a)

  - Display filter auf bootp

  - DHCP release

    - Windows: `ipconfig /release`, `ipconfig /renew`

    - MacOS

      ```bash
      # Interface finden
      ifconfig
      ifconfig |grep inet
      
      # get current DHCP Data
      ipconfig getpacket en6
      
      # release and renew DHCP lease
      sudo ipconfig set en6 DHCP
      ```

      

Use these instruction and documentation links to learn how to use Wireshark’s filters:

- [Display filters](https://wiki.wireshark.org/DisplayFilters)

- [Capture filters](https://wiki.wireshark.org/CaptureFilters)

- [Wireshark 2.1 User’s Guide](https://www.wireshark.org/docs/wsug_html_chunked/)

- [Wireshark Manual Pages](https://www.wireshark.org/docs/man-pages/)

- - Manual page: [Wireshark Filters](https://www.wireshark.org/docs/man-pages/wireshark-filter.html)

