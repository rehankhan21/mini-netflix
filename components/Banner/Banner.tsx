'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import styles from '../Banner/Banner.module.scss';

interface BannerProps {
  title: string;
  children?: React.ReactNode;
}

const Banner: React.FC<BannerProps> = ({ title, children }) => {
  const [currentBannerIndex, setCurrentBannerIndex] = useState<number>(0);
  const [nextBannerIndex, setNextBannerIndex] = useState<number>(1);
  const bannerImages = ['/bannerImages/nbanner.jpg', '/bannerImages/marvelBanner.jpg', '/bannerImages/netflixTvBanner.jpg'];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentBannerIndex(nextBannerIndex);
      setNextBannerIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
    }, 8000);

    return () => clearInterval(intervalId);
  }, [nextBannerIndex, bannerImages.length]);

  return (
    <section className={styles.banner} aria-labelledby='banner-heading'>
      <Image 
        key={currentBannerIndex}
        src={bannerImages[currentBannerIndex]} 
        alt='' 
        className={`${styles.banner__image} ${styles['banner__image--slideOut']}`} 
        width='0' 
        height='0' 
        sizes='100vw' 
      />
      <Image 
        key={nextBannerIndex}
        src={bannerImages[nextBannerIndex]} 
        alt='' 
        className={`${styles.banner__image} ${styles['banner__image--slideIn']}`} 
        width='0' 
        height='0' 
        sizes='100vw' 
      />
      <div className={styles.banner__overlay}></div>
      <div className={styles.banner__content}>
        <h1 id='banner-heading' className={styles.banner__title}>{title}</h1>
        {children}
      </div>
    </section>
  );
};

export default Banner;