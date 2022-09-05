const express = require('express');
var cors = require('cors')
const mongoose = require('mongoose');
const port = 3002;
const cardroute = require('./routes/Card-Router')
const instaroute = require('./routes/Instagram-Router')
const phototoute = require('./routes/Photos-Routes')
const settingroute = require('./routes/Settings-Routes')
const sliderroute = require('./routes/Slider-Routes')
const logoroute = require('./routes/Logo-Routes')

const app = express();

app.use(cors())
app.use(express.json())
app.use('/card', cardroute)
app.use('/instagram', instaroute)
app.use('/photo', phototoute)
app.use('/setting', settingroute)
app.use('/slider', sliderroute)
app.use('/logo', logoroute)


mongoose.connect('mongodb+srv://Nijat:gXIlfSzMfJdpsrxd@cluster0.7gksg.mongodb.net/FinalProjectDB?retryWrites=true&w=majority')
.then(() => console.log('Connect Database...!'))
.then(() => {
    app.listen(port)
})
.catch((err) => console.log(err))