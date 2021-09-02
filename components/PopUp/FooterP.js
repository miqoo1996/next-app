import React, {useState} from 'react'
import Link from 'next/link'
import onClickOutside from "react-onclickoutside";

import styles from './../../styles/popup.module.scss'

function Footer() {
    const [showPopUp, setShowPopup] = useState(false)
    Footer.handleClickOutside = () => setShowPopup(false);

    return (

        <div className={styles.footer__select}>
            <div className={styles.footer__select__box} onClick={() => setShowPopup(true)}>
                <p className={styles.footer__copyright}>United States</p>
                <span className={styles.footer__copyright}>{'>'}</span>
            </div>
            {
                showPopUp &&
                <div className={styles.popupF}>
                    <Link className={styles.popupF__link} passHref={true} href='/United States'>United States</Link>
                    <Link className={styles.popupF__link} passHref={true} href='/Country 2'>Country 2</Link>
                    <Link className={styles.popupF__link} passHref={true} href='/Country 3'>Country 3</Link>
                    <Link className={styles.popupF__link} passHref={true} href='/Country 4'>Country 4</Link>
                </div>
            }

        </div>
    )
}

const clickOutsideConfig = {
    handleClickOutside: () =>
        Footer.handleClickOutside,
};

export default onClickOutside(Footer, clickOutsideConfig)
