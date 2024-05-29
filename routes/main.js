const { Router } = require('express');
const router = Router();
const { getMainPage, getUserPageByUid } = require('../controllers/main')
 
router.get('/', getMainPage)
router.get('/:uid', getUserPageByUid)

module.exports = router;