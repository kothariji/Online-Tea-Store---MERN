var express = require('express')
var router = express.Router()
const {
    signout,
    signup,
    signin,
    isSignedIn
} = require("../controllers/auth");
const {
    check,
    validationResult
} = require('express-validator');

router.post("/signup", [
    check("name", "name should be atleast 3 characters long").isLength({
        min: 5
    }),
    check("email", "email is required").isEmail(),
    check("password", "password atleast 3 char").isLength({
        min: 3
    })
], signup);

router.post("/signin", [

    check("email", "email is required").isEmail(),
    check("password", "password is recquired").isLength({
        min: 3
    })
], signin);


router.get("/signout", signout);


router.get("/testroute", isSignedIn, (req, res) => {
    res.json(req.auth);
});

module.exports = router;