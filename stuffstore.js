const fs = require('fs');
const url = 'url.json';
const data = fs.readFileSync(url, 'utf8');
const jsonObject = JSON.parse(data);

// try {
//   fs.writeFileSync("test.txt", jsonObject.url);
// } catch (err) {
//   console.error(err);
// }

const run = async () => {
	// The API call
	await fetch(jsonObject.url)
		.then((response) => response.text())

		// This is the HTML from our response as a text string
		.then((html) => {
			return html;
		})

		//saving html to index.html
		.then((html) => {
			fs.writeFileSync('index.html', html);
		})

		// If there was an error
		.catch((err) => {
			console.warn('Something went wrong.', err);
		});
};

(async () => {
  console.log('Started execution');
  await run();
  console.log('Finished execution');
})();
