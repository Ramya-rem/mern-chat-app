import { createContext, useState, useEffect, useContext } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client";

const SocketContext = createContext();

export const useSocketContext = () => {
	return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
	const [socket, setSocket] = useState(null);
	const [onlineUsers, setOnlineUsers] = useState([]);
	const { authUser } = useAuthContext();

	useEffect(() => {
		if (authUser) {
			const socket = io("https://chat-app-prod-o3pa.onrender.com", {
				query: {
					userId: authUser._id, //got it from socket.js; when we login to get user id
				},
			});

			setSocket(socket);//once connection is completed set the socket


			// socket.on() is used to listen to the events. can be used both on client and server side
			 socket.on("getOnlineUsers", (users) => {
			 	setOnlineUsers(users);
			 });

			return () => socket.close();
		} else {
			if (socket) {
				socket.close();
				setSocket(null);
			}
		}
	}, [authUser]);

	return(
	<SocketContext.Provider value={{ socket, onlineUsers }}>{children}</SocketContext.Provider>
);
};