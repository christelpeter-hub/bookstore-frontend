import React, { useState } from 'react'
import Header from '../components/Header'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { GiOpenBook } from "react-icons/gi";

function Book() {
  const [toggle,setToggle]=useState(false)
  return (
    <>
    <Header/>
    <>
    <div className='flex flex-col justify-center items-center my-5'>
      <h1 className='text-3xl font-bold my-5'>All Books</h1>
      <div className='flex my-5'>
      <input type="text" className='p-2 border border-gray-200 w-100 rounded' placeholder='Search by Book Title'/>
      <button className='p-2 bg-yellow-500 text-white ms-1'>Search</button>
      </div>
    </div>
    {/* grid fiter and book card */}
    <div className='md:grid grid-cols-4 p-5 md:px-40 mb-10'>
      {/* filter */}
        <div className='col-span-1'>
         <div className='flex justify-between'>
          <h1 className='text-2xl font-bold'>Filter</h1>
          <button onClick={()=>setToggle(!toggle)} className='font-bold text-2xl md:hidden'><FaBars/></button>
         </div>
         {/* filter category */}
         <div className={toggle? "block":"hidden md:block"}>
           <div className='mt-3'>
            <input type="radio" name='filter' id='no-filter' />
            <label htmlFor="no-filter" className='ms-3'>All</label>
           </div>
           <div className='mt-3'>
             <div className='mt-3'>
            <input type="radio" name='filter' id='no-filter' />
            <label htmlFor="no-filter" className='ms-3'>Book Category</label>
           </div>
           </div>
         </div>
        </div>
        {/* Book card */}
        <div className='col-span-3'>
          <div className='md:grid grid-cols-4 md:my-0'>
          {/* duplicating card */}
          <div className='shadow rounded p-3 m-4 md:my-0'>
            <img width={'100%'} height={'300px'} src="https://imgs.search.brave.com/Q1ZLnFONDDAp8o2sIjxHNkYbnbBsXRm7egFkRv5krKo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuYm9yZWRwYW5k/YS5jb20vYmxvZy93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMy8w/NS9iZXN0LWJvb2st/Y292ZXJzLTYtNjQ1/OGM0OGM1YWQ4Zl9f/NzAwLmpwZw" alt="book" />
            <div className='flex flex-col justify-center items-center mt-4'>
              <h2 className='text-yellow-400 font-bold text-xl'>Author</h2>
              <h3 className='text-lg'>Title</h3>
              <Link to={'/book/id'} className='font-bold bg-[#D49A2A] hover:bg-[#B9821F] p-2 text-white mt-2 rounded'> <GiOpenBook className='inline-block mr-2' />View Book</Link>
            </div>
          </div>
       </div>
        </div>
    </div>
    </>
    </>
  )
}

export default Book