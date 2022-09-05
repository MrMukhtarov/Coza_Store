const express = require('express')
const router = express.Router();
const settingsController = require('../controller/Setting-Controller')

router.get('/', settingsController.getAllSettings);
router.put('/:id', settingsController.updateSettings);
router.get('/:id', settingsController.getById);
router.delete('/:id', settingsController.deleteSettings);

module.exports=router;