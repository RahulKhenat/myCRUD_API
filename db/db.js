const mysql = require("mysql");

const pool = mysql.createConnection({
  connectionlimit: 10,
  host: "localhost",
  user: "root",
  password: "root",
  database: "vikas",
  port: "3306",
});

let vikas = {};

vikas.get = () => {
  return new promise((resolve, reject) => {
    pool.query("SELECT  * from vikas", (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
};

module.exports = vikas;
