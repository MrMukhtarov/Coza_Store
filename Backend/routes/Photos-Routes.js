const express = require('express')
const router = express.Router();
const photosController = require('../controller/Photos-Controller')




router.get('/', photosController.getAllPhotos);
router.post('/', photosController.addPhoto);
router.get('/:id', photosController.getById);
router.put('/:id', photosController.updatePhoto);
router.delete('/:id', photosController.deletePhoto);

module.exports=router;