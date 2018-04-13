const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/my_db');
// mongoose.connect('mongodb+srv://new-user_01:new-user_01@order-node-ulsyi.mongodb.net/test');
mongoose.connect('mongodb://new-user_01:new-user_01@order-node-shard-00-00-ulsyi.mongodb.net:27017,order-node-shard-00-01-ulsyi.mongodb.net:27017,order-node-shard-00-02-ulsyi.mongodb.net:27017/test?ssl=true&replicaSet=Order-node-shard-0&authSource=admin');
const { userSchema } = require('./schemas/user.schema.js');

var userModel = mongoose.model('user', userSchema);
module.exports = { userModel }