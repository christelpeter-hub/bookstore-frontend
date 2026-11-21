import React from 'react'
import Header from '../components/Header'
import { FaLocationDot } from "react-icons/fa6";
import { FaPaperPlane, FaPhone } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import { ImUser } from "react-icons/im";
import { HiOutlineMail } from "react-icons/hi";
import { FiMessageCircle } from "react-icons/fi";

function Contact() {
  return (
    <>
    <Header/>
    <div className='w-full p-0'>
      <div className="relative w-full h-90 bg-[url('/contact.png')] bg-cover bg-center flex justify-center items-center overflow-hidden mt-0 mb-10">
  <div className="absolute inset-0 bg-black/50"></div>
  <div className="relative z-10 text-center text-white">
    <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>

    <div className="w-20 h-1 bg-[#1397C3] mx-auto mt-4 rounded-full"></div>

    <p className="mt-4 text-lg max-w-3xl mx-auto">
   We would love to hear from you! Get in touch with us,
      and let's make your reading journey even more wonderful.
    </p>
  </div>

</div>
      <div className='md:grid grid-cols-3 items-center md:px-40 p-5 mt-5 md:mt-0'>
          <div className='flex items-center'>
            <div style={{width:'50px',height:'50px',borderRadius:'50%'}} className='flex items-center justify-center bg-yellow-400'>
              <FaLocationDot />
            </div>
           <p className='ms-5'>123 main street,123456</p>
          </div>
          <div className='flex items-center'>
            <div style={{width:'50px',height:'50px',borderRadius:'50%'}} className='flex items-center justify-center bg-yellow-400'>
              <FaPhone />
            </div>
           <p className='ms-5'>9902255369</p>
          </div>
          <div className='flex items-center'>
            <div style={{width:'50px',height:'50px',borderRadius:'50%'}} className='flex items-center justify-center bg-yellow-400'>
             <MdEmail />
            </div>
           <p className='ms-5'>Bookstore123@gmail.com</p>
          </div>
      </div>
        <div className='md:grid grid-cols-2 gap-10 my-5 p-5 md:px-40 items-center'>
          <div className='bg-[#25282D] p-5 text-center rounded shadow-xl'>
           <h1 className='font-semibold text-2xl text-white mb-3 text-left'>Send Us Message!</h1>
           <form>
            <div className='mb-5 my-10 relative '>
             <ImUser className='text-gray-600 absolute left-4 top-1/2 -translate-y-1/2 '/> <input type="text" placeholder='Name' className='bg-white w-full p-2 rounded ps-10' />
            </div>
             <div className='mb-5 my-10 relative'>
              <HiOutlineMail className='text-gray-600 absolute left-4 top-1/2 -translate-y-1/2 ' />  <input type="text" placeholder='Email' className='bg-white w-full p-2 rounded ps-10' />
            </div>
             <div className='mb-5 my-10 relative'>
           <FiMessageCircle  className='text-gray-600 absolute left-4 top-1/2 -translate-y-1/2 ' /> <input type="text" placeholder='Message' className='bg-white w-full p-2 rounded ps-10' />
            </div>
             <div className='mb-5 '>
             <button className='bg-[#1397C3] hover:bg-[#08769C] p-2 w-full text-lg flex justify-center items-center rounded'><FaPaperPlane className='ms-2 me-2'/>Submit</button>
            </div>
           </form>
          </div>
           <div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31449.324206204652!2d77.12952324292405!3d9.836461526672363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07a7d652aa57b5%3A0x54f328bc3a6a742f!2sNedumkandam%2C%20Keralam!5e0!3m2!1sen!2sin!4v1793265574659!5m2!1sen!2sin" width="100%" height="400" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe></div>
        </div>
    </div>
    </>
  )
}

export default Contact