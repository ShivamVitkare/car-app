const express=require("express")
const carRoute=require("./routes/carRoute")
const cors=require("cors")


const app=express()
app.use(express.json())
require("./database/db")
app.use(cors())
app.use("/api/v1",carRoute)

app.listen("4000",()=>{
    console.log("Server Started");
    
})