const express=require("express")// router is process of express
const router =express.Router()
router.post("/",require("../controller/controller").createUser)
// route exact path="/" element={<elemet/>}
module.exports=router;