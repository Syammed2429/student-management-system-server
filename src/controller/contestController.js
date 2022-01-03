const express = require('express');
const router = express.Router();
const Contest = require('../model/contestModel')


router.post('', async (req, res) => {
    try {
        const contests = await Contest.find(req.body)
        if (contests != '') return res.status(400).send("Already added")

        const contest = await Contest.create(req.body);
        return res.status(201).send(contest)
    } catch (e) {
        console.log('e:', e)

    }
})

router.get('', async (req, res) => {
    try {
        const page = +req.query.page || 1;
        const size = +req.query.limit || 5;
        const offSet = (page - 1) * size;

        const contests = await Contest.find().limit(size).skip(offSet).lean().exec();
        const totalContestsCount = await Contest.find().countDocuments();
        const totalPages = Math.ceil(totalContestsCount / size);
        return res.status(200).send({ contests, totalPages })

    } catch (e) {
        console.log('e:', e)

    }
});

router.delete('/:id', async (req, res) => {
    const contest = await Contest.findByIdAndDelete(req.params.id);
    return res.status(200).send(contest)

})





module.exports = router;