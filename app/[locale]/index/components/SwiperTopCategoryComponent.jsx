'use client';

import React, { useEffect } from 'react';
import Swiper from 'swiper';

export default function SwiperTopCategoryComponent() {

    useEffect(() => {
        new Swiper('.swiper-container', {
            slidesPerView: 'auto',
            spaceBetween: 10,
            // Additional Swiper configuration options...
        });
    }, []);

    return (
        <div className="swiper-container">
            <div className="swiper-wrapper">
                <div className="swiper-slide">Slide 1</div>
                <div className="swiper-slide">Slide 2</div>
                <div className="swiper-slide">Slide 3</div>
                {/* Add more slides as needed */}
            </div>
        </div>
    );
};
