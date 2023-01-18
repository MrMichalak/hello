
try {
    const fs = require('fs');
    const url = 'url.json';
    const data = fs.readFileSync(url, 'utf8');
    const jsonObject = JSON.parse(data);
    fs.writeFileSync('test.txt', jsonObject.url);
  } catch (err) {
    console.error(err);
  }
