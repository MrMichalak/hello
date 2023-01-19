
// https request using async await

const getData = async () => {
  try {
    const response = await fetch('test.txt'); // wysyla request

    if (response.ok) {                              //
      const jsonResponse = await response.json ();  // obsługuje response jesli sie powiedzie
      // kod do wykonania z jsonResponse            //
    }
    throw new Error('Request failed!'); 
  
  } catch (error) {                     //obsługuje response jesli sie nie powiedzie
    console.log (error);                //
  }
}


/// https request using fetch

fetch('https://stuffstore.se/produkt/fairy-lights-33-ledlampor/').then(response => { // wysyla request
  if (response.ok) {        //
    return response.json(); //  convertuje rsponse to JSON
  }                         //

  throw new Error('Request failed!');                 //
}, networkError => console.log(networkError.message)  // obsluga error'a

).then(jsonResponse => {                            
   // kod do wykonania z jsonResponse
});


///

const https = require('https');

https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {
  let data = '';

  // A chunk of data has been received.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    console.log(JSON.parse(data).explanation);
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});