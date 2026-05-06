const express = require("express");
const app = express();
app.set("view engine", "ejs"); //embeded javascript
app.set("views", "halaman");

app.get("/dashboard", (req, res) => {
  res.render("Beranda");
});

// console.log(5 ** 4);
app.listen(7500, () => console.log("Server is running on port 7500"));
