const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const User = require("../model/userAccount");
const productItem = require("../model/product");
const jwt = require("jsonwebtoken");
const verifyToken = require("./verifyToken")

// middleware
const router = express();

router.use(bodyParser.urlencoded({ extended: false }))
router.use(express.urlencoded({ extended: true }));
router.set("view engine", "ejs");
router.use(express.static("public"));
console.log(User)

const userROUTE = {
    main: "/",
    bookings: "/booking",
    payments: "/payment",
    login: "/login",
    signup: "/signup",
    welcome: "/welcome",
    settings: "/settings",
    orders: "/orders",
    logout: "/logout",
    thankyou: "/thankyou",
    delete: "/delete/:id"
};

const userVIEW = {
    main: "landingpage",
    bookings: "booking",
    payments: "payment",
    login: "login",
    signup: "signup",
    welcome: "welcome",
    orders: "orders",
    settings: "settings",
    orders: "orders",
    thankyou: "thankyou"
}

// customer main
router.get(userROUTE.main, (req, res) => {
    res.render(userVIEW.main);
});

router.post(userROUTE.main, async (req, res) => {

});
// customer booking
router.get(userROUTE.bookings, (req, res) => {
    res.render(userVIEW.bookings);
});

router.post(userROUTE.bookings, async (req, res) => {

});
// customer payments
router.get("/customer/checkout", (req, res) => {
    res.render("checkout.ejs");
});

router.post("/customer/checkout", async (req, res) => {

});
// customer signup
router.get(userROUTE.signup, async (req, res) => {
    const errorMessage = ""
    const findUser = await User.find();
    res.render(userVIEW.signup, { findUser, errorMessage });
});

router.post(userROUTE.signup, async (req, res) => {
    const salt = await bcrypt.genSaltSync(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt)
    const user = await User.findOne({ email: req.body.email })
    if (user) return res.render(userVIEW.signup, { errorMessage: "Email already exist" })
    await new User({
        email: req.body.email,
        password: hashPassword
    }).save();
    res.render(userVIEW.welcome, { user })
});
// customer login
router.get(userROUTE.login, (req, res) => {
    const errorMessage = ""
    res.render(userVIEW.login, { errorMessage });
});

router.post(userROUTE.login, async (req, res) => {
    const user = await User.findOne({
        email: req.body.loginemail
    })
    if (!user) return res.render(userVIEW.login, { errorMessage: "Email does not exist" })
    const validUser = await bcrypt.compare(req.body.loginpassword, user.password)
    if (!validUser) return res.render(userVIEW.login, { errorMessage: "Wrong password" })
    res.redirect(userROUTE.welcome)

    jwt.sign({ user }), "secretKey", (err, token) => {
        if (err) return res.redirect(userROUTE.login);
        if (token) {
            const cookie = req.cookies.jsonwebtoken;
            if (!cookie) {
                res.cookie("jsonwebtoken", token, { maxAge: 250000000, httpOnly: true });
            }
            res.render(userVIEW.welcome, { user });
        }
        res.redirect(userROUTE.login);
    };
});

router.get(userROUTE.logout, (req, res) => {
    res.clearCookie("jsonwebtoken").redirect(userROUTE.main);
});

// customer welcome
router.get(userROUTE.welcome, (req, res) => {
    res.render(userVIEW.welcome);
});

router.post(userROUTE.welcome, async (req, res) => {

});

// customer settings
router.get(userROUTE.settings, (req, res) => {
    res.render(userVIEW.settings);
});

router.post(userROUTE.settings, async (req, res) => {

});

// customer orders
router.get(userROUTE.orders, (req, res) => {
    res.render(userVIEW.orders);
});

router.post(userROUTE.orders, async (req, res) => {

});
// customer thankyou
router.get(userROUTE.thankyou, (req, res) => {
    res.render(userVIEW.thankyou);
});

router.post(userROUTE.thankyou, async (req, res) => {

});

module.exports = router;