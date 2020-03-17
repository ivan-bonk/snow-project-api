const express = require ('express');
const bodyParser = require ('body-parser');
const cors = require ('cors');

const usersPoute = require('../routes/users');
const userPetRouter = require('../routes/user_pet');
const petRouter = require('../routes/pets');

async function loadingApp (app) {

  app.get('/status', (req, res) => { res.status(200).end(); });
  app.head('/status', (req, res) => { res.status(200).end(); });
  app.enable('trust proxy');

  app.use(cors());
  app.use(bodyParser.json());

  app.use(cors());
  app.use(bodyParser.json());
  app.use('/users', usersPoute);
  app.use('/pets', petRouter);
  app.use('/user_pet', userPetRouter);

  return app;
};

module.exports = loadingApp;
