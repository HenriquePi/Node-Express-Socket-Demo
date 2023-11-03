// models/Resource.js
const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  // add other fields as needed
});

module.exports = mongoose.model('Resource', resourceSchema);
