import React, {useState} from 'react'
import Link from 'next/link'

import styles from '../../styles/popup.module.scss'
import onClickOutside from "react-onclickoutside";

function ProductPopUp(){


    const [showPopUp, setShowPopup] = useState(false)
    ProductPopUp.handleClickOutside = () => setShowPopup(false);

    return(
        <li className={styles.menuBlock} onClick={()=>setShowPopup(!showPopUp)} >
            Product
            {
                showPopUp &&
                <div className={styles.popup}>
                    <Link className={styles.popup__link} passHref={true} href='/Hypersport' >Hypersport</Link>
                    <Link className={styles.popup__link} passHref={true} href='/Minimalistic'  >Minimalistic</Link>
                    <Link className={styles.popup__link} passHref={true} href='/ProjectSkyThree'  >Project Sky Three</Link>
                    <Link className={styles.popup__link} passHref={true} href='/Sl600MiMiniItx'>Sl600Mi Mini Itx</Link>
                </div>
            }
        </li>
    )
}


const clickOutsideConfig = {
    handleClickOutside: () =>
        ProductPopUp.handleClickOutside,
};

export default onClickOutside(ProductPopUp, clickOutsideConfig)

