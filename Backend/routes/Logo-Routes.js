const express = require('express')
const router = express.Router();
const logoController = require('../controller/Logo-Controller')

router.get('/', logoController.getAllLogo);
router.put('/:id', logoController.updateLogo);
router.get('/:id', logoController.getById);


module.exports=router;