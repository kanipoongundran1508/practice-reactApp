import logo from './logo.svg';
import './App.css';
import { useState } from 'react';         
import { Link, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';
import { Blog } from './components/Blog';
import { Dashboard } from './products/Dashboard';
import { ProductList } from './products/ProductList';
import { ProductPreview } from './products/ProductPreview';
import Home from './components/Home';



function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="blog" element={<Blog/>}/>
      <Route path='/product' element={<Dashboard/>}> 
        <Route path='product1' element={<ProductList/>}/>
        <Route path='product2' element={<ProductPreview/>}/>
      </Route>
    </Routes>
    <Home/>
    
    {/* <a href='/about'>About Us</a> <br></br> */}
    {/* <button type='submit'>Submit </button> */}

    {/* <Link to="product">Product Dashboard</Link> */}
    </div>

    
  );
}


export default App;
