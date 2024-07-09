import MessageContainer from '../../components/messages/MessageContainer';
import Sidebar from '../../components/sidebar/Sidebar'
import useConversation from '../../zustand/useConversation';

const Home = () => {
  const { selectedConversation } = useConversation();

  return (
  <div className='flex flex-col sm:flex-row sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 mt-20'>
      {/* sidebar and megcontainer will be flex so sidebar in left side and msgcontainer is on left side  */}
    <div className={`flex-shrink-0 ${selectedConversation ? 'hidden' : 'block'} sm:block w-full sm:w-1/3`}>
      <Sidebar />
      </div>
      <div className={`flex-grow ${selectedConversation ? 'block' : 'hidden sm:block'}`}>
      <MessageContainer />
      </div>
    </div>
  );
  
};

export default Home;
