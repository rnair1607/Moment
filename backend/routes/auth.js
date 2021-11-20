const router = require('express').Router();

const { registerAuth, loginAuth } = require('../controllers/auth');

// Register a user
router.post('/register', registerAuth);

//Login a user
router.post('/login', loginAuth);

module.exports = router;
