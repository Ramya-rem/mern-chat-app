import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import Message from "./Message"
import useListenMessages from "../../hooks/useListenMessages";

const Messages = () => {
  //calling hooks
  const { messages, loading } = useGetMessages();
  useListenMessages();//this is listen for any incoming msgs from the pyet
  const lastMessageRef=useRef();

  useEffect(() => {
    //conversation click pannadhum keela automatic down scroll agi last msg show aagum 
		setTimeout(() => {
			lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
		}, 100);
	}, [messages]);
  return (
    <div className="px-4 flex-1 overflow-auto"> {/*here overflow auto is to use for scrolling(scrolling msgs) purpose */}
      {!loading && messages.length > 0 && messages.map((message) => (
        <div key={message._id} 
        ref={lastMessageRef}> {/*this has been added to each msg*/}
        <Message message={message} /> </div>
        //namma type pandra text msg ah send aagum //


      ))}


      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)} {/* here we calling skeloton file 3times */}

      {/* conversation eh illati convo selct pannomna endha text mela kattum */}
      {!loading && messages.length === 0 && (
        <p className='text-center text-blue-200' >Send a message to start the conversation</p>
      )}

    </div>
  )
}

export default Messages;

//Starter code

// import Message from "./Message"

// const Messages = () => {
//   return (
//     <div className="px-4 flex-1 overflow-auto"> {/*here overflow auto is to use for scrolling(scrolling msgs) purpose */}
//       <Message></Message>
//       <Message></Message>
//       <Message></Message>
//       <Message></Message>
//       <Message></Message>
//       <Message></Message>
//       <Message></Message>
//       <Message></Message>
//       <Message></Message>
//       <Message></Message>
//       <Message></Message>
//       <Message></Message>
//       <Message></Message>



//     </div>
//   )
// }

// export default Messages;

