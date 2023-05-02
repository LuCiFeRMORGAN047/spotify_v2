const usercon = require('../controllers/UserCon')
const {Router} = require('express')
const router = Router()

router.post('/api/user/createplaylist', usercon.Create_playlist)
router.delete('/api/user/deleteplaylist', usercon.Delete_playlist)
router.post('/api/user/like', usercon.like)
router.post('/api/user/unlike', usercon.unlike)
router.post('/api/user/getplaylists',usercon.getplaylist)
router.post('/api/user/likedsongs',usercon.getlikedsongs)
module.exports = router