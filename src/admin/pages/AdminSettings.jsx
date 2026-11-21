import React from 'react'
import AdminHeader from '../components/AdminHeader'
import AdminSidebar from '../components/AdminSidebar'
import { FaPencilAlt } from 'react-icons/fa'

function AdminSettings() {
  return (
   <>
      <AdminHeader/>
      <div className='md:grid grid-cols-5 gap-2'>
        <div className='col-span-1'>
         <AdminSidebar/>
        </div>
        <div className='col-span-4 p-10'>
          <h1 className='text-3xl font-bold text-center mb-10 mt-5'>Settings</h1>
          <div className='md:grid grid-cols-2 items-center'>
            {/* text part */}
              <div>
                <h2 className=' text-xl mb-5 font-bold'>Welcome, Admin 👋</h2>
                <p className='text-justify'>This is your personal administration space where you can manage your account details, system preferences, and platform roles with ease. From here, you can update essential information such as your username, password, contact details, and notification preferences — ensuring your access remains secure and personalized.</p>
                <h4 className='text-lg my-5 font-medium'>🔧 What You Can Manage in This Section:</h4>
                <ul>
                  <li>✏️ Update personal details (name, email, role, profile picture)</li>
                  <li>🔐 Change or reset your password</li>
                  <li>📢 Configure notification and alert preferences</li>
                  <li>👥 Manage permissions based on assigned access level</li>
                  <li>🧩 Customize dashboard visibility and layout</li>
                </ul>
                <p className='my-5 text-justify'>Your profile settings help ensure your administrative tools work the way you need them to — securely, efficiently, and with complete control. Thank you for keeping the platform organized and running smoothly. Continue managing, updating, and improving the system — one step at a time. 🚀📚</p>
              </div>
              {/* edit  */}
               <div className='flex justify-center items-center flex-col m-10 bg-blue-200 p-5 rounded'>
                            <label htmlFor="userProfile">
                              <input type="file" id='userProfile' hidden />
                              <img style={{width:'100px',height:'100px',borderRadius:'50%'}} className='w-50 h-50p object-contain' src="https://imgs.search.brave.com/OpbbSPZD14-aVE7MlUQDBUBAPlpS04udkFCBMt7jnDo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjE5/MjIyMjExMi92ZWN0/b3IvcHJvZmlsZS1h/dmF0YXItb2YtYmVh/cmQtbWFuLXdlYXJp/bmctc3VuZ2xhc3Nl/cy5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9ODJldmhBR0hK/VHJhNmtqbFdORHdk/b21xR3VtVWpKb3Fx/dUdKbWJZQ0M1QT0" alt="user" />
                              <button className='bg-black text-white px-3 py-4 rounded z-53 ' style={{marginLeft:'85px', marginTop:'-125px'}}><FaPencilAlt size={'14'}/></button>
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
                          
                            {/* reset and update button */}
                               <div className=' flex justify-end w-full px-5 mt-5'>
                                    <button className='bg-[#171717] text-white p-3 rounded me-2'>Reset</button>
                                    <button  className='bg-[#D6A64F] text-white p-3 rounded me-2'>Update</button>
                               </div>
                          </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminSettings