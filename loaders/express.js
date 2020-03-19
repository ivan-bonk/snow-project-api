const bodyParser = require('body-parser');
const cors = require('cors');

const petRouter = require('../routes/pets');

async function loadingApp(app) {
  app.get('/status', (req, res) => {
    res.status(200).end();
  });
  app.head('/status', (req, res) => {
    res.status(200).end();
  });
  app.enable('trust proxy');

  app.use(cors());
  app.use(bodyParser.json());

  app.use(cors());
  app.use(bodyParser.json());
  app.use('/pets', petRouter);

  return app;
}

module.exports = loadingApp;
