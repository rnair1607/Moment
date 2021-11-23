const router = require('express').Router();

const { tokenVerify } = require('../controllers/verifyToken');
const { momentUpload, momentDelete } = require('../controllers/upload');

router.post('/', tokenVerify, momentUpload);
router.post('/delete', tokenVerify, momentDelete);

module.exports = router;
