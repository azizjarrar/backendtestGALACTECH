const express = require('express')
const router = express.Router()
const todo_controler = require('../controllers/todo_controler')


router.post('/' ,todo_controler.add)
router.get('/', todo_controler.get)
router.post('/delete',todo_controler.delete)
router.put('/',todo_controler.update)


module.exports = router
