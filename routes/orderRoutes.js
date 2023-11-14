const express = require('express');
const router = express.Router();
const services = require('../services/orderServices');

router.get('/', async (req, res, next) => {
    try{
        const orders = await services.getAll();
        res.status(200).json({
            orders,
            message: 'Here are your orders'
        });
    }catch(error){
        next(error);
    }
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const order = services.getOne(id)
    res.status(200).json({
        message: 'searched order',
        order
    });
});

router.post('/', async (req, res, next) => {
    try{
        const data = req.body;
        const confirmation = await services.create(data);
        res.status(201).json({
            message: 'order created',
            confirmation
        });
    }catch(error){
        next(error);
    }
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const confirmation = services.update(id, req.body);
    res.status(200).json({
        message: 'order updated',
        confirmation
    });
});

module.exports = router;