import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import { fetchProductDetails } from '../redux/productSlice';

const ProductScreen = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productSlice);
  const { loading } = productDetails;

  useEffect(() => {
    dispatch(fetchProductDetails(id));
  }, [dispatch, id]);

  const product = useSelector((state) => state.productSlice.details);
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Link to='/'>Back to Homepage</Link>
          <div className='row-top'>
            <div className='col-1'>
              <img className='large-image' src={product.image} alt='' />
            </div>
            <div className='col-2'>
              <h3>{product.category}</h3>
              <h4>{product.title}</h4>
              <p>{product.description}</p>

              <p className='price'>${product.price}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductScreen;
