'use client'

import React, { ReactNode } from 'react';

import styles from '../Banner/Banner.module.scss'

interface BannerProps {
  title: string;
  children?: ReactNode;
}

const Banner: React.FC<BannerProps> = ({ title, children }) => {
  return (
    <div className={styles.banner}>
        <img src='/nbanner.jpg' alt={title} className={styles.banner__image} />
        <div className={styles.banner__overlay}></div>
        <div className={styles.banner__content}>
            <h1 className={styles.banner__title}>{title}</h1>
            {children}
        </div>
    </div>
  
  );
};

export default Banner;

