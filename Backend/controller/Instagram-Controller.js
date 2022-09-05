const Instagram = require('../model/instagram-Model')

const getAllInstagram = async (req,res,next) => {
    let instagram;
    try {
        instagram = await Instagram.find();
    } catch (error) {
        console.log(error);
    }
    if(!instagram) {
        return res.status(404).json({message: 'No images yet...!'})
    }
    else{
        return res.status(200).json({instagram})
    }
}

const addInstagram = async (req,res,next) => {
    const {image,message,user} = req.body;
    let instagram;
    try {
        instagram = new Instagram({
            image,
            message,
            user
        })
        await instagram.save();
    } catch (error) {
        console.log(err);
    }
    if(!instagram) {
        return res.status(500).json({message: 'Unable to Add...!'})
    }
    else{
        return res.status(201).json({instagram})
    }
}

const getById = async (req,res,next) => {
    const id = req.params.id;
    let instagram;
    try {
        instagram = await Instagram.findById(id);
    } catch (error) {
        console.log(error);
    }
    if(!instagram) {
        return res.status(404).json({message: 'No posts yet...!'})
    }
    else{
        return res.status(200).json({instagram})
    }
}

const updateInstagram = async (req,res,next) => {
    const id = req.params.id;
    const {image,message,user} = req.body;
    let instagram;
    try {
        instagram = await Instagram.findByIdAndUpdate(id, {
            image,
            message,
            user
        })
        instagram = await instagram.save();
    } 
    catch (error) {
        console.log(error);
    }
    if(!instagram) {
        return res.status(404).json({message: 'Unable to Updated by this id...!'})
    }
    else{
        return res.status(200).json({instagram})
    }
}

const deleteInstagram = async (req,res,next) => {
    const id = req.params.id;
    let instagram;
    try {
        instagram = await Instagram.findByIdAndDelete(id)
    } 
    catch (error) {
        console.log(err);
    }
    if(!instagram) {
        return res.status(404).json({message: 'Unable to Deleted by this id...!'})
    }
    else{
        return res.status(200).json({instagram})
    }
}

exports.getAllInstagram = getAllInstagram;
exports.addInstagram = addInstagram;
exports.getById = getById;
exports.updateInstagram = updateInstagram;
exports.deleteInstagram = deleteInstagram;