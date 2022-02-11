// const pg = require("pg");

// let conString = "postgres://uaeqixxc:MggU7LbsW6mpZZM_qH6qKCNiiIdHkQuz@kesavan.db.elephantsql.com/uaeqixxc" 
// let client = new pg.Client(conString);
// client.connect(function(err) {
//   if(err) {
//     return console.error('could not connect to postgres', err);
//   }
//   client.query('SELECT NOW() AS "theTime"', function(err, result) {
//     if(err) {
//       return console.error('error running query', err);
//     }
//     console.log(result.rows[0].theTime);
//     // >> output: 2018-08-23T14:02:57.117Z
//     client.end();
//   });
// });

const {Pool} = require('pg')

const pool = new Pool({connectionString: 'postgres://uaeqixxc:MggU7LbsW6mpZZM_qH6qKCNiiIdHkQuz@kesavan.db.elephantsql.com/uaeqixxc'})

exports.query = async function(query) {
    try {
        const results = await pool.query(query)
        console.log(results.rows)
        return results.rows
    } catch (error) {
        throw error
    }
}