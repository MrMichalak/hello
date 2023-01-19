
try {
    const fs = require('fs');
    const url = 'url.json';
    const data = fs.readFileSync(url, 'utf8');
    const jsonObject = JSON.parse(data);
    fs.writeFileSync('test.txt', jsonObject.url);
  } catch (err) {
    console.error(err);
  }

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
  console.log(getData());