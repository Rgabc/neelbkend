// with the help of model structure we will be able to perform CRUD operation and we are also create api
const userModel=require("../model/model.js")//data structure 
// post api means create api 
//function is known as api function as limits api has no limits
exports.createUser= async(req,res)=>{
    // we want to fill user data so we need req because req helps to  input that data into the server 
    try{
        const saveData= await new userModel(req.body).save()// i send the req to fill data acording to this, i didnt verify that our input data is in which format 
        res.json(saveData)


    }
    catch(err){
        res.json(err)

    }

}
