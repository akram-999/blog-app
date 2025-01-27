import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Blogs from './BlogsPage';
import Loading from './loading';
// Component names should start with a capital letter
export default function FetchData() {
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

    return <Blogs blogs={blogs} />;
}
