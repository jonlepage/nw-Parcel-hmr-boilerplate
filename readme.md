# Nwjs Parcel HMR boilerPlate (StarterKit)

## Features

- React FrontEnd (Framework HTML)
- PixiJS BackEnd (Library bridge between WebGL and GPU)
- Parcel Bundlers (almost no config)
- RES (react-easy-state) stores (instead of Redux)
- UI toolkit AntDesign MaterialUI, BluePrintJS (treeShaking)
- WebXR backend API (browser and nwjs) with fallback polyfill
- Builds for all majors Browsers (Chrome,Edge,FireFox...)
- Builds for all majors Desktops achhitectures ([x86,x64],Win,Osx,Linux...)
- HotReload browser and desktop (nwjs)
- NodeJS (Native with nwjs)
- Include Plugins inspector config: PIXIDEVTOOL, REACTDEVTOOL, SPECTORJS
- PreConfig for Babel, esLint, Less, Prettier
- PreConfig for VsCode live debbugger (remote,hotreload,nwjs)

## PREVIEW

&nbsp;<img src="https://images2.imgbox.com/d2/49/9FnrOoYP_o.png" width="200" />

# Quicks starts

## **Download || fork || open in Desktop**

<img src="https://images2.imgbox.com/38/5f/NjtVaOBI_o.png" width="120" height="40" />

## **NPM**

```javascript
npm i appname
```

## **CMD**

```bash
# clone the repo.
# --depth 1 removes all but one .git commit history (Optional).
git clone --depth 1 https://github.com/djmisterjon/pixi-nwjs-starter.git

# set change directory to repo
cd pixi-nwjs-starter

# install the dependencies via npm
npm i

```

# DEVELOPPEMENT

- developpement will bundle app in `dist` folder.
- production will bundle app in `build` folder.

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

# NOTE

- `src` folder is where code your app.
- NwJS is install locally in `node_modules`, but your can install globally.
- `package.nwjs.json` is where setup the desktop developpement and build.
- `index.less` is parent for import all css.
- `res` folder is where put images,files....
- `index.store.jsx` Is the Parent global stores for React.
- `backend` folder is where pixijs,webxr,... run.
