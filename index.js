const express = require('express');
const app = express();
const clientRouter = require('./routes/clientRoutes');
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

app.use('/client', clientRouter)

app.listen(process.env, () => {
    console.log('Listening on port 3000');
});