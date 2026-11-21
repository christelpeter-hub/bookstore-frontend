import React from 'react'

function BookStatus() {
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
            <img width={'120px'} height={'120px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh8EWsJi0ChQR46xk9dwEGbGg9wPiM_3RrECTlCg-zMHmncL87s9MjaZhx&s=10" alt="pending" />
            <img width={'120px'} height={'120px'} src="https://imgs.search.brave.com/1y1-PcXv6zkgTJOtNtwy8CcyqiH79zjvdIF8OdHlixc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/bWFnbmlmaWMuY29t/L3ByZW1pdW0tdmVj/dG9yL2FwcHJvdmVk/LXN0YW1wLXNlYWwt/ZGVzaWduXzYyMzY2/NS0xMzc3LmpwZz9z/ZW10PWFpc19oeWJy/aWQmdz03NDAmcT04/MA" alt="Approved" />
            <img width={'120px'} height={'120px'} src="https://t3.ftcdn.net/jpg/20/76/85/48/360_F_2076854813_shHvfOHtQGQM8q3BRPVjKi3B2HZHg9q5.jpg" alt="sold" />
        </div>
            </div>
            <div className='px-4 mt-4 md:mt-0'>
                  <img src="https://imgs.search.brave.com/AvDb-4_wEyJ5rQCL-pS-ObYylkPiNHXca-vjIrmUK4c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ib29r/Y292ZXJ6b25lLmNv/bS9wbmcyNC1mcm9u/dC1tb2NrdXAvYm9v/a2NvdmVyMDAzNjk1/MS1zbWFsbC0zMDAu/cG5n" alt="book" />
                  <div className='mt-4 flex justify-end'>
                       <button className='bg-red-700 text-white rounded p-2'>DELETE</button>
                  </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default BookStatus