const { Router } = require('express');
const express = require('express');
const res = require('express/lib/response');
const { read } = require('../controllers/user');
const router = express.Router();
const todo = require('../controllers/todo_list')

router.post('/add', todo.create )
router.get('/read', todo.read)
router.delete('/delete/:serialnumber', todo.remove)
// router.route("/add/todo").post(create)

// router.route("/todo").get(read)

// router.route("/delete/todo/:serialnumber").post(remove)



module.exports = router