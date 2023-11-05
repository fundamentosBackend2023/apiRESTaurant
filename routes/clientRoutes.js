const express = require('express');
const router = express.Router();
const client = require('./../services/clientServices');

router.get('/', (req, res) => {
    const clients = client.getAllClients();
    res.status(200).json({
        message: 'client list',
        clients
    });
});

router.get('/:clientId', (req, res) => {
    const { clientId } = req.params;
    const myClient = client.getClient(clientId);
    console.log(myClient)
    res.status(200).json({
        message: 'searched client',
        myClient
    })
});

router.post('/', (req, res) => {
    const data = req.body;
    const confirmation = client.createClient(data);
    res.status(201).json({
        message: 'user created',
        confirmation
    })
});

router.patch('/updateAmount/:clientId', (req, res) => {
    const { clientId } = req.params;
    const { amount } = req.body;
    const confirmation = client.updateClient(clientId, amount);
    res.status(200).json({
        message: 'user updated',
        confirmation
    });
});

router.delete('/:idClient', (req, res) => {
    const { idClient } = req.params;
    const confirmation = client.deleteClient(idClient);
    res.status(200).json({
        message: 'user deleted',
        confirmation
    });
});

module.exports = router;