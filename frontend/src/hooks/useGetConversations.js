import { useEffect, useState } from "react";
import toast from "react-hot-toast";


const useGetConversations = () => {
    const[loading, setLoading]=useState(false);
    const [conversations, setConversations]=useState([]);

    useEffect(()=>{
        const getConversations= async()=>{
            setLoading(true);//set loading to be true  so that we could show a loading spinner 
           try {
            const res= await fetch("/api/users");
            const data= await res.json();
            if(data.error){
                throw new Error(data.error);

            }
            setConversations(data);
            } catch (error) {
                toast.error(error.message);
                
                }finally{
                    setLoading(false);
                }
        }
        //we need to call this func so that we execute above try catch
        getConversations();
    },[]);
    return {loading, conversations};

}

export default useGetConversations;
