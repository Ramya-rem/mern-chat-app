import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import dotenv from 'dotenv';
dotenv.config();
import {JWT_SECRET, generateTokenAndSetCookie} from '../utils/generateToken.js'

const protectRoute = async (req, res, next) => {
	try {
        //to get token from cookies
		const token = req.cookies.jwt;

		if (!token) {
            //unauthorised
			return res.status(401).json({ error: "Unauthorized - No Token Provided" });
		}

		const decoded = jwt.verify(token, JWT_SECRET);

		if (!decoded) {
			return res.status(401).json({ error: "Unauthorized - Invalid Token" });
		}

		const user = await User.findById(decoded.userId).select("-password");// what we have called it when we sign this token -->(generateToken.js line 3 userid)

		if (!user) {
			return res.status(404).json({ error: "User not found" });
		}

		req.user = user;//we request user is our database

		next();
	} catch (error) {
		console.log("Error in protectRoute middleware: ", error.message);
		res.status(500).json({ error: "Internal server error" });
	}
};

export default protectRoute;