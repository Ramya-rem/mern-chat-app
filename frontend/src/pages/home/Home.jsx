import MessageContainer from '../../components/messages/MessageContainer';
import Sidebar from '../../components/sidebar/Sidebar'
 

const Home = () => {
  return (
  <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 mt-20' >
      {/* sidebar and megcontainer will be flex so sidebar in left side and msgcontainer is on left side  */}
        <Sidebar />
      <MessageContainer />
      </div>
  );
  
};

export default Home;
