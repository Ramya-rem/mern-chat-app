import MessageInput from "./MessageInput";
import Messages from "./Messages"
import {TiMessages} from "react-icons/ti"

const MessageContainer = () => {
    const noChatSelected=true;
    return (
        <div className="md:min-w-[450px] flex flex-col">
            {noChatSelected ? ( <NoChatSelected /> ) :(
                //if doesn't select any chat nochatselected will be shown else below component will be shown
                <>
                {/* Header */}
                <div className='bg-slate-500 px-4 py-2 mb-2'>
                    <span className='label-text'>To:</span> {/*{" "} */}
                    <span className='text-gray-900 font-bold'>John doe</span>
                </div>
                {/* below the header we have messages */}
                <Messages />
              <MessageInput /> 
            </>
            )}
        </div>
    );
};

export default MessageContainer;

//no chat selected then this component will shown
const NoChatSelected = () => {
	//const { authUser } = useAuthContext();
	return (
		<div className='flex items-center justify-center w-full h-full'>
			<div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
				<p>Welcome 👋 {/*{authUser.fullName} */} ❄</p>
				<p>Select a chat to start messaging</p>
				<TiMessages className='text-3xl md:text-6xl text-center' />
			</div>
		</div>
	);
};



//starter code

// import MessageInput from "./MessageInput";
// import Messages from "./Messages"

// const MessageContainer = () => {
//     return (
//         <div className="md:min-w-[450px] flex flex-col">
//             <>
//                 {/* Header */}
//                 <div className='bg-slate-500 px-4 py-2 mb-2'>
//                     <span className='label-text'>To:</span> {/*{" "} */}
//                     <span className='text-gray-900 font-bold'>John doe</span>
//                 </div>
//                 {/* below the header we have messages */}
//                 <Messages />
//               <MessageInput /> 
//             </>
//         </div>
//     );
// };

// export default MessageContainer;
