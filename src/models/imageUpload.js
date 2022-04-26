const mongoose = require("mongoose");

const uploadsSchema = new mongoose.Schema({
  originalname: {
    type: String,
    required: true,
  },
  mimetype: {
    type: String,
    required: true,
  },
  filename: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
  size: {
    type: Number,
    required: true,
  },
});
const Upload = new mongoose.model("Upload", uploadsSchema);
module.exports = Upload;
