import React from 'react'

import styles from '../../styles/aboutContent.module.scss'

function AboutContent(){
    return(
        <section className={styles.aboutContent}>
            {/* <div className></div> */}
            <div className={styles.aboutContent__Container}>
                <p  className={styles.aboutContent__subTitle}>Inspired by Community</p>
                <h2  className={styles.aboutContent__title}>Creation by Modders</h2>
                <p  className={styles.aboutContent__text}>CMODX is the personalized & performance division of Cooler Master, where you will find premium made, custom-like PC builds that are designed and curated by the industry’s most innovative & creative designers AKMod, Inony, Timpelay, and we collaborate with KFC Gaming, Atari, PC Master Race to keep things fresh.</p>
                <button  className={styles.aboutContent__btn}>About CMODX</button>
            </div>
        </section>
    )
}

export default AboutContent;
