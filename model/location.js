var mongoose=require('mongoose')
var Schema=mongoose.Schema;
var locationSchema=new Schema({
name:String,
city_id:Number,
location_id:Number,
city:String,
country_name:String,
})
module.exports=mongoose.model("location",locationSchema)