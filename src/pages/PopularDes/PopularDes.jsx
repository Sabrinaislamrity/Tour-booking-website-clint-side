import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const destinations = [
  {
    name: 'Bandarban',
    hotels: '125 Hotels Available',
    image: 'https://i.ibb.co/tTXGXmrw/pexels-razib-hasan-901578-12839823.jpg',
    link: '/destinations/bandarban',
  },
  {
    name: 'Kaptai Lake',
    hotels: '78 Hotels Available',
    image: 'https://i.ibb.co/kVTcVR30/pexels-swadhin-das-2152005-3807863.jpg',
    link: '/destinations/kaptai-lake',
  },
  {
    name: 'Rangamati',
    hotels: '63 Hotels Available',
    image: 'https://i.ibb.co/N2GW0Cr2/pexels-rezwan-nobi-741721-1633318.jpg',
    link: '/destinations/rangamati',
  },
  {
    name: 'Sajek Valley',
    hotels: '45 Hotels Available',
    image: 'https://i.ibb.co/FkvKGNfz/pexels-didarul-islam-2470780-4090625.jpg',
    link: '/destinations/sajek-valley',
  },
];

const PopularDes = () => {
  return (
    <div className="text-center my-12 px-4">
      <h2 className="text-3xl font-bold mb-3 text-gray-800">Most Popular Destinations</h2>
      <p className="text-gray-500 max-w-2xl mx-auto mb-8">
        Expand your travel horizons with new facets! Explore beautiful places in Bangladesh like Bandarban, Sajek, and more.
      </p>

      <div className="relative">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination]}
          className="w-full max-w-6xl mx-auto custom-swiper"
        >
          {destinations.map((dest, idx) => (
            <SwiperSlide
              key={idx}
              className="max-w-xs rounded-xl overflow-hidden shadow-xl"
              style={{
                backgroundImage: `url(${dest.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '400px',
                borderRadius: '20px',
                position: 'relative',
              }}
            >
              <a
                href={dest.link}
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-4 rounded-b-xl"
              >
                <h3 className="text-lg font-semibold">{dest.name}</h3>
                <p className="text-sm">{dest.hotels}</p>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom style to push pagination dots down */}
        <style>{`
          .custom-swiper .swiper-pagination {
            position: relative !important;
            margin-top: 50px;
          }
        `}</style>
      </div>
    </div>
  );
};

export default PopularDes;
