const mongoose=require("mongoose")

const carSchema=new mongoose.Schema({
    name:{type:String,required:true},
    desc:{type:String,required:true},
    image:{
        type:String,required:true
    }
})

module.exports=new mongoose.model("car",carSchema)