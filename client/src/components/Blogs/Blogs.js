import React from 'react'
import { Data } from './Data'
import './blogs.css'
import { Link } from 'react-router-dom'

export default function Blogs() {
   return (
    <section>
       
            <div >
                <div>
                  <ul className='flex items-center justify-around tit'>
                    <li className='text-white bg-gradient-to-tr from-orange-600  to-orange-300  py-1 px-3 rounded-full'>Sport</li>
                    <li className='text-white bg-gradient-to-tr from-orange-600  to-orange-300  py-1 px-3 rounded-full'>Cinema</li>
                    <li className='text-white bg-gradient-to-tr from-orange-600  to-orange-300  py-1 px-3 rounded-full'>Music</li>
                    <li className='text-white bg-gradient-to-tr from-orange-600  to-orange-300  py-1 px-3 rounded-full'>Tech</li>
                    <li className='text-white bg-gradient-to-tr from-orange-600  to-orange-300  py-1 px-3 rounded-full'>Life</li>
                  </ul>
                </div>

                <div className='mt-6 mx-9 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
                  {Data.slice(0, 8).map((product) => (
                    <article className="group blog" key={product.id} >
                    <img src={product.image}
                      className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
                      alt='blog'
                    />

                    <div className="p-4">
                      <p className="mt-2 line-clamp-3 text-sm/relaxed text-green-400">
                      {product.category}
                      </p>
                      <Link to={`/blog/${product.id}`}>
                        <h3 className="text-lg font-medium text-gray-900 hover:text-orange-400">{product.title}</h3>
                      </Link>

                      <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                      {product.description}
                      </p>
                    </div>
                  </article>
                  ))}
                  
                </div>
            </div>
            
       
    </section>
    
  )
}
