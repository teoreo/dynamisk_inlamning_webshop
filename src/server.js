const express = require("express");

const path = require("path")

const bodyParser = require("body-parser")
const app = express();

const port = process.env.PORT || 2000;

const productItem = require("../model/product");



app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

// ADMIN

app.get("/admin/createproducts", (req,res)=> {
    res.render("admin/createproducts")
})
app.post("/admin/createproducts", async (req,res) =>{
    const addProduct = new productItem({
        course: req.body.course,
        title: req.body.course,
        image: req.body.image,
        price: req.body.price,
        description: req.body.description,
        quantity: req.body.quantity,
        weeks: req.body.weeks
    })
    await addProduct.save((error,success)=>{
    if (error){
      error? res.send(error.message): res.redirect("/todo")
    }
    else
    res.redirect("/admin/createproducts")
})
  });

const userAccount = require("../model/userAccount");

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));

// customer signup
app.get("/customer/signup", async (req, res) => {
    res.render("customer/signup")
})
app.post("/signup", async (req, res) => {
    await new userAccount({
        email: req.body.email, password: req.body.password
    }).save((error, success) => {
        if (error) {
            console.log(error);
            res.send(error._message)
        } else {
            res.redirect("/customer/login")
        }
    })
})
// customer login 
app.get("/customer/login", async (req, res) => {
    res.render("customer/login");
})



module.exports = { app, port, express };
