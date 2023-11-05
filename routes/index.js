const express = require('express');
const mainRouter = express.Router();
const clientRouter =  require('./clientRoutes');
const orderRouter = require('./orderRoutes');

function configureRoutes(app){
    app.use('/api/v1', mainRouter);
    mainRouter.use('/client', clientRouter);
    mainRouter.use('/order', orderRouter);
}

module.exports = configureRoutes;