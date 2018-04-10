const mongoose = require('mongoose');

const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

const itemSchema = mongoose.Schema(
    {
        // _id:String,
        name: String,
        code: String,
        rate: String,
        desc: String,
        offers: [{
        }]
    });

/*
itemSchema.statics.findByName = function (email, password) {
    var user = this;
    return this.findOne({
        'email': email,
        'password': password
    });
};

userSchema.statics.findByToken = function (token) {
    var user = this;
    var decoded;
    try {
        decoded = jwt.verify(token, 'secret');
    } catch (error) {
        return Promise.reject('Failed to verify token');
    }

    return this.findOne({
        '_id': decoded._id,
        'tokens.token': token,
        'tokens.access': 'auth'
    });
};

userSchema.methods.toResJson = function () {
    var userObj = this.toObject();
    return _.pick(userObj, ['_id', 'email',])
};
userSchema.methods.generateAuthToken = function () {
    var user = this;
    var access = 'auth';
    var token = jwt.sign({ _id: user._id.toHexString(), access }, 'secret').toString();

    this.tokens.push({ access, token });
    return this.save().then(() => {
        return token;
    });
}
*/

mongoose.connect('mongodb://127.0.0.1:27017/my_db');

var itemModel = mongoose.model('item', itemSchema);
module.exports = { itemSchema, itemModel }