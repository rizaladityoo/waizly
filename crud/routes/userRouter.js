const userController = require('../controllers/userController');

const { Router } = require('express');
const router = Router();

router.get('/user', userController.getAllUser)
router.post('/user', userController.createUser)
router.put('/user/:id', userController.editUser)
router.delete('/user/:id', userController.deleteUser)

module.exports = router;