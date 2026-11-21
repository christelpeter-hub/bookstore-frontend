import React from 'react'
import { FaPowerOff } from 'react-icons/fa'

function AdminHeader() {
  return (
   <>
   {/* top */}
   <div className='flex justify-between items-center p-3 md:mx-20'>
    <div className='flex items-center'>
      <img width={'50px'} height={'50px'} src="https://imgs.search.brave.com/LGLNSX8JFt3dxhRYaFa2LkSUmTSA_jy6RgicurWfkNM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9iYXNp/Yy1yZ2ItMTYyMjk1/Mjg5LmpwZw" alt="Icon" />
      <h1>BOOKSTORE</h1>
    </div>
    <button className='flex items-center px-3 py-2 bg-black text-white rounded hover:bg-white hover:text-black'>Logout<FaPowerOff className='ms-2'/></button>
   </div>
   {/* header marque */}
   <div className='w-full p-3 bg-black text-white'>
     <marquee>welcome admin,you are all set to manage and monitor the system.Let's get into work </marquee>
   </div>
   </>
  )
}

export default AdminHeader