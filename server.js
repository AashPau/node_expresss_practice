import express from "express";

import fs from "fs";

import path from "path";
const app = express();

const __dirname = path.resolve();

const fn = "userList.csv";

app.use(express.urlencoded());

app.post("/register", (req, res) => {
	const { email, password } = req.body;
	const str = email + "," + password + "\n";

	fs.appendFile(fn, str, (error) => {
		console.log(error);
	});

	res.redirect("/login");
});

app.get("/register", (req, res) => {
	res.sendFile(__dirname + "/public/register.html");
});

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/public/index.html");
});

app.get("/login", (req, res) => {
	res.sendFile(__dirname + "/public/login.html");
});

app.post("/login", (req, res) => {
	const { email, password } = req.body;

	const loginDetails = email + "," + password;

	const str = email + "," + password + "\n";
	//read the file data
	fs.readFile(fn, (error, data) => {
		const str = data.toString();

		if (str.includes(loginDetails)) {
			return res.send("<h1> login successful<h1>");
		}
		res.send(`<h1 style="color:red">Login failed</h1>`);
	});
});
app.listen(8000, (error) => {
	error
		? console.log(error)
		: console.log(`your server is running at http://localhost:8000`);
});
