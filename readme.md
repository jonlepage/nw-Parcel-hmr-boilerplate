# NW.js Parcel HMR Boilerplate

Boilerplate for Desktop App development using Parcel for Hot Module Reloading (HMR).


## Features

* Parcel Bundlers
* Builds for all majors Browsers (Chrome, Edge, FireFox...)
* Builds for all majors Desktops achhitectures (x86, x64, Windows, OSX, Linux...)
* Hot reloading of browser and desktop (NW.js)
* Node.js (Native with NW.js)


# Quicks starts


## **Download || fork || open in Desktop**

```bash
# install the dependencies via npm
# this is required before lunch nwjs app
npm install

# dev your app with HMR
npm run start-nw

# Build your final app and distribute
npm run build-nw

```


# Development doc

* Development will bundle app in `dist` folder.
* Production will bundle app in `build` folder.


## **Desktop**

### **Development**

* Start dev server for desktop (NW.js)

```bash
npm run start-nw
```

### **Production**

* Build final app for desktop (x64, x86, Windows, Linux, OSX)

```bash
npm run build-nw
```

---

---

## **Browser**

### **Development**

* Start dev servor for browser dev

```bash
npm start
```

### **Production**

* Build final app for browser

```bash
npm run build
```

* * *


# NOTE

* `src` folder is where you code your app
* NW.js is installed locally in `node_modules`
* `package.json` inside public, is where setup the desktop development and build
