import mongoose from "mongoose";//becoz sending msg will store in db

const messageSchema = new mongoose.Schema(
	{
		senderId: {
			type: mongoose.Schema.Types.ObjectId,//this will be reference
			ref: "User",//user collection
			required: true,
		},
		receiverId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		message: {
			type: String,
			required: true,
		},

		
    // (time of msg hasbeen sent) when we create msg  we will have the createdAt, updatedAt fields
	},
	{ timestamps: true }
);

const Message = mongoose.model("Message", messageSchema);

export default Message;