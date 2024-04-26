var mealtype=require("../model/mealtype")
exports.mealFunction=async(req,res)=>{
try{
    var result=await mealtype.find();
    res.status(200).send(result)
}
catch{
    res.status(500).send("error")
}
}