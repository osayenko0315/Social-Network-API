const mongoose = require('mongoose');
const connectionString = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/socialNetwork';

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});
module.exports = mongoose.connection;