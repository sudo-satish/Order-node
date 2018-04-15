// const { mongoose } = require('./mongoose.connect');
const mongoose = require('mongoose');
const config = require('../app.config');

const validator = require('validator');
const ClientSchema = mongoose.Schema({
    name: {
        type: String,
        required:true,
        trim: true,
    },
    owner_name: {
        type: String,
        required:true,
        trim: true,
    },
    owner_no: {
        type: Number,
        required: true,
        trim: true,
        minlength: 10,
        unique: true
    },
    phone: {
        type: Number,
        required:true,
        trim:true,
        minlength: 10,
        unique:true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: `{VALUE} is not an valid email`
        }
    },
    active: Boolean,
});

mongoose.connect(config.mongoUrl);
const ClientModel = mongoose.model('client', ClientSchema);
module.exports = {ClientSchema, ClientModel}
