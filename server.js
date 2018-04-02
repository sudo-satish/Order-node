const express = require('express');
const app = express();
const { AppRouter } = require('./routes/AppRouter');

app.use('/', AppRouter);

app.get('/', (req, res) => {
    res.send('Home page');
});

app.listen(3000, () => {
    console.log('Listing to port 3000; ');
});