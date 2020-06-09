const fs = require('fs');
const util = require('util');

module.exports = {
  readFileAsync: util.promisify(fs.readFile),
  writeFileAsync: util.promisify(fs.writeFile),
};
