try {
const fs = require('fs');
const url = 'url.json';
const data = fs.readFileSync(url, 'utf8');
const jsonObject = JSON.parse(data);
    fs.writeFileSync('test.txt', jsonObject.url);
  } catch (err) {
    console.error(err);
  }

  fetch('test.txt').then(response => { // wysyla request
  if (response.ok) {        //
    return response.json(); //  convertuje rsponse to JSON
  }                         //

  throw new Error('Request failed!');                 //
}, networkError => console.log(networkError.message)  // obsluga error'a

).then(jsonResponse => {                            
   // kod do wykonania z jsonResponse
});
