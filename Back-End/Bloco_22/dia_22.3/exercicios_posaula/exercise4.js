const fs = require('fs')

const writeFile = (fileName, fileContent) => {
  try {
    fs.writeFileSync(`${'./'}${fileName}`, fileContent)
    return 'ok';
  } catch (e) {
    console.log(e.message);
  }
}

module.exports = writeFile;