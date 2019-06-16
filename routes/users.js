const express = require('express');
const router = express.Router();

const userController = require('../controllers/users');

router.post('/postUser',userController.createUser);
router.get('/:id',userController.getOneUser);
router.get('/',userController.getAllUsers);
router.put('/:id',userController.updateUser);
router.delete('/:id',userController.deleteUser);

module.exports = router;
