
import Home from './admin/Home';
import Main from './admin/Main';
import About from './admin/aboutus';
import Signup from './admin/Signup';
import Login from './admin/login';
import { Routes,Route, } from "react-router-dom";
function App() {
  return (
    <div className='App'>
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/donate' element={<Main/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path="/login"  element={<Login/>}></Route>
    </Routes>
    </div>
  );
}
export default App;
