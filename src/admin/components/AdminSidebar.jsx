import React from 'react'
import { PiChartBarFill } from "react-icons/pi";
import { Link } from 'react-router-dom';
import { IoSettingsSharp } from "react-icons/io5";
import { FaDatabase } from "react-icons/fa6";


function AdminSidebar() {
  return (
   <div className='bg-blue-300 md:min-h-screen h-fit py-10'>
    {/* image */}
    <div className='flex justify-center'>
      <img style={{width:'150px',height:'150px', borderRadius:'50%'}} src="https://imgs.search.brave.com/OLipHLgA-10j8HzuLdO95KRd9ONXVEHttOCsEL7JC4w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTIv/NzU1Lzk4MS9zbWFs/bC9hLW1hbi1wcm9m/aWxlLWF2YXRhci1p/Y29uLXdpdGgtYS13/aGl0ZS1iYWNrZ3Jv/dW5kLWZyZWUtdmVj/dG9yLmpwZw" alt="Admin" />
    </div>
    {/* name */}
    <h3 className='text-xl font-bold my-5 text-center'>Name</h3>
    {/* links */}
    <div className='mt-10 flex flex-col justify-center items-center'>
      <div className='mt-3'>
       <Link to={'/admin'} className='flex items-center'><PiChartBarFill className='me-2' />DashBoard</Link>
      </div>
       <div className='mt-3'>
       <Link to={'/admin/resources'} className='flex items-center'><FaDatabase className='me-2' />collections</Link>
      </div>
       <div className='mt-3'>
       <Link to={'/admin/settings'} className='flex items-center'><IoSettingsSharp className='me-2' />settings</Link>
      </div>

    </div>
   </div>
  )
}

export default AdminSidebar