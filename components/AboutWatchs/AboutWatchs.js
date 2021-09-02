import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import itemLogoPower from './../../public/images/itemLogoPower.png'
import itemLogoBest from './../../public/images/itemLogoBest.png'
import itemLogoLimites from './../../public/images/itemLogoLimites.png'

import styles from '../../styles/aboutWatchs.module.scss'

function AboutWatchs(){
    return(
        <div className={styles.AboutWatchs__container}>
            <section className={styles.AboutWatchs}>
                <article className={styles.AboutWatchs__item}>
                    <img src={itemLogoPower} alt='powered-icon' layout='fill' className={styles.AboutWatchs__icon} />
                    <h1 className={styles.AboutWatchs__title}>Powered by Cooler Master</h1>
                    <p className={styles.AboutWatchs__text}>CMODX, a division of Cooler Master focusing on delivering Personalized and Performance driven computing products.</p>
                    <Link className={styles.AboutWatchs__link} href='/' as='/Learn more'>Learn more</Link>
                </article>
                <article className={styles.AboutWatchs__item}>
                    <img src={itemLogoBest} alt='powered-icon' layout='fill' className={styles.AboutWatchs__icon}/>
                    <h1 className={styles.AboutWatchs__title}>Powered by Cooler Master</h1>
                    <p className={styles.AboutWatchs__text}>CMODX, a division of Cooler Master focusing on delivering Personalized and Performance driven computing products.</p>
                    <Link className={styles.AboutWatchs__link} href='/Learn more' as='/'>Learn more</Link>
                </article>
                <article className={styles.AboutWatchs__item}>
                    <img src={itemLogoLimites} alt='powered-icon' layout='fill' className={styles.AboutWatchs__icon}/>
                    <h1 className={styles.AboutWatchs__title}>Powered by Cooler Master</h1>
                    <p className={styles.AboutWatchs__text}>CMODX, a division of Cooler Master focusing on delivering Personalized and Performance driven computing products.</p>
                    <Link className={styles.AboutWatchs__link} href='/' as='/Learn more'>Learn more</Link>
                </article>
            </section>
        </div>
    )
}

export default AboutWatchs
