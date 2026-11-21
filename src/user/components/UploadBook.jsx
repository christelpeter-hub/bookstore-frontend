import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { GrPowerReset } from "react-icons/gr";
import { RiFolderUploadFill } from 'react-icons/ri';

function UploadBook() {
  return (
    <div className='p-10 my-20 mx-5 bg-[#FFFFFF]'>
       <h1 className='text-center text-3xl font-medium'>Upload Book Details</h1>
       <div className='md:grid grid-cols-2 mt-10 w-full'>
        <div className='px-3'>
             <div className='mb-3'>
              <input type="text" placeholder='Book Title' className='w-full p-2 rounded-lg border border-[#F2CBAA] bg-[#FBE9D8]' />
             </div>
             <div className='mb-3'>
              <input type="text" placeholder='Author' className='w-full p-2 rounded-lg border border-[#F2CBAA] bg-[#FBE9D8]' />
             </div>
             <div className='mb-3'>
              <input type="text" placeholder='Book Cover Image URL' className='w-full p-2 rounded-lg border border-[#F2CBAA] bg-[#FBE9D8]' />
             </div>
             <div className='mb-3'>
              <input type="text" placeholder='Book Title' className='w-full p-2 rounded-lg border border-[#F2CBAA] bg-[#FBE9D8]' />
             </div>
             <div className='mb-3'>
              <input type="text" placeholder='Total Pages' className='w-full p-2 rounded-lg border border-[#F2CBAA] bg-[#FBE9D8]' />
             </div>
             <div className='mb-3'>
              <input type="text" placeholder='Orginal Price' className='w-full p-2 rounded-lg border border-[#F2CBAA] bg-[#FBE9D8]' />
             </div>
              <div className='mb-3'>
              <input type="text" placeholder='Discount Price' className='w-full p-2 rounded-lg border border-[#F2CBAA] bg-[#FBE9D8]' />
             </div>
              <div className='mb-3'>
              <textarea type="text" placeholder='Abstract'rows={'5'} className='w-full p-2 rounded-lg border border-[#F2CBAA] bg-[#FBE9D8]' />
             </div>
        </div>
         <div className='px-3'>
             <div className='mb-3'>
              <input type="text" placeholder='Publisher' className='w-full p-2 rounded-lg border border-[#F2CBAA] bg-[#FBE9D8]' />
             </div>
             <div className='mb-3'>
              <input type="text" placeholder='ISBN' className='w-full p-2 rounded-lg border border-[#F2CBAA] bg-[#FBE9D8]' />
             </div>
             <div className='mb-3'>
              <input type="text" placeholder='Language' className='w-full p-2 rounded-lg border border-[#F2CBAA] bg-[#FBE9D8]' />
             </div>
             <div className='mb-3'>
              <input type="text" placeholder='Category' className='w-full p-2 rounded-lg border border-[#F2CBAA] bg-[#FBE9D8]' />
             </div>
             {/* upload book image */}
             <div className='flex mb-3 justify-center items-center mt-10'>
                <label htmlFor="userProfile">
                               <input type="file" id='userProfile' hidden />
                               <img width={'200px'} height={'200px'} className='w-50 h-50p object-contain' src="https://imgs.search.brave.com/5DAW3BVzYTx5a4QdSLCKwxk3x674J6PM5lyu-rxZpso/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjQv/MTY3LzIzNy9zbWFs/bC91cGxvYWQtcGhv/dG8taWNvbi1lZGl0/YWJsZS12ZWN0b3Iu/anBn" />
                             </label>
             </div>
             {/* preview for  uploaded book */}
             <div className='flex justify-center items-center'>
               <img width={'70px'} height={'70px'} src="https://imgs.search.brave.com/yUDaWXsp-x_xHMNFgGNulO65qDMDFiaI0M_CdlT5iDs/rs:fit:860:0:0:0/g:ce/aHR0cDovL3d3dy5y/b2NraW5nYm9va2Nv/dmVycy5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMTMvMDEv/R1ItYW5kLXRoZW4t/dGhlcmUtd2VyZS1u/b25lLmpwZw" alt="Book image" />
                  <label htmlFor="bookUpload">
                    <input type="file" id='bookUpload' hidden />
                    <FaPlus className='text-3xl ms-2'/>

                  </label>
             </div>
        </div>
       </div>
       <div className=' md:justify-end justify-center flex w-full px-5 mt-5'>
                      <button className='bg-[#967052] text-white px-5 rounded me-2 flex items-center gap-2 font-semibold hover:bg-[#79583F]'><GrPowerReset />Reset</button>
                      <button  className='bg-[#D99532] text-white p-3 rounded me-2 flex items-center gap-2 font-semibold hover:bg-[#BD7D20]'><RiFolderUploadFill/> Upload Book</button>
                 </div>
    </div>
  )
}

export default UploadBook