import React from 'react'
import FooterP from '../PopUp/FooterP'
import footerLogo from './../../public/images/footerLogo.png'

import styles from './../../styles/footer.module.scss'

function Footer(){
    return(
        <footer className={styles.footer}>
            <div className={styles.footer__container}>
                <div className={styles.footer__block}>
                    <div className={styles.footer__logo}>
                        <img src={footerLogo} layout='fill' alt='footerLogo'/>
                        <p className={styles.footer__copyright}>Powered by Cooler Master © 2021</p>
                    </div>
                    <nav className={styles.footer__Menu}>
                        <ul className={styles.footer__MenuBlock}>
                            <li className={styles.footer__Menu__item}>Privacy Policy</li>
                            <li className={styles.footer__Menu__item}>Terms</li>
                            <li className={styles.footer__Menu__item}>Contact</li>
                        </ul>
                    </nav>
                </div>
                <FooterP/>
            </div>
        </footer>
    )
}

export default Footer
