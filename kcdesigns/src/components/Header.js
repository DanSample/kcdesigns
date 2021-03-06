import React from 'react';

const Header = () => {
  return (
    <div className="header-wrapper">
      <section className="header-logo-wrapper">
        <img
          src={''}
          className="header-logo"
          alt="Kate and Caroline Designs logo"
        ></img>
        <h2>Logo Here</h2>
      </section>
      <section className="nav-bar-wrapper">
        <a href="/home">Home</a>
        <a href="/shop">Shop Designs</a>
        <a href="/contact">Contact Us</a>
      </section>
      <section className="cart-button-wrapper">
        <a href="/cart">Your Cart</a>
      </section>
    </div>
  );
};

export default Header;
