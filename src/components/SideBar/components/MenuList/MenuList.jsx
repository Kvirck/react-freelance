import React from 'react'
import { Link } from 'react-router-dom';
import styles from './MenuList.module.scss'

export const MenuList = () => {
    return (
        <ul className={styles.menu__list}>
            <Link
                to="/"
                className={styles.menu__list__item}>
                    <div className={styles.menu__list__item__icon}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="#4D5E80" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                                d="M8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8ZM8 10C5.33 10 0 11.34 0 14V15C0 15.55 0.45 16 1 16H15C15.55 16 16 15.55 16 15V14C16 11.34 10.67 10 8 10Z"
                                fill="#4D5E80" />
                        </svg>
                    </div>
                    <p className={styles.menu__list__item__title}>
                        My Information
                    </p>
                <div className={styles.menu__list__item__arrow}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="#4D5E80" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                            d="M1 8.59249H12.17L7.29 13.4725C6.9 13.8625 6.9 14.5025 7.29 14.8925C7.68 15.2825 8.31 15.2825 8.7 14.8925L15.29 8.30249C15.68 7.91249 15.68 7.28249 15.29 6.89249L8.71 0.292486C8.52317 0.105233 8.26952 0 8.005 0C7.74048 0 7.48683 0.105233 7.3 0.292486C6.91 0.682486 6.91 1.31249 7.3 1.70249L12.17 6.59249H1C0.45 6.59249 0 7.04249 0 7.59249C0 8.14249 0.45 8.59249 1 8.59249Z"
                            fill="#4D5E80" />
                    </svg>
                </div>
            </Link>
            <Link
                to="/"
                className={styles.menu__list__item}>
                <div className={styles.menu__list__item__icon}>
                    <svg width="20" height="16" viewBox="0 0 20 16" fill="#4D5E80" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                            d="M18 0H2C0.89 0 0.01 0.89 0.01 2L0 14C0 15.11 0.89 16 2 16H18C19.11 16 20 15.11 20 14V2C20 0.89 19.11 0 18 0ZM17 14H3C2.45 14 2 13.55 2 13V8H18V13C18 13.55 17.55 14 17 14ZM18 4H2V2H18V4Z"
                            fill="#6B7A99" />
                    </svg>
                </div>
                <div className={styles.menu__list__item__title}>
                    Billing Methods
                </div>
                <div className={styles.menu__list__item__arrow}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="#4D5E80" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                            d="M1 8.59249H12.17L7.29 13.4725C6.9 13.8625 6.9 14.5025 7.29 14.8925C7.68 15.2825 8.31 15.2825 8.7 14.8925L15.29 8.30249C15.68 7.91249 15.68 7.28249 15.29 6.89249L8.71 0.292486C8.52317 0.105233 8.26952 0 8.005 0C7.74048 0 7.48683 0.105233 7.3 0.292486C6.91 0.682486 6.91 1.31249 7.3 1.70249L12.17 6.59249H1C0.45 6.59249 0 7.04249 0 7.59249C0 8.14249 0.45 8.59249 1 8.59249Z"
                            fill="#4D5E80" />
                    </svg>
                </div>
            </Link>
            <Link
                to="/"
                className={styles.menu__list__item}>
                <div className={styles.menu__list__item__icon}>
                    <svg width="16" height="21" viewBox="0 0 16 21" fill="#4D5E80" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                            d="M14 7H13V5C13 2.24 10.76 0 8 0C5.24 0 3 2.24 3 5V7H2C0.9 7 0 7.9 0 9V19C0 20.1 0.9 21 2 21H14C15.1 21 16 20.1 16 19V9C16 7.9 15.1 7 14 7ZM8 16C6.9 16 6 15.1 6 14C6 12.9 6.9 12 8 12C9.1 12 10 12.9 10 14C10 15.1 9.1 16 8 16ZM5 7V5C5 3.34 6.34 2 8 2C9.66 2 11 3.34 11 5V7H5Z"
                            fill="#6B7A99" />
                    </svg>

                </div>
                <div className={styles.menu__list__item__title}>
                    Password & Security
                </div>
                <div className={styles.menu__list__item__arrow}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="#4D5E80" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                            d="M1 8.59249H12.17L7.29 13.4725C6.9 13.8625 6.9 14.5025 7.29 14.8925C7.68 15.2825 8.31 15.2825 8.7 14.8925L15.29 8.30249C15.68 7.91249 15.68 7.28249 15.29 6.89249L8.71 0.292486C8.52317 0.105233 8.26952 0 8.005 0C7.74048 0 7.48683 0.105233 7.3 0.292486C6.91 0.682486 6.91 1.31249 7.3 1.70249L12.17 6.59249H1C0.45 6.59249 0 7.04249 0 7.59249C0 8.14249 0.45 8.59249 1 8.59249Z"
                            fill="#4D5E80" />
                    </svg>
                </div>
            </Link>
            <Link
                to="/"
                className={styles.menu__list__item}>
                <div className={styles.menu__list__item__icon}>
                    <svg width="20" height="16" viewBox="0 0 20 16" fill="#4D5E80" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                            d="M18 0H2C0.9 0 0.01 0.9 0.01 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM17.6 4.25L10.53 8.67C10.21 8.87 9.79 8.87 9.47 8.67L2.4 4.25C2.15 4.09 2 3.82 2 3.53C2 2.86 2.73 2.46 3.3 2.81L10 7L16.7 2.81C17.27 2.46 18 2.86 18 3.53C18 3.82 17.85 4.09 17.6 4.25Z"
                            fill="#6B7A99" />
                    </svg>
                </div>
                <div className={styles.menu__list__item__title}>
                    Notifications
                </div>
                <div className={styles.menu__list__item__arrow}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="#4D5E80" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                            d="M1 8.59249H12.17L7.29 13.4725C6.9 13.8625 6.9 14.5025 7.29 14.8925C7.68 15.2825 8.31 15.2825 8.7 14.8925L15.29 8.30249C15.68 7.91249 15.68 7.28249 15.29 6.89249L8.71 0.292486C8.52317 0.105233 8.26952 0 8.005 0C7.74048 0 7.48683 0.105233 7.3 0.292486C6.91 0.682486 6.91 1.31249 7.3 1.70249L12.17 6.59249H1C0.45 6.59249 0 7.04249 0 7.59249C0 8.14249 0.45 8.59249 1 8.59249Z"
                            fill="#4D5E80" />
                    </svg>
                </div>
            </Link>
        </ul>
    )
}
