import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FiUsers, FiFileText, FiTag } from 'react-icons/fi';

export default function Dashboard() {
  const [stats, setStats] = useState({
    users: [],
    posts: [],
    categories: []
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch all data
        const [usersRes, postsRes, categoriesRes] = await Promise.all([
          axios.get('http://localhost:5000/api/users'),
          axios.get('http://localhost:5000/api/posts'),
          axios.get('http://localhost:5000/api/categories')
        ]);

        // Log the responses to check the data
        console.log('Users Response:', usersRes.data);
        console.log('Posts Response:', postsRes.data);
        console.log('Categories Response:', categoriesRes.data);

        // Set the state with the response data
        setStats({
          users: usersRes.data || [],
          posts: postsRes.data || [],
          categories: categoriesRes.data || []
        });

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Calculate totals
  const totals = {
    users: stats.users?.length || 0,
    posts: stats.posts?.length || 0,
    categories: stats.categories?.length || 0
  };

  console.log('Current Totals:', totals); // Debug log

  const statCards = [
    {
      title: 'Total Users',
      value: totals.users,
      icon: <FiUsers size={24} />,
      color: 'bg-blue-500'
    },
    {
      title: 'Total Posts',
      value: totals.posts,
      icon: <FiFileText size={24} />,
      color: 'bg-green-500'
    },
    {
      title: 'Categories',
      value: totals.categories,
      icon: <FiTag size={24} />,
      color: 'bg-purple-500'
    }
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {statCards.map((card, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">{card.title}</p>
                <h3 className="text-2xl font-bold mt-1">
                  {typeof card.value === 'number' ? card.value : 0}
                </h3>
              </div>
              <div className={`${card.color} text-white p-3 rounded-full`}>
                {card.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Debug Information */}
      {/* <div className="mt-4 p-4 bg-gray-100 rounded">
        <h3>Debug Information:</h3>
        <pre>
          {JSON.stringify({
            userCount: stats.users.length,
            postCount: stats.posts.length,
            categoryCount: stats.categories.length
          }, null, 2)}
        </pre>
      </div> */}
    </div>
  );
} 