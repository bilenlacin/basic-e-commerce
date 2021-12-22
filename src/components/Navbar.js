import React from 'react';

const Navbar = ({ showSide, setShowSide }) => {
  return (
    <div className='navigation-bar'>
      <header className='row'>
        <div className='menu-brand'>
          <span onClick={() => setShowSide(!showSide)}>
            <i
              style={{ fontSize: 22, cursor: 'pointer' }}
              class='fas fa-bars'
            ></i>
          </span>
          <a href='/'>Shopping Mall</a>
        </div>
        <div className='form'>
          <form action='' className='search-form'>
            <i className='fas fa-search'></i>
            <input type='text'></input>
          </form>
        </div>
        <div>
          <a href='shoppingcart'>
            <span></span>Cart
          </a>
          <a href='/login'>Login</a>
          <a href='/signup'>Sign in</a>
          <a href='signup'>Sign up</a>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
