const mongoose = require('mongoose');

const connectToMongo = async() => {
    await mongoose.connect(process.env.MONGOURL);
    console.log('Successfully connected to Mongo');
}

module.exports = connectToMongo;