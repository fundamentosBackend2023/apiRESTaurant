const express = require('express');
const router = express.Router();
const client = require('./../services/clientServices');

router.get('/', async (req, res) => {
    try{
        const { minAge } = req.query;
        const clients = await client.getAllClients(minAge);
        res.status(200).json({
            message: 'client list',
            clients
        });
    }catch(error){
        next(error);
    }
});

router.get('/:clientId', async (req, res, next) => {
    try{
        const { clientId } = req.params;
        const myClient = await client.getClient(clientId);
        res.status(200).json({
            message: 'searched client',
            myClient
        });
    }catch(error){
        next(error);
    }
});

router.post('/', async (req, res, next) => {
    try{
        const data = req.body;
        const confirmation = await client.createClient(data);
        res.status(201).json({
            message: 'user created',
            confirmation
        })
    }catch(error){
        next(error);
    }
});

router.patch('/updateAge/:clientId', async (req, res, next) => {
    try{
        const { clientId } = req.params;
        const { age } = req.body;
        const confirmation = await client.updateClientAge(clientId, age);
        res.status(200).json({
            message: 'user updated',
            confirmation
        });
    }catch(error){
        next(error);
    }
});

router.delete('/:idClient', async (req, res, next) => {
    try{
        const { idClient } = req.params;
        const confirmation = await client.deleteClient(idClient);
        res.status(200).json({
            message: 'user deleted',
            confirmation
        });
    }catch(error){
        next(error);
    }
});

module.exports = router;