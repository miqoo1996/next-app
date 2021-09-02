import React from 'react'
import Link from 'next/link'

import styles from '../../styles/popup.module.scss'

function FaqPopUp(){
    return(
        <div className={styles.FAQpopup}>
            <Link passHref={true} href='/Question'>Question</Link>
        </div>
    )
}

export default FaqPopUp
