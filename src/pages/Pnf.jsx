import React from 'react'
import { Link } from 'react-router-dom'


function Pnf() {
  return (
    <div className='min-h-screen flex justify-center items-center flex-col'>
      <img className='w-100' src="https://imgs.search.brave.com/iiazTYZi2T6Vb_sDg5wGIiauM7CcPoGcjXOo6EdKJoE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG5s/Lmljb25zY291dC5j/b20vbG90dGllL3By/ZW1pdW0vdGh1bWIv/Ym9va3MtYW5pbWF0/aW9uLWdpZi1kb3du/bG9hZC0xMjY4MjIz/My5naWY.gif" alt="page not found" />
    <p>Oh No!</p>
    <h3 className='text-2xl font-medium'>Look Like You're Lost</h3>
    <p>The page you are looking for is not Available</p>
    <Link to={'/'} className='bg-black text-white mt-5 px-3 py-2 rounded'>Back to Home</Link>
    </div>
  )
}

export default Pnf