import { useState } from 'react';
import MessageContainer from '../../components/messages/MessageContainer';
import Sidebar from '../../components/sidebar/Sidebar'

const Home = () => {
  const [selectedConversation, setSelectedConversation] = useState(null);
  return (
  <div className={`flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 mt-20  ${
        selectedConversation ? '' : 'sm:flex-col'}`}>
      {/* sidebar and megcontainer will be flex so sidebar in left side and msgcontainer is on left side  */}
      <Sidebar isVisible={selectedConversation} // Pass selectedConversation state to Sidebar
        onConversationSelect={conversation => setSelectedConversation(conversation)} // Handle conversation selection in Sidebar
      />
      <MessageContainer selectedConversation={selectedConversation} />
    </div>
  );
  
};

export default Home;
