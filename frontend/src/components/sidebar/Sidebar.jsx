import React from 'react';
import Conversations from "./Conversations"
import LogoutButton from "./LogoutButton"
import SearchInput from "./SearchInput"


const Sidebar = ({ isVisible, onConversationSelect }) => {
  const handleConversationClick = (conversation) => {
    onConversationSelect(conversation); // Call the callback prop with selected conversation
  };
  return (
    <div  className={`border-r border-slate-500 p-4 flex flex-col ${
      isVisible ? '' : 'hidden sm:block' // Show sidebar on mobile only when conversation is selected
    }`}>
      <SearchInput />
      <div className="divider px-3"></div>
    <Conversations onClick={handleConversationClick} /> {/* Pass onClick handler to Conversations */}
    <LogoutButton />
    </div>

  );
}; 

export default Sidebar;

//starter code 
// import Conversations from "./Conversations"
// import LogoutButton from "./LogoutButton"
// import SearchInput from "./SearchInput"

// const Sidebar = () => {
//   return (
//     <div  className='border-r border-slate-500 p-4 flex flex-col'>
//       <SearchInput />
//       <div className="divider px-3"></div>
//     <Conversations />
//     <LogoutButton />
//     </div>

//   )
// }

// export default Sidebar
