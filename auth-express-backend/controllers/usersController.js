const express = require("express");
const bcrypt = require("bcryptjs");
var passport = require('passport');
var LocalStrategy = require('passport-local');

const {
  getOneUser,
  getOneUserByEmail,
  createUser,
} = require("../queries/users.js");
const { isLoggedIn } = require("../validations/checkUser.js");
const PRIVATE_KEY = process.env.PRIVATE_KEY;

const users = express.Router();

// LOGIN ROUTE
users.post("/login", async (req, res) => {
  passport.authenticate('local',(authError, user, info)=> {
    if(authError){
      console.error(authError);
      return next(authError);
    }
    if(!user){
      return res.send(403).json({error: "cant find the user info"});
    }
    return req.login(user, (loginError) => {
      if(loginError){
        console.error(loginError);
        return next(loginError);
      }
      return res.redirect('/');
    });
  })(req,res,next);
});

users.get('/logout', isLoggedIn, (req,res) => {
  req.logout();
  req.session.destroy();
  res.redirect('/');
})

// SIGN UP ROUTE
users.post("/", async (req, res) => {
  if(!getOneUserByEmail(req.body.email)){
    const users = await createUser(req.body);
  }
  else{
    //res
  }

});



module.exports = users;
