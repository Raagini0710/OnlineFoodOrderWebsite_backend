var mongoose=require('mongoose')
var Schema=mongoose.Schema;
var mealtypeSchema=new Schema({
name:String,
content:String,
image:String,
meal_type:Number
})
module.exports=mongoose.model("mealtype",mealtypeSchema)