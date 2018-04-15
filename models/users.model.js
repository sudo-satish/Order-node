// const { mongoose }  = require('./mongoose.connect');
const mongoose = require('mongoose');
const { userSchema } = require('./schemas/user.schema.js');

var userModel = mongoose.model('user', userSchema);
module.exports = { userModel }