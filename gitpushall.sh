#!sh

echo "================================="
echo "= Create HTML Index of md Files ="
echo "================================="

#./Python/Scripts/19_md_manager/htmltags.py "" "C_1" "C_2" "SYTG_2_Linux" "Cybersecurity_2" "Database" "challenge" 
./Python/Scripts/19_md_manager/htmltags.py "" "4BHELS" "3AHITS" "2AHITS" "1AHITS" "2AHELS" "1CHELS"

echo "Publish to gitpages"
git add --all
git commit -m "upload $(date '+%d.%m.%y %H:%M')"
git push -u origin main

echo "FINISHED"
