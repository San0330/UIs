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

        </div>
    )
}

export default ChatUsers
