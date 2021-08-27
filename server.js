const express = require("express");

const app = express();
const port = process.env.port || 3000;

app.use("/", (_req, res) => {
	res.send("hello from express!");
});

app.listen(port, () => {
	console.log(`server listening on port ${port}`);
});
