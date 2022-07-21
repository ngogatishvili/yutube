import User from "../models/User.js";
import bcrypt from "bcryptjs"

export const signup=async(req,res,next)=>{
    try{
        const salt=bcrypt.genSaltSync(10);
        const hashedPassword=bcrypt.hashSync(req.body.password,salt)
        const newUser=new User({...req.body,password:hashedPassword})
        await newUser.save();
        return res.status(200).send("User has been created")
    }catch(err) {
        next(err);
    }
}    

