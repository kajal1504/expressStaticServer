import express from "express";
import path from "path"

const app = express()

//static folder (express.s)

//API/routing
app.get("/",(req,res)=>{
    // res.send("Home page")
    res.sendFile("E:/Node/staticServer/index.html")
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


// //API
// app.get("/",(req,res)=>{
//     // res.send("hello world")
//     res.sendFile(path.join("E:","Node","staticServer","public","pages","index.html"))
// })
// // app.get("/index.css",(req,res)=>{
// //     res.sendFile(path.join("E:","Node","staticServer","public","css","index.css" ))
// // })


// const PORT=1000;
// const hostname="127.0.0.1";
// app.listen(PORT,hostname,()=>{
//     console.log("server running in"+'http://$(hostname):$(PORT)');
// })