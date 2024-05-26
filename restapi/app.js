const express = require("express");
const app = express();
const mongoose = require('mongoose');
require("dotenv/config");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
// middle ware
//routes
//GET()-> fetch the data , POST->push the data -> PATCH()->updated,DELETE()->delete data



// middle ware

// import the routes

const postRoute = require("./routes/posts");
app.use("/posts",postRoute);




app.get("/posts",(req , res)=>{
    res.send("I'm inside the home ");   
}
);
// create a listening port


// connect mmongodb




const mongoString = process.env.DB_CONNECTION;
mongoose.connect(mongoString);

const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

app.listen(3000);