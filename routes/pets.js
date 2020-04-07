const express = require('express');
const router = express.Router();
const Pet = require('../models/Pet');

router.get('/', async (req, res) => {
  try {
    const pets = await Pet.find();
    return res.json(pets);
  } catch (err) {
    return res.json({ massage: err });
  }
});

router.get('/:petId', async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.petId);
    return res.json(pet);
  } catch (err) {
    return res.json({ massage: err });
  }
});

router.delete('/:petId', async (req, res) => {
  try {
    const removePet = await Pet.remove({ _id: req.params.petId });
    return res.json(removePet);
  } catch (err) {
    return res.json({ massage: err });
  }
});

router.post('/', async (req, res) => {
  const pet = new Pet({
    breed: req.body.breed,
    imgUrl: req.body.imgUrl,
    characteristics: req.body.characteristics,
    observations: req.body.observations,
    ownerInfo: req.body.ownerInfo,
    additionalInfo: req.body.additionalInfo
  });

  try {
    const savedPet = await pet.save();
    return res.json(savedPet);
  } catch (err) {
    return res.json({ message: err });
  }
});

module.exports = router;
