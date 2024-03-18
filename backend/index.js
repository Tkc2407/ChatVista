const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");

dotenv.config();
connectDB();
const app = express();
app.use(express.json())

// app.get("/",(req,res)=>{
//     res.send("API is Running Successfully");
// });

app.use('/api/user',userRoutes);
app.use('/api/chat',chatRoutes);

app.listen(process.env.PORT || 80, () => {
    console.log("Backend server is running!");
});

module.exports = connectDB;