import React from 'react'

function Purchase() {
  return (
    <div className='p-10 my-15 shadow rounded'>
      {/* duplicate book */}
      <div className='p-5 rounded mt-4 bg-blue-100'>
        <div className='md:grid grid-cols-[3fr_1fr]'>
            <div className='px-4'>
        <h1 className='text-2xl'>Title</h1>
        <h2 className='text-xl'>Author</h2>
        <h3 className='text-lg text-blue-400'>$Discount price</h3>
        <p className='text-justify font-bold'>Abstract</p>
        {/* image */}
        <div className='flex my-3'>
            <img width={'120px'} height={'120px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr-2Uzhj3ivipx92JAv7aMq1vjI-aP5OExg1uqMOdbqg&s=10" alt="purchased" />
        </div>
            </div>
            <div className='px-4 mt-4 md:mt-0'>
                  <img src="https://imgs.search.brave.com/AvDb-4_wEyJ5rQCL-pS-ObYylkPiNHXca-vjIrmUK4c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ib29r/Y292ZXJ6b25lLmNv/bS9wbmcyNC1mcm9u/dC1tb2NrdXAvYm9v/a2NvdmVyMDAzNjk1/MS1zbWFsbC0zMDAu/cG5n" alt="book" />
                 
            </div>
        </div>
      </div>
    </div>
  )
}

export default Purchase