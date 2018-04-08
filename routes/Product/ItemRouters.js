const express = require('express');
const Routers = express.Router();

Routers.use((req, res, next) => {
    next();
    //res.send('Default Req Handler.');
});

Routers.get('/', (req, res) => {
    res.send([
        { _id: 101, name: 'Pizza', code: 'pizza001', rate: 50, desc: 'Small family size pizza', offers: [{}] },
        { _id: 102, name: 'Burger', code: 'burger001', rate: 50, desc: 'Small burger for one', offers: [{}] },
        { _id: 103, name: 'Veg Roll', code: 'vegroll001', rate: 25, desc: 'Veg roll for one', offers: [{}] },
        { _id: 104, name: 'Non-Veg Roll', code: 'nonvegroll001', rate: 30, desc: 'Double egg roll', offers: [{}] },
        { _id: 105, name: 'French Fries', code: 'frenchfries001', rate: 30, desc: 'French fries for one serving', offers: [{}] },
    ]);
    // res.send('Item Routes');
    //res.render('vaccination/index', { childName: 'satish', dob: '9-Dec-1995', clientName: 'FlexiEle', name: 'Girijesh Gupta', phoneNumber: '9958000332', emailId: 'satishkumr001@gmail.com', days: '90' });
});

Routers.get('/search', (req, res) => {
    //res.render('vaccination/search', { childName: 'satish', dob: '9-Dec-1995', clientName: 'FlexiEle', name: 'Girijesh Gupta', phoneNumber: '9958000332', emailId: 'satishkumr001@gmail.com', days: '90' });
    res.render('vaccination/search', { childName: 'satish', dob: '9-Dec-1995' });
    
});

Routers.use((err, req, res, next) => {
    res.send('This is Auth default error handler', err); // TODO : Make a error logger
    //return next(err);
});
module.exports = { Routers };