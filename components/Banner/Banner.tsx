'use client'

import React, { ReactNode } from 'react';

import styles from '../Banner/Banner.module.scss'

interface BannerProps {
  title: string;
  children?: ReactNode;
}

const Banner: React.FC<BannerProps> = ({ title, children }) => {
    return (
      <section className={styles.banner} aria-labelledby='banner-heading'>
          <img src='/nbanner.jpg' alt='' className={styles.banner__image} />
          <div className={styles.banner__overlay}></div>
          <div className={styles.banner__content}>
              <h1 id='banner-heading' className={styles.banner__title}>{title}</h1>
              {children}
          </div>
      </section>
    );
  };

export default Banner;

