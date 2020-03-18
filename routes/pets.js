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
    alias: req.body.alias,
    description: req.body.description,
    popularity: req.body.popularity,
    training: req.body.training,
    size: req.body.size,
    mind: req.body.mind,
    protection: req.body.protection,
    childRelation: req.body.childRelation,
    agility: req.body.agility,
    problem: req.body.problem,
    country: req.body.country,
    lifeDuration: req.body.lifeDuration,
    height: req.body.height,
    weight: req.body.weight,
    price: req.body.price,
    maintenancePrice: req.body.maintenancePrice, //per month
    careTime: req.body.careTime, //per day
    suitForFlat: req.body.suitForFlat,
    suitForFamily: req.body.suitForFamily,
    specificity: req.body.specificity,
    problems: req.body.problems,
  });

  try {
    const savedPet = await pet.save();
    return res.json(savedPet);
  } catch (err) {
    return res.json({ message: err });
  }
});

module.exports = router;
