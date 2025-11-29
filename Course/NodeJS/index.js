// import superheroes from "superheroes";
// const myName = superheroes.random();
// console.log(myName);

import inquirer from 'inquirer';
import qr from "qr-image";
import fs, { writeFile } from "fs"

inquirer
  .prompt([
    {
        message: "Type in your URL",
        name: "URL"
    }
  ])
  .then((answers) => {
    const url = answers.URL;
    var qr_png = qr.image(url);
    qr_png.pipe(fs.createWriteStream("QR.png"));

    fs.writeFile("URL.txt", url, (err) => {
        if (err) throw err;
        console.log("This file has been saved.")
    })
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });