 import Conversation from "../models/conversation.model.js";
 import Message from "../models/message.model.js";
import { getReceiverSocketId, io } from "../socket/socket.js";

export const sendMessage = async (req, res) => {
    // req.params.id mesg sent this id

	try {
		const { message } = req.body;
		const { id: receiverId } = req.params;// req.params.id mesg sent this id
		const senderId = req.user._id;

		let conversation = await Conversation.findOne({//here we let becoz we will change
			participants: { $all: [senderId, receiverId] },//this is mongoose syntex
		});

		if (!conversation) {
			conversation = await Conversation.create({
				participants: [senderId, receiverId],
			});
		}

		const newMessage = new Message({
			senderId,
			receiverId,
			message,
		});

		if (newMessage) {
			conversation.messages.push(newMessage._id);
		}
         
		//this 2line coe for saving msgs into data base(in message collection)
		// await conversation.save();
		// await newMessage.save();

		// this will run in parallel
		await Promise.all([conversation.save(), newMessage.save()]);

		//SOCKET IO FUNCTIONALITY WILL GO HERE
		//real time chat
		 const receiverSocketId = getReceiverSocketId(receiverId);
		 if (receiverSocketId) {
		 	//io.to(<socket_id>).emit() used to send events to specific client
		 	io.to(receiverSocketId).emit("newMessage", newMessage);
		 }

		res.status(201).json(newMessage);
	} catch (error) {
		console.log("Error in sendMessage controller: ", error.message);
		res.status(500).json({ error: "Internal server error" });
	}
};

 export const getMessages = async (req, res) => {
 	try {
		const { id: userToChatId } = req.params;
 		const senderId = req.user._id;

 		const conversation = await Conversation.findOne({
			participants: { $all: [senderId, userToChatId] },//userToChatId(the id user to chat with) 
		}).populate("messages"); // populate is a mongoose method use for messages into megs array

		 if (!conversation) return res.status(200).json([]);

		 const messages = conversation.messages;

		res.status(200).json(messages);
	} catch (error) {
		console.log("Error in getMessages controller: ", error.message);
		res.status(500).json({ error: "Internal server error" });
	}
};
