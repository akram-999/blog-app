import React , {useEffect, useState} from 'react'
import Hero from '../../components/Hero/Hero'
import Blogs from '../../components/Blogs/Blogs'
import axios from 'axios';

export default function Home() {
  const API_URL = "http://localhost:5000/api/posts";
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await axios.get(`${API_URL}`);
      setBlogs(res.data);
    };
    fetchBlogs();
  }, []);

  console.log(blogs);

  return (
    <div>
      
      <Hero/>
      <Blogs blogs={blogs}/>
      

      
    </div>
  )
}
