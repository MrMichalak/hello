const fs = require("fs").promises;

// const run = async () => {
// 	// The API call
// 	await fetch(jsonObject.url)
// 		.then((response) => response.text())

// 		// This is the HTML from our response as a text string
// 		.then((html) => {
// 			return html;
// 		})

// 		//saving html to index.html
// 		.then((html) => {
// 			fs.writeFileSync('index.html', html);
// 		})

// 		// If there was an error
// 		.catch((err) => {
// 			console.warn('Something went wrong.', err);
// 		});
// };

const getHtml = async (url) => {
  // use fetch and await response
  const response = await fetch(url);
  if (response.status !== 200) {
    throw Error("Unsuccessful response");
  }
  const html = await response.text();
  return html;
};

const handleHtml = async (html) => {
  await fs.writeFile("index.html", html);
};

const run = async () => {
  const url = "url.json";
  const data = await fs.readFile(url, "utf8");
  const jsonObject = JSON.parse(data);

  const html = await getHtml(jsonObject.url);
  await handleHtml(html);
};

(async () => {
  console.log("Started execution");
  await run();
  console.log("Finished execution");
})();
