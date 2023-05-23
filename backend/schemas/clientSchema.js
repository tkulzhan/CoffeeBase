const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
    name: {
        type: String,
        // required: true
    },
    registrationDate: {
        type: Date,
        default: Date.now()
    },
    order: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order'
    },
    email: {
        type: String,
        // required: true
    },
    bio: {
        type: String,
        // required: true
    },
    password: {
        type: String,
        // required: true
    }
});

module.exports = clientSchema;