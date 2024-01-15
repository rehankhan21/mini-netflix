'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from '../Navbar/Navbar.module.scss';
import Logo from '../../public/netflix_logo.svg';
import SearchBar from '../SearchBar/SearchBar';

interface LinkProps {
  name: string;
  href: string;
}

const links: LinkProps[] = [
  { name: 'Home', href: '/movie' },
  { name: 'Tv Shows', href: '/movie' },
  { name: 'Movies', href: '/movie' },
  { name: 'Recently Added', href: '/movie' },
  { name: 'My List', href: '/movie' },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [buttonClicked, setButtonClicked] = useState<boolean>(false);
  const menuRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!menuRef.current?.contains(event.target as Node) && !buttonClicked) {
        setIsMenuOpen(false);
      }
      setButtonClicked(false);
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [buttonClicked, menuRef]);

  const toggleMenu = () => {
    setButtonClicked(true);
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <Link href='/movie' className={styles['navbar__logo']}>
        <Image src={Logo} alt='Netflix logo' priority />
      </Link>
      <div className={styles['navbar__search-bar']}>
        <SearchBar />
      </div>
      <button 
        onClick={toggleMenu} 
        className={styles['navbar__toggle']}
        aria-expanded={isMenuOpen} 
        aria-controls='navbar-menu'
      >
        Menu
      </button>
      <ul 
        ref={menuRef}
        className={`${styles['navbar__nav-list']} ${isMenuOpen ? styles['navbar__nav-list--open'] : ''}`}
        id='navbar-menu'
      >
        {links.map((link, idx) => (
          <Link href={link.href} key={idx}>
            <li className={styles['navbar__nav-list__nav-link']} onClick={() => setIsMenuOpen(false)}>
              {link.name}
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;