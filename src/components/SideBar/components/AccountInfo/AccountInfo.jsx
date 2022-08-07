import React from 'react'
import styles from './AccountInfo.module.scss'

export const AccountInfo = () => {
    return (
        <div className={`${styles.sidebar__account}`}>
            <div className={styles.account__avatar}>
                <img src="src/assets/images/Main/userAvatar.png" alt="avatar" />
            </div>
            <div className={styles.account__info}>
                <p className={styles.account__info__name}>Johnny Perry</p>
                <p className={styles.account__info__email}>johny-perry@gmail.com</p>
            </div>
        </div >
    )
}
