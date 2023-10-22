import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper-bundle.css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

const CardSlider = ({ images }) => {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectFade, Navigation, Pagination]}
                className="mySwiper"
            >
                {images.map((item, index) => (
                    <SwiperSlide className='h-[450px]' key={index}>
                        <img src={item} className='h-full' />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default CardSlider