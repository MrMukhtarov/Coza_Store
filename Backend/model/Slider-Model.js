const mongoose = require('mongoose')

const sliderScema = new mongoose.Schema({
    title: {
        type: String, 
        required: true
    },
    description: {
        type: String, 
        required: true
    },
    image: {
        type: String, 
        required: true
    }
})

module.exports = mongoose.model('Slider',sliderScema)