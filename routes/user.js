const { Router } = require('express');
const express = require('express');
const res = require('express/lib/response');
const router = express.Router();
const User = require('../controllers/user')

// router.route("/add/user").post(create)
router.post('/add', User.create)
router.get('/read', User.read)
router.delete('/delete/:UserID', User.remove)

// router.route('/user').post(User.create).get(User.read).delete()

// router.route("/user").get(read)

// router.route("/delete/user/:UserID").post(remove)



module.exports = router