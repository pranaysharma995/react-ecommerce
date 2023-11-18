import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import NewsLetter from './Components/Newsletter/NewsLetter';
import Men from './Components/Assets/banner_mens.png';
import Women from './Components/Assets/banner_women.png';
import Kids from './Components/Assets/banner_kids.png';
import Login from './Pages/Login';
import { useContext } from 'react';
import { ShopContext } from './Context/ShopContext';

function App() {
  const {men,women,kid}=useContext(ShopContext);
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/men' element={<ShopCategory banner={Men} category="men" data={men} />} />
        <Route path='/women' element={<ShopCategory banner={Women} category="women" data={women} />} />
        <Route path='/kids' element={<ShopCategory banner={Kids} category="kid" data={kid} />} />
        <Route path='/product' element={<Product />}>
          <Route path=':productID' element={<Product />} />
        </Route>
        <Route path='/cart' element={<Cart />} />
        <Route path='/signup' element={<LoginSignup />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <NewsLetter />
    </div>
    </BrowserRouter>
  );
}

export default App;
