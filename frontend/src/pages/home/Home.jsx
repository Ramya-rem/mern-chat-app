import MessageContainer from '../../components/messages/MessageContainer';
import Sidebar from '../../components/sidebar/Sidebar'
import { useState } from 'react';
import '../../index.css';
 

const Home = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);


  const handleSelectConversation = () => {
    setIsSidebarVisible(false);
  };

  const handleBackToSidebar = () => {
    setIsSidebarVisible(true);
  };
  return (
  <div className={`container flex ${isSidebarVisible ? '' : 'flex-col'}`} >
      {/* sidebar and megcontainer will be flex so sidebar in left side and msgcontainer is on left side  */}
      <div className={isSidebarVisible ? '' : 'sidebar-hidden'}>
        <Sidebar />
        </div>
        <div className={isSidebarVisible ? 'message-container-hidden' : 'message-container-visible'}>
      <MessageContainer onBack={handleBackToSidebar}/>
      </div>
    </div>
  );
  
};

export default Home;
