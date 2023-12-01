'use client'
import React from 'react'

const Todo = () => {
  return (
    <div>
      <div className='bg-[#eef2f5] w-full  lg:w-96  h-[77vh] rounded-xl'>
        <div className='grid grid-cols-2'>
          <div className='flex p-4 justify-start'>
            <h1 className="text-md mt-3  font-bold text-gray-800">To do</h1>
          </div>
          <div className='flex gap-4 p-4 justify-end'>


            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn bg-[#eef2f5]" onClick={() => document.getElementById('my_modal_5').showModal()}><img src="add.svg" className='w-6 h-6' alt="" /></button>
            <dialog id="my_modal_5" className=" modal modal-bottom sm:modal-middle">
              <div className="modal-box ">
                <h3 className="font-bold text-center text-lg mb-4">Add Task</h3>
                <div className='flex flex-wrap justify-center'>

              
                <input type="text" placeholder="Priority" className="input input-bordered mb-2  input-md w-full max-w-xs" />
                <input type="text" placeholder="Task Heading" className="input input-bordered mb-2  input-md w-full max-w-xs" />
                <input type="text" placeholder="Task Details" className="input mb-2 input-bordered  input-md w-full max-w-xs" />
                <input type="text" placeholder="Assign to" className="input input-bordered  input-md w-full max-w-xs" />
                </div>
                <div className="flex justify-center modal-action">
                  <form method="dialog">
                    <button className="btn">Close</button>
                  </form>
                  <button type='submit' className="btn bg-blue-500 text-white ">Submit</button>
                </div>
              </div>
            </dialog>
            <button className="btn bg-[#eef2f5] border border-gray-300  text-red-400" onClick={() => document.getElementById('my_modal_1').showModal()}>
              Delete all
            </button>
            <dialog id="my_modal_1" className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-lg">Hello!</h3>
                <p className="py-4">Press ESC key or click the button below to close</p>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
        <div className='flex flex-wrap mt-4 justify-center'>
          <div className='bg-white w-full mx-6 h-auto py-4 rounded-2xl'>
            <div className='grid grid-cols-2'>
              <div className='flex px-4 pt-2 justify-start'>
                <img src='green.png' className='w-4 mt-3 h-4' alt='' />
                <h1 className=' text-[10px] text-gray-400 mt-3 uppercase font-medium'>Priority</h1>
              </div>
              <div className='flex px-4 relative -top-1 pt-2 justify-end'>
                <div className="dropdown  dropdown-bottom dropdown-end">
                  <div tabIndex={0} role="button" className="btn bg-white m-1"> <img src="tdots.svg" className='w-6 h-6' alt="" /></div>
                  <ul className="dropdown-content border border-gray-300 z-[1] menu p-2 shadow-xl bg-base-100 rounded-box w-52">
                    <li className='text-red-400'><a>Delete</a></li>
                    <li className='text-blue-400'><a>Update</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <h1 className='px-4 pt-1 text-lg font-bold '>Task Heading</h1>
            <p className='px-4 pt-2 text-xs text-gray-600'>Task Details
            </p>
            <div class=" pt-4 px-4">
              <div className='grid grid-cols-2'>
                <div className='flex  -space-x-4 justify-start'>
                <h1 className='pt-1 text-md text-gray-500 font-semibold '>Assign to</h1>

                </div>
                <div className='flex items-center justify-end gap-2'>
                  <p className='text-xs py-2 font-semibold cursor-text bg-gray-50 border-2 rounded-lg px-2 text-gray-700'>Date here</p>
                  <button className='text-xs py-1 bg-[#2194FF] rounded-lg px-2 text-gray-50'><img src='rightar.svg' className='w-6 h-6' /></button>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default Todo
