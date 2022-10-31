const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require('bcrypt');

//Register
router.post("/register", async (req, res) => {
    try{
       
        const salt = await bcrypt.genSalt(10);
        const hasedPass = await bcrypt.hash(req.body.password, salt);
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hasedPass,
        });

        const user = await newUser.save();
        res.status(200).json(user);
        return;
    } catch(err) {
        res.status(500).json(err);
        return;
    }
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if(!user && res.status(400).json("Wrong credentials!"))
    {
      return;
    }
    
    const validated = await bcrypt.compare(req.body.password, user.password);
    if(!validated && res.status(400).json("Wrong credentials!"))
    {
      return;
    }

    const { password, ...others } = user._doc;
    res.status(200).json(others);
    return;
  } catch (err) {
    res.status(500).json(err);
    return;
  }
});

module.exports = router;