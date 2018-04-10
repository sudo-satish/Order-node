const express = require('express');
const Routers = express.Router();
const { itemModel } = require('./models/item.model');
const  _ = require('lodash');

Routers.use((req, res, next) => {
    next();
    //res.send('Default Req Handler.');
});

Routers.get('/', (req, res) => {
    
    try {

        // var itemModelObj = new itemModel(item);
        itemModel.find({}, (err, items) => {
            if(err) {
                res.send(err);
            }

            res.send(items);
            console.log('fetched => ',items);
            
        });
        // itemModelObj.save().then((item) => {
        //     res.send(item);
        // }).catch((e) => {
        //     res.status(400).send(e);
        // });

    } catch (error) {
        res.send(e);
    }

    // res.send([
    //     { _id: 101, name: 'Pizza', code: 'pizza001', rate: 50, desc: 'Small family size pizza', offers: [{}] },
    //     { _id: 102, name: 'Burger', code: 'burger001', rate: 50, desc: 'Small burger for one', offers: [{}] },
    //     { _id: 103, name: 'Veg Roll', code: 'vegroll001', rate: 25, desc: 'Veg roll for one', offers: [{}] },
    //     { _id: 104, name: 'Non-Veg Roll', code: 'nonvegroll001', rate: 30, desc: 'Double egg roll', offers: [{}] },
    //     { _id: 105, name: 'French Fries', code: 'frenchfries001', rate: 30, desc: 'French fries for one serving', offers: [{}] },
    // ]);
    // res.send('Item Routes');
    //res.render('vaccination/index', { childName: 'satish', dob: '9-Dec-1995', clientName: 'FlexiEle', name: 'Girijesh Gupta', phoneNumber: '9958000332', emailId: 'satishkumr001@gmail.com', days: '90' });
});

Routers.post('/', (req, res) => {
    try {
        
        let body = req.body;
        let item = _.pick(body, ['name', 'code', 'rate', 'desc', 'offers']);

        console.log(item);
        
        var itemModelObj = new itemModel(item);
        itemModelObj.save().then((item) => {
            res.send(item);
        }).catch((e) => {
            res.status(400).send(e);
        });

    } catch (error) {
        res.send(e);
    }
});

Routers.get('/search', (req, res) => {
    //res.render('vaccination/search', { childName: 'satish', dob: '9-Dec-1995', clientName: 'FlexiEle', name: 'Girijesh Gupta', phoneNumber: '9958000332', emailId: 'satishkumr001@gmail.com', days: '90' });
    res.render('vaccination/search', { childName: 'satish', dob: '9-Dec-1995' });
    
});

Routers.use((err, req, res, next) => {
    res.send('This is item default error handler', err); // TODO : Make a error logger
    //return next(err);
});
module.exports = { Routers };