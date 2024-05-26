const { Router } = require('express');
const router = Router();
const { getMainPage } = require('../controllers/main')
 
router.get('/', getMainPage)

module.exports = router;