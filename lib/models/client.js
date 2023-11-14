const { Schema, model } = require('mongoose');

const clientSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true,
        min: 18
    }
});

const clientModel = model('client', clientSchema);

module.exports = clientModel;