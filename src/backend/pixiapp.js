import * as PIXI from 'pixi.js';
/** DEVMODE allow pixi inspector devtool */
window.PIXI = PIXI;
global.PIXI = PIXI;

let canvas = document.createElement('canvas');
let gl = canvas.getContext('webgl', { xrCompatible: true });

class _pixiapp extends PIXI.Application {
	/**@type {HTMLCanvasElement} */
	// @ts-ignore
	static CANVAS = document.getElementById('CRENDER');

	constructor(option) {
		super({
			width: 1500,
			height: 740,
			antialias: true,
			transparent: true,
			resolution: 1,
			sharedTicker: true,
			//backgroundColor: 0xf4f3f1, // remove bg for full alpha
			view: canvas,
			context: gl,
		});
		//document.body.appendChild(this.view);
		document.body.insertBefore(this.view, document.body.firstChild);
	}

	initialize() {
		this.initialize_base();
		//this.initialize_interactions()
		//this.child = this.childrenToName()
	}

	initialize_base() {
		const ContainerTextArea = new PIXI.Container();
	}

	showTextInformation() {
		const OS = window.nw.require('os');
		const txt = new PIXI.Text('string', { fill: '#d73cc4', fontSize: 14 });
		txt.text =
			JSON.stringify(nw.process.versions, null, '\t') +
			JSON.stringify(OS.userInfo(), null, '\t');
		this.stage.removeChildren();
		this.stage.addChild(txt);
		txt.position.set(250, 50);
		return txt;
	}
}

export const PIXIapp = new _pixiapp();
