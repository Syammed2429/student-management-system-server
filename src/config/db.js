const mongoose = require('mongoose');

const connect = () => {
    return mongoose.connect('mongodb+srv://student:student@cluster0.rfrlz.mongodb.net/students?retryWrites=true&w=majority')
}

module.exports = connect