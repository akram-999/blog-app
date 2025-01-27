import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
  
    <div class="max-w-[85rem] mx-auto mt-10 mb-28 px-4 sm:px-6 lg:px-8">
    
      <div class="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
        <div class="lg:col-span-3">
          <h1 class="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl dark:text-white"> <span className='text-blue-400'>Discover</span> , <span className='text-yellow-400'>Share</span> , and <span className='text-orange-400'>Inspire</span> with Stories</h1>
          <p class="mt-3 text-lg text-gray-800 dark:text-neutral-400">Welcome to your hub for storytelling! Dive into a world of thoughts, ideas, and experiences shared by people just like you. Whether you're here to read, write, or explore, our platform makes it easy to connect and inspire through the power of words.</p>
    
          <div class="mt-5 lg:mt-8 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
            
            <Link to="/blogs" class="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-green-400 text-white hover:bg-green-500 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" href="#">
              Blogs
            </Link>
          </div>


    
      
         
         
        </div>
        
    
        <div class="lg:col-span-4 mt-10 lg:mt-0">
          <img class="w-full rounded-xl" src="https://img.freepik.com/free-photo/young-caucasian-male-blogger-with-professional-equipment-recording-video-review-vr-glasses-home_155003-28666.jpg?t=st=1736865876~exp=1736869476~hmac=2fca75bd704e5876e2dbc4913abdba0f07faf64c6a682a3f5753d8223672e145&w=996" alt="Hero Image" />
        </div>
      
      </div>
  
    </div>
    

  )
}
