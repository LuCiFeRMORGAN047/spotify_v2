const {Router} = require('express')
const router = Router()
const auth = require('../controllers/AuthCon')
router.post('/api/signup',auth.signup_user)
router.post('/api/login',auth.login_user)
router.get('/api/logout',auth.logout)
module.exports = router
