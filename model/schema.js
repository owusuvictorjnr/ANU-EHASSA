import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  FirstName: {
    type: String,
    required: true,
  },

  MiddleName: {
    type: String,
    required: false,
  },

  LastName: {
    type: String,
    required: true,
  },

  StudentId: {
    type: String,
    required: true,
  },

  Semester: {
    type: Number,
    required: true,
  },

  Password: {
    type: String,
    required: true,
  },

  Password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.models.User || mongoose.model('User', userSchema);
