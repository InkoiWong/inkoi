```
rm -rf   /Users/Shared/Jenkins/dev_app_buyer_ios

mkdir -p /Users/Shared/Jenkins/dev_app_buyer_ios

source ~/.zshrc

ssh-add ~/.ssh/fesco_id_rsa

git clone  git@gitlab.lvdatong.com:law/law_market_user_ios.git    "/Users/Shared/Jenkins/dev_app_buyer_ios"

cd /Users/Shared/Jenkins/dev_app_buyer_ios

git checkout -b dev origin/dev

cp -r deploy/dev/expect.sh LDTUser/

cp -r deploy/dev/Config.plist    LDTUser/LDTUser/Configuration/

cd LDTUser



chmod +x expect.sh

security unlock-keychain "-p"  "squall19861230"  /Users/huanggh/Library/Keychains/login.keychain


source ~/.bash_profile

#./expect.sh

mkdir fastlane

cp -r ../deploy/dev/fastlane/Fastfile ./fastlane/

fastlane beta

fir publish LDTUser.ipa  -T ba95b36517ee03a38d215558e7345d41 -V






```
