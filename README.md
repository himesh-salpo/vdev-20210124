### (1) git init
### (2) git add README.md or git add . or git add *
### (3) git commit -m "Empty project with README"
### (4) git remote add origin https://github.com/himesh-salpo/vdev-20210124.git
### (5) git push -u origin main
### (6) Steps for setting up React Native CLI on macOS for iOS
        - Install Homebrew\
        - Run the following commands in a Terminal after installing Homebrew\
            brew install node
            brew install watchman
        - Install Xcode is via the Mac App Store
        - Install the Xcode Command Line Tools
            Open Xcode, then choose "Preferences..." from the Xcode menu. Go to the Locations panel and install the tools by selecting the most recent version in the Command Line Tools dropdown.
        - Install an iOS Simulator in Xcode
            To install a simulator, open Xcode > Preferences... and select the Components tab. Select a simulator with the corresponding version of iOS you wish to use.
        - Install CocoaPods by running the following command in a terminal
            sudo gem install cocoapods
(7) npx react-native init hello
