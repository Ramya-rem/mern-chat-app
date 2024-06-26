import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
	try {
		const loggedInUserId = req.user._id;//get it from request we're able to use this again becoz of middleware(user.routes.js (protesctRoute) so we need to import user.controller in user.routes)

		const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");//once we login we didn't see sidebar; why we use select("password") we check users in postman it show all users and their datas so want to hide password use 'select(password)'

		res.status(200).json(filteredUsers);
	} catch (error) {
		console.error("Error in getUsersForSidebar: ", error.message);
		res.status(500).json({ error: "Internal server error" });
	}
};