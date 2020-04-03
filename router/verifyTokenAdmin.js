const jwt = require("jsonwebtoken");
module.exports = (req, res, next) => {
    
    const token = req.cookies.jsonwebtoken;
    if (token) {
        const admin = jwt.verify(token, "secretKeyAdmin")
        req.admin = admin;
        next();
    } else {
        res.send("Error message: You have to log in first!");
    }
};