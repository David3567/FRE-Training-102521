const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

exports.createUser = (req, res, next) => {
    bcrypt.hash(req.body.password, 10).then(hash => {
      const user = new User({
        email: req.body.email,
        password: hash
      });
      // console.log(user);
      user
        .save()
        .then(result => {
        
          console.log(result);
          res.status(201).json({
            message: "User created!",
            result: result
          });
        })
        .catch(err => {
          res.status(500).json({
             message: "Invalid authentication creadential!"
          });
        });
    });
  }

  exports.userLogin = (req, res, next) => {
    let fetchedUser;
    // console.log(req.body);
    User.findOne({ email: req.body.email })
      .then(user => {
        if (!user) {
          return res.status(401).json({
            message: "Auth failed"
          });
        }
        fetchedUser = user;
        console.log(fetchedUser);
        // console.log(req.body);
        return bcrypt.compare(req.body.password, user.password);
      })
      .then(result => {
        //   console.log(result);
        if (!result) {
          return res.status(401).json({
            message: "Auth failed"
          });
        }
        const token = jwt.sign(
          { email: fetchedUser.email, userId: fetchedUser._id },
          "secret_this_should_be_longer",
          { expiresIn: "1h" }
        );
        res.status(200).json({
          token: token,
          expiresIn: 3600,
          userId: fetchedUser._id
        });
        // console.log(token);
      })
      .catch(err => {
        return res.status(401).json({
          message: "Invalid authentication creadential!"
        });
      });
  }