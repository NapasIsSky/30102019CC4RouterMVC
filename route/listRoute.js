/*var express = require('express')
var router = express.Router()
module.exports = router*/
var express = require('express')
var listControllers = require('../controller/listControllers')
var router = express.Router()

router.get('/:key', listControllers.getData)
router.post('/:key/:value', listControllers.addData)
router.patch('/:key/:value', listControllers.updateData)
router.delete('/:key', listControllers.removeData)

module.exports = router