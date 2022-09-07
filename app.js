// core module
// file system
const fs = require("fs");

// input in console
const readline = require("readline");

// input stream and output stream
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const dir = "./data"; // directory name
const file = "./data/contacts.json"; // file name, inside dir

// check directory and file before input
// if directory not exist, create directory
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

// if file not exist, create file
if (!fs.existsSync(file)) {
  fs.writeFileSync(file, "[]");
}

// input question
rl.question("what is your name? ", (name) => {
  rl.question("what is your mobile phone? ", (phone) => {
    rl.question("what is your email? ", (email) => {
      // array object
      const contact = { name, phone, email };

      // read file before write
      const file = fs.readFileSync("data/contacts.json", "utf8");

      // change data string to object
      const contacts = JSON.parse(file);

      // add items to variable contact
      contacts.push(contact);

      // change data object to sting and write items to file
      fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));

      // send respond when input success
      console.log(
        `Thank you for input your data! \nYour name ${name}, your mobile phone is ${phone}, and your email is ${email}`
      );

      // close program
      rl.close();
    });
  });
});

// ---------------------------------------------------------------------------------

// validator
// const validator = require("validator");

// console.log("Email: " + validator.isEmail("foo@bar.com"));
// console.log("Phone: " + validator.isMobilePhone("08123456789", "id-ID"));
