import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact'
import Login from './pages/Login/Login'
import Blog from './pages/BlogDetail/Blog';
import Register from './pages/Register/Register'
import CreateBlog from './pages/CreateBlog/CreateBlog';
import Profil from './pages/Profile/Profile';
import UpdateUser from './pages/UpdateUser/UpdateUser';
import UpdateBlog from './pages/UpdateBlog/UpdateBlog';
import FetchData from './pages/BlogsPage/fetchdata';
import AdminLayout from './components/AdminLayout/AdminLayout';
import Dashboard from './pages/Admin/Dashboard';
import Users from './pages/Admin/Users';
import Posts from './pages/Admin/Posts';
import Categories from './pages/Admin/Categories';
import { AuthContext } from './context/AuthContext';
import { useContext } from 'react';
import ProtectedAdminRoute from './components/AdminRoute/ProtectedAdminRoute';

function App() {
  const {user} = useContext(AuthContext);
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/blog/:id' element={<Blog />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/profile/:id' element={<Profil />} />
      <Route path='/createblog' element={<CreateBlog />} />
      <Route path='/update-user/:id' element={<UpdateUser />} />
      <Route path='/update-blog/:id' element={<UpdateBlog />} />
      <Route path='/blogs' element={<FetchData />} />
      
      <Route
        path="/admin"
        element={
          <ProtectedAdminRoute>
            <AdminLayout />
          </ProtectedAdminRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/posts" element={<Posts />} />
        <Route path="/admin/categories" element={<Categories />} />
      </Route>
     
    </Routes>
  );
}

export default App;
