const clientDB = require('./../lib/models/client');

class Client {
    constructor(){}

    static getAllClients(){
        const clients = clientDB;
        return clients;
    }

    static getClient(clientId){
        const client = clientDB[clientId];
        return client;
    }

    static createClient(data){
        const usersAmount = Object.keys(clientDB).length + 1;
        const id = 'c' + usersAmount;
        clientDB[id] = data;
        return true;
    }

    static updateClient(clientId, amount){
        clientDB[clientId].amount += amount;
        return true;
    }

    static deleteClient(clientId){
        delete clientDB[clientId];
        return true;
    }

}

module.exports = Client;