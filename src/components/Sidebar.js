import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ categories }) => {
  return (
    <div className='sidebar'>
      {categories.map((product) => (
        <Link
          to={`/products/category/${product}`}
          key={product}
          href='/'
          className='item'
        >
          {product}
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
