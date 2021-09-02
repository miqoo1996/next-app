import React from 'react'

import partnersLogo from './../../public/images/partnersLogo.png'
import AKLogo from './../../public/images/AK.png'
import forwordLogo from './../../public/images/forword.png'
import foxconnLogo from './../../public/images/foxconn.png'
import TurvoLogo from './../../public/images/Turvo.png'
import APCBLogo from './../../public/images/APCB.png'

import styles from './../../styles/partners.module.scss'

function Partners(){
    return(
        <section className={styles.Partners}>
            <div className={styles.Partners__container}>
                <img src={partnersLogo} alt='partnersLogo' className={styles.Partners__logo}/>
                <div className={styles.Partners__block}>
                    <img src={forwordLogo} className={styles.Partners__item} alt='Partner_logo'/>
                    <img src={foxconnLogo} className={styles.Partners__item} alt='Partner logo'/>
                    <img src={AKLogo} className={styles.Partners__item} alt='Partner logo'/>
                    <img src={TurvoLogo} className={styles.Partners__item} alt='Partner logo'/>
                    <img src={APCBLogo} className={styles.Partners__item} alt='Partner logo'/>
                </div>
                <h2 className={styles.Partners__title}>industry. Lorem Ipsum has been the</h2>
                <p className={styles.Partners__text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap i</p>
                <button className={styles.Partners__button}>Tell us</button>
            </div>
        </section>
    )
}

export default Partners
