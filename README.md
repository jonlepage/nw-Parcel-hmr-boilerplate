# NW.js Parcel HMR Boilerplate

Boilerplate for Desktop App development using Parcel for Hot Module Reloading (HMR).


## Features

* Parcel Bundlers
* Builds for all majors Browsers (Chrome, Edge, FireFox...)
* Builds for all majors Desktops achhitectures (x86, x64, Windows, OSX, Linux...)
* Hot reloading of browser and desktop (NW.js)
* Node.js (Native with NW.js)



## Environment setup

1. Install [Node.js and npm](https://nodejs.org)
1. Download, clone, or fork this repo
1. Run `npm install`

## Development

**Desktop App:** Local development

1. `npm run start-nw`

**Web App:** Local development, starts dev server

1. `npm start`


## Build for production

**Desktop App:** Build final app for desktop (x64, x86, Windows, Linux, OSX)

1. `npm run build-nw`

**Web App:** Build final app for browsers

1. `npm run build`


* * *


# Documentation

* Development will bundle app in `dist` folder.
* Production will bundle app in `build` folder.
* `src` folder is where you code your app
* NW.js will be installed locally in `node_modules`
* `package.json` inside `/public`, is where setup for the desktop development and build is stored
