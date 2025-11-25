import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/autoplay'
import { Autoplay } from 'swiper/modules'

import logo1 from '../wrapper/1xbet-logo-png_seeklogo-355459.png'
import logo2 from '../wrapper/ajio.png'
import logo3 from '../wrapper/amazon.png'
import logo4 from '../wrapper/boat-logo-png_seeklogo-379185.png'
import logo5 from '../wrapper/fiverr-logo-png_seeklogo-376328.png'
import logo6 from '../wrapper/flipkart-logo-png_seeklogo-622636.png'
import logo7 from '../wrapper/godrej-properties-logo-png_seeklogo-495528.png'
import logo8 from '../wrapper/hm-logo-png_seeklogo-64496.png'
import logo9 from '../wrapper/myntra.png'
import logo10 from '../wrapper/spinny-logo-png_seeklogo-455895.png'

const brands = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  logo9,
  logo10
]

export default function BrandSlider() {
  return (
    <div style={{ width: '100%', padding: '12px 0' }} className="bg-white rounded-xl shadow-md">
      <Swiper
        slidesPerView={5}
        spaceBetween={8}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false
        }}
        speed={2500}
        modules={[Autoplay]}
        className="brandSwiper"
        breakpoints={{
          320: { slidesPerView: 2 },
          480: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 }
        }}
      >
        {brands.map((logo, index) => (
          <SwiperSlide key={index}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 100 }}>
              <img
                src={logo}
                alt={`brand-${index}`}
                style={{ maxWidth: '160px', height: '80px', objectFit: 'contain' }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
