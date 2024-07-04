import { useEffect } from "react";

import { useSocketContext } from "../context/SocketContext";
import useConversation from "../zustand/useConversation";

import notificationSound from "../assets/sounds/iphone_14_notification.mp3";

const useListenMessages = () => {
	const { socket } = useSocketContext(); //useSocketcontext will return online users
	const { messages, setMessages } = useConversation();

	useEffect(() => {
		socket?.on("newMessage", (newMessage) => { //we will take the new msg as an arguement inside this callback 
			newMessage.shouldShake = true; //shake animation(index.css)
			const sound = new Audio(notificationSound);
			sound.play();
			setMessages([...messages, newMessage]);//prev msgs+new msgs
		});

		return () => socket?.off("newMessage");
	}, [socket, setMessages, messages]);
};
export default useListenMessages;