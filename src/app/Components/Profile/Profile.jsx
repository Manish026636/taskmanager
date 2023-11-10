import React from 'react'

const Profile = () => {
    return (
        <div>
            <div className='  px-6'>
                <div className='flex justify-center mt-32'>
                    <div className='bg-white border border-gray-200 rounded-[30px] w-auto  h-auto py-10'>
                        <div className='flex px-10 justify-center mt-2'>
                            <img src='https://images.unsplash.com/photo-1699581695777-167db9ac6e23?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='w-28 h-28 rounded-full' alt='' />
                        </div>
                        <h1 className='text-3xl px-10 text-center mt-4 font-bold text-gray-400'>Lakshitaa Chellaramani</h1>
                        <div className='border border-blue-100 mt-4'></div>
                        <div className='flex px-8 pt-6 justify-start'>
                            <img src='email.svg ' className='w-6 h-6' alt='' />
                            <h1 className=' text-[15px] ml-4 mt-1 text-gray-400 uppercase font-medium'>Email Id : <span className='text-md text-gray-500 font-bold'>lakshitaa@gmail.com</span></h1>
                            
                        </div>
                        <div className='flex px-8 pt-6 justify-start'>
                            <img src='calendar.svg' className='w-6 h-6' alt='' />
                            <h1 className=' text-[15px] ml-4 text-gray-400 uppercase font-medium'>Year : <span className='text-md text-gray-500 font-bold'>BTECH - 2ND YEAR</span></h1>
                            
                        </div>
                        <div className='flex px-8 pt-6 justify-start'>
                            <img src='ID.svg' className='w-6 h-6' alt='' />
                            <h1 className=' text-[15px] ml-4 text-gray-400 uppercase font-medium'>SAP ID : <span className='text-md text-gray-500 font-bold'>80289333</span></h1>
                            
                        </div>
                        <div className='flex px-8 pt-6 justify-start'>
                            <img src='committee.svg' className='w-6 h-6' alt='' />
                            <h1 className=' text-[15px] ml-4 text-gray-400 uppercase font-medium'>Committee : <span className='text-md text-gray-500 font-bold'>GDSC</span></h1>
                            
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Profile
