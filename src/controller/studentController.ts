const {Router} = require('express');
const { Student: any } = require('../model/studentsModel')


Router.post('', async (req, res) => {
    const student = await Student.create(req.body);
    return res.status(201).send(student)
})

Router.get('', async (req, res) => {
    const students = await Student.find().lean().exec();
    return res.status(200).send(students)
});

Router.delete('/:id', async (req, res) => {
    const student = await Student.findByIdAndDelete(req.params.id);
    return res.status(200).send(student)

})


Router.get('/:id', async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        return res.status(200).send(student)

    } catch (e) {
        return res.status(400).send("Can not find the student with that id, please check it once again")
    }
})


module.exports = Router;