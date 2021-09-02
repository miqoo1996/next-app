import React from 'react'
import Link from 'next/link'

import instIcon from './../../public/images/instIcon.png'
import AKModImagesPC from './../../public/images/AKModImagesPC.png'
import AKModImagesPC1 from './../../public/images/AKModImagesPC1.png'
import AKModImages3 from './../../public/images/AKModImages3.png'
import AKModImages4 from './../../public/images/AKModImages4.png'

import styles from './../../styles/pcBuild.module.scss'

function PCBuild(){
    return(
        <section className={styles.PCBuild} >
            <div className={styles.PCBuild__header}>
                <h2 className={styles.PCBuild__title}>A Dream build in Your Space</h2>
                <p className={styles.PCBuild__description}>CMODX is the personalized & performance division of Cooler Master, where you will find premium made, custom-like PC builds that are designed and curated by the industry’s most innovative & creative designers AKMod, Inony, Timpelay, and we collaborate with KFC Gaming, Atari, PC Master Race to keep things fresh.</p>
            </div>
            <div className={styles.PCBuild__largeImg}>
                <img src={AKModImagesPC} alt='PC-img' className={styles.PCBuild__Img}/>
                <Link className='PCBuild__link' passHref={true} href='/3' >
                    <a>
                        <img src={instIcon} className='PCBuild__link__img' layout="fill" alt='instIcon'/>
                        CMODX
                    </a>
                </Link>
            </div>
            <div className={styles.PCBuild__container}>
                <div className={styles.PCBuild__leftImg}>
                    <img src={AKModImagesPC1} alt='PC-img' className={styles.PCBuild__Img}/>
                    <p className={styles.PCBuild__text}>Senses when light is low and kicks in automatically, maintaining clarity while capturing beautiful vibrant color. All you have to do is start snapping.</p>
                    <Link className='PCBuild__link' passHref={true} href='/3' >
                        <a>
                            <img src={instIcon} className='PCBuild__link__img' layout="fill" alt='instIcon'/>
                            CMODX
                        </a>
                    </Link>
                </div>
                <div className={styles.PCBuild__rightImg}>
                    <img src={AKModImages3} alt='PC-img' className={styles.PCBuild__Img}/>
                    <p className={styles.PCBuild__text}>Photos that were once hard to capture — like a dramatic moonlit scene — now come out sharper than ever.</p>
                    <Link className='PCBuild__link' passHref={true} href='/3' >
                        <a>
                            <img src={instIcon} className='PCBuild__link__img' layout="fill" alt='instIcon'/>
                            CMODX
                        </a>
                    </Link>
                </div>
            </div>
            <div className={styles.PCBuild__largeImg} >
                <img src={AKModImages4} alt='PC-img' className={styles.PCBuild__Img}/>
                <p className={styles.PCBuild__text}>Deep Fusion, in mid to low light, analyzes multiple exposures to maximize detail. Check out the texture in the wood, fabric, and crystal. And the Ultra Wide gets you a heroic perspective.</p>
                <Link className='PCBuild__link' passHref={true} href='/3' >
                    <a>
                        <img src={instIcon} className='PCBuild__link__img' layout="fill" alt='instIcon'/>
                        CMODX
                    </a>
                </Link>
            </div>
        </section>
    )
}

export default PCBuild
