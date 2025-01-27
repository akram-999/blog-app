import React from 'react'

import { Link } from 'react-router-dom'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { FiFilter, FiGrid, FiTag } from 'react-icons/fi';
import { FiSidebar } from "react-icons/fi";
import { MdOutlineSportsBasketball } from "react-icons/md";


export default function Blogs({ blogs }) {
  console.log("Received blogs in BlogsPage:", blogs); // Debug log
  const API_URL = "http://localhost:5000/api/categories";
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get(`${API_URL}`);
        setCategories([{ _id: 'all', name: 'All' }, ...res.data]);
      } catch (err) {
        console.error("Error fetching categories:", err);
      }
    };
    fetchCategories();
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredBlogs = selectedCategory === 'All' 
    ? blogs 
    : blogs.filter(blog => blog.categories.some(category => category === selectedCategory));

  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <div className={`${isSidebarOpen ? 'w-64' : 'w-20'} bg-gray-50 shadow-lg transition-all duration-300`}>
        <div className="p-4">
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="mb-6 p-2 hover:bg-gray-100 rounded-full"
          >
            <FiSidebar size={24}/>
          
          </button>

          <div className="space-y-4">
            <h3 className={`font-semibold text-gray-700 flex items-center gap-2 ${!isSidebarOpen && 'hidden'}`}>
              <FiTag />
              Categories
            </h3>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li 
                  key={category._id}
                  onClick={() => handleCategoryClick(category.name)}
                  className={`cursor-pointer p-2 rounded-lg transition-all duration-200 flex items-center gap-2
                    ${selectedCategory === category.name
                      ? 'bg-gradient-to-tr from-orange-600 to-orange-300 text-white'
                      : 'hover:bg-gray-100 text-gray-700'
                    }
                    ${!isSidebarOpen && 'justify-center'}
                  `}
                >
                  <FiGrid size={18} />
                  {isSidebarOpen && <span>{category.name}</span>}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {Array.isArray(filteredBlogs) && filteredBlogs.map((blog) => (
            <article className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-200" key={blog._id}>
              <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-t-xl">
                <img 
                  src={blog.photo ? `http://localhost:5000/images/${blog.photo}` : "default-avatar.png"}
                  className="h-56 w-full object-cover transition group-hover:grayscale-[50%]"
                  alt='blog'
                />
              </div>

              <div className="p-4">
                <div className='flex flex-wrap gap-2 mb-3'>
                  {blog.categories.map((category) => (
                    <span 
                      className="px-2 py-1 text-xs font-medium text-green-600 bg-green-50 rounded-full" 
                      key={category}
                    >
                      {category}
                    </span>
                  ))}
                </div>

                <Link to={`/blog/${blog._id}`}>
                  <h3 className="text-lg font-medium text-gray-900 hover:text-orange-400 mb-2">
                    {blog.title}
                  </h3>
                </Link>

                <p className="line-clamp-3 text-sm text-gray-500 mb-4">
                  {blog.desc}
                </p>

                <div className="flex items-center gap-x-4 border-t pt-3">
                  <Link to={`/profile/${blog.userId?._id}`} className="flex items-center gap-2">
                    <img 
                      src={blog?.userId?.profilePic 
                        ? `http://localhost:5000/images/${blog.userId.profilePic}` 
                        : 'https://i.pinimg.com/736x/0d/64/98/0d64989794b1a4c9d89bff571d3d5842.jpg'
                      } 
                      alt="" 
                      className="size-8 rounded-full bg-gray-50"
                    />
                    <span className="text-sm font-medium text-gray-900">
                      {blog?.userId?.username}
                    </span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
