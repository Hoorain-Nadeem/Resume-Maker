const mongoose = require("mongoose");

const mediaSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  skills: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  Github: {
    type: String,
    required: true,
  },
  Linkedin: {
    type: String,
    required: true,
  },
  About: {
    type: String,
    required: true,
  },
  Role: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  mimetype: {
    type: String,
  },
  originalName: {
    type: String,
  },
});

const Media = mongoose.model("Media", mediaSchema);

module.exports = Media;
