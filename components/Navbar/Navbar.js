import React from 'react';
import Link from 'next/link'
import logo from './../../public/images/logo.png'

import ProductP from '../PopUp/ProductP'
import HamburgerP from '../PopUp/HamburgerP'
import CardP from '../PopUp/CardP'
import styles from '../../styles/navbar.module.scss'



function Navbar() {

  return (
    <>
      <section className={styles.menu}>
        <div className={styles.menuContainerBlock}>
           <img src={logo} className={styles.menuLogo} alt='logo'/>
          <nav className={styles.menuNavigation}>
            <ul className={styles.menuContainer}>
              <li className={styles.menuBlock}>
                <Link href='/ourstory' passHref={true}>Our Story</Link>
              </li>
              <ProductP />
              <li className={styles.menuBlock}>
                <Link href='/FAQ'  passHref={true} className={styles.menu__item}>FAQ</Link>
              </li>
            </ul>
          </nav>
          <div className={styles.menuTool}>
            <CardP />
                 <HamburgerP/>
          </div>

        </div>
      </section>
    </>
  );
}


export default Navbar
