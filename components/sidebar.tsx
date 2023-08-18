
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const Sidebar = () => {
  const listStyle = 'hover:text-blue-600 hover:ease-in duration-400 hover:cursor-pointer'

  return (
    <div className="h-screen w-1/3 bg-gray-800 text-white p-6 z-10 fixed hidden">
      <div className="text-xl font-bold mb-4">Sidebar</div>
      <ul className="space-y-2">
        <li className={listStyle}>
          <Link href="/">Home</Link>
        </li>
        <li className={listStyle}>
          <Link href="#about">About</Link>
        </li>
        <li className={listStyle}>
          <Link href="#contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;