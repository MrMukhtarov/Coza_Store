const Settings = require('../model/Settings-Model')

const getAllSettings = async (req,res,next) => {
    let settings;
    try {
        settings = await Settings.find();
    } catch (error) {
        console.log(error);
    }
    if(!settings) {
        return res.status(404).json({message: 'No images yet...!'})
    }
    else{
        return res.status(200).json({settings})
    }
}

const updateSettings = async (req,res,next) => {
    const id = req.params.id;
    const {icon1,icon2,icon3,phone} = req.body;
    let settings;
    try {
        settings = await Settings.findByIdAndUpdate(id, {
            icon1,
            icon2,
            icon3,
            phone
        })
        settings = await settings.save();
    } 
    catch (error) {
        console.log(error);
    }
    if(!settings) {
        return res.status(404).json({message: 'Unable to Updated by this id...!'})
    }
    else{
        return res.status(200).json({settings})
    }
}

const getById = async (req,res,next) => {
    const id = req.params.id;
    let settings;
    try {
        settings = await Settings.findById(id);
    } catch (error) {
        console.log(error);
    }
    if(!settings) {
        return res.status(404).json({message: 'No settings yet...!'})
    }
    else{
        return res.status(200).json({settings})
    }
}

const deleteSettings = async (req,res,next) => {
    const id = req.params.id;
    let settings;
    try {
        settings = await Settings.findByIdAndDelete(id)
    } 
    catch (error) {
        console.log(error);
    }
    if(!settings) {
        return res.status(404).json({message: 'Unable to Deleted by this id...!'})
    }
    else{
        return res.status(200).json({settings})
    }
}


exports.updateSettings = updateSettings;
exports.getAllSettings = getAllSettings;
exports.getById = getById;
exports.deleteSettings = deleteSettings;