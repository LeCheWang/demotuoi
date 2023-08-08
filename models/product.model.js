const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: String,
    category: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "category"
    }
})

module.exports = mongoose.model("product", productSchema)