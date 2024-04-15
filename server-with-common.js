const express = require("express");
const app = express();
const path = require("path");

app.use(express.urlencoded());

app.post("/register", (req, res) => {
	console.log(req.body);
	res.send("Data received");
});

app.get("/register", (req, res) => {
	res.sendFile(__dirname + "/public/register.html");
});

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/public/index.html");
});

app.listen(8000, (error) => {
	error
		? console.log(error)
		: console.log(`your server is running at http://localhost:8000`);
});
