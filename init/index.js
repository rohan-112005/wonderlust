const mongoose = require('mongoose');
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const { app } = require('../app.js');
const MANGO_URL="mongodb://127.0.0.1:27017/wonderlust";
main().then(()=>{
    console.log("Connected to MongoDB");
}).catch((err)=>{
    console.log("Error connecting to MongoDB",err);
});
async function main(){//This function connects Node.js to MongoDB.
    await mongoose.connect(MANGO_URL);
}


const initDB = async () =>{
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data);
    console.log("Database initialized with sample data");
}
initDB();