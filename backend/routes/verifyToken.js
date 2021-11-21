const router = require('express').Router();

const { tokenValidate } = require('../controllers/verifyToken');

router.get('/verify', tokenValidate);

module.exports = router;
