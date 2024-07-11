import useGetConversations from "../../hooks/useGetConversations"
import { getRandomEmoji } from "../../utils/emoji";
import Conversation from "./Conversation"

const Conversations = () => {
  const{loading, conversations}=useGetConversations();
  return (
    <div className="py-2 flex flex-col flex-grow overflow-y-auto">
      {conversations.map((conversation, idx)=>(
        <Conversation 
        //this id is unique for each convo
        key={conversation._id}
        conversation={conversation}
        //inside the utils; returning emojis for each convo
        emoji={getRandomEmoji()}
        lastIdx={idx === conversations.length-1}//length-1 this means this is last index and the reason is that we are using last index, we have the divider each conversation but not the last one so we are not going to show that divider
        />
      ))}
      {loading ? <span className="loading loading-spinner mx-auto"></span>: null}
     </div>
  );
};

export default Conversations;

//STARTER CODE
// import Conversation from "./Conversation"

// const Conversations = () => {
//   return (
//     <div className="py-2 flex flex-col overflow-auto">
//       <Conversation />
//       <Conversation />
//       <Conversation />
//       <Conversation />
//       <Conversation />

//     </div>
//   )
// }

// export default Conversations
