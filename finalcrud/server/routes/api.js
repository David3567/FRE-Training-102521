const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router()
const User=require('../models/user')
const mongoose = require('mongoose')
const db ="mongodb+srv://db:db@renjie.kjkth.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(db,err=>{
    if(err){
        console.error('Error!'+err)
    }else{
        console.log('Connected to mongodb')
    }
})

function verifyToken(req,res,next){
  if(!req.headers.authorization){
      return res.status(401).send('Unauthorized request')
  }
  let token = req.headers.authorization.split(' ')[1]
  if(token==='null'){
    return res.status(401).send('Unauthorized request')
  }
  let payload = jwt.verify(token,'secretKey')
  if(!payload){
    return res.status(401).send('Unauthorized request')
  }
  req.userId=payload.subject
  next()
}

router.get('/',(req,res)=>{
    res.send('From API route')
})

  router.post('/register', (req, res) => {
    let userData = req.body
    let user = new User(userData)
    user.save((err, registeredUser) => {
      if (err) {
        console.log(err)      
      } else {
        let payload = {subject: registeredUser._id}
        let token = jwt.sign(payload, 'secretKey')
        res.status(200).send({token})
      }
    })
  })

  router.get('/userList',function(req,res){
    console.log('Get Request for all User');
    User.find({})
    .exec(function(err,users){
      if(err){
        console.log("Error Retrieving Users");
      }else{
        res.json(users);
      }
    })
  })

  router.get('/userList/:id',function(req,res){
    console.log('Get Request for a single User');
    User.findById(req.params.id)
    .exec(function(err,users){
      if(err){
        console.log("Error Retrieving Users");
      }else{
        res.json(users);
      }
    })
  })

router.delete('/userList/:id', function(req, res, next){
  console.log('Deleting a user');
  User.findByIdAndRemove(req.params.id, function(err, deletedUser){
      if(err){
          res.send("Error deleting User");
      }else{
          res.json(deletedUser);
      }
  })
})

router.put('/userList/:id', function(req, res, next){
  console.log('Update a user');
  var obj=req.body;
  User.findByIdAndUpdate(req.params.id,
    {
      $set: obj
  },
  {
      new: true
  },
  function(err, updatedUser){
      if(err){
          res.send("Error updating user");
      }else{
          res.json(updatedUser);
      }
  }
  )
})

  router.post('/login', (req, res) => {
    let userData = req.body
    User.findOne({email: userData.email}, (err, user) => {
      if (err) {
        console.log(err)    
      } else {
        if (!user) {
          res.status(401).send('Invalid Email')
        } else 
        if ( user.password !== userData.password) {
          res.status(401).send('Invalid Password')
        }else 
        if(user.role !== userData.role){
          res.status(401).send('Invalid UserRole')
        }
         else {
          let payload = {subject: user._id}
          let token = jwt.sign(payload, 'secretKey')
          res.status(200).send({token})
        }
      }
    })
  })

  
  // router.post('/isAdmin', (req, res) => {
  //   let userData = req.body
  //   User.findOne({role="admin"}, (err, user) => {
  //     if (err) {
  //       console.log(err)    
  //     } else {
  //       if (!user) {
  //         res.status(401).send('Invalid Email')
  //       } else 
  //       if ( user.password !== userData.password) {
  //         res.status(401).send('Invalid Password')
  //       } else {
  //         let payload = {subject: user._id}
  //         let token = jwt.sign(payload, 'secretKey')
  //         res.status(200).send({token})
  //       }
  //     }
  //   })
  // })

module.exports=router