const passport = require('passport');
const local = require('./localStrategy');
const User = require('../models/user');
const { getOneUser } = require('../queries/users');

module.exports = () => {
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser(async (id, done) => {
        try{
            let user = await getOneUser(id)//fill later
            return done(null, user);
        }
        catch(err){
            return done(err);
        }
    })

    local();
}