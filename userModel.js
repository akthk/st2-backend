const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  loginHistory: [
    {
      dateTime: {
        type: Date,
        default: Date.now
      },
      userAgent: {
        type: String
      }
    }
  ]
});

const User = mongoose.model('User', userSchema);

module.exports = User;
