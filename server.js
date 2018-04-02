const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('Home page');
});
app.listen(4200, () => {
    console.log('Listing to port 4200; ');
});