import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import Products from '../components/Products';

import { fetchSpecificCategory } from '../redux/productSlice';

const CategoryPage = () => {
  const { productCtgry } = useParams();
  const dispatch = useDispatch();
  const category = useSelector((state) => state.productSlice.category);
  const productDetails = useSelector((state) => state.productSlice);
  const { loading } = productDetails;
  useEffect(() => {
    dispatch(fetchSpecificCategory(productCtgry));
  }, [dispatch, productCtgry]);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <Link to='/'>Back to Homepage</Link>
          <div className='container'>
            <div className='cart-items'>
              {category.map((product) => (
                <Products key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
