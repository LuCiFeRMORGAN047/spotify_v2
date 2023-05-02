const {Router} = require('express')
const search = require('../controllers/SearchCon')
const router = Router()

router.get("/api/search",search.search)
router.get("/api/getdata",search.getdata)
module.exports = router