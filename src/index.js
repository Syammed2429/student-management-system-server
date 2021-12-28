require('dotenv').config();

const port = process.env.PORT || 2924
const express = require('express');
const cors = require('cors');
const app = express();

const studentController = require('./controller/studentController')
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    return res.status(200).send({ message: 'Hello Welcome to the student service' })
})
app.use('/student', studentController)

module.exports = {
    app,
    port
}