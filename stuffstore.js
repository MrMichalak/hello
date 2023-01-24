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
  .then((response) =>
    // The API call was successful!
    response.text()
  )
  .then((html) => {
    // This is the HTML from our response as a text string
    //console.log(html);
  })

  .catch((err) => {
    // If there was an error
    console.warn("Something went wrong.", err);
  });

// next: convert the new txt to html and save into a file index.html.
