const express=require('express')
const router = express.Router()
const UserController = require("../controller/controller")

// router.get("/middleWareGlobal",)

// module.exports.testGlobalMW=testGlobalMW


router.get('/test-me',(req,res)=>{
     res.send("api testing is successful now testing for GlobalMiddleWare,Final testing along with ip address and url")
})

// module.exports.testGlobalMW=testGlobalMW

module.exports=router