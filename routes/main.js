const { Router } = require('express');
const router = Router();
const { getMainPage, getUserPageByUid } = require('../controllers/main')
 
router.get('/', getMainPage)
router.get('/users/:id', getUserPageByUid)

module.exports = router;