import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';

export default function UpdateBlog() {
    const { id } = useParams();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    
    const [post, setPost] = useState({
        title: '',
        desc: '',
        categories: [],
    });
    const [file, setFile] = useState(null);
    const [error, setError] = useState('');

    // Fetch existing post data
    useEffect(() => {
        const fetchPost = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/api/posts/${id}`);
                setPost({
                    title: res.data.title,
                    desc: res.data.desc,
                    categories: res.data.categories || [],
                });
            } catch (err) {
                console.error('Error fetching post:', err);
                setError('Failed to fetch post data');
            }
        };
        fetchPost();
    }, [id]);

    const handleChange = (e) => {
        setPost({
            ...post,
            [e.target.name]: e.target.value
        });
    };

    const handleCategoryChange = (e) => {
        const categories = e.target.value.split(',').map(cat => cat.trim());
        setPost(prev => ({
            ...prev,
            categories
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let photoUrl = '';
            
            // Handle new image upload
            if (file) {
                const formData = new FormData();
                const filename = Date.now() + file.name;
                formData.append('name', filename);
                formData.append('file', file);
                
                try {
                    await axios.post('http://localhost:5000/api/upload', formData);
                    photoUrl = filename;
                } catch (err) {
                    console.error('Error uploading image:', err);
                    setError('Failed to upload image');
                    return;
                }
            }

            const token = localStorage.getItem('token');
            if (!token) {
                setError('Authentication required');
                return;
            }

            const updatedPost = {
                userId: user._id,
                title: post.title,
                desc: post.desc,
                categories: post.categories,
                ...(photoUrl && { photo: photoUrl })
            };

            await axios.put(`http://localhost:5000/api/posts/${id}`, updatedPost, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });

            navigate(`/blog/${id}`);
        } catch (err) {
            console.error('Error updating post:', err);
            setError(err.response?.data?.message || 'Error updating post');
        }
    };

    return (
        <div className="py-8 px-4 md:px-8 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">Update Blog Post</h1>
            
            {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                    {error}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Image Upload */}
                <div>
                    <label className="block text-gray-700 mb-2">
                        Cover Image
                    </label>
                    <input
                        type="file"
                        onChange={(e) => setFile(e.target.files[0])}
                        accept="image/*"
                        className="w-full border rounded p-2"
                    />
                </div>

                {/* Title */}
                <div>
                    <label className="block text-gray-700 mb-2">
                        Title
                    </label>
                    <input
                        type="text"
                        name="title"
                        value={post.title}
                        onChange={handleChange}
                        required
                        className="w-full border rounded p-2"
                        placeholder="Enter your blog title"
                    />
                </div>

                {/* Categories */}
                <div>
                    <label className="block text-gray-700 mb-2">
                        Categories (comma-separated)
                    </label>
                    <input
                        type="text"
                        value={post.categories.join(', ')}
                        onChange={handleCategoryChange}
                        className="w-full border rounded p-2"
                        placeholder="tech, programming, web development"
                    />
                </div>

                {/* Content */}
                <div>
                    <label className="block text-gray-700 mb-2">
                        Content
                    </label>
                    <textarea
                        name="desc"
                        value={post.desc}
                        onChange={handleChange}
                        required
                        className="w-full border rounded p-2 h-64"
                        placeholder="Write your blog content here..."
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors"
                >
                    Update Post
                </button>
            </form>
        </div>
    );
}
