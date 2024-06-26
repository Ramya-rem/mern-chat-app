import jwt from "jsonwebtoken";

const generateTokenAndSetCookie=(userId, res)=>{
    //"JWT_SECRET" this is the key to use to sign the token
    const token=jwt.sign({userId},process.env.JWT_SECRET, {
        expiresIn: '15d'
    })
    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 1000,//this is the max age that should cookies left
        //15days; 24h; 60min;1000ms
        httpOnly:true,
        //(the cookie only accessiable only https) prevents XSS attacks cross-site scripting attacks
        sameSite: "strict", // CSRF attacks cross-site request forgery attacks
		secure: process.env.NODE_ENV !== "development",
    })
};
export default generateTokenAndSetCookie;