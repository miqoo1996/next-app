import React, {useState} from 'react'
import Union from './../../public/images/Union.png'

import styles from '../../styles/popup.module.scss'
import onClickOutside from "react-onclickoutside";

function CardPopup(){

    const [showPopUp, setShowPopup] = useState(false)
    CardPopup.handleClickOutside = () => setShowPopup(false);

    return(

        <div className={styles.menuBlockRight}>
            <img src={Union} alt='basket' onClick={()=>setShowPopup(!showPopUp)}/>
            {
                showPopUp &&
                <div className={styles.popupC}>
                    <p className={styles.popupC__link}>You have no items in your shopping cart.</p>
                </div>
            }
        </div>

    )
}

const clickOutsideConfig = {
    handleClickOutside: () =>
        CardPopup.handleClickOutside,
};

export default onClickOutside(CardPopup, clickOutsideConfig)

