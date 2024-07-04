import {Server} from 'socket.io';
import http from 'http';
import express from 'express';


const app = express();//why becozexpress is here dlt it from server.js

const server = http.createServer(app);
const io = new Server(server, {//will have io that's going to be new server will pass our server into it
	
    cors: {
		origin: ["http://localhost:3000"], //frontend app
		methods: ["GET", "POST"],
	},
});
   //real time chat
  export const getReceiverSocketId = (receiverId) => {
  	return userSocketMap[receiverId];
  };

const userSocketMap = {}; // {userId: socketId}


io.on("connection", (socket) => {
	console.log("a user connected", socket.id);

	 const userId = socket.handshake.query.userId;
	// if (userId != "undefined") userSocketMap[userId] = socket.id;
{/*new changes:cgpt*/} if (userId) userSocketMap[userId] = socket.id;

	 // io.emit() is used to send events to all the connected clients
	 io.emit("getOnlineUsers", Object.keys(userSocketMap)); //when user is connect it immidiately send who is online and who is offline

	// socket.on() is used to listen to the events. can be used both on client and server side
	socket.on("disconnect", () => {
		console.log("user disconnected", socket.id);
		delete userSocketMap[userId];//once disconnect(logout) user delete from socketmap
		io.emit("getOnlineUsers", Object.keys(userSocketMap));
	});
});
//have to export app,io and server
export { app, io, server };