//import express from 'express';
// Set up the express app

let express = require("express");
const app = express();
// get all todos
app.get('/get-test', (req, res) => {
    return res.status(400).send(new Error('description'));
});
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
});