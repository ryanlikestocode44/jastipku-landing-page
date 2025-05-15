import React from 'react'

const Navbar = () => {
  return (
    <div>
      <header className="fixed w-full bg-white shadow z-50">
        <nav className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-xl font-bold text-blue-600">JastipKu</div>
          <ul className="flex gap-6 text-sm font-medium text-gray-600">
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
      </header>
    </div>
  );
}

export default Navbar