var express=require("express")
var router=express.Router();
const jwt=require("jsonwebtoken")
const SECRET_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJhYWdpbmkwNzEwQGdtYWlsLmNvbSIsImlhdCI6MTcxMTQ0NzMyNH0.GEsCgERlnR7yY4Eh7LSOQWM0gu7Zxh878VkU0z6-DrU"
var restaurant=require("./controller/restaurant")
var location=require("./controller/location")
var mealtype=require("./controller/mealtype")
var filter=require("./controller/filter")
var user=require("./controller/user")
var menu=require("./controller/menu");


router.get("/getAllRestaurants",restaurant.restFunction)
router.get("/getAllLocations",location.locFunction)
router.get("/getAllMealTypes",mealtype.mealFunction)
router.get("/getRestaurantsByLocation/:city",filter.filterFunction)
router.get("/getRestaurantsByid/:_id",filter.idFunction)
router.get("/getRestaurantsByLocationid/:location_id",filter.locidFunction)
router.get("/getRestaurantsByMealTypeid/:mealtype_id",filter.mealTypeidFunction)
router.get("/getRestaurantsByMenu/:name",menu.MenuApi)
router.post("/generateToken", (req, res) => {
    // Assuming req.body contains user information (e.g., username, user id, etc.)
    const userData = req.body;

    // Generate JWT token using the provided user data and the secret key
    const token = jwt.sign(userData, SECRET_KEY);

    // Send the generated token as a response
    res.json({ token });
});
router.post("/signup",user.signup)
router.post("/signin",user.signin)
router.post("/filteroptions",restaurant.filtering)

module.exports=router;