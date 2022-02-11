const database = require('../../dbConfig/elephantsql')

module.exports = async function (req, res) {
 
    try {
      if(req.body) {
          const results = await database.query(`INSERT INTO todo_list(serialnumber, task, userid) VALUES ('${req.body.serialnumber}', '${req.body.task}', '${req.body.userid}' )`)
          res.status(200).json({ data: results})
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ data: error})
    }
  }