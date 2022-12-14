import Icons from './Icons'
import MessageDetail from './MessageDetail'

const ChatUsers = () => {
    return (
        <div className='flex flex-col px-8 h-screen overflow-scroll'>

            <div className='flex flex-row items-center mx-auto justify-between w-full pt-5'>
                <span className='text-3xl font-bold'>Messages</span>
                <div className='text-primary'>
                    <Icons size='sm' />
                </div>
            </div>

            <div className='flex gap-3 items-center bg-gray-200 text-gray-500 mt-5 px-5 py-3 rounded-md'>
                <Icons name='search' size='sm' />
                <input type='text' placeholder='Search ...' className='bg-gray-200' />
            </div>

            <CategoryTitle title='Pinned'>
                <Icons name='pinned' size='xs' />
            </CategoryTitle>


            <MessageDetail name='Laxman Tharu 1' message='hello man' time='4:30 PM' isSent isOnline />
            <MessageDetail name='Laxman Tharu 2' message='hello man how ' newMessageCount='2' time='4:30 PM' isTyping='false' />
            <MessageDetail name='Laxman Tharu 3' message='do homework' newMessageCount='1' time='4:30 PM' isTyping='false' />
            <MessageDetail name='Laxman Tharu 4' message='oky indso' time='4:30 PM' isSent='true' isOnline />


            <CategoryTitle title='All Messages'>
                <Icons name='logo' size='xs' />
            </CategoryTitle>

            <MessageDetail name='Laxman Tharu 1' message='hello man' time='4:30 PM' isSent isOnline />
            <MessageDetail name='Laxman Tharu 2' message='hello man how ' newMessageCount='2' time='4:30 PM' isTyping='false' />
            <MessageDetail name='Laxman Tharu 3' message='do homework' newMessageCount='1' time='4:30 PM' isTyping='false' />
            <MessageDetail name='Laxman Tharu 4' message='oky indso' time='4:30 PM' isSent='true' isOnline />
        </div>
    )
}

const CategoryTitle = ({ title, children }) => {
    return (
        <div className='flex justify-start items-center mt-5 gap-3 text-gray-400 w-auto'>
            <div className='shrink'>
                {children}
            </div>
            <p className='font-semibold uppercase'>{title}</p>
        </div>
    )
}

export default ChatUsers
