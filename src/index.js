require('dotenv').config();

const port = process.env.PORT || 2924
const express = require('express');
const cors = require('cors');
const app = express();

const studentController = require('./controller/studentController')
app.use(cors());
app.use(express.json());

app.use('/student', studentController)

module.exports = {
    app,
    port
}