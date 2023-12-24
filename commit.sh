
echo '🤤ADDING FILES TO STAGING🤤'
git add .

echo '🤞👏FILES WILL GET COMMITED👏🤞'
git commit -am "chore: $1"

echo 'PUSHING TO GITHUB'
git push -u origin main

echo '🚀🚀🚀PUSHED TO GITHUB🚀🚀🚀'

# for name in "./src"/*; do
#     if [ -f "$name" ]; then
#         printf '%s is a file\n' "$name"
#     fi
# done
