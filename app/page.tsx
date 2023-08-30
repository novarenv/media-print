'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import Navbar from '../components/navbar';

// https://diandracreative.com/troli/
// https://swiperjs.com/swiper-api#pagination
// https://codesandbox.io/p/sandbox/dfrkd3?file=%2Fsrc%2Fmain.jsx%3A8%2C5

export default function Home() {
  const [belanjaHovered, setBelanjaHovered] = useState(false)

  useEffect(() => {
    console.log('Belanja Hovered', belanjaHovered)
  }, [belanjaHovered])

  return (
    <div className="w-full">
      <nav
        className='flex items-center justify-center font-semibold p-3 bg-[#E91E63] h-1 text-xs'
      >
        {/* <div className='md:mx-4'>
          Senin-Jumat 08.30-16.30 | Sabtu 08.30-13.30
        </div> */}
        <div className='mx-1'>
          +62 822-4557-7420
        </div>
        <div className='border-l-2 pl-1'>
          mediaprint@gmail.com
        </div>
      </nav>

      <Navbar />

      {/* <div className='flex items-center justify-center h-40 bg-white font-semibold sticky top-0 z-50 transform hover:-translate-y-6'>
        <div
          onMouseEnter={() => setBelanjaHovered(true)}
          onMouseOut={() => setBelanjaHovered(false)}
          className={belanjaHovered ? 'text-red-500 p-4' : 'text-black p-4'}
        >
          BELANJA BUKU V
        </div>
      </div> */}

      {/* {
        belanjaHovered
          ? <div>Hi</div>
          : <div className='h-[100rem]'>Cya</div>
      } */}

      <Image className="h-full w-full fixed -z-50" src={'/images/printer-bg.jpg'} alt={''} width={1000} height={1000} />
      {/* <div className="bg-fixed ..." style={{["background-image" as any]: "url(/images/printer-bg.jpg)"}}></div> */}

      <Swiper
        navigation
        pagination={{ clickable: true }}
        modules={[Autoplay, Navigation, Pagination]}
        // className="mySwiper"
        // spaceBetween={50}
        // slidesPerView={3}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        className='h-screen bg-red-400'
      >
        <SwiperSlide>
          <div>
            <div>Quality</div>
            <div>We use High Quality printing presses for high quality product</div>
            <div>
              <div>Whatsapp</div>
              <div>Detail</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>

      <div id='about' className='flex justify-center bg-zinc-200 bg-opacity-80 text-black h-96'>
        About
      </div>
      <div id='contact' className='flex justify-center bg-zinc-200 bg-opacity-80 text-black h-96'>
        Contact
      </div>

      <div className='flex justify-center items-center h-20 bg-black text-center'>
        Copyright © 2023 Media Print. All Rights Reserved | Privacy Policy
      </div>
    </div>
  )
}
