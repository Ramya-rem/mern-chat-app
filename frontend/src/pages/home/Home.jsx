import MessageContainer from '../../components/messages/MessageContainer';
import Sidebar from '../../components/sidebar/Sidebar'
import useConversation from '../../zustand/useConversation';
 

const Home = () => {
  const { selectedConversation } = useConversation();
  return (
  <div className='flex flex-col sm:flex-row rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 lg:mt-20 sm:mt-0 h-screen' >
      {/* sidebar and megcontainer will be flex so sidebar in left side and msgcontainer is on left side  */}
      <div className={`flex ${selectedConversation ? 'hidden' : 'flex'} w-full sm:w-auto sm:flex-grow-0`}>
        <Sidebar />
        </div>
        <div className={`flex-grow ${selectedConversation ? 'flex' : 'hidden sm:flex'} h-full`}>
      <MessageContainer />
      </div>
      </div>
  );
  
};

export default Home;
