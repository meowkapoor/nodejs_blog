const mongoose = require('mongoose');

async function connectMongoDb(url) {
    return mongoose
    .connect(url)
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log("Connection failed with error: ", err));
}

module.exports = connectMongoDb;