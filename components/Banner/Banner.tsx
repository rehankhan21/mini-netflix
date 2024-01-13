'use client'

import React, { ReactNode } from 'react';
import Image from 'next/image';

import styles from '../Banner/Banner.module.scss'

interface BannerProps {
  title: string;
  children?: ReactNode;
}

const Banner: React.FC<BannerProps> = ({ title, children }) => {
  
  return (
    <section className={styles.banner} aria-labelledby='banner-heading'>
      <Image src='/nbanner.jpg' alt='' className={styles.banner__image} width='0' height='0' sizes='100vw' />
      <div className={styles.banner__overlay}></div>
      <div className={styles.banner__content}>
        <h1 id='banner-heading' className={styles.banner__title}>{title}</h1>
        {children}
      </div>
    </section>
  );
};

export default Banner;

