const database = require("../../dbConfig/elephantsql")

module.exports = async (req, res) => {
    try {
      if(req.params.serialnumber) {
          const results = await database.query(` DELETE FROM todo_list WHERE serialnumber = ${req.params.serialnumber} `)
          res.status(200).json({ data: results})
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ data: error})
    }
  }