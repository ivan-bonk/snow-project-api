const express = require('express');
const router = express.Router();
const Alias = require('../models/Alias');

router.get('/', async (req, res) => {
    try {
        const alias = await Alias.find();
        return res.json(alias[0]);
    } catch (err) {
        return res.status(404).json({
            message: err
        });
    }
})

router.post('/', async (req, res) => {
    const alias = new Alias({
        boys: req.body.boys,
        girls: req.body.girls
    });

    try {
        const savedAlias = await alias.save();
        return res.json(savedAlias);
    } catch (err) {
        return res.status(404).json({message: err});
    }
})

module.exports = router;