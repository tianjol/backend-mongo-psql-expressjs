const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true }
});

module.exports = mongoose.model('UserMongo', UserSchema);
