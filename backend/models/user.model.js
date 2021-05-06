const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: [true, 'please provide your name'],
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: [true, 'please provide your email'],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[0-9]{1,3}\.[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Invalid eamil formart',
    ],
  },
  country: {
    type: String,
    trim: true,
    required: [true, 'Please enter your country'],
  },
});

const User = mongoose.model('user', userSchema);

module.exports = User;
