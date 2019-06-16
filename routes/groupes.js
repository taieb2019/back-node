const express = require('express');
const router = express.Router();
const groupeController = require('../controllers/groupes');

router.post('/postGroupe',groupeController.createGroupe);
router.get('/:id',groupeController.getOneGroupe);
router.get('/',groupeController.getAllGroupes);
router.put('/:id',groupeController.updateGroupe);
router.delete('/:id',groupeController.deleteGroupe);

module.exports = router;
