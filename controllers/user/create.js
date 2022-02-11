const database = require('../../dbConfig/elephantsql')

module.exports = async function (req, res) {
 
    try {
      if(req.body) {
          console.log('here');
          const results = await database.query(`INSERT INTO User_data(UserID, UserName, Password) VALUES ('${req.body.UserID}', '${req.body.UserName}', '${req.body.Password}' )`)
          res.status(200).json({ data: results})
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ data: error})
    }
  }