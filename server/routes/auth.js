import express from "express";
import { signup } from "../controllers/auth.js"

const router=express.Router();


// create user

router.post("/signin",)

// sign in

router.post("/signup",signup)
// google auth

router.post("/google",)

export default router;