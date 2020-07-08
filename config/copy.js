// Copy static folders, files between for distributions compatibility with nwjs desktop architecture
const fs = require("fs-extra");
var source = "src/res";
var destination = "dist/res";
console.log("\x1b[36m", `---- ${source} to ${destination} ----`, "\x1b[0m");
console.log("process.argv: ", process.argv[2]);
try {
  fs.mkdirSync(destination, { recursive: true });
  console.log("\x1b[32m", "success: mkdirSync", "\x1b[0m");
} catch (err) {
  console.error(err);
}
// Sync:
try {
  fs.copySync(source, destination);
  console.log("\x1b[32m", "success: copySync", "\x1b[0m");
} catch (err) {
  console.error(err);
}
try {
  // "main": "http://localhost:1234",
  // "node-remote": "http://localhost:1234",
  const content = fs.readFileSync("src/package.nwjs.json");
  const nw_config = JSON.parse(content);
  // ne pas utilise localHost psk ne donne pas acces a node global dans nwjs.
  if (process.argv[2] === "dev") {
    nw_config["main"] = "http://localhost:1234";
  } else {
    nw_config["main"] = "index.html";
  }
  fs.writeFileSync("dist/package.json", JSON.stringify(nw_config, null, 2));
  console.log("\x1b[32m", "success: writeFileSync", "\x1b[0m");
} catch (err) {
  console.error(err);
}
console.log("\x1b[33m", "copy complete", "\x1b[0m");
