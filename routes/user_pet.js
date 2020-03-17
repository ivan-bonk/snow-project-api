const express = require('express');
const router = express.Router();
const User_pet = require('../models/User_pet');

router.get('/', async (req, res) => {
    try {
        const pets = await User_pet.find();
        return res.json(pets);
    } catch(err) {
        return res.json({massage: err});
    }
});

router.get('/:userPetId', async (req, res) => {
    try {
        const pet = await User_pet.findById(req.params.userPetId);
        return res.json(pet);
    } catch(err) {
        return res.json({massage: err});
    }
});

router.delete('/:userPetId', async (req, res) => {
    try {
        const removePet = await User_pet.remove({_id: req.params.userPetId});
        return res.json(removePet);
    } catch(err) {
        return res.json({massage: err});
    }
});

router.patch('/:userPetId', async (req, res) => {
    try {
        const updatePet = await User_pet.updateOne(
            {_id: req.params.userPetId}, 
            { $set: {
                alias: req.body.alias,
                age: req.body.age,
                breed: req.body.breed,
                weight: req.body.weight,
                lenght: req.body.lenght,
                walkCount: req.body.walkCount,
                foodCount: req.body.foodCount,
                PECount: rq.body.PECount
            }});
        return res.json(updatePet);
    } catch(err) {
        return res.json({massage: err});
    }
});

router.post('/', async (req, res) => {
    const pet = new User_pet({
        alias: req.body.alias,
        age: req.body.age,
        breed: req.body.breed,
        weight: req.body.weight,
        length: req.body.lenght,
        walkCount: req.body.walkCount,
        foodCount: req.body.foodCount,
        PECount: req.body.PECount
    });

    try {
        const savedPet = await pet.save();
        return res.json(savedPet);
    } catch(err){
        return res.json({message: err});
    } 
})

module.exports = router;