const db = require('../lib/models/orders');

class Order{
    constructor(){}

    getAll(){
        const orders = db;
        return orders;
    }

    getOne(id){
        const order = db[id];
        return order;
    }

    create(data){
        const ordersAmount = Object.keys(db).length + 1;
        const id = 'o' + ordersAmount;
        db[id] = data;
        return true;
    }

    update(id, data){
        db[id] = data;
        return true;
    }

    delete(id){
        delete db[id];
        return true;
    }

}

module.exports = new Order();