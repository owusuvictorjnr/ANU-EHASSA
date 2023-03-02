import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },

  middleName: {
    type: String,
    required: false,
  },

  lastName: {
    type: String,
    required: true,
  },

  studentId: {
    type: String,
    required: true,
  },

  semester: {
    type: Number,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  cpassword: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.models.User || mongoose.model('User', userSchema);
