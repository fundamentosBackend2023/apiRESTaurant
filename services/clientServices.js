const boom = require('@hapi/boom');
const clientDB = require('./../lib/models/client');

class Client {
    constructor(){}

    static async getAllClients(minAge){
        let filter = {};
        if(minAge){
            filter.age = {$gte: minAge }
        }
        const clients = await clientDB.find(filter);
        return clients;
    }

    static async getClient(clientId){
        // No olviden considerar la operación asíncrona, de lo contrario
        // el retorno que tendrán será solo una pending promise.
        const client = await clientDB.findById(clientId);
        if(!client){
            throw boom.notFound('client not found');
        }
        return client;
    }

    static async createClient(data){
        const client = new clientDB(data);
        await client.save()
        return true;
    }

    static async updateClientAge(clientId, age){
        // Usamos el mismo método de getOne para obtener el cliente buscado
        // No olviden que es asíncrono así que hay que manejar su respuesta
        // de forma asíncrona.
        // Además, de esta forma si no encuentra un match, el método que
        // ya hicimos manejará el error.
        const client = await this.getClient(clientId);
        // Modificamos en el documento lo que haga falta como si
        // modificaramos un objeto nativo.
        client.age = age;
        // Guardamos los cambios hechos al modelo.
        await client.save();
        return true;
    }

    static async deleteClient(clientId){
        await clientDB.findByIdAndDelete(clientId);
        return true;
    }

}

module.exports = Client;