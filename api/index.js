const {createExpressApp} = require("./middleware/createExpressApp");

require("dotenv").config({path: "../.env"});
const path = require("path");
const express = require("express");

const app = createExpressApp();

const buildPath = path.normalize(path.join(__dirname, "../client/dist"));
app.use(express.static(buildPath));
const port = process.env["API_PORT"] || 8080;

// public routes
app.get("/*", function (req, res) {
	res.sendFile(path.join(buildPath, "index.html"));
});

//app.use("/api/", require("./routes/example.js"));
//app.use("/api/pg", require("./routes/postgres.js"));

app.listen(port, () => {
	console.log(`api-server listening at http://localhost:${port}`);
});
