
import Home from './admin/Home';
import Main from './admin/Main';
import About from './admin/aboutus';
import Signup from './admin/Signup';
import Login from './admin/login';
import Dashboard from './admin/dashboard';
import { Routes,Route, } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const toastContainerOptions = {
    position: 'top-center',
    autoClose: 1000, 
  };
  return (
    <div className='App'>
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/donate' element={<Main/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path="/login"  element={<Login/>}></Route>
        <Route path='dashboard' element={<Dashboard/>}></Route>
    </Routes>
    <ToastContainer {...toastContainerOptions} />
    </div>
  );
}
export default App;
