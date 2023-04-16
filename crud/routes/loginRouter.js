const loginController = require('../controllers/loginController');

const { Router } = require('express');
const router = Router();

router.post('/login', loginController.login)

module.exports = router;