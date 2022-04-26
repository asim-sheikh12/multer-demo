const express = require("express");
const app = express();
require("./src/db/connnection");
const router = require("./src/routes/routes");
const PORT = process.env.PORT || 5000;
app.set("view engine", "ejs");
app.use(router);
app.listen(PORT, () => {
  console.log(`App is listening on Port ${PORT}`);
});
