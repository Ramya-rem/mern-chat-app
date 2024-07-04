import { useState, useEffect } from "react"
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";

const useGetMessages = () => {
    const[loading, setLoading]=useState(false);
    const {messages, setMessages, selectedConversation}=useConversation();

    useEffect(()=>{ 
      //useeffect is immidiately run when we call this hook
      const getMessages= async () =>{
        setLoading(true);
			try {
				const res = await fetch(`/api/messages/${selectedConversation._id}`);//this is a get method
				const data = await res.json();
				if (data.error) throw new Error(data.error);
				setMessages(data);//error illati edhu execute aagum
			} catch (error) {
				toast.error(error.message);
			} finally {
				setLoading(false);
			}

      };
      //we will only call this function if there is a selected convo
      if(selectedConversation?._id) getMessages()

    },[selectedConversation?._id, setMessages])

    return {messages, loading};
}

export default useGetMessages;
