'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const Sidebar = () => {
  // const [scrollPosition, setScrollPosition] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrollPosition(window.scrollY);
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);


  // const navOpacity = Math.min(1, scrollPosition / 200);

  const listStyle = 'hover:text-blue-600 hover:ease-in duration-400 hover:cursor-pointer'
  // const navStyle = `fixed top-0 left-0 w-full p-4 transition-opacity duration-300 ${
  //   navOpacity < 1 ? 'opacity-' + (navOpacity * 100) : 'opacity-100'}`
  const navStyle = "h-screen w-1/3 bg-gray-800 text-white p-6 z-10 fixed hidden"

  return (
    <div className={navStyle}>
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