import React from 'react';
import shopLogo from './/assests/img/shop-logo.jpg';
import './App.css';
import HomePage from './Pages/HomePage';
import { BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom';
import ShopPage from './Pages/ShopPage';

function App() {
  return (
      <Router>
        <header className='sticky'>
          <span className='logo'>
              <img src={shopLogo} alt='logo' width={100} height={100}></img>
          </span>
          <NavLink to="/" className='button rounded'>
            <span className='icon-home'></span> Home
          </NavLink>
          <NavLink to="/shop" className='button rounded'>
            <span className='icon-home'></span> Shop
          </NavLink>
        </header>
        <div className='container'>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} /> 
          </Routes>

        </div>
      </Router>
  );

   
}



export default App;
