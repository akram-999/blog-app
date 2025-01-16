import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Register() {
    const API_URL = "http://localhost:5000/api";
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API_URL}/auth/register`, formData);
      console.log("Registration successful:", res.data);
      navigate("/");
    } catch (err) {
      setError(err.response?.data || "Something went wrong");
    }
  };
  return (
    <section class="relative py-10 bg-gray-900 sm:py-16 lg:py-24">
    <div class="absolute inset-0">
        <img class="object-cover w-full h-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/signup/2/woman-working-laptop.jpg" alt="" />
    </div>
    <div class="absolute inset-0 bg-gray-900/20"></div>

    <div class="relative max-w-lg px-4 mx-auto sm:px-0">
        <div class="overflow-hidden bg-white rounded-md shadow-md">
            <div class="px-4 py-6 sm:px-8 sm:py-7">
                <div class="text-center">
                    <h2 class="text-3xl font-bold text-gray-900">Create an account</h2>
                    <p class="mt-2 text-base text-gray-600">Already joined? <Link  to='/login' title="" class="text-orange-400 transition-all duration-200 hover:underline hover:text-orange-500">Sign in now</Link></p>
                </div>

                <form onSubmit={handleSubmit} class="mt-8">
                    <div class="space-y-5">
                        <div>
                            <label for="" class="text-base font-medium text-gray-900"> First & Last name </label>
                            <div class="mt-2.5">
                                <input type="text" name="username"
                                        value={formData.username}
                                        onChange={handleChange} placeholder="Enter your full name" class="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
                            </div>
                        </div>

                        <div>
                            <label for="" class="text-base font-medium text-gray-900"> Email address </label>
                            <div class="mt-2.5">
                                <input type="email" name="email"
                                        value={formData.email}
                                        onChange={handleChange} placeholder="Enter email to get started" class="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
                            </div>
                        </div>

                        <div>
                            <label for="" class="text-base font-medium text-gray-900"> Password </label>
                            <div class="mt-2.5">
                                <input type="password" name="password"
                                        value={formData.password}
                                        onChange={handleChange} placeholder="Enter your password" class="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
                            </div>
                        </div>

                        {error && <p className="text-red-500">{error}</p>}
                        <div>
                            <button type="submit" class="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-400 border border-transparent rounded-md focus:outline-none hover:bg-blue-500 focus:bg-blue-600">Sign up</button>
                        </div>

                        
                    </div>
                </form>

                
            </div>
        </div>
    </div>
</section>

  )
}
