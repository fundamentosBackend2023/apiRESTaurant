const { Schema, model } = require('mongoose');

const orderSchema = new Schema({
    amount: {
        type: Number,
        min: 50,
        required: true
    },
    // Así se indica una relación con mongoose. Recuerden que no hay reglas
    // para ellas como en las relacionales, entonces cuando quieran conectar
    // un modelo con otro, solo creen la conexión como se muestra abajo
    client: {
        // El type de las "llaves" debe ser el ObjectId, que recordemos,
        // es el tipo de dato de los id de los documentos.
        type: Schema.ObjectId,
        // En ref indicas el nombre del MODELO con el que quieres conectar
        ref: 'client'
        // Cuando inserten un elemento, este campo debe contener el id
        // del cliente al que quieren relacionar.
    }
});

const orderModel = model('orders', orderSchema);

module.exports = orderModel;