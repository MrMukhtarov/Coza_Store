const Cards = require('../model/Card-Model')

const getAllCards = async (req,res,next) => {
    let cards;
    try {
        cards = await Cards.find();
    } catch (error) {
        console.log(error);
    }
    if(!cards) {
        return res.status(404).json({message: 'No images yet...!'})
    }
    else{
        return res.status(200).json({cards})
    }
}

const addCards = async (req,res,next) => {
    const {image,name,price} = req.body;
    let cards;
    try {
        cards = new Cards({
            image,
            name,
            price
        })
        await cards.save();
    } catch (error) {
        console.log(error);
    }
    if(!cards) {
        return res.status(500).json({message: 'Unable to Add...!'})
    }
    else{
        return res.status(201).json({cards})
    }
}

const getById = async (req,res,next) => {
    const id = req.params.id;
    let cards;
    try {
        cards = await Cards.findById(id);
    } catch (error) {
        console.log(error);
    }
    if(!cards) {
        return res.status(404).json({message: 'No sliders yet...!'})
    }
    else{
        return res.status(200).json({cards})
    }
}

const updateCards = async (req,res,next) => {
    const id = req.params.id;
    const {image,name,price} = req.body;
    let cards;
    try {
        cards = await Cards.findByIdAndUpdate(id, {
            image,
            name,
            price
        })
        cards = await cards.save();
    } 
    catch (error) {
        console.log(err);
    }
    if(!cards) {
        return res.status(404).json({message: 'Unable to Updated by this id...!'})
    }
    else{
        return res.status(200).json({cards})
    }
}

const deleteCards = async (req,res,next) => {
    const id = req.params.id;
    let cards;
    try {
        cards = await Cards.findByIdAndDelete(id)
    } 
    catch (error) {
        console.log(err);
    }
    if(!cards) {
        return res.status(404).json({message: 'Unable to Deleted by this id...!'})
    }
    else{
        return res.status(200).json({cards})
    }
}

exports.getAllCards = getAllCards;
exports.addCards = addCards;
exports.getById = getById;
exports.updateCards = updateCards;
exports.deleteCards = deleteCards;