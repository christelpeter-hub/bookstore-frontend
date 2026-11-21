import React, { useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import AdminSidebar from '../components/AdminSidebar'

function AdminResource() {
  const[currentTab,setCurrentTab]=useState(1)
  return (
   <>
      <AdminHeader/>
      <div className='md:grid grid-cols-5 gap-2'>
        <div className='col-span-1'>
         <AdminSidebar/>
        </div>
        <div className='col-span-4 p-10'>
         <h1 className='text-3xl font-bold text-center mb-10' > Admin Resources</h1>
         <div className='flex justify-center items-center my-8 font-medium text-lg'>
        <p onClick={()=>setCurrentTab(1)} className={currentTab==1 ? 'p-4 border-gray-400 border-l border-t border-r  rounded cursor-pointer':'p-4 border-gray-400 border-b  rounded cursor-pointer'}>Books</p>
         <p onClick={()=>setCurrentTab(2)}   className={currentTab==2 ? 'p-4 border-gray-400 border-l   border-t border-r rounded cursor-pointer':'p-4 border-gray-400 border-b  rounded cursor-pointer'}>Users</p>
      </div>
      {/* tab content */}
      {
        currentTab==1 &&
       <div className='md:grid grid-cols-4 md:my-0'>
          {/* duplicating card */}
          <div className='shadow rounded p-3 m-4 md:my-0'>
            <img width={'100%'} height={'300px'} src="https://imgs.search.brave.com/Q1ZLnFONDDAp8o2sIjxHNkYbnbBsXRm7egFkRv5krKo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuYm9yZWRwYW5k/YS5jb20vYmxvZy93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMy8w/NS9iZXN0LWJvb2st/Y292ZXJzLTYtNjQ1/OGM0OGM1YWQ4Zl9f/NzAwLmpwZw" alt="" />
            <div className='flex flex-col justify-center items-center mt-4'>
              <h2 className='text-yellow-400 font-bold text-xl'>Author</h2>
              <h3 className='text-lg'>Title</h3>
              <p className='font-bold text-red-500'>Price</p>
              {/* approve button */}
              <button className='bg-green-500 text-white p-2 mt-2 w-full rounded border border-black'>APPROVE</button>
            </div>
          </div>
       </div>
      }
      {
        currentTab==2 &&
        <div>
          <div className='md:grid grid-cols-3 my-5 w-full'>
          {/* duplicating card */}
          <div className='shadow rounded p-2 m-2 bg-blue-200'>
            <p className=' text-red-800 font-bold text-md'>ID:</p>
            <div className='flex mt-3 items-center'>
              <img width={'80px'} height={'80px'} style={{borderRadius:"50%"}} src="https://imgs.search.brave.com/OpbbSPZD14-aVE7MlUQDBUBAPlpS04udkFCBMt7jnDo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjE5/MjIyMjExMi92ZWN0/b3IvcHJvZmlsZS1h/dmF0YXItb2YtYmVh/cmQtbWFuLXdlYXJp/bmctc3VuZ2xhc3Nl/cy5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9ODJldmhBR0hK/VHJhNmtqbFdORHdk/b21xR3VtVWpKb3Fx/dUdKbWJZQ0M1QT0" alt="" />
              <div className='flex flex-col ml-3 w-full'>
                <h2 className='text-blue-600 font-bold text-md'>Username</h2>
                <p className='text-xs'>Mail</p>
            </div>
            </div>
          </div>
       </div>
        </div>
      }
        </div>
      </div>
    </>
  )
}

export default AdminResource