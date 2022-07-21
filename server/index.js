import express from "express";
import {mongoose} from "mongoose"
import dotenv from "dotenv";
import userRouter from "./routes/users.js"
import videoRouter from "./routes/videos.js"
import commentRouter from "./routes/comments.js"
import authRouter from "./routes/auth.js";
dotenv.config();

const connect=()=>{
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("connected")
    })
    .catch(err=>{
        console.log("not connected")
    })
}

const app=express();
app.use(express.json())
app.use("/api/users",userRouter)
app.use("/api/videos",videoRouter)
app.use("/api/comments",commentRouter);
app.use("/api/auth",authRouter)



app.use((err,req,res,next)=>{
    const status=err.status||500;
    const message=err.message||"Something went wrong"
    return res.status(status).json({
        success:"false",
        status,
        message
    })
})

app.listen(8090,()=>{

    connect();
    console.log('server is listening to the port 8090')
})