# Fuse
Fuse is a mobile application that allows users to tackle the high importance, low urgency bucket list items in their life. Users will be able to propose, plan, and complete the events through the platform.

## Directory Structure
We decided to create two separate repositories for our frontend and backend. This repository contains the source code for the front end of our app. 

`node_modules` - Contains all relevant node modules used by our application.
`src` - Contains all source code for application frontend. 
    `assets` - Contains images uses within frontend display.
    `components` - Contains small front end components such as buttons and input lines used within larger components and screens.
    `constants.js` - Contains constants for frontend development.
    `containers` - Contains code for large frontend components such as contents of main pages.
    `graphql` - Contains queries and mutators.
    `helpers` - Contains small helper functions and auxilary objects.
    `navigation` - Contains setup for app navigation between main screens and bottom toolbar. Builds react navigator for app.
    `screens` - Contains frontend logic for many of the main screens within the app. 
    `styles` - Contains application styling such as color requirements.
`e2e` - Contains code related to our end to end frontend testing with detox.
`tests` - 

## Installation/Build Instructions
1. Clone the repository onto your local computer
2. `cd` into the repository.
3. Run `npm install`.
4. Run `npm start`. A browser will open at this point. Select "run on ios simulator".

## Relevant Links
### Notion Website
Contains all documentation, planning, and submitted progress reports.
https://www.notion.so/chusefuse/fuse-d96eebf6268544de96835ebd910e9705

## Installing Detox (Testing Framework)

### Step 1: Installing dependencies
#### 1. Install the latest version of [Homebrew](http://brew.sh)
```sh
xcode-select --install
```
#### 2. Install [Node.js](https://nodejs.org/en/)
 ```sh
 brew update && brew install node
 ```
#### 3. Install [applesimutils](https://github.com/wix/AppleSimulatorUtils)
```sh
brew tap wix/brew
brew install applesimutils
```
#### 4. Install Detox command line tools (detox-cli)
```sh
npm install -g detox-cli
```

### Step 2: Add Detox to your project
#### 1. Install detox
```sh
npm install detox --save-dev
```
#### 2. Add Detox config to package.json
The basic configuration for Detox should be in your `package.json` file under the `detox` property:

```json
"detox": {
  "configurations": {
    "ios.sim.debug": {
      "binaryPath": "ios/build/Build/Products/Debug-iphonesimulator/example.app",
      "build": "xcodebuild -project ios/example.xcodeproj -scheme example -configuration Debug -sdk iphonesimulator -derivedDataPath ios/build",
      "type": "ios.simulator",
      "device": {
        "type": "iPhone 11 Pro"
      }
    }
  }
}
```

### Step 3: Create your first test

#### 1. Install a test runner :running_man:
[Jest](http://jestjs.io/):

```sh
npm install jest --save-dev
```

#### 2. Set up test-code scaffolds (automated) :building_construction:
```sh
detox init -r jest
```

**For a Jest-based environment, please pause and run through the comprehensive [Jest setup guide](Guide.Jest.md).**

> Note: `detox init` runs these steps, which you can reproduce manually:
>
> - Creates an `e2e/` folder in your project root
> - Inside `e2e` folder, creates `mocha.opts` (for `mocha`) or `config.json` (for `jest`). See examples: [mocha.opts](/examples/demo-react-native/e2e/mocha.opts), [config.json](/examples/demo-react-native-jest/e2e/config.json)
> - Inside `e2e` folder, creates `init.js` file. See examples for [Mocha](/examples/demo-react-native/e2e/init.js) and [Jest](/examples/demo-react-native-jest/e2e/init.js).
> - Inside `e2e` folder, creates `firstTest.spec.js` with content similar to [this](/examples/demo-react-native/e2e/example.spec.js).

### Step 4: Build your app and run Detox tests
#### 1. Run the tests (finally) :tada:
```sh
detox test
```
