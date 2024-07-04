import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustand/useConversation"

const Conversation = ({conversation, lastIdx, emoji}) => {//props from conversations.jsx
  const{selectedConversation, setSelectedConversation}=useConversation();//from useConversation.js
 const {onlineUsers} = useSocketContext();
  
 const isSelected= selectedConversation?._id === conversation._id;
 const isOnline = onlineUsers.includes(conversation._id);
  return (
    <>
      <div className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer
      ${isSelected ? "bg-sky-500" : ""}`}//if it is selected bg will change if it is not selected just leave that class
      onClick={()=> setSelectedConversation(conversation)}
      >
       <div className={`avatar ${isOnline ? "online" : ""}`}>{/*user online la irundha online nu kattum else eadhum kattadhu */}
        <div className="w-12 rounded-full">
            <img src={conversation.profilePic}
            alt="user avatar"
            //chatgpt
            onError={(e) => { e.target.src = 'path/to/alternative/image.jpg'; }}
             />
        </div>

       </div>
       <div className="flex flex-col flex-1">
        <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200">{conversation.fullName}</p>{/*here we return conversation(prop) */}
            <span className="text-x1">{emoji}</span> {/*here we return emoji(prop) */}
        </div>

       </div>
      </div>

      {/* bottom */}
  {/* if it is not last index only then show this part so if it is not last index */}
      {!lastIdx && <div className="divider my-0 py-0 h-1" />}


      
    </>
  )
}

export default Conversation;


//STARTER CODE
// const Conversation = () => {
//     return (
//       <>
//         <div className="flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer">
//          <div className="avatar online">
//           <div className="w-12 rounded-full">
//               <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" 
//               alt="user avatar" />
//           </div>
  
//          </div>
//          <div className="flex flex-col flex-1">
//           <div className="flex gap-3 justify-between">
//               <p className="font-bold text-gray-200">John Doe</p>
//               <span className="text-x1">👤</span>
//           </div>
  
//          </div>
//         </div>
  
//         {/* bottom */}
//         <div className="divider my-0 py-0 h-1">
  
  
//         </div>
//       </>
//     )
//   }
  
//   export default Conversation
  