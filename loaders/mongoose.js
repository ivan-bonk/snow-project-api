const mongoose = require('mongoose');
require('dotenv/config');

async function connectDB() {
  const connection = await mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  return connection.connection.db;
}
module.exports = connectDB;
