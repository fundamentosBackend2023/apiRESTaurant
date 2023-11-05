const express = require('express');
const app = express();
const configureRoutes = require('./routes');
const { logger, boomErrorHandler, generalHandler } = require('./middlewares/errorHandlers');
require('dotenv').config()

app.use(express.json());
app.use('/', (req, res, next) => {
    console.log('route middleware')
    next()
})

app.use((req, res, next) => {
    console.log('global middleware')
    next()
})

app.get('/',
    (req, res, next) => {
        console.log('mw de definicion de ruta');
        next();
    },
    (req, res) => {
    res.status(200).send('Hello there')
    }
);

configureRoutes(app);

app.use(logger);
app.use(boomErrorHandler);
app.use(generalHandler);

app.listen(process.env.PORT, () => {
    console.log('Listening on port 3000');
});