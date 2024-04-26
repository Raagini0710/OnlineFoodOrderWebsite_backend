var express=require("express")
var app=express();
var port=8900;
var cors=require("cors")
var mongoose=require('mongoose')
app.use(cors())
var router=require("./router")
app.use(express.json())
app.use("/",router)

var mongooseurl="mongodb+srv://raagini0710:Raagini0710@cluster0.pk0jm6w.mongodb.net/"


mongoose.connect(mongooseurl,{useNewUrlParser:true})
.then(sucess=>{
    console.log("connected to mongodb");
    app.listen(port,()=>{
        console.log("server is running");
    });
})
    .catch(error=>{
        console.log("error")
   
});