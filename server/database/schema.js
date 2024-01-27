const {Schema, model, default: mongoose} = require("mongoose");

const My_schema = new Schema({
    items: {
        type: String,
        required: true,
    },
    stock: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    margin: {
        type: Number,
        required: true,
    }
}, {timestamps: true});

const Inventory_data = mongoose.model("Inventory_data", My_schema);

module.exports = Inventory_data;