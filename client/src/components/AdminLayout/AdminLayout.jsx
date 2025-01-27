import React, { useState, useContext } from 'react';
import { Link, Outlet, useLocation, Navigate } from 'react-router-dom';
import { FiHome, FiUsers, FiFileText, FiTag, FiMenu, FiX } from 'react-icons/fi';
import { AuthContext } from '../../context/AuthContext';

export default function AdminLayout() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();
  const { user } = useContext(AuthContext);

  // Double-check admin status
  if (!user || !user.isAdmin) {
    return <Navigate to="/" replace />;
  }

  const menuItems = [
    { path: '/admin', icon: <FiHome size={20} />, label: 'Dashboard' },
    { path: '/admin/users', icon: <FiUsers size={20} />, label: 'Users' },
    { path: '/admin/posts', icon: <FiFileText size={20} />, label: 'Posts' },
    { path: '/admin/categories', icon: <FiTag size={20} />, label: 'Categories' },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`${isSidebarOpen ? 'w-64' : 'w-20'} bg-white shadow-lg transition-all duration-300`}>
        <div className="p-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className={`font-bold text-xl ${!isSidebarOpen && 'hidden'}`}>Admin Panel</h2>
            <button onClick={() => setSidebarOpen(!isSidebarOpen)}>
              {isSidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>

          <nav>
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`flex items-center gap-3 p-3 rounded-lg transition-colors
                      ${location.pathname === item.path 
                        ? 'bg-orange-500 text-white' 
                        : 'text-gray-700 hover:bg-gray-100'}`}
                  >
                    {item.icon}
                    {isSidebarOpen && <span>{item.label}</span>}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
} 