import React, { useState } from 'react';
import styles from './ThumbSwiper.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/thumbs';
import './slider.css';

function Img1() {
  return (
    <Image
      src={
        'http://led.apptrix.ru/media/filer_public/f0/66/f06621c7-4a5b-4112-9742-437f9182579b/track-desk.png'
      }
      alt={'image'}
      width={900}
      height={450}
      sizes="(max-width: 1024px) 100vw, 100vw"
      className={`${styles.image}`}
    />
  );
}

function Img2() {
  return (
    <Image
      src={
        'http://led.apptrix.ru/media/filer_public/a3/b6/a3b6b17b-70c8-4421-bca3-71f4e901fde0/angle-desk.png'
      }
      alt={'image'}
      width={900}
      height={450}
      sizes="(max-width: 1024px) 100vw, 100vw"
      className={`${styles.image}`}
    />
  );
}

export function ThumbSwiper() {
  const [imagesNavSlider, setImagesNavSlider] = useState(null);
  return (
    <div className={`${styles['slider__flex']}`}>
      <div className={`${styles['slider__thumbs']}`}>
        <Swiper
          // @ts-ignore
          onSwiper={setImagesNavSlider}
          slidesPerView={'auto'}
          direction={'vertical'}
          wrapperClass={`${styles['thumbs-swiper__wrapper']}`}
        >
          <SwiperSlide className={`${styles['thumbs__image']}`}>
            <Img1 />
          </SwiperSlide>
          <SwiperSlide className={`${styles['thumbs__image']}`}>
            <Img2 />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className={`${styles['slider__images']}`}>
        <Swiper
          grabCursor={true}
          thumbs={{ swiper: imagesNavSlider }}
          slidesPerView={1}
          modules={[Thumbs]}
        >
          <SwiperSlide>
            <Img1 />
          </SwiperSlide>
          <SwiperSlide>
            <Img2 />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
