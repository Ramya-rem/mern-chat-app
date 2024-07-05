import Conversations from "./Conversations"
import LogoutButton from "./LogoutButton"
import SearchInput from "./SearchInput"

const Sidebar = () => {
  return (
    <div  className='border-r border-slate-500 p-4 flex flex-col sm:w-1/3 md:w-1/4'>
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
