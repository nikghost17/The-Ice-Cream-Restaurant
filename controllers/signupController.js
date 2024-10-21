const db = require("../config/db_connection");

const signupController = {
  signup: (req, res) => {
    const { username, password } = req.body;
    const query = `INSERT INTO master_login (userid, pass) VALUES (?, ?)`;

    db.query(query, [username, password], (err, results) => {
      if (err) throw err;
      res.render("login.ejs", { message: "Account created. Please log in." });
    });
  },
};

module.exports = signupController;
