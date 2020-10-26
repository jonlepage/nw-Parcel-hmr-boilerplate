import './index.css';

if (window.nw) {
  // Acces NW.js API via window.nw or global.nw
  console.log('nw', nw);

  // Access Node process through window.process or global.process
  console.log('Node version', window.process?.version);

  // Require Node moduels via window.require, global.require, or nw.require
  const fs = nw.require('fs');
  console.log('nw.require("fs").readdirSync(".")', fs.readdirSync('.'));

  // Window management
  const currentWindow = nw.Window.get();
  currentWindow.showDevTools();

  document.write('<strong>Desktop version</strong>:');
  document.write('Update your code in <code>src</code> and changes will occur in NW.js automatically via HMR.');
} else {
  document.write('<strong>Web version</strong>');
  document.write('Update your code in <code>src</code> and changes will occur in your browser automatically via HMR.');
}
