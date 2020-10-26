# Nwjs Parcel HMR boilerPlate (StarterKit)

BoilerPlate start fast application with nwjs parcel HMR

## Features

- Parcel Bundlers
- Builds for all majors Browsers (Chrome,Edge,FireFox...)
- Builds for all majors Desktops achhitectures ([x86,x64],Win,Osx,Linux...)
- HotReload browser and desktop (nwjs)
- NodeJS (Native with nwjs)

## PREVIEW

&nbsp;<img src="https://images2.imgbox.com/d2/49/9FnrOoYP_o.png" width="200" />

# Quicks starts

## **Download || fork || open in Desktop**

<img src="https://images2.imgbox.com/38/5f/NjtVaOBI_o.png" width="120" height="40" />

```bash
# install the dependencies via npm
# this is required before lunch nwjs app
npm i

# dev your app with HMR
npm run start-nw

# Build your final app and distribute
npm run build-nw

```

# DEVELOPPEMENT doc

- developpement will bundle app in `dist` folder.
- production will bundle app in `build` folder.

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
