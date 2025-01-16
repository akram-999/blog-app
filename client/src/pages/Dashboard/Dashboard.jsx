import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Dashboard() {
  const [categories, setCategories] = useState([]);
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [stats, setStats] = useState({
    totalPosts: 0,
    totalCategories: 0,
    totalUsers: 0
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  // Fetch all data when component mounts
  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true);
        const [categoriesRes, postsRes, usersRes] = await Promise.all([
          axios.get('/api/categories', { headers: { token: `Bearer ${token}` }}),
          axios.get('/api/posts', { headers: { token: `Bearer ${token}` }}),
          axios.get('/api/users', { headers: { token: `Bearer ${token}` }})
        ]);

        setCategories(categoriesRes.data);
        setPosts(postsRes.data);
        setUsers(usersRes.data);
        
        setStats({
          totalPosts: postsRes.data.length,
          totalCategories: categoriesRes.data.length,
          totalUsers: usersRes.data.length
        });
      } catch (err) {
        setError(err.response?.data?.message || 'Error fetching dashboard data');
        if (err.response?.status === 403) {
          navigate('/login');
        }
      } finally {
        setLoading(false);
      }
    };

    if (!token) {
      navigate('/login');
    } else {
      fetchDashboardData();
    }
  }, [token, navigate]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-neutral-900">
      {/* Main Content */}
      <div className="w-full lg:ps-64">
        <div className="p-4 sm:p-6 space-y-6">
          {loading ? (
            <div className="flex justify-center items-center h-screen">
              <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
            </div>
          ) : error ? (
            <div className="text-red-500 text-center p-4">{error}</div>
          ) : (
            <>
              {/* Stats Overview */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white dark:bg-neutral-800 rounded-lg shadow p-6">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Total Posts</h3>
                  <p className="text-3xl font-bold text-blue-600">{stats.totalPosts}</p>
                </div>
                <div className="bg-white dark:bg-neutral-800 rounded-lg shadow p-6">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Categories</h3>
                  <p className="text-3xl font-bold text-green-600">{stats.totalCategories}</p>
                </div>
                <div className="bg-white dark:bg-neutral-800 rounded-lg shadow p-6">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Users</h3>
                  <p className="text-3xl font-bold text-purple-600">{stats.totalUsers}</p>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white dark:bg-neutral-800 rounded-lg shadow p-6">
                <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Quick Actions</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Link to="/dashboard/posts/create" 
                    className="p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-center">
                    Create New Post
                  </Link>
                  <Link to="/dashboard/categories" 
                    className="p-4 bg-green-500 text-white rounded-lg hover:bg-green-600 text-center">
                    Manage Categories
                  </Link>
                  <Link to="/dashboard/users" 
                    className="p-4 bg-purple-500 text-white rounded-lg hover:bg-purple-600 text-center">
                    Manage Users
                  </Link>
                </div>
              </div>

              {/* Recent Posts */}
              <div className="bg-white dark:bg-neutral-800 rounded-lg shadow p-6">
                <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Recent Posts</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                    <thead>
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Author</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Category</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                      {posts.slice(0, 5).map((post) => (
                        <tr key={post._id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">{post.title}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">{post.author}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">{post.category}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                            {new Date(post.createdAt).toLocaleDateString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Categories Overview */}
              <div className="bg-white dark:bg-neutral-800 rounded-lg shadow p-6">
                <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Categories Overview</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {categories.map((category) => (
                    <div key={category._id} className="p-4 bg-gray-50 dark:bg-neutral-700 rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{category.name}</h3>
                      <p className="text-sm text-gray-500 dark:text-neutral-400">
                        {posts.filter(post => post.category === category.name).length} posts
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
} 