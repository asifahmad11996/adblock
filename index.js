

const express = require("express");
const app = express();

// @ts-ignore
app.get("/", (req, res) => {
    res.end("Hello world!")
});

app.listen(3000)