# Time Logger

This application is built with ReactJS as practice for myself. I'm new with ReactJS and not everything is good.

# Install
You need your basic ReactJS and NPM stuff.

Install: `npm install`
Start: `npm start`
Build: `npm run-script build`



# Configuration
You also need a file in your root named `apiGoogleconfig.json`.
Put this inside your `apiGoogleconfig.json` file.
```js
{
	"clientId": "<CLIENT-ID>",
	"apiKey": "<API-KEY>",
	"scope": "https://www.googleapis.com/auth/calendar",
	"discoveryDocs": ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"]
}
```

Change `  "homepage": "https://joeylau.nl/projects/time-logger",` to your own homepage inside `package.json` before you build the application.
