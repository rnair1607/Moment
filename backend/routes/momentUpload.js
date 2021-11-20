const router = require('express').Router();

const { tokenVerify } = require('../controllers/verifyToken');
const { momentUpload } = require('../controllers/upload');

router.post('/', tokenVerify, momentUpload);

module.exports = router;
