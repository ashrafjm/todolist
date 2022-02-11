const express = require("express");
const database = require("./dbConfig/elephantsql");
const { query } = require("./dbConfig/elephantsql");
const cors = require("cors");
const res = require("express/lib/response");
// const router = require('./routes/todo')
const Router = require('./routes')

const port = 9000;
const app = express();

app.use(express.json());
app.use('/', Router);

// console.log("HERE")

app.listen(port, () => { console.log('Server is listening at port 9000')});