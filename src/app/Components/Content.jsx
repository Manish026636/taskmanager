import React from 'react'
import Todo from './Tasks/Todo'
import Progress from './Tasks/Progress'
import Done from './Tasks/Done'

const Content = () => {
  return (
    <div>
      <div className="dropdown mx-24 mt-4 flex justify-end">
        <div >
          <label tabIndex={0} className="btn border-0 bg-white m-1">This week <img src='darrow.svg' className='w-6 h-6' alt='' /></label>

        </div>

        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
        </ul>
      </div>
      <div class="px-6 ">

        <div
          class="flex mt-4 items-center justify-center">

          <div>
            <div className='grid  lg:grid-cols-3 gap-6'>
              <div>
                <Todo />

              </div>
              <div>
                <Progress />

              </div>
              <div>
                <Done />

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content
