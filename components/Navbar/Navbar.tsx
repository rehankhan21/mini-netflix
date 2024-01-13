'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Logo from '../../public/netflix_logo.svg'
import styles from '../Navbar/Navbar.module.scss'

interface linkProps {
  name: string;
  href: string;
}

const links: linkProps[] = [
  { name: 'Home', href: '/movie' },
  { name: 'Tv Shows', href: '/movie' },
  { name: 'Movies', href: '/movie' },
  { name: 'Recently Added', href: '/movie' },
  { name: 'My List', href: '/movie' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <Link href='/movie' className={styles.navbar__logo}>
        <Image src={Logo} alt='Netflix logo' priority />
      </Link>
      <button 
        onClick={toggleMenu} 
        className={styles.navbar__toggle}
        aria-expanded={isMenuOpen} 
        aria-controls='navbar-menu'
      >
        Menu
      </button>
      <ul 
        className={`${styles['navbar__nav-list']} ${isMenuOpen ? styles['navbar__nav-list--open'] : ''}`}
        id='navbar-menu'
      >
        {links.map((link, idx) => (
          <li className={styles['navbar__nav-item']} key={idx}>
            <Link onClick={toggleMenu} href={link.href} className={styles['navbar__nav-link']}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}