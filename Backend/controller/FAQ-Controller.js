const Faq = require("../model/Faq-Model")

const getAllFAQs = async (req,res,next) => {
    let faq;
    try {
        faq  = await Faq.find()
    } catch (error) {
         console.log(error);
    }
    if(!faq) {
        return res.status(404).json({message : "No FAQs yet"})
    }
    else{
        return res.status(200).json({faq})
    }
}

const addFAQs = async (req,res,next) => {
    const {subject, answer,id} = req.body;
    let faq;
    try {
        faq = new Faq({
            subject,
            answer,
            id
        })
        await faq.save();
    } catch (error) {
        console.log(error);
    }  
    if(!faq) {
        return res.status(500).json({message : "Unable to Add"})
    }  
    else {
        return res.status(201).json({faq})
    }
}

const getById = async (req,res,next) => {
    const id = req.params.id;
    let faq;
    try {
        faq = await Faq.findById(id);
    } catch (error) {
        console.log(error);
    }
    if(!faq) {
        return res.status(404).json({message: 'No FAQs yet...!'})
    }
    else{
        return res.status(200).json({faq})
    }
}

const updateFAQs = async (req,res,next) => {
    const Id = req.params.id;
    const {subject,answer,id} = req.body;
    let faq;
    try {
        faq = await Faq.findByIdAndUpdate(Id, {
            subject,
            answer,
            id
        })
        faq = await faq.save();
    } 
    catch (error) {
        console.log(error);
    }
    if(!faq) {
        return res.status(404).json({message: 'Unable to Updated by this id...!'})
    }
    else{
        return res.status(200).json({faq})
    }
}

const deleteFAQs = async (req,res,next) => {
    const id = req.params.id;
    let faq;
    try {
        faq = await Faq.findByIdAndDelete(id)
    } 
    catch (error) {
        console.log(err);
    }
    if(!faq) {
        return res.status(404).json({message: 'Unable to Deleted by this id...!'})
    }
    else{
        return res.status(200).json({faq})
    }
}

exports.getAllFAQs = getAllFAQs
exports.addFAQs = addFAQs
exports.getById = getById
exports.updateFAQs = updateFAQs
exports.deleteFAQs = deleteFAQs