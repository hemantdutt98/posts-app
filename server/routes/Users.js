const express = require("express");
const router = express.Router();
const {Users} = require("../models");
const {sign} = require("jsonwebtoken");
const bcrypt = require('bcrypt');

router.post("/", async (req, res) => {
    const {username, password} = req.body;
    bcrypt.hash(password, 10).then((hash) => {
        Users.create({
            username: username,
            password: hash,
        });
        res.json("User has been added.");
    });
});

router.post("/login", async (req, res) => {
    const {username, password} = req.body;
    const user = await Users.findOne({where: {username: username}});

    if(!user) res.json({error: "User does not exist"});
    else {
        bcrypt.compare(password, user.password).then((match) => {
        if(!match) res.json({error: "Wrong username and password combination."})
        else {
            const accessToken = sign({username: user.username, id: user.id}, "secret");
            res.json(accessToken);
        };
    })}

})
module.exports = router;