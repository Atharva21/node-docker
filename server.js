const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose
	.connect("mongodb://root:example@mongo:27017")
	.then(() => console.log(`connected to db`))
	.catch(() => console.log(`error connecting to db`));

const port = process.env.port || 3000;

app.use("/", (_req, res) => {
	res.send("hello from express!!!");
});

app.listen(port, () => console.log(`server listening on port ${port}`));
