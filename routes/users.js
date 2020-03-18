const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    return res.json(users);
  } catch (err) {
    return res.json({ massage: err });
  }
});

router.get('/:userId', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    return res.json(user);
  } catch (err) {
    return res.json({ massage: err });
  }
});

router.delete('/:userId', async (req, res) => {
  try {
    const removeUser = await User.remove({ _id: req.params.userId });
    return res.json(removeUser);
  } catch (err) {
    return res.json({ massage: err });
  }
});

router.patch('/:userId', async (req, res) => {
  try {
    const updateUser = await User.updateOne(
      { _id: req.params.userId },
      {
        $set: {
          name: req.body.name,
          age: req.body.age,
          email: req.body.email,
          password: req.body.password,
          havePet: req.body.havePet,
          lookingForPet: req.body.lookingForPet,
          petId: req.body.petId,
        },
      },
    );
    return res.json(updateUser);
  } catch (err) {
    return res.json({ massage: err });
  }
});

router.post('/', async (req, res) => {
  const user = new User({
    name: req.body.name,
    age: req.body.age,
    email: req.body.email,
    password: req.body.password,
    havePet: req.body.havePet,
    lookingForPet: req.body.lookingForPet,
    petId: req.body.petId,
  });

  try {
    const savedUser = await user.save();
    return res.json(savedUser);
  } catch (err) {
    return res.json({ message: err });
  }
});

module.exports = router;
