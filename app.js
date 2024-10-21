const PORT = process.env.PORT || 8000;
const express = require("express");
const app = express();
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

// app.use("/login", loginRoutes);
// app.use("/signup", signupRoutes);

app.get("/", (req, res) => res.render("home.ejs"));
app.get("/about_us", (req, res) => res.render("about_us.ejs"));
app.get("/login", (req, res) => res.render("login.ejs"));
app.get("/reserve", (req, res) => res.render("reserve.ejs"));
// app.get("/about", (req, res) => res.render("about_us.ejs"));

app.listen(PORT, () => {
  console.log("Server is running..");
});
