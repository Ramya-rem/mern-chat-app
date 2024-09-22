import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";//need to put .js extension otherwise it can't work becoz we use import syntex
import connectToMongoDB from "./db/connectToMongoDB.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import path from "path";

import cookieParser from "cookie-parser";

import {app, server} from "./socket/socket.js"


const PORT=process.env.PORT || 5000;

const __dirname = path.resolve();//from node js

dotenv.config();

//middleware
app.use(express.json());//to parse tha incoming req with json payloads (from req body)
app.use(cookieParser());
//Routes Setup:
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist"))) //it is the middleware(static) use to serve static file like html,css

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});


// app.get('/',(req,res)=>{
//     //root route http://localhost:5000/
//     res.send("Hello world");

// });
// app.get("/api/auth/signup",(req,res)=>{
//     console.log("signup route");
// });
// app.get("/api/auth/login",(req,res)=>{
//     console.log("login route");
// });
// app.get("/api/auth/logout",(req,res)=>{
//     console.log("logout route");
// });
//endha mari use panna code neat ah irukadhu so adhukaga namma middleware pandrom routes ku(app.use)


server.listen(PORT,()=>{
    connectToMongoDB();
    console.log(`server is running on ${PORT} `);
})