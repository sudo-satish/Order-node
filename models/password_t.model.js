const mongoose = require('mongoose');
const passwordSchema = require('./schemas/password.schema');


// mongoose.connect('mongodb://127.0.0.1:27017/my_db');
mongoose.connect('mongodb+srv://new-user_01:new-user_01@cluster0.mongodb.net/test');
mongoose.connect('mongodb+srv://new-user_01:new-user_01@order-node-ulsyi.mongodb.net/test');
// mongoose.connect('mongodb+srv://new-user_01:new-user_01@order-node-ulsyi.mongodb.net/test'),then(() => {
//     console.log('Connected');
    
// }).catch((err) => {
//     console.log(err);
    
// });

var passwordModel = mongoose.model('password_t', passwordSchema);

module.exports = { passwordModel }