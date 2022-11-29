import Icons from './Icons'

function Sidenav() {
    return (
        <div className='bg-primary text-white h-screen py-8'>
            <div className='relative flex justify-center text-white mb-20'>
               <div className='h-10 w-8 bg-white rounded-md'>
               </div>
               <div className='absolute top-2 left-7 h-10 w-8 bg-white/30 rounded-md'>
               </div>
            </div>
            <div className='flex flex-col items-center gap-8 text-white/60 mb-28'>
                <Icons name='window' />
                <Icons name='logo' />
                <Icons name='calendar' />
                <Icons name='message' />
                <Icons name='group' active />
            </div>
            <div className='flex flex-col items-center gap-8 text-white/60 mb-28'>
                <Icons name='notification' size='sm'/>
                <Icons name='settings' size='sm'/>
            </div>
            <div className='h-[1px] w-4/5 mx-auto -mt-5 mb-10 bg-white/20' ></div>
            <div className='mt-5 w-full bg-primary'>
                <img src='images/user.jpg' alt='user' className='rounded-2xl mx-auto object-contain h-14 w-14' />
            </div>
        </div>
    );
}

export default Sidenav;
