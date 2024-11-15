const router=require("express").Router()

const carModel=require("../models/carmodel")

router.post("/add",async(req,res)=>{
    try {
        const data=req.body
         const newCar=new carModel(data)

        await newCar.save()
        .then(()=>{res.status(200).json({message:"Car Added"})})
    } catch (error) {
         console.log(error);
         
    }
})


router.get("/get",async(req,res)=>{
    let cars
    try {
        cars= await carModel.find()
        res.status(200).json({cars})


    } catch (error) {
        console.log(error);
        

    }
})

router.get("/get/:id",async(req,res)=>{
    let car
    const id=req.params.id

try {
    car=await carModel.findById(id)
    res.status(200).json({car})

} catch (error) {
    console.log(error);
    
}
})

router.put("/updateCar/:id",async(req,res)=>{
    const id=req.params.id
const {name,desc,image}=req.body
let car
    try {
car=await carModel.findByIdAndUpdate(id,{name,desc,image})
await car.save().then(()=>res.status(200).json({message:"Data Update"}))
        
    } catch (error) {
        console.log(error);
        
    }
})

router.delete("/delete/:id",async(req,res)=>{
    const id=req.params.id

   
    try {
        await carModel.findByIdAndDelete(id).then(()=>res.status(200).json({message:"Deleted Succesfully"}))
    } catch (error) {
        console.log(error);
        
    }
})
module.exports=router