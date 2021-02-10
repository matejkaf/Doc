#!sh

echo "Create HTML Index of all md Files"
./Python/Scripts/19_md_manager/htmlall.py > index.html

echo "Create HTML Index of all tagged md Files"
./Python/Scripts/19_md_manager/htmltags.py 1AHITS > 1AHITS.html
./Python/Scripts/19_md_manager/htmltags.py 2AHITS > 2AHITS.html
./Python/Scripts/19_md_manager/htmltags.py 2AHELS > 2AHELS.html
./Python/Scripts/19_md_manager/htmltags.py 3BHELS > 3BHELS.html
./Python/Scripts/19_md_manager/htmltags.py 4AHELS > 4AHELS.html
./Python/Scripts/19_md_manager/htmltags.py 5AHELS > 5AHELS.html
./Python/Scripts/19_md_manager/htmltags.py challenge > challenge.html

echo "Publish to gitpages"
git add --all
git commit -m "upload $(date)"
git push -u origin main

echo "FINISHED"
