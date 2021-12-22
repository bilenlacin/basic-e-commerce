import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';

const CategoryProducts = ({ product }) => {
  return (
    <div className='cart-item'>
      <Link to={`/products/${product.id}`}>
        <img className='medium' src={product.image} alt='' />
      </Link>
      <div className='card-body'>
        <Link to={`/products/${product.id}`}>
          <h4>{product.title}</h4>
          <p className='description'>{product.category}</p>
        </Link>
        <div className='rating'>
          {' '}
          <Rating rate={product.rating.rate} />{' '}
        </div>
        <div className='price'>${product.price}</div>
      </div>
    </div>
  );
};

export default CategoryProducts;
