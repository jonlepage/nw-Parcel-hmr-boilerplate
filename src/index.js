import React from 'react';
import ReactDom from 'react-dom';
import App from './App/App';
import './index.less';
import { PIXIapp } from './backend/pixiapp';
// import { WebXr } from './backend/webxr';
if (window.nw) {
	console.log('window.process', window.process?.versions?.ares);
	console.log('nw.require.os.cpus: ', nw.require('os').cpus());
	console.log('user $r to debug react componment selected');
	PIXIapp.showTextInformation(); // show pixi canvas work
	// console.log('WebXr: ', WebXr);
}
ReactDom.render(<App />, document.getElementById('root'));
