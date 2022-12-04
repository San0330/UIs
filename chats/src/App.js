import Sidenav from "./components/Sidenav";
import ChatUsers from "./components/ChatUser";

function App() {
    return (
        <div className='flex flex-row'>
            <div className='shrink'>
                <Sidenav />
            </div>
            <div className='flex-3'>
                <ChatUsers />
            </div>
            <div className='flex-9 bg-blue-400'>
                Chats
            </div>
            <div className='flex-3 bg-green-400'>
                chat user settings
            </div>
        </div>
    );
}

export default App;
