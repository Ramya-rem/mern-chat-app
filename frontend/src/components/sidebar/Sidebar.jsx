import Conversations from "./Conversations"
import LogoutButton from "./LogoutButton"
import SearchInput from "./SearchInput"

const Sidebar = () => {
  return (
    <div  className='border-r border-slate-500 p-4 flex flex-col sm:w-[200px] md:w-[250px] lg:w-[300px]'>
      <SearchInput />
      <div className="divider px-3"></div>
    <Conversations />
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
