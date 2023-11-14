const orderModel = require('../lib/models/orders');
class Order{
    constructor(){}

    async getAll(){
        // El método populate permite que el campo "llave" no se muestre
        // solo como un id, sino que se llene con la información del
        // documento al que hace referencia.
        // El parámetro que recibe es el nombre del campo "llave" en el
        // esquema de este modelo.
        const orders = await orderModel.find().populate('client');
        return orders;
    }

    getOne(id){
        const order = orderModel[id];
        return order;
    }

    async create(data){
        const newOrder = new orderModel(data);
        await newOrder.save();
        return true;
    }

    update(id, data){
        orderModel[id] = data;
        return true;
    }

    delete(id){
        delete orderModel[id];
        return true;
    }

}

module.exports = new Order();