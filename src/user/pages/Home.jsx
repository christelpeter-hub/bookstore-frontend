import React from 'react'
import Header from '../components/Header'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'



function Home() {
  return (
    <>
    <Header/>
    {/*hero section  */}
    <div style={{height:'600px'}} className='flex flex-col justify-center items-center bg-[url(/landing.png)] bg-cover text-white bg-center'>
    <div style={{height:'600px',backgroundColor:'rgba(0,0,0,0.5)'}} className='w-full flex flex-col justify-center items-center'>
      <h1 className='text-6xl font-bold text-[#F5EBDD]'>Wonderfull Books</h1>
      <p className='text-[#E5D8C8] font-semibold'>Gift your family and friends a book</p>
      <div>
        <input type="text" placeholder='Search A book' className='bg-[#F5EBDD] text-[#352B25] p-2 rounded-3xl w-100 '/><FaSearch className='text-[#6B4D35] cursor-pointer' style={{ marginTop:'-28px',marginLeft:'370px'}}/>
      </div>
    </div>
    </div>
    {/* new arrival */}
    <section className='md:px-40 my-5 p-5 flex flex-col justify-center items-center'>
       <h1 className='text-3xl font-bold'>NEW ARRIVALS</h1>
       <h1 className='text-2xl my-2'>Explore our Latest Collections</h1>
       <div className='md:grid grid-cols-4 md:my-0'>
          {/* duplicating card */}
          <div className='shadow rounded p-3 m-4 md:my-0'>
            <img width={'100%'} height={'300px'} src="https://imgs.search.brave.com/Q1ZLnFONDDAp8o2sIjxHNkYbnbBsXRm7egFkRv5krKo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuYm9yZWRwYW5k/YS5jb20vYmxvZy93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMy8w/NS9iZXN0LWJvb2st/Y292ZXJzLTYtNjQ1/OGM0OGM1YWQ4Zl9f/NzAwLmpwZw" alt="" />
            <div className='flex flex-col justify-center items-center mt-4'>
              <h2 className='text-yellow-400 font-bold text-xl'>Author</h2>
              <h3 className='text-lg'>Title</h3>
              <p className='font-bold text-red-500'>Price</p>
            </div>
          </div>
       </div>
       {/* button  */}
       <div className='text-center my-10'>
        <Link to={'/books'} className='bg-yellow-500 p-3 text-white font-white rounded' >Explore More..</Link>
       </div>
    </section>
    {/* authors */}
    <section className='md:grid grid-cols-2 items-center gap-10 p-5 md:px-40'>
      <div className='text-center'>
      <h2 className='text-2xl font-bold'>FEATURED AUTHORS</h2>
      <h3 className='text-xl'>captivates with every word</h3>
      <p className='my-5 text-justify'>Welcome to the Author Spotlight section of our bookstore website! This feature is designed to celebrate writers, showcase their creative journeys, and help readers discover the minds behind their favorite books.</p>
      <p className='text-justify'>Our Author Features include:</p>
      <p className='text-justify my-3'><span className='font-black'>✨ Author Profiles :</span>Get to know each author through detailed profiles that highlight their biography, writing style, achievements, and personal inspirations.</p>

      <p className='text-justify my-3'><span className='font-black'>📖 Published Works : </span>Explore a curated list of books written by the author with quick access to book details, reviews, and purchase options.</p>

      <p className='text-justify my-3'><span className='text-black'>🎤 Interviews & Insights :</span> Exclusive interviews, behind-the-scenes stories, and writing tips that offer a deeper look into the author’s creative world.</p>
      </div>
         <div className='p-5 flex items-center justify-center'>
          <img className='gap-12 ' src="https://imgs.search.brave.com/3kFPQU9x40U-cnw-Ua64ipkFaWmt8uhFrr71pVZyOR8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/bWFnbmlmaWMuY29t/L3ByZW1pdW0tcGhv/dG8vc21pbGluZy1w/cm9mZXNzaW9uYWwt/d29tYW4tc3RhbmRp/bmctd2l0aC1hcm1z/LWNyb3NzZWQtYWdh/aW5zdC1saWdodC1n/cmV5LWJhY2tncm91/bmRfMTI5Njk5NC0x/Mzg2MTcuanBnP3Nl/bXQ9YWlzX2h5YnJp/ZCZ3PTc0MCZxPTgw" alt="author" />

         </div>
    </section>
    {/* testimonials */}
    <section className='md:px-40 my-5 p-5 flex flex-col justify-center items-center'>
      <h1 className='text-3xl font-bold'>TESTIMONIALS</h1>
      <h1 className='text-3xl my-2'>See What Others Are Saying</h1>
      <div className='my-5 flex flex-col justify-center items-center'>
        <img className='rounded-full object-cover h-32 w-32 'src="https://media.istockphoto.com/id/2174363314/photo/businessman-looking-at-camera.jpg?s=1024x1024&w=is&k=20&c=9WnG-tXHBcHxcw3TIHye5I_5awK-yXqU-eDMpsbfloY=" alt="user" />
        <h3 className='my-3 font-bold'>Arthur</h3>
        <p className='text-justify'>This bookstore has completely changed the way I discover new books. The recommendations are always spot-on, and the delivery is super fast. I love the clean interface and the huge collection! The user experience is amazing! Easy navigation, great deals, and beautifully organized categories. I appreciate how quickly customer support responds too.</p>
      </div>
    </section>
    </>
  )
}
export default Home