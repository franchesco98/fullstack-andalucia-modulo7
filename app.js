const express = require('express')
const app = express()

const path = require('path')
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + "views/index.html"));
    console.log("GET /views/index.html");
})