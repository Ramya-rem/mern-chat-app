import express from "express";
import { login, logout, signup } from "../controllers/auth.controller.js";//need to put .js extension otherwise it can't work becoz we use import syntex

const router=express.Router();

router.post("/signup", signup);//from auth.controller
router.post("/login", login);//from auth.controller
router.post("/logout", logout);//from auth.controller

export default router;