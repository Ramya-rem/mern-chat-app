import {useAuthContext} from "../../context/AuthContext"
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";

const Message = ({message}) => {
  const{authUser} =useAuthContext();
  const{selectedConversation }=useConversation();
  const fromMe = message.senderId === authUser._id;
  const formattedTime=extractTime(message.createdAt);
  const chatClassName = fromMe ? "chat-end":"chat-start";
  //user profile pic in messages//meg sent from me nah my prfilepic set otherwise selectedconvo profile pic will set
  const profilePic= fromMe ? authUser.profilePic : selectedConversation?.profilePic ;
 //msg is ennt from us bg clr is blue otherwide its blk
 const bubbleBgColor= fromMe ? "bg-blue-500" : "";

 const shakeClass = message.shouldShake ? "shake" : ""; //only for incoming msgs

return (
    // chat end means right isde mesages
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className=" w-10 rounded-full ">
          <img alt="Tailwind css chat bubble component"
            src={profilePic} />
        </div>
      </div>
      <div className={`chat-bubble text-white bg-blue-500 ${bubbleBgColor} ${shakeClass} pb-2`}>{message.message}{/*enga namma enna chat pandramo andha msg show agum*/}</div>
      <div className={"chat-footer opacity-50 text-xs flex gap-1 items-center text-blue-50"}>{formattedTime}</div>

    </div>
  )
}

export default Message;
