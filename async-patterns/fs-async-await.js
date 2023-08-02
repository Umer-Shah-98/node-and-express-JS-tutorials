const { readFile, writeFile } = require("fs").promises;
// const util = require('util');

// const readFilePromise=util.promisify(readFile);
// const writeFilePromise=util.promisify(writeFile);

const start = async () => {
  try {
    const first = await readFile(
      "../built-in-modules/content/first.txt",
      "utf8"
    );
    const second = await readFile(
      "../built-in-modules/content/second.txt",
      "utf8"
    );
    await writeFile(
      "../built-in-modules/content/result-mind-grenade.txt",
      `This is AWESOME : ${first} ${second}`,
      { flag: "a" }
    );
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};
start();
// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };
