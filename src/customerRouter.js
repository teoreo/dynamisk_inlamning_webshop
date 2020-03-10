const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const User = require("../model/userAccount");
const productItem = require("../model/product");

// middleware
const router = express.Router();


// ADMIN

router.get("/admin/createproducts", (req, res) => {
    res.render("admin/createproducts")
})
router.post("/admin/createproducts", async (req, res) => {
    const addProduct = new productItem({
        course: req.body.course,
        title: req.body.course,
        image: req.body.image,
        price: req.body.price,
        description: req.body.description,
        quantity: req.body.quantity,
        weeks: req.body.weeks
    })
    await addProduct.save((error, success) => {
        if (error) {
            error ? res.send(error.message) : res.redirect("/todo")
        }
        else
            res.redirect("/admin/createproducts")
    })
});



router.use(bodyParser.urlencoded({ extended: false }))
router.use(express.urlencoded({ extended: true }));
router.set("view engine", "ejs");
router.use(express.static("public"));
console.log(User)

// customer signup
router.get("/customer/signup", async (req, res) => {

    const findUser = await User.find();
    res.render("customer/signup.ejs", { findUser });
})
router.post("/customer/signup", async (req, res) => {
    const salt = await bcrypt.genSaltSync(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt)
    await new User({
        email: req.body.email,
        password: hashPassword
    }).save();
    const user = await User.find({ email: req.body.email })
    res.render("firstpage.ejs", { user })
})
router.get("/customer/login", (req, res) => {
    res.render("customer/login.ejs");
})

router.post("/customer/login", async (req, res) => {
    const user = await User.findOne({
        email: req.body.loginemail
    })
    if (!user) return res.redirect("/customer/signup")
    const validUser = await bcrypt.compare(req.body.loginpassword, user.password)
    if (!validUser) return res.redirect("/customer/login")
    res.send("hej")
    


})


module.exports = router;
