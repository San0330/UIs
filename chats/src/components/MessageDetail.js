const MessageDetail = ({ name, message, time, isTyping, isSent, isOnline, newMessageCount }) => {

    let messageStatus;

    if (isSent) {
        messageStatus = (
            <div className='relative text-primary text-right'>
                <span>✓</span>
                <span className='absolute right-2'>✓</span>
            </div>
        )
    } else if (newMessageCount) {
        messageStatus = (
            <div className='rounded-full bg-red-500 text-white text-center h-7 w-7 ml-auto'>
                <div>{Math.min(newMessageCount, 9)}{newMessageCount > 9 ? '+' : ''}</div>
            </div>
        )
    }

    return (
        <div className='flex py-5'>
            <div className='flex-1 relative mr-5'>
                <img src='images/user.jpg' alt='user' className='rounded-full mx-auto object-contain h-14 w-14' />
                {isOnline && <div className="bg-green-500 border-white h-2 w-2 rounded-full absolute bottom-1 right-2"></div>}
            </div>
            <div className='flex-3 flex flex-col gap-1 text-lg'>
                <div className='font-semibold'>{name}</div>
                {
                    isTyping ?
                        <div className='text-green-500'>Typing...</div> :
                        <div className='text-gray-500'>{message}</div>
                }
            </div>
            <div className='flex-1 gap-2'>
                <p className='text-gray-500'>{time}</p>
                {messageStatus}
            </div>
        </div>
    )
}

export default MessageDetail
