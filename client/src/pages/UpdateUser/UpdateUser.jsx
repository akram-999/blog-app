import React, { useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';

export default function UpdateUser() {
    const {id} = useParams();
    const {user, login} = useContext(AuthContext);
    const navigate = useNavigate();
    const API_URL = "http://localhost:5000/api/users";

    const [formData, setFormData] = useState({
        username: user?.username || '',
        email: user?.email || '',
        password: '',
    });
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let profilePic = user.profilePic;

            // Get token from localStorage directly as per your AuthContext implementation
            const token = localStorage.getItem('token');
            
            if (!token) {
                setError("Authentication token not found. Please login again.");
                return;
            }

            // Handle file upload if a new file is selected
            if (file) {
                const fileData = new FormData();
                const filename = Date.now() + file.name;
                fileData.append("name", filename);
                fileData.append("file", file);

                try {
                    await axios.post("http://localhost:5000/api/upload", fileData);
                    profilePic = filename;
                } catch (err) {
                    console.error("Error uploading file:", err);
                    setError("Failed to upload profile picture");
                    return;
                }
            }

            // Prepare update data
            const updateData = {
                ...formData,
                ...(profilePic && { profilePic })
            };

            // Remove empty password from update data if not changed
            if (!updateData.password) {
                delete updateData.password;
            }

            // Update user information
            const res = await axios.put(`${API_URL}/${id}`, updateData, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });

            // Update local user data
            const updatedUser = {
                ...user,
                ...res.data
            };
            login(updatedUser, token);
            
            navigate(`/profile/${id}`);
        } catch (err) {
            console.error("Full error object:", err);
            console.error("Error response:", err.response);
            setError(err.response?.data?.message || "Error updating profile");
        }
    };

    return (
        <section className="py-24 relative">
            <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                <form onSubmit={handleSubmit} className="w-full flex-col justify-start items-start lg:gap-14 md:gap-10 gap-8 inline-flex">
                    <div className="w-full flex-col justify-center items-center gap-4 flex">
                        <h2 className="text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">Update Profile</h2>
                        {error && <p className="text-red-500">{error}</p>}
                    </div>

                    <div className="w-full flex-col justify-start items-start gap-8 flex">
                        <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                            <label htmlFor="username" className="text-gray-600 text-base font-medium leading-relaxed">
                                Full Name
                            </label>
                            <input 
                                id="username"
                                type="text" 
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                className="w-full focus:outline-none text-gray-900 text-lg px-5 py-3 rounded-lg border border-gray-200" 
                                required
                            />
                        </div>

                        <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                            <label htmlFor="email" className="text-gray-600 text-base font-medium leading-relaxed">
                                Email
                            </label>
                            <input 
                                id="email"
                                type="email" 
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full focus:outline-none text-gray-900 text-lg px-5 py-3 rounded-lg border border-gray-200" 
                                required
                            />
                        </div>

                        <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                            <label htmlFor="password" className="text-gray-600 text-base font-medium leading-relaxed">
                                New Password (leave empty to keep current)
                            </label>
                            <input 
                                id="password"
                                type="password" 
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full focus:outline-none text-gray-900 text-lg px-5 py-3 rounded-lg border border-gray-200" 
                            />
                        </div>

                        <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                            <label htmlFor="profilePic" className="text-gray-600 text-base font-medium leading-relaxed">
                                Profile Picture
                            </label>
                            <input 
                                id="profilePic"
                                type="file"
                                onChange={handleFileChange}
                                accept="image/*"
                                className="w-full focus:outline-none text-gray-900 text-lg px-5 py-3 rounded-lg border border-gray-200" 
                            />
                        </div>
                    </div>

                    <button 
                        type="submit"
                        className="mx-auto px-9 py-3 bg-blue-500 hover:bg-blue-700 rounded-xl text-white text-lg font-semibold"
                    >
                        Update Profile
                    </button>
                </form>
            </div>
        </section>
    );
}
