const Router = require('express')
const Todo = require('./todo')
const User = require('./user')
const route = Router()

route.use('/todo', Todo)
route.use('/user', User)
module.exports = route