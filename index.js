import express from "express";
import path from "path"

const app = express()

//static folder (express.static() middleware)
app.use(express.static("E:/Node/staticServer/public"))

//middleware to parse json data(express.json())
app.use(express.json())

//middleware to parse url encoded data (express.urlencoded() middleware)
app.use(express.urlencoded({extended:true}))

//API/routing
app.get("/",(req,res)=>{
    // res.send("Home page")
    res.sendFile("E:/Node/staticServer/index.html")
})



//get Api
app.get("/data",(req,res)=>{
    res.status(200).send({name:"Ram",age:25})
})

//Post Api
app.post("/data",(req,res)=>{
    console.log(req.headers["content-type"])
    console.log(req.body);//payload (need to parse the data)
    res.status(200).send({message:"data received"})
})

app.post("/urlData",(req,res)=>{
    console.log(req.body); //url payload
    res.send({message:"form submitted"})
})

// app.get("/index.css",(req,res)=>{
//     res.sendFile("E:/Node/staticServer/index.css")
// })

// app.get("/image",(req,res)=>{
//     res.sendFile("E:/Node/staticServer/-5864930645195732307_120.jpg")
// })

app.listen(7000,"localhost",()=>{
    console.log("server started at http://localhost:7000")
})

