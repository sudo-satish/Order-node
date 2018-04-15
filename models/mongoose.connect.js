const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/my_db');
// mongoose.connect('mongodb+srv://new-user_01:new-user_01@order-node-ulsyi.mongodb.net/test');
const config = require('../app.config');
mongoose.connect(config.mongoUrl);
// module.exports = { mongoose };
// module.exports = mongoose ;