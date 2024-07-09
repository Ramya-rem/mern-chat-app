import useConversation from "../../zustand/useConversation";
import Conversations from "./Conversations"
import LogoutButton from "./LogoutButton"
import SearchInput from "./SearchInput"
import { FaBars } from "react-icons/fa";

import { useEffect } from "react";

const Sidebar = () => {
  const { selectedConversation } = useConversation();
  return (
    <div  className={`border-r border-slate-500 p-4 flex flex-col ${selectedConversation ? 'hidden' : 'block sm:block'}`}>
      <SearchInput />
      <div className="divider px-3"></div>
    <Conversations />
    <LogoutButton />
    </div>

  )
}

export default Sidebar

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
