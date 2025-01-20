import React from 'react'
import { TiUserDelete } from "react-icons/ti";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

export default function Profile() {
    const {user} = useContext(AuthContext);
    console.log(user);
    const API_URL = "http://localhost:5000/api/posts";

    const [posts,setPosts] = useState([]);

    useEffect(()=>{
        
        const fetchPosts = async()=>{
            const res = await axios.get(`${API_URL}/user/${user?._id}`);
            console.log(res.data);
            setPosts(res.data);
        }
        fetchPosts();
    },[user?._id]);

    console.log(posts);

  return (
    <>
    <section class="relative pt-40 pb-24">
    <img src="https://pagedone.io/asset/uploads/1705473908.png" alt="cover-image" class="w-full absolute top-0 left-0 z-0 h-60 object-cover"/>
    <div class="w-full max-w-7xl mx-auto px-6 md:px-8">
        <div class="flex items-center justify-center sm:justify-start relative z-10 mb-5">
            <img src="https://pagedone.io/asset/uploads/1705471668.png" alt="user-avatar-image"
                class="border-4 border-solid border-white rounded-full object-cover"/>
        </div>
        <div class="flex items-center justify-center flex-col sm:flex-row max-sm:gap-5 sm:justify-between mb-5">
            <div class="block">
                <h3 class="font-manrope font-bold text-4xl text-gray-900 mb-1 max-sm:text-center">{user.username}</h3>
                <p class="font-normal text-base leading-7 text-gray-500  max-sm:text-center">Engineer at BB Agency Industry <br class="hidden sm:block" />New
                    York, United States</p>
            </div>
            <div class="flex gap-4">
                <div
                    class="py-3.5 px-5 block rounded-lg bg-orange-100 items-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-orange-200">
                    <span class="px-5 font-semibold text-base leading-7 text-orange-500">{posts.length}</span> <br/>
                    <span class="px-5 font-semibold text-base leading-7 text-gray-900">Posts</span>

                </div>
                <Link to='/update-user'>
                <button
                    class="py-3.5 px-5 block rounded-lg bg-green-500 items-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-green-600">
                    <TiUserDelete className='text-white size-6'/> <br/>
                    <span class=" font-semibold text-base leading-7 text-white">Update account</span>


                </button>
                </Link>
                <button
                    class="py-3.5 px-5 block rounded-lg bg-red-500 items-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-red-600">
                    <TiUserDelete className='text-white size-6'/> <br/>
                    <span class=" font-semibold text-base leading-7 text-white">Delete account</span>


                </button>
            </div>
        </div>
        {/* <div class="flex max-sm:flex-wrap max-sm:justify-center items-center gap-4">
            <a href="javascript:;" class="rounded-full py-3 px-6 bg-stone-100 text-gray-700 font-semibold text-sm leading-6 transition-all duration-500 hover:bg-stone-200 hover:text-gray-900">Ux Research</a>
            <a href="javascript:;" class="rounded-full py-3 px-6 bg-stone-100 text-gray-700 font-semibold text-sm leading-6 transition-all duration-500 hover:bg-stone-200 hover:text-gray-900">CX Strategy</a>
            <a href="javascript:;" class="rounded-full py-3 px-6 bg-stone-100 text-gray-700 font-semibold text-sm leading-6 transition-all duration-500 hover:bg-stone-200 hover:text-gray-900">Project Manager</a>
        </div> */}
    </div>
</section>



       
                <div className='mt-10 mx-9 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
                  {posts.slice(0, 8).map((product) => (
                    <article className="group blog" key={product.id} >
                    <img src={product.photo}
                      className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
                      alt='blog'
                    />

                    <div className="p-4">
                      {product.categories.map((category) => (
                        <p className="mt-2 line-clamp-3 text-sm/relaxed text-green-400">
                        {category.name}
                        </p>
                      ))}
                      <Link to={`/blog/${product._id}`}>
                        <h3 className="text-lg font-medium text-gray-900 hover:text-orange-400">{product.title}</h3>
                      </Link>

                      <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                      {product.desc}
                      </p>
                    </div>
                  </article>
                  ))}
                  
                </div>
        
                                                                                    
    </>                                 
  )
}
