const db = require("../config/db_connection");

const loginController = {
  login: (req, res) => {
    const { username, password } = req.body;
    const query = `SELECT * FROM master_login WHERE userid = ? AND pass = ?`;

    db.query(query, [username, password], (err, results) => {
      if (err) throw err;
      if (results.length > 0) {
        res.render("home.ejs");
      } else {
        res.render("login.ejs", { message: "Incorrect username or password." });
      }
    });
  },
};

module.exports = loginController;
