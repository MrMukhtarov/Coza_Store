const mongoose = require('mongoose')

const formMessageScheme = new mongoose.Schema({
    email : {
        type : String,
        required : true
    },
    message : {
        type : String,
        required : true
    }
})


module.exports = mongoose.model('Message',formMessageScheme)