import React , {useEffect, useState} from 'react'
import Hero from '../../components/Hero/Hero'
import Blogs from '../../components/Blogs/Blogs'
import axios from 'axios';
import Loading from './loading';

export default function Home() {
  const API_URL = "http://localhost:5000/api/posts";
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
            try {
                const res = await axios.get(API_URL);
                console.log("Fetched data:", res.data); // Debug log
                setBlogs(res.data);
            } catch (err) {
                console.error("Error fetching blogs:", err);
                setError("Failed to load blogs");
            } finally {
                setIsLoading(false);
            }
        };
        fetchBlogs();
  }, []);

  if (error) return <div className="text-red-500 p-4">{error}</div>;
    if (isLoading) return <div className="p-4"><Loading/></div>;
    if (!blogs || blogs.length === 0) return <div>No blogs found</div>;

  console.log(blogs);

  return (
    <div>
      
      <Hero/>
      <Blogs blogs={blogs}/>
      

      
    </div>
  )
}
