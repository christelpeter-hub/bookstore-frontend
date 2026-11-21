import React, { useState } from 'react'
import Header from '../components/Header'
import { RiCheckboxCircleFill } from "react-icons/ri";
import Edit from '../components/Edit';
import UploadBook from '../components/UploadBook';
import BookStatus from '../components/BookStatus';
import Purchase from '../components/Purchase';

function Profile() {
  const[currentTab,setCurrentTab]=useState(1)
  return (
    <>
    <Header/>
    <div style={{height:'200px'}} className='bg-black'></div>
    <div style={{width:'230px',height:'230px',borderRadius:'50%',marginTop:'-130px',marginLeft:'70px'}}className='bg-white p-3'>
       <img style={{width:'200px',height:'200px',borderRadius:'50%'}} src="https://imgs.search.brave.com/pm6UWwglBub9wtKL6d3sfbYENdAd_J3na9UopqGHyHM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNDIv/NTM1LzE5NS9zbWFs/bC9wcm9maWxlLWlj/b24taWxsdXN0cmF0/aW9uLXBuZy5wbmc" alt="user" />
    </div>
    <div className='justify-between md:flex px-5'>
      <div className='flex items-center'>
        <h1 className='text-2xl font-black md:text-3xl'>UserName</h1>
        <RiCheckboxCircleFill className='text-blue-500 ms-3' />
      </div>
      <div>
        <Edit/>
      </div>
    </div>
    <p className='text-xl font-bold px-20 mt-5'>Bio</p>
    <p className='text-justify md:px-20 px-5 my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore expedita cumque cum qui nemo exercitationem fuga aspernatur rem sunt? Assumenda totam aspernatur at deserunt ea laborum molestiae omnis quasi itaque Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, consectetur quam? Porro neque molestiae veritatis totam! Eum autem necessitatibus, perferendis facilis, ipsa natus voluptatem modi exercitationem architecto, eos quo qui!</p>
    <div className='md:px-40' >
      {/* tabs */}
      <div className='flex justify-center items-center my-8 font-medium text-lg'>
        <p onClick={()=>setCurrentTab(1)} className={currentTab==1 ? 'p-4 border-gray-400 border-l border-t border-r  rounded cursor-pointer':'p-4 border-gray-400 border-b  rounded cursor-pointer'}>Upload Book</p>
         <p onClick={()=>setCurrentTab(2)}   className={currentTab==2 ? 'p-4 border-gray-400 border-l   border-t border-r rounded cursor-pointer':'p-4 border-gray-400 border-b  rounded cursor-pointer'}>Upload Book Status</p>
          <p  onClick={()=>setCurrentTab(3)} className={currentTab==3 ? 'p-4 border-gray-400 border-l   border-t border-r rounded cursor-pointer':'p-4 border-gray-400 border-b rounded cursor-pointer'}>Purchase History</p>
      </div>
      {/* tab content */}
      {
        currentTab==1 &&
        <div><UploadBook/></div>
      }
      {
        currentTab==2 &&
        <div><BookStatus/></div>
      }
      {
         currentTab==3 &&
        <div><Purchase/></div>
      }
    </div>
    </>
  )
}

export default Profile