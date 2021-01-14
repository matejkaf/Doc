### ACTIVITY: RAINBOW TABLES WITH OPHCRACK

*This activity is ungraded.*

**Remember:** Be sure to watch this Demo video from this unit before trying this activity. Watching me do it first will help you understand each of the steps.

- [Rainbow Table Attacks with ophcrack](https://courses.edx.org/courses/course-v1:RITx+CYBER504x+3T2018/jump_to_id/b416d64cad9447e883d5ece3d00e7286#edd2fa56f3084bd089b3632c40667560)

**System:** There are modified instructions below for Windows 10 systems.

**Time:** This activity should take you approximately 20 minutes to complete.

#### Downloads

- [Ophcrack](http://ophcrack.sourceforge.net/); Click **Download ophcrack All Platforms**

- [Ophcrack Tables](http://ophcrack.sourceforge.net/tables.php)

- - Vista free (461MB)
  - Vista proba free (581MB)

#### Goal

To see how rainbow tables are formed.

#### Instructions

Now it’s time to use rainbow tables to crack passwords!

#### Install and launch Ophcrack

1. Click the download button for **Windows (portable)**.
2. Extract the ZIP and install the software.
3. In the uncompressed folder, select **x86** if you’re on a 32-bit machine or **x64** for 64 bit platforms.
4. Right click the *ophrack.exe* file and launch the program as an Administrator.
5. Go to the [ophcrack table download page](http://ophcrack.sourceforge.net/tables.php).
6. Read the descriptions next to each of the download buttons.
7. Download the first two Vista tables:
   **Vista free** (461MB)
   **Vista proba free** (581MB)
8. Extract the ZIP files so there is a regular folder for each.
9. In ophrack, click **Tables** at the top.
10. Click **Vista free**, and then click the **Install** button.
11. Browse to the extract *tables_vista_free* folder, and click the **Select Folder** button.
    You should see a green dot next to *Vista Free* in the Table Selection window in ophcrack.
12. Repeat the above steps to install the Vista probabilistic free table.
13. Click **OK**.

#### Watch rainbow tables being generated

1. Back in the main screen, you should see the two tables in the lower pane.
2. Click the **Load** button, and select **Local SAM with samdump2**. (Windows 10 systems will need to use [pwdump_7](http://www.tarasco.org/security/pwdump_7/) to dump the hashes and then click **Load** and select **PWDUMP file** instead)
3. You should see the user accounts and their corresponding hashes in the main pane.
4. Click the C**rack** button.
5. You can watch the progress by expanding Vista free and Vista pro in the lower pane, and eventually see the cracked passwords in the upper pane.

After you've finished, answer the **Check Your Work** questions.