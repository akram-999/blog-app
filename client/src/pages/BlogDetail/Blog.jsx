import React, { useEffect, useState, useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

export default function BlogDetail() {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const API_URL = "http://localhost:5000/api/posts";
  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`${API_URL}/${id}`);
        setBlog(res.data);
        setLoading(false);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch blog");
        setLoading(false);
      }
    };
    fetchBlog();
  }, [id]);

  console.log(blog);

  // Move handleDelete outside useEffect
  const handleDelete = async () => {
    try {
      // Add confirmation dialog
      if (window.confirm("Are you sure you want to delete this blog post?")) {
        await axios.delete(`${API_URL}/${id}`);
        // Redirect to home page after successful deletion
        navigate('/');
      }
    } catch (err) {
      console.error("Error deleting post:", err);
      setError(err.response?.data?.message || "Failed to delete post");
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
    <div className="max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
      <div className="max-w-2xl">
        <div className="flex justify-between items-center mb-6">
          <div className="flex w-full sm:items-center gap-x-5 sm:gap-x-3">
            <Link to={`/profile/${blog.userId._id}`}>
            <div className="shrink-0">
              <img className="size-12 rounded-full" src={blog.userId.profilePic ? `http://localhost:5000/images/${blog.userId.profilePic}` : "default-avatar.png"} alt="Avatar" />
            </div>
            </Link>
            <div className="grow">
              <div className="flex justify-between items-center gap-x-2">
                <div>
                  <div className="hs-tooltip [--trigger:hover] [--placement:bottom] inline-block">
                    
                      <span className="font-semibold text-gray-800 dark:text-neutral-200">
                        {blog.userId.username}
                      </span>
                    
                  </div>
                
                  <ul className="text-xs text-gray-500 dark:text-neutral-500">
                    <li className="inline-block relative pe-6 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-2 before:-translate-y-1/2 before:size-1 before:bg-gray-300 before:rounded-full dark:text-neutral-400 dark:before:bg-neutral-600">
                      {new Date(blog.createdAt).toLocaleDateString()}
                    </li>
                    <li className="inline-block relative pe-6 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-2 before:-translate-y-1/2 before:size-1 before:bg-gray-300 before:rounded-full dark:text-neutral-400 dark:before:bg-neutral-600">
                      {Math.ceil((new Date() - new Date(blog.createdAt)) / 3600000)} hours ago
                    </li>
                  </ul>
                </div>  
              </div>
            </div>
            
            {blog.userId._id === user?._id && (
            <div className="flex justify-around items-center py-3">
                <Link to={`/update-blog/${blog._id}`}>
              <div className="flex gap-2 mx-3 text-gray-600 hover:scale-110 duration-200 hover:cursor-pointer">
               
                  <svg className="w-6 stroke-green-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                  </svg>
                  
                 
                  <button className="font-semibold text-sm text-green-700">Edit</button>
                 
                  
              </div>
              </Link>
              <div className="flex gap-2 text-gray-600 hover:scale-110 duration-200 hover:cursor-pointer">
                <svg className="w-6 stroke-red-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                <button 
                  onClick={handleDelete} 
                  className="font-semibold text-sm text-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
            )}
          </div>
        </div>
        
        <div className="space-y-5 md:space-y-8">
          <div className="space-y-3">
            
            <h2 className="text-2xl font-bold md:text-3xl dark:text-white">{blog.title}</h2>

            <div className='flex flex-wrap gap-2'>
            {blog.categories.map((category) => (
              <p className="text-lg text-green-400 ">{category}</p>
            ))}
            </div>
            
          </div>

          <p className="text-lg text-gray-800 dark:text-neutral-200">{blog.desc}</p>

          <figure>
            <img className="w-full object-cover rounded-xl" src={blog.photo ? `http://localhost:5000/images/${blog.photo}` : "default-avatar.png"} alt="Blog Image" />
            
          </figure>
        </div>
        </div>
        </div>
    
    </>
  )
}

