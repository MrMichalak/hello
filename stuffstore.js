
const fs = require("fs");
const url = "url.json";
const data = fs.readFileSync(url, "utf8");
const jsonObject = JSON.parse(data);
try {
  fs.writeFileSync("test.txt", jsonObject.url);
} catch (err) {
  console.error(err);
}

fetch(jsonObject.url) // wysyla request
  .then(
    (response) => {
      
      if (response.ok) {
        //
        return response.json()//  convertuje rsponse to JSON
      } //

      throw new Error("Request failed!"); //
    },
    (networkError) => console.log(networkError.message) // obsluga error'a
  )
  .then((jsonResponse) => {
    
    // kod do wykonania z jsonResponse
  });
