const mongoose = require('mongoose')

const settingSchema = new mongoose.Schema({
    icon1 : {
        type : String,
        required : true
    },
    icon2 : {
        type : String,
        required : true
    },
    icon3 : {
        type : String,
        required : true
    },
    phone : {
        type : String,
        required : true
    }
})


module.exports = mongoose.model('Settings',settingSchema)