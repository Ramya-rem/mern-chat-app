import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config();

export const JWT_SECRET="mytoken";
export const generateTokenAndSetCookie=(userId, res)=>{
    //"JWT_SECRET" this is the key to use to sign the token
    const token=jwt.sign({userId},JWT_SECRET, {
        expiresIn: '1h'
    })
    res.cookie("jwt", token, {
        maxAge: 1 * 60 * 60 * 1000,//this is the max age that should cookies left
        httpOnly:true,
        //(the cookie only accessiable only https) prevents XSS attacks cross-site scripting attacks
        sameSite: "strict", // CSRF attacks cross-site request forgery attacks
		secure: process.env.NODE_ENV !== "development",
    })
};
