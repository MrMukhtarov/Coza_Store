const Photos = require('../model/Photos-Model')

const getAllPhotos = async (req,res,next) => {
    let photos;
    try {
        photos = await Photos.find();
    } catch (error) {
        console.log(error);
    }
    if(!photos) {
        return res.status(404).json({message: 'No images yet...!'})
    }
    else{
        return res.status(200).json({photos})
    }
}

const addPhoto = async (req,res,next) => {
    const {image} = req.body;
    let photos;
    try {
        photos = new Photos({
            image
        })
        await photos.save();
    } catch (error) {
        console.log(err);
    }
    if(!photos) {
        return res.status(500).json({message: 'Unable to Add...!'})
    }
    else{
        return res.status(201).json({photos})
    }
}

const getById = async (req,res,next) => {
    const id = req.params.id;
    let photos;
    try {
        photos = await Photos.findById(id);
    } catch (error) {
        console.log(error);
    }
    if(!photos) {
        return res.status(404).json({message: 'No sliders yet...!'})
    }
    else{
        return res.status(200).json({photos})
    }
}

const updatePhoto = async (req,res,next) => {
    const id = req.params.id;
    const {image} = req.body;
    let photos;
    try {
        photos = await Photos.findByIdAndUpdate(id, {
            image,
        })
        photos = await photos.save();
    } 
    catch (error) {
        console.log(error);
    }
    if(!photos) {
        return res.status(404).json({message: 'Unable to Updated by this id...!'})
    }
    else{
        return res.status(200).json({photos})
    }
}

const deletePhoto = async (req,res,next) => {
    const id = req.params.id;
    let photos;
    try {
        photos = await Photos.findByIdAndDelete(id)
    } 
    catch (error) {
        console.log(err);
    }
    if(!photos) {
        return res.status(404).json({message: 'Unable to Deleted by this id...!'})
    }
    else{
        return res.status(200).json({photos})
    }
}

exports.getAllPhotos = getAllPhotos;
exports.addPhoto = addPhoto;
exports.getById = getById;
exports.updatePhoto = updatePhoto;
exports.deletePhoto = deletePhoto;