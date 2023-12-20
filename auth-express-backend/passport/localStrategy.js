const passpor = require('passport');
const localStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const { getOneUserByEmail } = require('../queries/users');

module.exports = () => {passport.use(new localStrategy({
    usernameField : 'email',
    passwordField: 'password'
}, async(email, password, done)=> {
    try {
        //db
        const userExist = await getOneUserByEmail(email);
        if(userExist){
            const result = await bcrypt.compare(password, userExist.password);
            if(result){
                done(null, userExist);
            }else{
                done(null, false,{message: "wrong password"});
            }
        } else{
            done(null, false, {message: "email does not exist"});
        }
    } catch(err){
        console.error(err);
        done(err);
    }
}))}