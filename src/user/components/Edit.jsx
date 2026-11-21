import React, { useState } from 'react'
import { FaPencilAlt } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'

function Edit() {
      const [offCanvas,setOffcanvas]=useState(false)
  return ( 
    <div>
      {/* button  */}
      <button onClick={()=>setOffcanvas(true)} className='bg-black text-white p-2 flex items-center rounded border hover:bg-white hover:text-black'><FaPencilAlt className='me-2'/>Edit</button>
      {/* off canvas */}
     { offCanvas &&
      <div>
            <div className='fixed inset-0 bg-gray-500/75 w-full h-full'></div>
            <div className='bg-white h-full w-90 z-50 fixed top-0 left-0' >
            {/* header */}
            <div className='bg-black text-white px-3 py-4 flex justify-between text-2xl'>
             <h1>Update User Profile</h1>
             <FaX onClick={()=>setOffcanvas(false)}/>
            </div>

            {/* body */}
            <div className='flex justify-center items-center flex-col my-5'>
              <label htmlFor="userProfile">
                <input type="file" id='userProfile' hidden />
                <img className='w-50 h-50p object-contain' src="https://imgs.search.brave.com/O7p9oC9lFfkPMk_aybfPZiwBt0JqbCN9rQ1C7bpOu00/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNzUv/Mjc4LzEyNy9zbWFs/bC9wcm9maWxlLXVz/ZXItYWNjb3VudC1p/ZGVudGl0eS1pY29u/LXZlY3Rvci5qcGc" alt="user" />
                <button className='bg-black text-white px-3 py-4 rounded z-53 fixed' style={{marginLeft:'158px', marginTop:'-55px'}}><FaPencilAlt/></button>
              </label>
              {/* username */}
              <div className='mt-10 mb-3 w-full px-5'>
                <input type="text" placeholder='Username' className='w-full border border-black rounded p-2' />
              </div>
              {/* new password */}
               <div className='mt-3 mb-3 w-full px-5'>
                <input type="text" placeholder='New Password' className='w-full border border-black rounded p-2' />
              </div>
              {/* confirm paswword */}
               <div className='mt-3 mb-3 w-full px-5'>
                <input type="text" placeholder='Confirm Password' className='w-full border border-black rounded p-2' />
              </div>
              {/* bio */}
               <div className='mt-3 mb-3 w-full px-5'>
                <input type="text" placeholder='Bio' className='w-full border border-black rounded p-2' />
              </div>
              {/* reset and update button */}
                 <div className=' flex justify-end w-full px-5 mt-5'>
                      <button className='bg-[#171717] text-white p-3 rounded me-2'>Reset</button>
                      <button  className='bg-[#D6A64F] text-white p-3 rounded me-2'>Update</button>
                 </div>
            </div>
            </div>
      </div>
      }
    </div>
  )
}

export default Edit