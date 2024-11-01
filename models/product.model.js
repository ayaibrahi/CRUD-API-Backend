const mongoose = require('mongoose');
const { type } = require('os');

const proschema = mongoose.Schema({
    name: {
        type: String,
        required: [true,"please enter product name"]
    },
    quantity: {
        type: Number,
        required: true,
        default :0 
    },
    price:{
        type: Number,
        required: true,
        default :0
    },
    image:{
        type: String,
        default : false,
    },

},
{
    timestamps: true,
}
);

const product = mongoose.model('Product',proschema);

module.exports = product;