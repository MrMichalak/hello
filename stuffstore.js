const fs = require("fs");
const url = "url.json";
const data = fs.readFileSync(url, "utf8");
const jsonObject = JSON.parse(data);
try {
  fs.writeFileSync("test.txt", jsonObject.url);
} catch (err) {
  console.error(err);
}

fetch(jsonObject.url)
  .then(function (response) {
    // The API call was successful!
    return response.text();
  })
  .then(function (html) {
    // This is the HTML from our response as a text string
    //console.log(html);
  })

  .catch(function (err) {
    // If there was an error
    console.warn("Something went wrong.", err);
  });

// convert the new txt to html and save into a file index.html.
