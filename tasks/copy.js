/**@see https://github.com/tj/commander.js */
const { program } = require('commander');

// const Bundler = require('parcel-bundler');
// const Path = require('path');

const fs = require('fs-extra');
program.version('0.0.1'); // defenit la version du programme
const [bin, sourcePath] = process.argv; // extract bin path just au cas

/** Les program option son injecter dans program?.[props]
 * Utiliser new program() pour de multiple sous programme comme pour pixi loader
 * ex: .option('-d, --debug',..) : si on call if (program.debug) {consolelog ...stuff}
 * Ces un registres chainable
 * TODO: separer en plusieur programme si nessesaire
 */
program
	.option('-d, --debug', 'just une command pour logger du debug')
	.option('-nwp, --nwPluginPath <path>', 'plugins path allow add plugins for nw ex:-nwp=plugins/')
	.option('-nw, --nw', 'start nw');
// .option('-nw, --nw', 'start nw')

program.parse(process.argv); // inject les arguments et les parse dans program;
const opt = program.opts();

// si flag debug, logger les program argument parser
if (program.debug) {
	console.log('helpInformation', program.helpInformation());
	console.log('opts', program.opts());
	console.log(`sourcePath`, sourcePath);
}

try {
	// copy plugins folder pour nwjs
	// program.nwPluginPath && fs.copySync(program.nwPluginPath, `dist/${program.nwPluginPath}`, { recursive: true });
	// copy public folder pour nwjs
	fs.copySync('src/public', 'dist/public', { recursive: true });
	console.log('\x1b[34m', 'src/public copied', '\x1b[0m');
} catch (error) {
	throw console.log(`(32)%c.error:`, `color: #${parseInt(String(Math.random() * 1000000))}`, error); //LOG
}

//ATTENTION TODO: WARNING si nwjs est bugger et leak dans les process window, sa fuck les plugin et port. ctrl+alt+delete
// constructions du package.json (versions et quelque detail future pour les builds)
try {
	fs.copySync('src/package.json', 'dist/package.json', { recursive: true });
	const content = fs.readFileSync('dist/package.json', 'utf8');
	const nw_config = JSON.parse(content);
	nw_config['main'] = 'http://localhost:1234'; // 'http://localhost:1234'
	nw_config['node-remote'] = 'http://localhost:1234'; // 'http://localhost:1234' ou delette , just un test '<all_urls>'
	if (program.nwPluginPath && nw_config['chromium-args']) {
		const ext = ` --load-extension='./${program.nwPluginPath}/pixi_devtools','./${program.nwPluginPath}/React_Developer_Tools'`;
		nw_config['chromium-args'] += ext;
	}
	console.log('\x1b[34m', 'package.json hacked', '\x1b[0m');
	fs.writeFileSync('dist/package.json', JSON.stringify(nw_config, null, 2), { encoding: 'utf8' });
	console.log('\x1b[34m', 'dist/package.json copied', '\x1b[0m');
} catch (err) {
	throw console.error(err);
}
console.log('\x1b[32m', 'copy complete', '\x1b[0m');

// parcel
// (async function () {
// 	// Initializes a bundler using the entrypoint location and options provided
// 	const bundler = new Bundler('src/index.html', {});
// 	bundler.on('buildEnd', () => {
// 		console.log('buildEnd');
// 		const a = exec('nw ./dist --remote-debugging-port=9222');
// 	});

// 	// Run the bundler, this returns the main bundle
// 	// Use the events if you're using watch mode as this promise will only trigger once and not for every rebuild
// 	const bundle = await bundler.bundle();
// 	bundler.serve();
// })();

// // Copy static folders, files between for distributions compatibility with nwjs desktop architecture
// const fs = require('fs-extra');
// // var source = 'src/res';
// // var sourceScript = 'src/script';
// // var destination = 'dist/res';
// // var destinationScript = 'dist/script';
// // console.log('\x1b[36m', `---- ${source} to ${destination} ----`, '\x1b[0m');
// // console.log('process.argv: ', process.argv[2]);
// const source = 'src/';
// const target = 'dist/';
// const folders = ['res', 'script', 'code'];
// /** Name of the json file */
// const nwJsonName = 'package.nwjs.json';

// try {
// 	folders.forEach((foldername) => {
// 		fs.mkdirSync(target + foldername, { recursive: true });
// 		console.log('\x1b[32m', `mkdirSync: ${foldername}`, '\x1b[0m');
// 		fs.copySync(source + foldername, target + foldername);
// 	});
// } catch (err) {
// 	throw console.error(err);
// }

// try {
// 	// "main": "http://localhost:1234",
// 	// "node-remote": "http://localhost:1234",
// 	const content = fs.readFileSync(source + nwJsonName);
// 	const nw_config = JSON.parse(content);
// 	//TODO: ne pas utilise localHost psk ne donne pas acces a node global dans nwjs.
// 	if (process.argv[2] === 'dev') {
// 		nw_config['main'] = 'http://localhost:1234';
// 	} else {
// 		nw_config['main'] = 'index.html';
// 	}
// 	fs.writeFileSync(target + 'package.json', JSON.stringify(nw_config, null, 2));
// 	console.log('\x1b[32m', 'success: writeFileSync', '\x1b[0m');
// } catch (err) {
// 	console.error(err);
// }
// console.log('\x1b[33m', 'copy complete', '\x1b[0m');
