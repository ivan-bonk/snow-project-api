const express = require('express');
const router = express.Router();
const Breed = require('../models/Breed');

router.get('/', async (req, res) => {
    try {
        const breeds = await Breed.find();
        return res.json(breeds[0].breeds);
    } catch (err) {
        return res.status(404).json({
            message: err
        });
    }
})

router.post('/', async (req, res) => {
    const breeds = new Breed({
        breeds: req.body.breeds
    });

    try {
        const savedBreed = await breeds.save();
        return res.json(savedBreed);
    } catch (err) {
        return res.status(404).json({message: err});
    }
})

module.exports = router;