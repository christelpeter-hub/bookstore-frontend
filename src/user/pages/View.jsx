import React, { useState } from 'react'
import Header from '../components/Header'
import { FaCamera, FaEye } from 'react-icons/fa'
import { HiBackward } from "react-icons/hi2";
import { Link } from 'react-router-dom';
import { IoCart } from "react-icons/io5";


function View() {
  const [modal,setModal]=useState(false)
  return (
    <>
    <Header/>
    <div className='md:m-10 m-5'>
      <div className='border p-5 shadow border-black'>
        <div className='md:grid grid-cols-4 gap-x-10'>
          {/* image */}
          <div className='col-span-1'>
            <img className='w-full' src="https://imgs.search.brave.com/Q1ZLnFONDDAp8o2sIjxHNkYbnbBsXRm7egFkRv5krKo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuYm9yZWRwYW5k/YS5jb20vYmxvZy93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMy8w/NS9iZXN0LWJvb2st/Y292ZXJzLTYtNjQ1/OGM0OGM1YWQ4Zl9f/NzAwLmpwZw" alt="Book" />
          </div>
          {/* book details */}
          <div className='col-span-3'>
           <div className='flex justify-between mt-5 md:mt-0'>
               <h3 className='font-bold text-2xl'>title</h3>
               <button onClick={()=>setModal(true)} className='text-gray-400'><FaEye/></button>
           </div>
           <h2 className='text-blue-300 font-bold text-xl my-5'>Author</h2>
           <div className='grid-cols-3 md:grid gap-5 my-10'>
                 <p className='font-bold'>Publlisher : </p>
                 <p className='font-bold'>Language : </p>
                 <p className='font-bold'>No Of pages : </p>
                 <p className='font-bold'>Category : </p>
                 <p className='font-bold'>ISBN : </p>
                 <p className='font-bold'>Selller : </p>
           </div>
            <div>
              <h4  className='font-bold text-lg'>Abstract: </h4>
            </div>
            <div className='flex justify-end'>
            <Link to={'/books'}  className="bg-[#080808] border-2 border-[#F5B52E] text-white px-6 py-3 font-bold rounded-xl flex items-center justify-center gap-2
           hover:bg-[#F5B52E] hover:text-black hover:scale-[1.03] hover:shadow-lg hover:shadow-[#F5B52E]/30 transition-all duration-300 ease-in-out" ><HiBackward className='me-2'/>Back</Link>
            <button className="bg-linear-to-r from-[#F5B52E] to-[#D88912] text-black font-bold ms-5 px-6 py-3 rounded-xl hover:brightness-110 transition flex items-center justify-center gap-2 "><IoCart className='text-lg' /> Buy $230</button>
            </div>
          </div>
        </div>
        </div>
        {/* modal */}
       {
        modal &&
        <div className='relative z-10 overflow-y-auto' onClick={()=>setModal(false)}>
          <div className='bg-gray-500/75 fixed inset-0'>
          <div className='flex justify-center items-center min-h-screen'>
           <div className='bg-white rounded-2xl md:w-250 w-100'>
            {/* modal tite */}
            <div className='bg-black text-white p-3'>
              <h3>Book Images</h3> 
              </div>
              {/* modal body */}
              <div className='relative p-5'>
                <p className='text-blue-300 flex items-center'><FaCamera className='me-2'/>Camera clicks of the book</p>
                <div className='md:flex flex-wrap my-4'>
               {/* dupliacte image */}
               <img className='md:w-75 w-25 md:me-2 md:mt-0 mb-3' src="https://imgs.search.brave.com/Q1ZLnFONDDAp8o2sIjxHNkYbnbBsXRm7egFkRv5krKo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuYm9yZWRwYW5k/YS5jb20vYmxvZy93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMy8w/NS9iZXN0LWJvb2st/Y292ZXJzLTYtNjQ1/OGM0OGM1YWQ4Zl9f/NzAwLmpwZw" alt="book" />
                </div>
              </div>
           </div>
          </div>

          </div>
        </div>
        }
    </div>

    </>
  )
}

export default View