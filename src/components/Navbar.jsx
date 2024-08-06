import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Tokopedia</div>
      <input type="text" placeholder="Cari di Tokopedia" />
      <div className="actions">
        <i className="fas fa-shopping-cart"></i>
        <button>Masuk</button>
        <button>Daftar</button>
      </div>
    </nav>
  );
}

export default Navbar;
