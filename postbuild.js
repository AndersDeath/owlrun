const package = require('./package.json');
const fs = require('fs');
const data = fs.readFileSync('./dist/index.js').toString().split("\n");
data.splice(0, 0, "#!/usr/bin/env node\n\r /** Version: " + package.version + " */");
const text = data.join("\n");

fs.writeFile('./dist/index.js', text, function (err) {
    if (err) return err;
});