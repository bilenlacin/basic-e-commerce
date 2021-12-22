import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories, fetchProducts } from '../redux/productSlice';
import Products from '../components/Products';
import Sidebar from '../components/Sidebar';
import Loading from '../components/Loading';
import LoadMore from '../components/LoadMore';
import Footer from '../components/Footer';

const HomeScreen = ({ showSide, setShowSide }) => {
  const productDetails = useSelector((state) => state.productSlice);
  const categories = useSelector((state) => state.productSlice.categories);
  const { loading, products } = productDetails;
  const [visible, setVisible] = useState(10);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div>
      <div className='container'>
        {showSide && <Sidebar categories={categories} />}

        <div className='cart-items'>
          {products.slice(0, visible).map((product) => (
            <Products key={product.id} product={product} />
          ))}
        </div>
      </div>
      {loading ? (
        <Loading />
      ) : visible === products.length ? (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          There is nothing to be shown
        </div>
      ) : (
        <LoadMore visible={visible} setVisible={setVisible} />
      )}
      <Footer />
    </div>
  );
};

export default HomeScreen;
