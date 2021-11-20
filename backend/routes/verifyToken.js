const router = require('express').Router();

const { tokenVerify } = require('../controllers/verifyToken');

router.post('/verify', tokenVerify);

module.exports = router;
