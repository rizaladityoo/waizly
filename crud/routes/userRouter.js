const userController = require('../controllers/userController');
const roleController = require('../controllers/roleController');

const { Router } = require('express');
const router = Router();
const auth = require('../middleware/auth')

router.get('/user', userController.getAllUser)
router.post('/user', auth, userController.createUser)
router.put('/user/:id', userController.editUser)
router.delete('/user/:id', userController.deleteUser)

router.get('/role', roleController.getAllRole)
router.post('/role', roleController.createRole)
router.put('/role/:id', roleController.editRole)
router.delete('/role/:id', roleController.deleteRole)

module.exports = router;