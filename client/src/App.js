
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact'
import Login from './pages/Login'
import Blog from './pages/Blog';
import Register from './pages/Register'
import CreateBlog from './pages/CreateBlog';
import Profil from './pages/Profile';

function App() {
  return (
        <Routes>
          <Route path='/' element={<Home />} />
           <Route path='/blog/:id' element={<Blog />} />
           <Route path='/contact' element={<Contact />} />
           <Route path='/login' element={<Login />} />
           <Route path='/register' element={<Register />} />
           <Route path='/profile' element={<Profil />} />
           <Route path='/createblog' element={<CreateBlog />} />
        </Routes>
  );
}

export default App;
