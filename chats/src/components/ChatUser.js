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
