const { default: mongoose } = require("mongoose");
require('dotenv').config();
let url=process.env.MY_DB;
const db= async()=> {
    try {
        console.log(url);
        await mongoose.connect(url);
        console.log("DataBase Connected Successfully!");
    } catch(error){
        console.log(error.message);
        
    }
}




module.exports = db;