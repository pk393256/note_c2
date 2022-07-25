const mongoose = require('mongoose');

async function connectDatabase(){
    const dbUri="mongodb://localhost:27017/note";
    // const dbUri = process.env.DB_URI;
    try{
        await mongoose.connect(dbUri);
        console.log('Connection to database successful');
    }catch(err){
        console.log('Error connecting database');
        throw err;
    }
}
module.exports = connectDatabase;