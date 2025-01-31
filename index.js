const express=require("express");
const app=express();
const path=require("path");
const port=8081;
const bodyParser=require('body-parser');
const db= require('./config/database');
const cookieParser = require("cookie-parser");

app.set('view engine', 'ejs');

app.use(express.static('assets/client'));
app.use(express.static('assets/admin'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/uploads', express.static(path.join(__dirname + '/uploads')))
app.use('/', require('./routers'));

app.listen(port,(err) => {
    if (!err) {
        db(); //this is for connect to database.when error not occure
        console.log("server start successfully...");
        console.log("http://localhost:" +port);
        
        
    }
})