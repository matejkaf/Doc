#!sh

echo "Create HTML Index of all md Files"
./Python/Scripts/19_md_manager/htmlall.py > index.html

echo "Create HTML Index of all md Files tagged 1AHITS"
./Python/Scripts/19_md_manager/htmltags.py 1AHITS > 1AHITS.html

echo "Publish to gitpages"
git add --all
git commit -m "upload"
git push -u origin main

echo "FINISHED"
