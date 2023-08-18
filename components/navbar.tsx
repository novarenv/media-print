'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'

const Navbar = () => {
  const listStyle = 'flex hover:text-blue-600 hover:ease-in duration-300 hover:cursor-pointer m-4 items-center'
  const listStyleScroll = 'flex text-blue-600 hover:ease-in duration-300 hover:cursor-pointer m-4 items-center'
  const [isAboutVisible, setIsAboutVisible] = useState(false);
  const [isContactVisible, setIsContactVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const about = document.getElementById("about");
      const contact = document.getElementById("contact");

      console.log("About", JSON.stringify(about?.getBoundingClientRect()))
      console.log("Window H", JSON.stringify(window.innerHeight))
      console.log("Window W", JSON.stringify(window.innerWidth))

      if (about) {
        const rect = about.getBoundingClientRect();
        console.log("True",
          rect.top >= 0 &&
          rect.bottom <= window.innerHeight
        )
        setIsAboutVisible(
          rect.top >= 0 &&
          rect.bottom <= window.innerHeight
        );
      }
      if (contact) {
        const rect = contact.getBoundingClientRect();
        setIsContactVisible(
          rect.top >= 0 &&
          rect.bottom <= window.innerHeight
        );
      }
    };
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='flex w-full items-center h-20 sticky top-0 z-50'>
      <div className='flex items-center justify-center h-full bg-blue-400 px-4'>
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      <ul className="flex justify-end bg-blue-400 h-full w-full">
        <li className={listStyle}>
          <Link href="/">Home</Link>
        </li>
        <li className={isAboutVisible ? listStyleScroll : listStyle}>
          <Link href="#about">About</Link>
        </li>
        <li className={isContactVisible ? listStyleScroll : listStyle}>
          <Link href="#contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;