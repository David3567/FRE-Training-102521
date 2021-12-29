const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

exports.createUser = (req, res, next) => {
  bcrypt.hash(req.body.password, 10).then((hash) => {
    const user = new User({
      email: req.body.email,
      password: hash,
      userRole: req.body.userRole,
    });
    // console.log(user);
    user
      .save()
      .then((result) => {
        // console.log(result);
        res.status(201).json({
          message: "User created!",
          result: result,
        });
      })
      .catch((err) => {
        res.status(500).json({
          message: "Invalid authentication creadential!",
        });
      });
  });
};

exports.userLogin = (req, res, next) => {
  let fetchedUser;
  User.findOne({ email: req.body.email })
    .then((user) => {
      // console.log(req.body.userRole); 
      if (!user || req.body.userRole !== user.userRole) {
        return res.status(401).json({
          message: "Auth failed",
        });
      }
      fetchedUser = user;
      // console.log(fetchedUser);
      
      return bcrypt.compare(req.body.password, user.password);
    })
    .then((result) => {
      // console.log(result);
      if (!result) {
        return res.status(401).json({
          message: "Auth failed",
        });
      }
    //  console.log(fetchedUser);
      const token = jwt.sign(
        {
          email: fetchedUser.email,
          userId: fetchedUser._id,
          userRole: fetchedUser.userRole,
        },
        "this is a key",
        { expiresIn: "1h" }
      );
      // console.log(token);
      
      res.status(200).json({
        token: token,
        message: "Auth success!",
        expiresIn: 3600,
        userRole: fetchedUser.userRole,
        userId: fetchedUser._id,
      });
    })
    .catch((err) => {
      res.status(401).json({
        message: "Invalide authentication credentials!",
      });
    });
};

exports.usersFetch = (req, res, next) => {
  // const userQuery = User.find();
  // console.log(userQuery);
  User.find()
    .then((users) => {
      // console.log(users);
      return res.status(200).json({
        users: users,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: "Fetching users failed!",
      });
    });
};

exports.deleteUser = (req, res, next) => {
  User.deleteOne({_id: req.params.id}).then((result) => {
    // console.log(result);
    if (result) {
      res.status(200).json({message: "Deletion successful!"})
    } else {
      res.status(401).json({ message: "Not Authorized!"});
    }
  });
};