// this file is in charge of QUERYING
// the DB and returning the data to the controller

const db = require("../db/dbConfig.js");


const getOneUser = async (id) => {
    console.log(`received id is ${id}`);
    try{
        const user = await db.any(`SELECT * FROM users WHERE id = ${id}`);
        return user;
    } catch(err) {
        return err;
    }
};

const getOneUserByEmail = async ({email}) => {
    try{
        const user = await db.one(`SELECT * FROM users WHERE email = '${email}'`);
        return user;
    } catch(err){
        return err;
    }
};
const createUser = async (user) => {
    console.log("======================")
    console.log("received item is ...")
    console.log(item)
    console.log("======================")
    const { email, password, firstname, lastname } = user;
    
    try {
        const message = await db.one(`INSERT INTO users (email, password, firstname, lastname) VALUES ($1, $2, $3, $4) RETURNING *`, [email, password, firstname, lastname]);
        return message;
    } catch(err){
        return err;
    }
}

module.exports = {
    getOneUser,
    getOneUserByEmail,
    createUser
}