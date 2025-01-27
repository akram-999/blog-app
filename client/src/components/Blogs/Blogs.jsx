import React from 'react'
import './blogs.css'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Blogs({blogs}) {
  const API_URL = "http://localhost:5000/api/categories";
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await axios.get(`${API_URL}`);
      setCategories([{ _id: 'all', name: 'All' }, ...res.data]);
    };
    fetchCategories();
  }, []);

  const [selectedCategory, setSelectedCategory] = useState('All');
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredBlogs = selectedCategory === 'All' 
    ? blogs 
    : blogs.filter(blog => blog.categories.some(category => category === selectedCategory));

  
  
   return (
    <section className='mt-10'>
       
            <div className='mt-10'>
                <div className='mt-10'>
                  <ul className='flex items-center justify-around '>
                    {categories.map((category) => (
                      <li 
                        className={`cursor-pointer py-1 px-3 rounded-full ${
                          selectedCategory === category.name
                            ? 'text-white bg-gradient-to-tr from-orange-600 to-orange-300'
                            : 'text-gray-700 bg-gray-100 hover:bg-gray-200'
                        }`}
                        key={category._id} 
                        onClick={() => handleCategoryClick(category.name)}
                      >
                        {category.name}
                      </li>
                    ))}
                    
                  </ul>
                </div>

                <div className='mt-10 mb-5 mx-9 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
                  {filteredBlogs.slice(0, 8).map((product) => (
                    <article className="group blog" key={product.id} >
                    <img src={product.photo ? `http://localhost:5000/images/${product.photo}` : "default-avatar.png"}
                      className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
                      alt='blog'
                    />

                    <div className="p-4">

                    <div className='flex flex-wrap gap-2'>
                      {product.categories.map((category) => (
                        <p className="mt-2  line-clamp-3 text-sm/relaxed text-green-400" key={category._id}>
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
