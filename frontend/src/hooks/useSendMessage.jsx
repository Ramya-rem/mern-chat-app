import { useState } from "react";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";

const useSendMessage = () => {
    const[loading, setLoading]=useState(false);
    const{messages, setMessages, selectedConversation} =useConversation();//zustand

    const sendMessage = async (message) =>{
        setLoading(true);
        try {
            //we need to pass id here that id will be the selected convo id which is user id
            const res= await fetch(`/api/messages/send/${selectedConversation._id}`,{
                method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ message }),

            });
            const data= await res.json();
            if (data.error) throw new Error(data.error);//error vandha catch block execute agum else keela iruka sentmessage execute agum

			setMessages([...messages, data]);//update our state so we will have all the previous msgs
            
        } catch (error) {
            toast.error(error.message);
            
        }finally{
            setLoading(false);
        }
    };
    return {sendMessage, loading};
  
}

export default useSendMessage;
//when user submit message input this function will call
