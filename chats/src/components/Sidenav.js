import Icons from './Icons'

function Sidenav() {
    return (
        <div className='flex flex-col gap-4 md:justify-between h-screen w-24 bg-primary text-white py-8'>
            <div className='mb-20'>
                <SiteLogo />
            </div>

            <div className='flex flex-col items-center gap-8 text-white/60 mb-8'>
                <Icons name='window' active />
                <Icons name='logo' />
                <Icons name='calendar' />
                <Icons name='message' />
                <Icons name='group' />
            </div>

            <div className='flex flex-col items-center gap-8 text-white/60 mb-8'>
                <Icons name='notification' size='sm' />
                <Icons name='settings' size='sm' />
            </div>

            <div className='h-[1px] w-4/5 mx-auto bg-white/20 mb-8'></div>

            <div className='w-full'>
                <img src='images/user.jpg' alt='user' className='rounded-2xl mx-auto object-contain h-14 w-14' />
            </div>

        </div>
    );
}

const SiteLogo = () => {
    return (
        <div className='relative flex justify-center text-white'>
            <div className='absolute'>
                <div className='h-10 w-8 bg-white rounded-md'>
                </div>
                <div className='absolute top-2 right-2 h-10 w-8 bg-white/30 rounded-md'>
                </div>
            </div>
        </div>
    )
}

export default Sidenav;
