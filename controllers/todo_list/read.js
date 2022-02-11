const database = require('../../dbConfig/elephantsql')

module.exports = async (req, res) => {
    try {
      const results = await database.query("SELECT * FROM todo_list");
      return res.status(200).json({ data: results });
    } catch (error) {
      return res.status(500).json({ error });
    }
  };