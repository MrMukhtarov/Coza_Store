const mongoose = require('mongoose')

const cardSchema = new mongoose.Schema({
    image : {
        type : String,
        required : true
    },
    name : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    }
})


module.exports = mongoose.model('Cards',cardSchema)