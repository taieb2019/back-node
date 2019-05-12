const express = require('express');
const router = express.Router();

const adminController = require('../controllers/admins');

router.post('/',adminController.createAdmin);
router.get('/:id',adminController.getOneAdmin);
router.get('/getAll',adminController.getAllAdmins);
router.put('/:id',adminController.updateAdmin);
router.delete('/:id',adminController.deleteAdmin);

module.exports = router;