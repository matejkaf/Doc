#!sh


echo "================================="
echo "= Create HTML Index of md Files ="
echo "================================="
./Python/Scripts/19_md_manager/htmltags.py "" "2AHITS" "2AHELS" "3BHELS" "1AHITS" "4AHELS" "5AHELS" "challenge"

echo "Publish to gitpages"
git add --all
git commit -m "upload $(date '+%d.%m.%y %H:%M')"
git push -u origin main

echo "FINISHED"
