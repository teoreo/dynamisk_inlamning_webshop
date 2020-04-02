const mongoose        = require("mongoose");
const express         = require("express");
const config          = require("./config/config"); 
const User            = require("./router/customerRouter"); 
const Admin           = require("./router/adminRouter"); 
const path            = require("path");
const app             = express();
const cookieparser    = require("cookie-parser");
const env             = require("dotenv").config({ path: "./.env" });
const stripe          = require("stripe")(process.env.STRIPE_SECRET_KEY);



app.use(cookieparser());

app.use(express.urlencoded({
  extended: true
}));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.use(User);
app.use(Admin);

const dbOptions = {
  useUnifiedTopology: true,
  useNewUrlParser: true
};
const port = process.env.PORT || 8004;
mongoose.connect(config.databaseURL, dbOptions).then(() => {
  app.listen(port, () => console.log(`App listening on port ${port}!`));
});