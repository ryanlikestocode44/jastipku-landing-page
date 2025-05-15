import React from 'react'

const NavbarFooter = () => {
  return (
    <nav>
      <ul className="flex gap-10 text-sm">
        <li className="hover:text-blue-500 cursor-pointer">
          <a href="#home">Home</a>
        </li>
        <li className="hover:text-blue-500 cursor-pointer">
          <a href="#tentang">Tentang</a>
        </li>
        <li className="hover:text-blue-500 cursor-pointer">
          <a href="#barang">Barang</a>
        </li>
        <li className="hover:text-blue-500 cursor-pointer">
          <a href="#kontak">Kontak</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavbarFooter;