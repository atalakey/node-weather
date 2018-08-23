# node-weather

A NodeJS app.

The app uses the Yargs library and the Request/axios libraries to fetch the current temperature of a given address.

## App description (there are two ways to execute the app)

### First option (using callbacks)
Allows the user to fetch the current temperature of a given address.

### Second option (using promises)
Allows the user to fetch the current temperature of a given address.

## Installation

Be sure to have NodeJS installed.

### Prerequisites:
```
1. You must have npm and nodejs installed.
2. You must have a Google API Key.
3. You must have a Dark Sky API Secret Key.
```

### To install the prerequisites (macOS only)
```
1. Install Homebrew:

    /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

2. Install nodejs:

    brew install node
```

### To obtain the pre required API keys
```
1. Google API Key:

    follow the instructions on https://developers.google.com/maps/documentation/javascript/get-api-key#step-1-get-an-api-key-from-the-google-cloud-platform-console

2. Dark Sky API Secret Key:

    visit https://darksky.net and create an account.
```

### To use the application:
``` 
1. Clone the project:

    git clone https://github.com/atalakey/node-weather.git ~/Desktop/node-weather

2. Navigate to where you cloned the project:

    cd ~/Desktop/node-weather

3. Install App local packages:

    npm install

4. Add your Google API Key to:

    Desktop/node-weather/geocode/geocode.js
    Desktop/node-weather/app-promise.js

5. Add your Dark Sky API Secret Key to:

    Desktop/node-weather/weather/weather.js
    Desktop/node-weather/app-promise.js
```

## Run the App

```
1. using callbacks:

    node app.js -a "some address"

2. using promises:

    node app-promise.js -a "some address"
```

# Disclaimer:
This app is for demo purposes only.
