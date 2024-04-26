var mongoose=require('mongoose')
var Schema=mongoose.Schema;
var restaurantSchema=new Schema({
name:String,
city:String,
location_id:Number,
city_id:Number,
locality:String,
thumb:[String,String,String,String],
aggregate_rating:Number,
rating_text:String,
min_price:String,
contact_number:Number,
cuisine:[{id:Number,name:String},{id:Number,name:String}],
image:String,
mealtype_id:Number
})
module.exports=mongoose.model("restaurant",restaurantSchema)