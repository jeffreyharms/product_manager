const mongoose = require('mongoose')


const ProductSchema = new mongoose.Schema({
    title : {
        type: String,
        required: [true,"title required"],
        minlength: [3, "title must be 3 characters"]
    },
    price : {
        type: Number,
        required: [true,"price required"]
    },
    description : {
        type: String,
        required: [true,"description required"],
        minlength: [3, "description must be 3 characters"]
    },
},{timestamps:true})

module.exports = mongoose.model('Product', ProductSchema)