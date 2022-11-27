import Sidenav from "./components/sidenav";

function App() {
    return (
        <div className='flex flex-row'>
            <div className='flex-1 bg-gray-400'>
                <Sidenav />
            </div>
            <div className='flex-3 bg-red-400'>
                Chat Users List
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
