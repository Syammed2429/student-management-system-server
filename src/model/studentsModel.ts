const {Schema, model}= require('mongoose');

const studentSchema = new Schema({
    name: { type: String, required: true },
    city: { type: String, required: true },
    age: { type: Number, required: true },
    education: { type: String, required: true },
    gender: { type: String, required: true },
    contact: { type: Number, required: true },

},
    {
        versionKey: false,
        timestamps: true,
    }
)

const Student = model('student', studentSchema)

module.exports = Student
