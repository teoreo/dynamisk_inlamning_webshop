const mongoose = require("mongoose");
const express = require("express");
const config = require("./config/config");
const User = require("./router/customer");
const Admin = require("./router/admin");
const path = require("path");
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(User);
app.use(Admin);
// const dbUrl = process.env.MONGO_ATLAS_URL;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));


const dbOptions = { useUnifiedTopology: true, useNewUrlParser: true };
const port = process.env.PORT || 8000;
mongoose.connect(config.databaseURL, dbOptions).then(() => {
  app.listen(port, () => console.log(`App listening on port ${port}!`));
});