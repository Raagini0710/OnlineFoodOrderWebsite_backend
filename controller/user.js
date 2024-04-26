var user=require("../model/user")
var bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const SECRET_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MTA1OTY1OTd9.9Axn3nbKsgkXKs88Zdb_kg_689CrswekXH-l3D71OOY"
exports.signup = async (req, res) => {
    const { username, password, email } = req.body;
    try {
      const existingUser = await user.findOne({ email: email });
      if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await user.create({
        email: email,
        password: hashedPassword,
        username: username,
      });
      res.status(201).json(newUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Something went wrong" });
    }
  };
  
exports.signin = async (req, res) => {
    const { email, password } = req.body;
    try {
      const existingUser = await user.findOne({ email: email });
      if (!existingUser) {
        return res.status(404).json({ message: "User not found" });
      }
      const matchPassword = await bcrypt.compare(password, existingUser.password);
      if (!matchPassword) {
        return res.status(400).json({ message: "Invalid credentials" });
      }
      const token = jwt.sign(
        { email: existingUser.email, id: existingUser._id },
        SECRET_KEY
      );
      res.status(200).json({ user: existingUser, token: token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Something went wrong" });
    }
  };
  
  