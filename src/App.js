import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import Navbar from './components/Navbar';

import { useSelector } from 'react-redux';
import Error from './components/Error';
import CategoryPage from './screens/CategoryPage';
import { useState } from 'react';

function App() {
  const productDetails = useSelector((state) => state.productSlice);
  const { error } = productDetails;
  const [showSide, setShowSide] = useState(true);
  const [search, setSearch] = useState('');
  return (
    <div>
      {error ? (
        <Error error={error} />
      ) : (
        <div>
          <BrowserRouter>
            <Navbar
              setSearch={setSearch}
              showSide={showSide}
              setShowSide={setShowSide}
            />
            <Routes>
              <Route
                exact
                path='/'
                element={
                  <HomeScreen
                    search={search}
                    showSide={showSide}
                    setShowSide={setShowSide}
                  />
                }
              />
              <Route path='/products/:id' element={<ProductScreen />} />
              <Route
                path={`/products/category/:productCtgry`}
                element={<CategoryPage />}
              />
            </Routes>
          </BrowserRouter>
        </div>
      )}
    </div>
  );
}

export default App;
