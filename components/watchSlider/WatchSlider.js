import React, { useEffect, useState } from 'react'

import banerLogo from './../../public/images/banerLogo.png'
import watch1 from './../../public/images/Watch1.png'
import watch2 from './../../public/images/Watch2.png'
import watch3 from './../../public/images/Watch3.png'
import watch4 from './../../public/images/Watch4.png'
import watch5 from './../../public/images/Watch5.png'
import dynamic from "next/dynamic";

import styles from './../../styles/watchSlider.module.scss'




const options = {
    responsive: {
        0: {
            items: 1,
        },
        400: {
            items: 1,
        },
        650: {
            items: 3,
        },
        1000: {
            items: 5,

        }
    },
  };

function WatchSlider(){
    const [ displaySlider, setDisplaySlider ] = useState(false)
    const OwlCarousel = dynamic(import("react-owl-carousel"), {
        ssr: false,
    });

    useEffect(()=>{
       setDisplaySlider(true)
    },[])

    return(
        <div className={styles.WatchSlider}>
            <div className={styles.WatchSlider__content}>
                <img src={banerLogo} alt='AK logo'/>
                <h2 className={styles.WatchSlider__title}>MINIMALISTIC</h2>
                <div className={styles.WatchSlider__buttons}>
                    <button className={styles.WatchSlider__button}>Build yours</button>
                    <button className={styles.WatchSlider__button}>Learn more</button>
                </div>
            </div>
            <div className={styles.slider}>
                {
                    displaySlider ?
                        <OwlCarousel   items='5'  center autoplayHoverPause loop  margin={10}  responsive={options.responsive}>
                            <img className={styles.slider__item} src={watch1} alt='watch img'/>
                            <img className={styles.slider__item} src={watch2} alt='watch img'/>
                            <img className={styles.slider__item} src={watch3} alt='watch img'/>
                            <img className={styles.slider__item} src={watch4} alt='watch img'/>
                            <img className={styles.slider__item} src={watch5} alt='watch img'/>
                        </OwlCarousel >
                        : ''
                }
            </div>
        </div>
    )
}

export default WatchSlider
