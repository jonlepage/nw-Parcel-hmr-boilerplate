# NW.js Parcel HMR boilerPlate (StarterKit)

BoilerPlate start fast application with nwjs parcel HMR


## Features

* Parcel Bundlers
* Builds for all majors Browsers (Chrome,Edge,FireFox...)
* Builds for all majors Desktops achhitectures (x86, x64, Windows, OSX, Linux...)
* HotReload browser and desktop (NW.js)
* NodeJS (Native with NW.js)


## PREVIEW

<img src="https://images2.imgbox.com/d2/49/9FnrOoYP_o.png" width="200" />


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

### **developpement**

- Start dev servor for desktop (nwjs)

```bash
npm run start-nw
```

### **production**

- Build final app for desktop ([x64,x86],Win,Osx,Linux)

```bash
npm run build-nw
```

---

---

## **Browser**

### **developpement**

- Start dev servor for browser dev

```bash
npm start
```

### **production**

- Build final app for browser

```bash
npm run build
```

---

# NOTE

- `src` folder is where code your app.
- NwJS is install locally in `node_modules`, but your can install globally.
- `package.json` inside public, is where setup the desktop developpement and build.
