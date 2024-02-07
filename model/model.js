const mongoose=require("mongoose")//1st step 
// schema capital S its hel[ps to create to build data base or structure ]
// every time data will be new so we need to use new key wrd 
const userSchema=new mongoose.Schema(
    {
        fullName:String,
        phone:Number
    }
)
// db me folder create  
// we need collection file name to save data in thta db folder 
module.exports=mongoose.model("neel",userSchema)// mongoose.model(helps to create collection name as well as data structure get store in collection)