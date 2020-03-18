const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const Admin = require("../model/admin");
const productItem = require("../model/product");

// middleware
const router = express();

router.use(bodyParser.urlencoded({ extended: false }))
router.use(express.urlencoded({ extended: true }));
router.set("view engine", "ejs");
router.use(express.static("public"));

// Variables
const adminROUTE = {
    main: "/admin",
    login: "/admin/login",
    // signup: "/admin/signup",
    welcome: "/admin/welcome",
    products: "/admin/products",
    createproduct: "/admin/createproducts",
    editproduct: "/admin/editproduct",
    deleteproduct: "/admin/deleteproduct/:id",
    orders: "/admin/orders",
    editorders: "/admin/editorders/:id",
    settings: "/admin/settings"
};

const adminVIEW = {
    main: "admin/main",
    login: "admin/login",
    // signup: "admin/signup",
    welcome: "admin/welcome",
    products: "admin/products",
    createproduct: "admin/createproduct",
    editproduct: "admin/editproduct",
    orders: "admin/orders",
    editorders: "admin/editorders/:id",
    settings: "admin/settings"
};

// admin main
router.get(adminROUTE.main, (req, res) => {
    res.render(adminVIEW.main);
});

router.post(adminROUTE.main, async (req, res) => {

});
// admin welcome
router.get(adminROUTE.welcome, (req, res) => {
    res.render(adminVIEW.welcome);
});

router.post(adminROUTE.welcome, async (req, res) => {

});

// admin login
router.get(adminROUTE.login, async (req, res) => {
    // const admin = await new Admin({
    //     email: "admin@websurfers.com",
    //     password: "admin"
    // }).save();
    const errorMessage = ""
    res.render(adminVIEW.login, { errorMessage });
});

router.post(adminROUTE.login, async (req, res) => {
    const admin = await Admin.findOne({
        email: req.body.loginemail,
        password: req.body.loginpassword
    })
    if (!admin) return res.render(adminVIEW.login, { errorMessage: "You are not an admin or wrong password" })
    res.redirect(adminROUTE.welcome);
});

// // admin signup
// router.get(adminROUTE.signup, (req, res) => {
//     res.render(adminVIEW.signup);
// });

// router.post(adminROUTE.signup, async (req, res) => {

// });
// admin products
router.get(adminROUTE.products, (req, res) => {
    res.render(adminVIEW.products);
});

router.post(adminROUTE.products, async (req, res) => {
    
});

// admin createproduct
router.get("/admin/createproducts", (req, res) => {
    res.render("admin/createproducts")
})
router.post("/admin/createproducts", async (req, res) => {
    const addProduct = new productItem({
        course: req.body.course,
        title: req.body.title,
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
// admin editproduct
router.get(adminROUTE.editproduct, async (req, res) => {
    const response = await productItem.findById({_id:req.params.id})
    res.render(adminVIEW.editproduct, {response})
})

router.post(adminROUTE.editproduct, async (req,res)=>{
    await productItem.updateOne({_id:req.body._id},
        {$set: {text: req.body.text, done:req.body.done}},
    {runValidators:true}, (error)=> error? res.send(error.message): res.redirect(adminROUTE.products) 
    
    )
})

// admin orders
router.get(adminROUTE.orders, (req, res) => {
    res.render(adminVIEW.orders);
});

router.post(adminROUTE.orders, async (req, res) => {
    res.send("Now on edit product")
});

// admin settings 
router.get(adminROUTE.settings, (req, res) => {
    res.render(adminVIEW.settings);
});

router.post(adminROUTE.settings, async (req, res) => {

});



module.exports = router;