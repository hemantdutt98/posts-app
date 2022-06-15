const express = require('express');
const app = express();
const db = require("./models");

app.listen(3001, () => {
    console.log("server listening at port 3001");
})