var filter=require("../model/restaurant")
exports.filterFunction=async(req,res)=>{
    try{
        var City=await filter.find({city:req.params.city});
        
        res.status(200).send(City)
    }
    catch{
        res.status(500).send("error")
    }
    }
    exports.idFunction=async(req,res)=>{
        try{
            var id=await filter.find({_id:req.params._id});
            
            res.status(200).send(id)
        }
        catch{
            res.status(500).send("error")
        }
        }
    exports.locidFunction=async(req,res)=>{
        try{
            var locid=await filter.find({location_id:req.params.location_id});

            res.status(200).send(locid)
        }
        catch{
            res.status(500).send("error")
        }

    }
    exports.mealTypeidFunction=async(req,res)=>{
        try{
            var mealtypeid=await filter.find({mealtype_id:req.params.mealtype_id});

            res.status(200).send(mealtypeid)
        }
        catch{
            res.status(500).send("error")
        }

    }