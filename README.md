[![Build Status](https://travis-ci.org/dukedhx/viewer-ioniccapacitor-angular.svg?branch=master)](https://travis-ci.org/dukedhx/viewer-ioniccapacitor-angular)
[![License](http://img.shields.io/:license-mit-blue.svg)](http://opensource.org/licenses/MIT)
[![Autodesk Forge](https://img.shields.io/badge/Autodesk-Forge-orange.svg)](https://forge.autodesk.com/)
[![Capacitor](https://img.shields.io/badge/Ionic-Capacitor-blue.svg)](https://capacitor.ionicframework.com/docs/apis)
[![Platform](https://img.shields.io/badge/Platform-iOS|Android|Web-green.svg)](https://forge.autodesk.com/)

## Description

Forge Viewer Ionic/Capacitor Sample In Angular & TypeScript - Cross platform, lazy dependencies, load bundled models etc.

Original post:

# Why Capacitor?

// TODO

With Plugins, a web app can access the full power of the Native APIs, doing everything a traditional native app can. Plugins are especially great for wrapping common native operations that might use very different APIs across platforms, while exposing a consistent, cross-platform API to JavaScript.

To create a refresh Ionic/Capacitor:
- Install Node.js/Ionic
- Create the project with the Capacitor flag: `ionic start appName --capacitor`

# Architecture

// TODO

# Setup and Run

## Prerequisites
- Node.JS (install [here](https://nodejs.org/en/download/))
- Capacitor (install [here](https://capacitor.ionicframework.com/docs/getting-started))
- Ionic (see [here](https://capacitor.ionicframework.com/docs/getting-started/with-ionic))
- iOS (Xcode 10, CocoaPods etc, see [here](https://capacitor.ionicframework.com/docs/getting-started/dependencies#ios-development))
- Android (Java 8, Android SDK 28, Gradle 4.11+ and your favorite IDE (IDEA, Android Studio etc.) see [here](https://capacitor.ionicframework.com/docs/getting-started/dependencies#android-development))

## Setup and Run

- `npm install`
- `npm run build`
- `npx cap add ios`

Be sure to sync/copy your latest emits to the target platforms after updating/building your Ionic app:
- `npm run build`
- `npx cap sync` or `npx cap copy` //To copy web assets only, which is faster if you know you don't need to update native dependencies

### iOS
- `npx cap open ios` //or open the project (or workspace) in the `ios` folder on Xcode
- Build and run

### Android

- `npx cap open android` //or open the
- Build the project with Gradle and debug/run on emulator or connected device


## Tips & Tricks

> Customize app branding (icons, splashscreen etc)

- See [here](https://enappd.com/blog/icon-splash-in-ionic-react-capacitor-apps/114/) and [here](https://github.com/ionic-team/capacitor/issues/854)

> Access native APIs?

- Capacitor includes a number of Native APIs that are available to all Capacitor apps. These can be thought of as Capacitor "core plugins," and they make it easy to access commonly needed functionality on each platform, e.g:

```
const { Browser } = Plugins;
//...
async openBrowser() {
  // On iOS, for example, open the URL in SFSafariViewController (the in-app browser)
  await Browser.open({ url: "https://ionicframework.com" });
}
```

- Try create [plugins](https://capacitor.ionicframework.com/docs/plugins) for optimal reusability and code spitting.

> Set Capacitor up with existing Ionic project?

Navigate to your project and run `ionic integrations enable capacitor`

> JVM runs out of memory during task "app:transformClassesWithDexForRelease" when compiling to Android?

- Set up your accordingly, e.g. `org.gradle.jvmargs=-XX\:MaxHeapSize\=512m -Xmx512m`
- Enable [MultiDex](https://stackoverflow.com/questions/33588459/what-is-android-multidex) in your Gradle config:
```
defaultConfig {
    minSdkVersion 14
    targetSdkVersion 22
    multiDexEnabled = true
}
```

## License

[MIT](http://opensource.org/licenses/MIT)

## Written By

[Bryan Huang](https://www.linkedin.com/in/bryan-huang-1447b862) - Forge Partner Development https://forge.autodesk.com
