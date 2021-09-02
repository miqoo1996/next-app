import React, {useState} from 'react'
import instIcon from './../../public/images/instIcon.png'
import Link from 'next/link'

import styles from './../../styles/popup.module.scss'
import onClickOutside from "react-onclickoutside";

function HamburgerP() {

    const [hamburgerActive, setHamburgerActive] = useState(false);
    const [showPopupMenu, setshowPopupMenu] = useState(false);
    const [states, setStates] = useState(true);

    HamburgerP.handleClickOutside = () => {
        setshowPopupMenu(false);
        setHamburgerActive(false);
    }

    const hamburgerOpen = () => {
        setHamburgerActive(!hamburgerActive);
        setshowPopupMenu(!showPopupMenu)
    };


    return (

        <div className={styles.menuBlockRight}>
            <div className={styles.hamburgerMbMenu} onClick={hamburgerOpen}>
                <span
                    className={!hamburgerActive ? styles.hamburger1 : styles.hamburger11}
                ></span>
                <span
                    className={!hamburgerActive ? styles.hamburger2 : styles.hamburger22}
                ></span>
                <span
                    className={!hamburgerActive ? styles.hamburger3 : styles.hamburger33}
                ></span>
            </div>
            {
                showPopupMenu &&
                <div className={styles.popupR}>
                    <Link href='/OurStory' passHref={true} className={styles.popupR__mobile__item}>Support</Link>
                    <Link href='/Product' passHref={true} className={styles.popupR__mobile__item}>Warranty</Link>
                    <button className={styles.popupR__btn} onClick={() => setStates(!states)}>Sign In</button>
                    <button className={styles.popupR__btn} onClick={() => setStates(!states)}>United States</button>
                    <Link href='/instIcon' passHref={true}><img src={instIcon} alt='inst icon' className={styles.popupR__icon}/></Link>
                </div>
            }
        </div>
    )
}


const clickOutsideConfig = {
    handleClickOutside: () =>
        HamburgerP.handleClickOutside,
};

export default onClickOutside(HamburgerP, clickOutsideConfig)
