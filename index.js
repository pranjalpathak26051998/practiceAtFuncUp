const express = require('express')
const bodyParser = require('body-parser')
const route = require('../MWpractice/route/route')
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
const testGlobalMW= (req,res,next)=>{
    console.log("I am a global middleware logic")
    next()
}
app.use( testGlobalMW )
 let middleWareGlobal =function(req,res,next){
  const timestamp = new Date().toISOString();
  //let currentDate = new Date()
 console.log(timestamp)
  //console.log(currentDate)
  const ip = req.ip;
  const routeURL = req.originalUrl;
  console.log(`${timestamp} , ${ip} , ${routeURL} `)
  next()
 }
 app.use(middleWareGlobal)
app.use('/',route)


app.listen(process.env.PORT || 4500, ()=>{
    console.log("Express is running successfully")
})

