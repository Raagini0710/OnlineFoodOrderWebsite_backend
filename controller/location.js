var location=require("../model/location")
exports.locFunction=async(req,res)=>{
try{
    let result=await location.find();
    res.status(200).send(result)
}
catch{
    res.status(500).send("error")
}
}
