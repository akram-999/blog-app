import React from 'react'
import './blogs.css'
import { Link } from 'react-router-dom'


export default function Blogs({blogs}) {
 
 
  
  
   return (
    <section className='mt-10'>
       
            <div className='mt-10'>
                

                <div className='mt-10 mb-5 mx-9 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
                  {blogs.slice(0, 8).map((product) => (
                    <article className="group blog" key={product.id} >
                    <img src={product.photo ? `http://localhost:5000/images/${product.photo}` : "default-avatar.png"}
                      className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
                      alt='blog'
                    />

                    <div className="p-4">

                    <div className='flex flex-wrap gap-2'>
                      {product.categories.map((category) => (
                        <p className="px-2 py-1 text-xs font-medium text-green-600 bg-green-50 rounded-full" key={category._id}>
                        {category}
                        </p>
                      ))}
                    </div>
                      

                      <Link to={`/blog/${product._id}`}>
                        <h3 className="text-lg font-medium text-gray-900 hover:text-orange-400">{product.title}</h3>
                      </Link>

                      <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                      {product.desc}
                      </p>
                    </div>

                    <div className="relative px-3 flex items-center gap-x-4">
                      <Link to={`/profile/${product.userId?._id}`}>
                      <img src={product?.userId?.profilePic ? `http://localhost:5000/images/${product.userId.profilePic}` : 'https://i.pinimg.com/736x/0d/64/98/0d64989794b1a4c9d89bff571d3d5842.jpg'} alt="" class="size-10 rounded-full bg-gray-50"/>
                      </Link>
                      <div className="text-sm/6">
                        <p className="font-semibold text-gray-900">
                          <Link to={`/profile/${product.userId?._id}`}>
                            <span className="absolute inset-0"></span>
                            {product?.userId?.username}
                          </Link>
                        </p>
                       
                      </div>
                    </div>

                  </article>
                  ))}
                  
                </div>
            </div>
            
       
    </section>
    
  )
}
