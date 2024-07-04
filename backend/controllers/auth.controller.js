import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async (req, res) => {
	try {
		const { fullName, username, password, confirmPassword, gender } = req.body;

		if (password !== confirmPassword) {
			return res.status(400).json({ error: "Passwords don't match" });
		}

		const user = await User.findOne({ username });

		if (user) {
			return res.status(400).json({ error: "Username already exists" });
		}

		// HASH PASSWORD HERE
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);

		// https://avatar-placeholder.iran.liara.run/

		const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
		const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

		const newUser = new User({
			fullName,
			username,
			password: hashedPassword,
			gender,
			profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
		});

		if (newUser) {
			// Generate JWT token here
			generateTokenAndSetCookie(newUser._id, res);
			await newUser.save();

			res.status(201).json({
				_id: newUser._id,
				fullName: newUser.fullName,
				username: newUser.username,
				profilePic: newUser.profilePic,
			});
		} else {
			res.status(400).json({ error: "Invalid user data" });
		}
	} catch (error) {
		console.log("Error in signup controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
};

export const login = async (req, res) => {
	try {
		const { username, password } = req.body;
		const user = await User.findOne({ username });
		const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

		if (!user || !isPasswordCorrect) {
			return res.status(400).json({ error: "Invalid username or password" });
		}

		generateTokenAndSetCookie(user._id, res);

		res.status(200).json({
			_id: user._id,
			fullName: user.fullName,
			username: user.username,
			profilePic: user.profilePic,
		});
	} catch (error) {
		console.log("Error in login controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
};

export const logout = (req, res) => {
	try {
		res.cookie("jwt", "", { maxAge: 0 });
		res.status(200).json({ message: "Logged out successfully" });
	} catch (error) {
		console.log("Error in logout controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
};



// import bcrypt from "bcryptjs";
// import User from "../models/user.model.js";
// import generateTokenAndSetCookie from "../utils/generateToken.js";


// export const signup = async (req, res) => {
//     try {
//         const { fullName, username, password, confirmPassword, gender } = req.body;
//         if (password !== confirmPassword) {
//             return res.status(400).json({ error: "Password don't match" })
//         }
//         const user = await User.findOne({ username });
//         if (user) {
//             return res.status(400).json({ error: "Username already exists" });
//         }

//         //Hash password here
//         const salt = await bcrypt.genSalt(10);//mostly we put 10 it is default
//         const hashedPassword = await bcrypt.hash(password, salt);


//         //https://avatar-placeholder.iran.liara.run/
//         const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
//         const girlProfilePic = `https://avatar.iran.liara.run/public/girld?username=${username}`

//         const newUser = new User({

//             fullName,
//             username,
//             password: hashedPassword,
//             gender,
//             profilePic: gender === "male" ? boyProfilePic : girlProfilePic
//         });
//         //new user save
//         if (newUser) {
//             //generate jwt token here to set cookie
//             generateTokenAndSetCookie(newUser._id, res)
//             await newUser.save();

//             res.status(201).json({
//                 _id: newUser._id,
//                 fullName: newUser.fullName,
//                 username: newUser.username,
//                 profilePic: newUser.profilePic
//             });
//         } else {
//             res.status(400).json({ error: "Invalid user data" });
//         }

//     }
//     catch (error) {
//         console.log("Error in signup controller", error.message)
//         res.status(500).json({ error: "Internal server error" })
//     }
// };
// export const login = async (req, res) => {
//     try{
//         const {username, password}=req.body;
//         const user=await User.findOne({username});
//         const isPasswordCorrect= await bcrypt.compare(password, user?.password || "");//login pannumbodhu kudukura pswd and db la iruka pswd same ah irundha login aagum otherwise it shows error

//         if(!user || !isPasswordCorrect){
//             // paswd same ah illana error show agum
//             return res.status(400).json({error: "Invalid username or password"});

//         }
//         generateTokenAndSetCookie(user._id, res);//generate token to set cookie
//         res.status(200).json({
//             _id: user._id,
//             fullName: user.fullName,
//             username: user.username,
//             profilePic: user.profilePic
//         });

//     }catch(error){
//         console.log("Error in login controller", error.message);
//         res.status(500).json({ error: "Internal server error" });

//     }
// };
// export const logout = (req, res) => {//not req async func here(logout) and also dont need to generate token(cookie not req)
//     try {
//         res.cookie("jwt","",{maxAge:0});
//         res.status(200).json({message: "Logged out successfully"});
        
//     } catch (error) {
//         console.log("Error in logout controller", error.message);
//         res.status(500).json({ error: "Internal server error" });
//     }
// };