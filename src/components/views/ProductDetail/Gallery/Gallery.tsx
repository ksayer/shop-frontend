import React from 'react';
import styles from './Gallery.module.css';
import { ImageObject, ImageData } from '@/api/types';
import Image from 'next/image';
import { SliderArrow } from '@/components/icons/SliderArrow/SliderArrow';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation } from 'swiper/modules';

interface IGallery {
  title: string;
  images: ImageObject[];
}

const ImageComponent = ({ image }: { image: ImageData }) => {
  return (
    <div key={image.id} className={`${styles['image-wrapper']}`}>
      <Image
        src={image?.absolute_url}
        alt={'image'}
        fill
        sizes="(max-width: 1024px) 100vw, 100vw"
        quality={image.optimized ? 100 : 75}
        className={`${styles.image}`}
      />
    </div>
  );
};

export function Gallery({ title, images }: IGallery) {
  return (
    <div id={'gallery'} className={`container ${styles.wrapper}`}>
      <h3 className={`section__title ${styles.title}`}>{title}</h3>

      <div className={styles.buttons}>
        <button className={`${styles['left-button']}`}>
          <SliderArrow className={`${styles.arrow}`} />
        </button>
        <button className={`${styles['right-button']}`}>
          <SliderArrow className={`reverse ${styles.arrow}`} />
        </button>
      </div>
      <Swiper
        modules={[Autoplay, Navigation]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation={{
          nextEl: `.${styles['right-button']}`,
          prevEl: `.${styles['left-button']}`,
          disabledClass: styles.disabled,
        }}
        className={styles.swiper}
      >
        {images?.map(image => (
          <SwiperSlide key={image.id}>
            <ImageComponent key={image.id} image={image.image} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.images}>
        {images?.map(image => <ImageComponent key={image.id} image={image.image} />)}
      </div>
    </div>
  );
}
