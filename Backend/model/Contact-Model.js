const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
    adress : {
        type : String,
        required : true
    },
    phone : {
        type : String,
        required : true
    },
    mail : {
        type : String,
        required : true
    }
})


module.exports = mongoose.model('Contact',contactSchema)