const express = require('express');
const AppRouter = express.Router();

// const { UserRoutes } = require('./UserRoutes');
// const { PlaygroundRoutes } = require('../playground/index');
const { AuthRouters } = require('./Auth/AuthRouters');
// const { DiseaseRouters } = require('./Disease/DiseaseRouters');
// const { VaccinationRouters } = require('./Vaccination/VaccinationRouters');

// const OrderRouters = require('./Order/OrderRouters').Routers;
const ItemRouters = require('./Product/ItemRouters').Routers;
const PaymentRouters = require('./Order/PaymentRouters').Routers;

// AppRouter.get('/', (req, res) => {
//     res.send({route:'Home page'});
// });

// AppRouter.use('/playground', PlaygroundRoutes);
// AppRouter.use('/user', UserRoutes);
AppRouter.use('/auth', AuthRouters); 
// AppRouter.use('/disease', DiseaseRouters);
// AppRouter.use('/vaccination', VaccinationRouters);
// AppRouter.use('/order', OrderRouters);
AppRouter.use('/product/item', ItemRouters);
AppRouter.use('/payment', PaymentRouters);
AppRouter.get('*', (req, res) => {
    res.write(__dirname + '/dist/index.html');
});
module.exports = { AppRouter };