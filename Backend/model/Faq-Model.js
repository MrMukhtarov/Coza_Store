const mongoose = require("mongoose")

const FaqSchema = new mongoose.Schema({
    subject : {
        type : String,
        required : true
    },
    answer : {
        type : String,
        required : true
    },
    id : {
        type : Number,
        required : true
    }
})

module.exports = mongoose.model("FAQs", FaqSchema)