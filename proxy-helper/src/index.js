const express = require("express");
const app = express();
const port = 3001;
app.set("view engine", "ejs");

app.get("/render/:subdomain", (req, res) => {
  const subdomain = req.params.subdomain;
  res.render("pages/index", { subdomain: subdomain });
});

app.listen(port, () => {
  console.log(`Reverse proxy running ${port}`);
});
