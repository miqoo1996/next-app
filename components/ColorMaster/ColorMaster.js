import React from 'react'

import styles from './../../styles/colorMaster.module.scss'

function ColorMaster(){
    return(
        <section className={styles.colorMaster}>
           <div className={styles.colorMaster__container}>
                <div className={styles.colorMaster__content}>
                   <h2 className={styles.colorMaster__title}>Re-Engineered by Cooler Master</h2>
                   <p className={styles.colorMaster__text}>CMODX is the personalized & performance division of Cooler Master, where you will find premium made, custom-like PC builds that are designed and curated by the industry’s most innovative & creative designers AKMod, Inony, Timpelay, and we collaborate with KFC Gaming, Atari, PC Master Race to keep things fresh.</p>
                </div>
           </div>
        </section>
    )
}

export default ColorMaster
