import Icons from './Icons'

const ChatUsers = () => {
    return (
        <div className='flex flex-col px-8'>
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

            <div className='flex justify-start items-center mt-5 gap-3 text-gray-400 w-auto'>
                <div className='shrink'>
                    <Icons name='pinned' size='xs' />
                </div>
                <p className='font-semibold uppercase'>Pinned</p>
            </div>

            <div className='flex py-5'>
                <div className='flex-1 relative mr-5'>
                    <img src='images/user.jpg' alt='user' className='rounded-full mx-auto object-contain h-14 w-14' />
                    <div className="bg-green-500 border-white h-2 w-2 rounded-full absolute bottom-1 right-2"></div>
                </div>
                <div className='flex-3 flex flex-col'>
                    <div className='font-semibold text-lg'>Santosh Neupane</div>
                    <div>Santosh Neupane</div>
                </div>
                <div className='flex-1'>
                    <p>4:30 PM</p>
                    <div className='rounded-full bg-red-500 text-white text-center h-6 w-6 ml-auto'>
                        <div>9+</div>
                    </div>
                </div>
            </div>

            <div className='flex py-5 gap-1'>
                <div className='flex-1'>
                    <img src='images/user.jpg' alt='user' className='rounded-full mx-auto object-contain h-14 w-14' />
                </div>
                <div className='flex-3 flex flex-col'>
                    <div className='font-semibold text-lg'>Santosh Neupane</div>
                    <div className='text-green-500'>Typing...</div>
                </div>
                <div className='flex-1'>
                    <p>4:30 PM</p>
                    <div className='relative text-primary text-right'>
                        <span>✓</span>
                        <span className='absolute right-2'>✓</span>
                    </div>
                </div>
            </div>

            <div className='flex justify-start items-center mt-5 gap-3 text-gray-400 w-auto'>
                <div className='shrink'>
                    <Icons name='logo' size='xs' />
                </div>
                <p className='font-semibold uppercase'>All Message</p>
            </div>
        </div>
    )
}

export default ChatUsers
