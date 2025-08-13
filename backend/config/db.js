const mongoose=require('mongoose')
require('dotenv').config();



exports.connect=()=>{
    mongoose.connect("mongodb+srv://mohdadeeb409:DFrApmSwfE25sLh8@cluster0.ogto8hm.mongodb.net/whatsapp?retryWrites=true&w=majority&appName=Cluster0",{
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(()=>{
        console.log("Database connected successfully");
    }).catch((error)=>{
        console.log("Database connection failed");
        console.error(error);
    });
}   
