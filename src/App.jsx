
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import Notfound from './component/Notfound';
import Details from './pages/Details';
import CustomBrand from './component/CustomBrand';
import LogIn from './pages/logIn';






function App() {
 

  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LogIn />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/product/:id" element={<Details />} />
          <Route exact path="/category/:item" element={<CustomBrand />} />
          <Route path="*" element={<Notfound />} /> 
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App