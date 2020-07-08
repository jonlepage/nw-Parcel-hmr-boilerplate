import WebXRPolyfill from 'webxr-polyfill';
import WebVRPolyfill from 'webvr-polyfill';

class _webxr {
	constructor(option) {
		this._WebVRPolyfill = new WebVRPolyfill();
		this._WebXRPolyfill = new WebXRPolyfill();
		this._xrSession = null;
	}

	browserSupport(supported, APIName) {
		console.log('this._WebVRPolyfill: ', this._WebVRPolyfill);
		console.log('this._WebXRPolyfill: ', this._WebXRPolyfill);
	}

	toggleXrSession() {
		if (!this._xrSession) {
			navigator.xr.requestSession('immersive-ar').then((session) => {
				this._xrSession = session;
				this._xrSession.isImmersive = true;
				// xrButton.textContent = 'Exit AR';
				this.onSessionStarted(this._xrSession);
			});
		} else {
			this._xrSession.end();
		}
	}
	onSessionStarted(xrSession) {
		xrSession.addEventListener('end', onSessionEnded);

		let canvas = document.createElement('canvas');
		gl = canvas.getContext('webgl', { xrCompatible: true });

		xrSession.updateRenderState({
			baseLayer: new XRWebGLLayer(session, gl),
		});

		xrSession.requestReferenceSpace('local-floor').then((refSpace) => {
			xrRefSpace = refSpace;
			xrSession.requestAnimationFrame(onXRFrame);
		});
	}
}

export const WebXr = new _webxr();
