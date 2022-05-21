import { useDispatch } from 'react-redux';
import { setProducts } from '../src/components/redux/actions/products';
import { useEffect } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/pages/Home';
import Cart from './components/Cart';
import dataBase from './db.json';

import { Routes, Route } from 'react-router-dom';
import AllProducts from './components/pages/AllProducts';
import ProductPage from './components/pages/ProductPage';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setProducts(dataBase.furniture));
  }, [dispatch]);
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all-products" element={<AllProducts />} />
          <Route path="/product/:productID" element={<ProductPage />} />
          <Route path="/all-products/product/:productID" element={<ProductPage />} />
        </Routes>
        <Cart />
      </div>
      <Footer />
    </div>
  );
}

export default App;
