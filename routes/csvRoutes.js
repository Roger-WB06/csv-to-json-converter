const express = require('express')
const { csvToJson, getJsonData } = require('../controllers/csvController')
const upload = require('../middleware/upload')
const router = express.Router()


router.route('/').post(upload.single('csv'),  csvToJson).get(getJsonData)


module.exports = router